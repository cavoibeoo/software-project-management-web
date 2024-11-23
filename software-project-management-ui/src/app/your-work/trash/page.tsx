"use client";
import * as React from "react";
import NextLink from "next/link";
import ToDoList from "@/components/Apps/ToDoList";
import Link from "next/link";
import ImgMediaCard from "@/components/ImgMediaCard/ImgMediaCard";
import { fetchTrashProjects } from "@/api-services/projectServices";
import { Box, Divider, Typography } from "@mui/material";

import { useState, useEffect } from "react";

export default function Page() {
    const [projects, setProjects] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await fetchTrashProjects();
            console.log(result);
            setProjects(result);
        };
        fetchAPI();
    }, [update]);

    const handleActionSuccess = () => {
        setUpdate(!update);
    };

    return (
        <>
            <div className="breadcrumb-card">
                <h2>Trashs</h2>
            </div>
            <h3>Project</h3>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: 2,
                }}
            >
                {Array.isArray(projects) ? (
                    projects.map((project: any) => (
                        <React.Fragment key={project.id}>
                            <ImgMediaCard
                                projects={project}
                                onActionSuccess={handleActionSuccess}
                            />
                        </React.Fragment>
                    ))
                ) : (
                    <Typography>No projects found.</Typography>
                )}
            </Box>
            <div className="breadcrumb-card" style={{ marginTop: "60px" }}></div>
        </>
    );
}
