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
}> = ({ backlogs, projectId, callUpdate, sprintId }) => {
    return (
        <Stack spacing={1}>
            <SortableContext items={backlogs}>
                {backlogs.map((backlog) => (
                    <Backlog
                        key={backlog.id || backlog._id}
                        id={backlog.id || backlog._id}
                        title={backlog.title || backlog.key}
                        description={backlog.description || backlog.summary}
                    ></Backlog>
                ))}
            </SortableContext>
            <CreateBacklog projectId={projectId} callUpdate={callUpdate} sprintId={sprintId} />
        </Stack>
    );
};
