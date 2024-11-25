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
}> = ({ projectId, callUpdate, sprintId }) => {
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

    const [issueTypeValue, setIssueTypeValue] = useState<string>("0");

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
                // issueType: issueTypeValue,
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
                                                <MenuItem value={0}>
                                                    <svg
                                                        width="20px"
                                                        height="20px"
                                                        style={{
                                                            paddingTop: "6px",
                                                        }}
                                                        viewBox="0 0 16 16"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <defs></defs>
                                                        <g
                                                            id="Page-1"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                            fill="none"
                                                            fillRule="evenodd"
                                                        >
                                                            <g id="task">
                                                                <g
                                                                    id="Task"
                                                                    transform="translate(1.000000, 1.000000)"
                                                                >
                                                                    <rect
                                                                        id="Rectangle-36"
                                                                        fill="#4BADE8"
                                                                        x="0"
                                                                        y="0"
                                                                        width="14"
                                                                        height="14"
                                                                        rx="2"
                                                                    ></rect>
                                                                    <g
                                                                        id="Page-1"
                                                                        transform="translate(4.000000, 4.500000)"
                                                                        stroke="#FFFFFF"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                    >
                                                                        <path
                                                                            d="M2,5 L6,0"
                                                                            id="Stroke-1"
                                                                        ></path>
                                                                        <path
                                                                            d="M2,5 L0,3"
                                                                            id="Stroke-3"
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </MenuItem>
                                                <MenuItem value={1}>
                                                    <svg
                                                        width="20px"
                                                        height="20px"
                                                        style={{
                                                            paddingTop: "6px",
                                                        }}
                                                        viewBox="0 0 16 16"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="Page-1"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                            fill="none"
                                                            fillRule="evenodd"
                                                        >
                                                            <g id="story">
                                                                <g
                                                                    id="Story"
                                                                    transform="translate(1.000000, 1.000000)"
                                                                >
                                                                    <rect
                                                                        id="Rectangle-36"
                                                                        fill="#63BA3C"
                                                                        x="0"
                                                                        y="0"
                                                                        width="14"
                                                                        height="14"
                                                                        rx="2"
                                                                    ></rect>
                                                                    <path
                                                                        d="M9,3 L5,3 C4.448,3 4,3.448 4,4 L4,10.5 C4,10.776 4.224,11 4.5,11 C4.675,11 4.821,10.905 4.91,10.769 L4.914,10.77 L6.84,8.54 C6.92,8.434 7.08,8.434 7.16,8.54 L9.086,10.77 L9.09,10.769 C9.179,10.905 9.325,11 9.5,11 C9.776,11 10,10.776 10,10.5 L10,4 C10,3.448 9.552,3 9,3"
                                                                        id="Page-1"
                                                                        fill="#FFFFFF"
                                                                    ></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </MenuItem>
                                                <MenuItem value={2}>
                                                    <svg
                                                        width="20px"
                                                        height="20px"
                                                        style={{
                                                            paddingTop: "6px",
                                                        }}
                                                        viewBox="0 0 16 16"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="Page-1"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                            fill="none"
                                                            fillRule="evenodd"
                                                        >
                                                            <g
                                                                id="Bug"
                                                                transform="translate(1.000000, 1.000000)"
                                                            >
                                                                <rect
                                                                    id="Rectangle-36"
                                                                    fill="#E5493A"
                                                                    x="0"
                                                                    y="0"
                                                                    width="14"
                                                                    height="14"
                                                                    rx="2"
                                                                ></rect>
                                                                <path
                                                                    d="M10,7 C10,8.657 8.657,10 7,10 C5.343,10 4,8.657 4,7 C4,5.343 5.343,4 7,4 C8.657,4 10,5.343 10,7"
                                                                    id="Fill-2"
                                                                    fill="#FFFFFF"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </MenuItem>
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
