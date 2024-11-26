import React, { useState } from "react";
import { MenuItem, Select, SelectChangeEvent, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import AssignMemberDialog from "../../Dialogs/AssignMemberDialog/AssignMemberDialog";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./Backlog.css";
import IssueDetailDialog from "../../Dialogs/IssueDetailDialog/IssueDetailDialog";
import * as issueService from "@/api-services/issueServices";

export const Backlog: React.FC<{
    issue: any;
    projectId: any;
    workflows: any[];
    sprints: any[];
    callUpdate: () => void;
    issueType: any;
    index: any;
    project: any;
}> = ({ issue, projectId, workflows, callUpdate, issueType, index, sprints, project }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: index,
    });

    const dndKitColumnStyles = {
        transition,
        transform: CSS.Transform.toString(transform),
        heigh: "100%",
        opacity: isDragging ? 0.3 : undefined,
    };

    const [epicValue, setEpicValue] = useState<string>("0");
    const [progressValue, setProgressValue] = useState<string>("");

    const handleEpicValueChange = (event: SelectChangeEvent) => {
        setEpicValue(event.target.value as string);
    };
    const handleProgressValueChange = async (event: SelectChangeEvent, issueId: any) => {
        setProgressValue(event.target.value as string);
        await issueService.updateIssue({ projectId, issueId, workflow: event.target.value });
        // callUpdate();
    };

    return (
        <>
            <Box
                ref={setNodeRef}
                {...attributes}
                {...listeners}
                className="backlog"
                style={dndKitColumnStyles}
            >
                <Box>
                    <div className="backlogItem" style={{ padding: "0px 0px 0px 0px" }}>
                        <Table
                            sx={{
                                borderBottom: "none !important",
                            }}
                        >
                            <TableBody>
                                <TableRow>
                                    <TableCell
                                        style={{
                                            border: "none",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <div
                                            style={{
                                                paddingTop: "5px",
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <img
                                                width="20px"
                                                height="20px"
                                                style={{
                                                    marginRight: "5px",
                                                }}
                                                src={issue?.issueType.img}
                                                alt="Issue Logo"
                                                className="icon_issue"
                                            />
                                            {issue.key}
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ border: "none" }} sx={{ width: "50%" }}>
                                        {issueType && issue ? (
                                            <IssueDetailDialog
                                                issue={issue}
                                                projectId={projectId}
                                                workflows={workflows}
                                                issueType={issueType}
                                                callUpdate={callUpdate}
                                                sprints={sprints}
                                                project={project}
                                            />
                                        ) : null}
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            border: "none",
                                            display: "flex",
                                            flexDirection: "row",
                                        }}
                                    >
                                        {/* <Select
                                            labelId="product-type-label"
                                            id="product-type"
                                            className="epicSelectBg"
                                            size="small"
                                            value={epicValue}
                                            onChange={handleEpicValueChange}
                                            style={{ marginRight: "5px" }}
                                            sx={{
                                                "& fieldset": {
                                                    maxWidth: "120px",
                                                },
                                                "& .MuiSelect-select": {
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap",
                                                },
                                            }}
                                        >
                                            <MenuItem value={0}>epic</MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                        </Select> */}
                                        <Select
                                            labelId="product-type-label"
                                            className="progressSelectBg"
                                            id={`workflow-${issue._id}`}
                                            size="small"
                                            value={progressValue || issue.workflow}
                                            onChange={(event: SelectChangeEvent) => {
                                                handleProgressValueChange(event, issue._id);
                                            }}
                                            sx={{
                                                "& fieldset": {},
                                                "& .MuiSelect-select": {
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap",
                                                },
                                            }}
                                        >
                                            {workflows?.map((workflow, index) => (
                                                <MenuItem key={index} value={workflow.name}>
                                                    {workflow?.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </TableCell>
                                    <TableCell style={{ border: "none" }}>
                                        <AssignMemberDialog
                                            actors={project.actors}
                                            issue={issue}
                                            callUpdate={callUpdate}
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </Box>
            </Box>
        </>
    );
};
