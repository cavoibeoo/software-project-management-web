"use client";
import React from "react";

import Stack from "@mui/material/Stack";

import { Backlog } from "./BackLog/Backlog";
import { SortableContext } from "@dnd-kit/sortable";

import { CreateBacklog } from "../CreateBacklog/CreateBacklog";

export const BacklogList: React.FC<{
    backlogs: any[];
    projectId: any;
    callUpdate: () => void;
    sprintId: any;
    workflow: any;
    issueType: any;
}> = ({ backlogs, projectId, callUpdate, sprintId, workflow, issueType }) => {
    return (
        <Stack spacing={1}>
            <SortableContext items={backlogs}>
                {backlogs.map((backlog) => (
                    <Backlog
                        issue={backlog}
                        workflows={workflow}
                        projectId={projectId}
                        callUpdate={callUpdate}
                    ></Backlog>
                ))}
            </SortableContext>
            <CreateBacklog
                projectId={projectId}
                callUpdate={callUpdate}
                sprintId={sprintId}
                issueType={issueType}
            />
        </Stack>
    );
};
