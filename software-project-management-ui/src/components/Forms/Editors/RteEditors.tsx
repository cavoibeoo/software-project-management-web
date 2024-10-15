"use client";

import React from "react";
import { Card, Box, Typography } from "@mui/material";

import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
});

const RteEditors: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            mb: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Rte Editors
          </Typography>
        </Box>

        <Box>
          <RichTextEditor
            id="rte"
            controls={[
              ["bold", "italic", "underline", "link", "image"],
              ["unorderedList", "h1", "h2", "h3"],
              ["sup", "sub"],
              ["alignLeft", "alignCenter", "alignRight"],
            ]}
            style={{
              minHeight: "250px",
            }}
          />
        </Box>
      </Card>
    </>
  );
};

export default RteEditors;
