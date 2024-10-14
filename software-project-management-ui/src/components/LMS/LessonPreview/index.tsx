"use client";

import * as React from "react";
import { Card, Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const LessonPreview: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          position: "relative",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Box mb="20px">
          <video
            controls
            muted
            style={{
              width: "100%",
              borderRadius: "7px",
              height: "auto",
            }}
          >
            <source
              src="/images/video.mp4"
              type="video/mp4"
              className="border-radius"
            />
          </video>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            fontSize: { xs: "17px", sm: "20px" },
            mb: "10px",
          }}
          className="text-black"
        >
          Introduction to Cybersecurity
        </Typography>

        <Typography mb="20px">
          Node.js for Beginners: Alias animi labque, deserunt distinctio eum
          excepturi fuga iure labore magni molestias mollitia natus, officia
          pofro quis sunt temporibus veritatis voluptatem voluptatum.
        </Typography>

        <Link href="#">
          <Button
            type="submit"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: { xs: "13px", sm: "16px" },
              padding: { xs: "10px 20px", sm: "10px 24px" },
              color: "#fff !important",
              boxShadow: "none",
            }}
          >
            Next Tutorial
          </Button>
        </Link>
      </Card>
    </>
  );
};

export default LessonPreview;
