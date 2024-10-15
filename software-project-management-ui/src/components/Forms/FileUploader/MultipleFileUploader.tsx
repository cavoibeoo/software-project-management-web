"use client";

import React from "react";
import { Card, Box, Typography } from "@mui/material";
import Image from "next/image";

const MultipleFileUploader: React.FC = () => {
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
            Multiple File Uploader
          </Typography>
        </Box>

        <Box component="form">
          <input
            type="file"
            multiple
            className="border"
            style={{
              width: "100%",
              padding: "20px",
            }}
          />

          <Box
            sx={{
              mt: "15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Image
              src="/images/gallery/gallery1.jpg"
              alt="gallery"
              width={60}
              height={60}
              style={{
                borderRadius: "7px",
              }}
            />
            <Image
              src="/images/gallery/gallery2.jpg"
              alt="gallery"
              width={60}
              height={60}
              style={{
                borderRadius: "7px",
              }}
            />
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default MultipleFileUploader;
