"use client";
import React from "react";

import Stack from "@mui/material/Stack";

import { Backlog } from "./BackLog/Backlog";
import { SortableContext } from "@dnd-kit/sortable";

import { CreateBacklog } from "../CreateBacklog/CreateBacklog";

export const BacklogList: React.FC<{
    backlogs: {
        id: string;
        title: string;
        description: string;
    }[];
}> = ({ backlogs }) => {
    return (
        <Stack spacing={1}>
            <SortableContext items={backlogs}>
                {backlogs.map((backlog) => (
                    <Backlog
                        key={backlog.id}
                        id={backlog.id}
                        title={backlog.title}
                        description={backlog.description}
                    ></Backlog>
                ))}
            </SortableContext>
            <CreateBacklog />
        </Stack>
    );
};
