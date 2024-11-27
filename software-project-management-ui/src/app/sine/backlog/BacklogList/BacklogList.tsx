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
    sprints: any[];
    project: any;
}> = ({ backlogs, projectId, callUpdate, sprintId, workflow, issueType, sprints, project }) => {
    return (
        <Stack spacing={1}>
            <SortableContext items={backlogs}>
                {backlogs.map((backlog, index) => (
                    <Backlog
                        key={backlog._id}
                        issue={backlog}
                        workflows={workflow}
                        projectId={projectId}
                        callUpdate={callUpdate}
                        issueType={issueType}
                        index={index}
                        sprints={sprints}
                        project={project}
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
