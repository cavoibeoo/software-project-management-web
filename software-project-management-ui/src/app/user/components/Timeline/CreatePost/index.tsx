"use client";

import * as React from "react";
import { Card, Typography, Box, Button, IconButton } from "@mui/material";

import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
});

import AttachFileIcon from "@mui/icons-material/AttachFile";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EditIcon from "@mui/icons-material/Edit";

const CreatePost: React.FC = () => {
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "25px",
          }}
          className="text-black"
        >
          Create Post
        </Typography>

        <Box component="form">
          <Box mb="25px">
            <Typography
              component="label"
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                mb: "10px",
                display: "block",
              }}
              className="text-black"
            >
              What's on your mind, Alice Johnson?
            </Typography>

            <RichTextEditor
              id="rte"
              controls={[
                ["bold", "italic", "underline", "link", "image"],
                ["unorderedList", "h1", "h2", "h3"],
                ["sup", "sub"],
                ["alignLeft", "alignCenter", "alignRight"],
              ]}
              style={{
                minHeight: "200px",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box>
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
                <i
                  className="material-symbols-outlined mr-8"
                  style={{ fontSize: "20px" }}
                >
                  send
                </i>{" "}
                Publish Post
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <IconButton
                aria-label="Faces"
                size="small"
                sx={{ padding: "3px" }}
              >
                <TagFacesIcon sx={{ fontSize: { xs: "17px", sm: "20px" } }} />
              </IconButton>

              <IconButton
                aria-label="Attach"
                size="small"
                sx={{ padding: "3px" }}
              >
                <AttachFileIcon sx={{ fontSize: { xs: "17px", sm: "20px" } }} />
              </IconButton>

              <IconButton
                aria-label="Edit"
                size="small"
                sx={{ padding: "3px" }}
              >
                <EditIcon sx={{ fontSize: { xs: "17px", sm: "20px" } }} />
              </IconButton>

              <IconButton
                aria-label="Photo"
                size="small"
                sx={{ padding: "3px" }}
              >
                <AddPhotoAlternateIcon
                  sx={{ fontSize: { xs: "17px", sm: "20px" } }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default CreatePost;
