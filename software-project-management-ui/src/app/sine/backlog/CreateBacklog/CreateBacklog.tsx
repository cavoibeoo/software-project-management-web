"use client";
import React, { useState, FormEvent } from "react";
import {
    Button,
    Input,
    LinearProgress,
    Paper,
    styled,
    Select,
    MenuItem,
    SelectChangeEvent,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import * as issueService from "@/api-services/issueServices";
import { toast } from "react-toastify";

export const CreateBacklog: React.FC<{
    projectId: any;
    callUpdate: () => void;
    sprintId: any;
    issueType: any[];
}> = ({ projectId, callUpdate, sprintId, issueType }) => {
    const [createBacklogForm, setCreateBacklogForm] = React.useState<string[]>([]);
    const [showCreateBacklogButton, setShowCreateBacklogButton] = React.useState(true);

    const handleCreateBacklog = () => {
        setCreateBacklogForm((prev) => [...prev, `Backlog ${prev.length + 1}`]);
        setShowCreateBacklogButton(false);
    };
    const handleRemoveBacklog = () => {
        setCreateBacklogForm((prev) => prev.slice(0, -1));
        setShowCreateBacklogButton(true);
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        ...theme.applyStyles("dark", {
            backgroundColor: "#1A2027",
        }),
    }));

    const [loading, setLoading] = useState(false);

    const [issueName, setIssueName] = useState<string>("");

    const [issueTypeValue, setIssueTypeValue] = useState<string>("Task");

    const handleIssueTypeValueChange = (event: SelectChangeEvent) => {
        setIssueTypeValue(event.target.value as string);
    };

    const handleBacklogSubmit = async () => {
        setLoading(true);
        try {
            let issue = await issueService.createIssue({
                projectId: projectId,
                summary: issueName,
                sprint: sprintId,
                issueType: issueTypeValue,
            });
            toast.success("Create Backlog Successful!");
            handleRemoveBacklog();
            callUpdate();
        } catch (error) {
            toast.error("Failed to create backlog!");
        } finally {
            setLoading(false);
            setShowCreateBacklogButton(true);
        }
    };
    return (
        <>
            {createBacklogForm.map((createBacklog, index) => (
                <>
                    <Item className="backlogItem" style={{ padding: "0px 0px 0px 0px" }}>
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
                                                paddingTop: "6px",
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Select
                                                labelId="issue-type-label"
                                                className="ItemSelectBg"
                                                id="issue-type"
                                                size="small"
                                                value={issueTypeValue}
                                                onChange={handleIssueTypeValueChange}
                                                sx={{
                                                    "& fieldset": {},
                                                    "& .MuiSelect-select": {
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                    },
                                                    alignItems: "center",
                                                }}
                                            >
                                                {issueType?.map((type: any, index: any) => (
                                                    <MenuItem key={index} value={type.name}>
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
                                                                src={type.img}
                                                                alt="Issue Logo"
                                                                className="icon_issue"
                                                            />
                                                            {type.name}
                                                        </div>
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{ border: "none" }}>
                                        {loading ? (
                                            <LinearProgress
                                                sx={{
                                                    width: "100vh",
                                                    color: "white",
                                                }}
                                                color="secondary"
                                            />
                                        ) : (
                                            <Input
                                                id="issueName"
                                                placeholder="Backlog name.."
                                                sx={{
                                                    width: "100%",
                                                    color: "white",
                                                }}
                                                aria-label="Name"
                                                value={issueName}
                                                onChange={(event) =>
                                                    setIssueName(event.target.value)
                                                }
                                                onKeyDown={(event) => {
                                                    if (event.key === "Enter") {
                                                        handleBacklogSubmit();
                                                    } else if (event.key === "Escape") {
                                                        handleRemoveBacklog();
                                                    }
                                                }}
                                                autoFocus
                                            />
                                        )}
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            border: "none",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}
                                    ></TableCell>
                                    <TableCell style={{ border: "none" }}></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Item>
                </>
            ))}
            {showCreateBacklogButton ? (
                <Button className="createIssueBtn" onClick={handleCreateBacklog}>
                    + Create Issue
                </Button>
            ) : null}
        </>
    );
};
