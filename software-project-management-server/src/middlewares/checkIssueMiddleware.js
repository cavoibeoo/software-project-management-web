import getObjectId from "../utils/objectId.js";
import Project from "../models/project.js";
import ApiError from "../utils/ApiError.js";
import Issue from "../models/issue.js";

const checkIssueFields = async (req, res, next) => {
    try {
        // query for issue type
        let currentIssueTypeId;
        if (req?.params?.issueId) {
            let issue = await Issue.findOne(
                { "issues._id": req.params.issueId },
                { "issues.$": 1 }
            );
            if (!issue) throw new ApiError(400, "Issue not found.");
            currentIssueTypeId = issue.issues[0].issueType._id;
        }

        let project = await Project.findOne({ _id: req.params.prjId });
        let issueType = project?.issueTypes.id(currentIssueTypeId);
        // if (!issueType) throw new ApiError(400, "Issue type not found.");

        console.log(req.body);
        if (req.body.issueType) {
            console.log(req.body.issueType);
            let newIssueType = project?.issueTypes.find((type) =>
                [type.name, type._id.toString()].includes(req.body.issueType)
            );
            if (!newIssueType) throw new ApiError(400, "Issue type not found.");
            req.body.issueType = {
                _id: newIssueType._id,
                name: newIssueType.name,
                img: newIssueType.img,
            };
        }

        // check required fields if the issue not update field
        if (req.body?.fields && req.body.issueType.name == issueType.name) {
            let tmpFields = {};
            issueType.fields.forEach((field) => {
                // check if field is required
                if (!req.body?.fields[field.name]) {
                    if (field.isRequired)
                        throw new ApiError(400, `Field ${field.name} is required`);
                    else return;
                }

                // check if field is correct data type
                if (field.dataType == "Object") {
                    if (field.advanceData == "User" && req.body?.fields[field.name]) {
                        try {
                            getObjectId(req.body.fields[field.name]);
                        } catch (error) {
                            throw new ApiError(400, `Field ${field.name} is not a valid user`);
                        }
                    }
                } else if (field.dataType == "Array") {
                    if (
                        req.body?.fields[field.name] &&
                        !field.advanceData.includes(req.body.fields[field.name])
                    ) {
                        throw new ApiError(400, `Field ${field.name} is invalid`);
                    }
                }
                // else if (typeof req.body.fields[field.name] != field.dataType.toLowerCase()) {
                //     throw new ApiError(400, `Field ${field.name} is not ${field.dataType}`);
                // }
                // add field to input
                tmpFields[field.name] = req.body.fields[field.name];
            });
            req.body.fields = tmpFields;
        }

        next();
    } catch (error) {
        next(error);
    }
};

export default checkIssueFields;
