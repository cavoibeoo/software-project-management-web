"use client";

import { Box } from "@mui/material";
import Image from "next/image";

interface ProjectDefaultLogoProps {
    src: string;
}

export default function ProjectDefaultLogo({ src }: ProjectDefaultLogoProps) {
    return (
        <Box>
            <img
                src={`${src}`}
                alt="default-logo"
                style={{
                    width: "170px",
                    height: "170px",
                    cursor: "pointer",
                    borderRadius: "50%",
                }}
            />
        </Box>
    );
}
