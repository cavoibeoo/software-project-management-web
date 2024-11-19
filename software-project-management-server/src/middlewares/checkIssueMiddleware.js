import getObjectId from "../utils/objectId.js";
import Project from "../models/project.js";
import ApiError from "../utils/ApiError.js";
import Issue from "../models/issue.js";

const checkIssueFields = async (req, res, next) => {
    try {
        // query for issue type
        if (req?.params?.issueId) {
            let issue = await Issue.findOne(
                { "issues._id": req.params.issueId },
                { "issues.$": 1 }
            );
            if (!issue) throw new ApiError(400, "Issue not found.");
            req.body.issueType = req?.body?.issueType || issue.issues[0].issueType.name;
        }
        let project = await Project.findOne({ _id: req.params.prjId });
        let issueType = project?.issueTypes.find((type) =>
            [type.name, type._id.toString()].includes(req.body.issueType)
        );
        if (!issueType) throw new ApiError(400, "Issue type not found.");
        if (!req.body?.fields) throw new ApiError(400, "No fields provided.");
        req.body.issueType = { _id: issueType._id, name: issueType.name, img: issueType.img };

        // check required fields
        if (req.body?.fields) {
            let tmpFields = {};
            issueType.fields.forEach((field) => {
                // check if field is required
                if (!req.body?.fields[field.name]) {
                    if (field.isRequired)
                        throw new ApiError(400, `Field ${field.name} is required`);
                    else return;
                }

                // check if field is correct data type
                if (typeof req.body.fields[field.name] != field.dataType.toLowerCase()) {
                    throw new ApiError(400, `Field ${field.name} is not ${field.dataType}`);
                }
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
