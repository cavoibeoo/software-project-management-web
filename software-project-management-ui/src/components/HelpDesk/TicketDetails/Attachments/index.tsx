"use client";

import * as React from "react";
import { Card, Box, Typography, IconButton } from "@mui/material";

const Attachments: React.FC = () => {
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
          Attachments
        </Typography>

        <Box>
          <Box
            className="bg-f6f7f9 border-radius"
            sx={{
              padding: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Box
                className="bg-white"
                sx={{
                  width: "40px",
                  height: "40px",
                  lineHeight: "40px",
                  fontSize: "22px",
                  textAlign: "center",
                  borderRadius: "100px",
                }}
              >
                <i className="ri-file-warning-line text-primary"></i>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  className="text-black"
                  fontWeight={500}
                  fontSize="14px"
                  mb="5px"
                >
                  Project_attachment_1.zip
                </Typography>

                <Typography fontSize="13px">3.25 MB</Typography>
              </Box>
            </Box>

            <IconButton aria-label="delete" size="large">
              <i
                className="ri-download-2-line text-primary"
                style={{ fontSize: "22px" }}
              ></i>
            </IconButton>
          </Box>

          <Box
            className="bg-f6f7f9 border-radius"
            sx={{
              padding: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Box
                className="bg-white"
                sx={{
                  width: "40px",
                  height: "40px",
                  lineHeight: "40px",
                  fontSize: "22px",
                  textAlign: "center",
                  borderRadius: "100px",
                }}
              >
                <i className="ri-file-warning-line text-primary"></i>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  className="text-black"
                  fontWeight={500}
                  fontSize="14px"
                  mb="5px"
                >
                  Project_attachment_2.zip
                </Typography>

                <Typography fontSize="13px">3.25 MB</Typography>
              </Box>
            </Box>

            <IconButton aria-label="delete" size="large">
              <i
                className="ri-download-2-line text-primary"
                style={{ fontSize: "22px" }}
              ></i>
            </IconButton>
          </Box>

          <Box
            className="bg-f6f7f9 border-radius"
            sx={{
              padding: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Box
                className="bg-white"
                sx={{
                  width: "40px",
                  height: "40px",
                  lineHeight: "40px",
                  fontSize: "22px",
                  textAlign: "center",
                  borderRadius: "100px",
                }}
              >
                <i className="ri-file-warning-line text-primary"></i>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  className="text-black"
                  fontWeight={500}
                  fontSize="14px"
                  mb="5px"
                >
                  Project_attachment_3.zip
                </Typography>

                <Typography fontSize="13px">3.25 MB</Typography>
              </Box>
            </Box>

            <IconButton aria-label="delete" size="large">
              <i
                className="ri-download-2-line text-primary"
                style={{ fontSize: "22px" }}
              ></i>
            </IconButton>
          </Box>

          <Box
            className="bg-f6f7f9 border-radius"
            sx={{
              padding: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Box
                className="bg-white"
                sx={{
                  width: "40px",
                  height: "40px",
                  lineHeight: "40px",
                  fontSize: "22px",
                  textAlign: "center",
                  borderRadius: "100px",
                }}
              >
                <i className="ri-file-warning-line text-primary"></i>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  className="text-black"
                  fontWeight={500}
                  fontSize="14px"
                  mb="5px"
                >
                  Project_attachment_4.zip
                </Typography>

                <Typography fontSize="13px">3.25 MB</Typography>
              </Box>
            </Box>

            <IconButton aria-label="delete" size="large">
              <i
                className="ri-download-2-line text-primary"
                style={{ fontSize: "22px" }}
              ></i>
            </IconButton>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Attachments;
