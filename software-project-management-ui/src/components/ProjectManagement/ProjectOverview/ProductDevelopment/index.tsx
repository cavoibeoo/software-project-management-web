"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import styles from "@/components/ProjectManagement/ProjectOverview/ProductDevelopment/ProductDevelopment.module.css";

const ProductDevelopment: React.FC = () => {
  return (
    <>
      <Box
        className={`bg-white border-radius ${styles.productDevelopmentCard}`}
      >
        <Typography
          variant="h5"
          className="text-black"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: "700",
            mb: "25px",
          }}
        >
          Shopify Theme Development
        </Typography>

        <Box>
          <Box
            className="bg-primary border-radius"
            sx={{
              padding: "24px 24px 20px",
              mb: "10px",
            }}
          >
            <Box
              sx={{
                display: { sm: "flex" },
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mb: { xs: "10px", sm: "0" },
                }}
              >
                <Box
                  className="text-white"
                  sx={{
                    bgcolor: "#4936f5",
                    width: "45px",
                    height: "45px",
                    textAlign: "center",
                    borderRadius: "100px",
                  }}
                >
                  <i
                    className="material-symbols-outlined"
                    style={{ lineHeight: "45px" }}
                  >
                    for_you
                  </i>
                </Box>
                <Box>
                  <Typography className="text-white">Client</Typography>

                  <Typography
                    variant="h6"
                    className="text-white"
                    fontWeight={600}
                    fontSize="16px"
                  >
                    Innovatech
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mb: { xs: "10px", sm: "0" },
                }}
              >
                <Box
                  className="text-white"
                  sx={{
                    bgcolor: "#4936f5",
                    width: "45px",
                    height: "45px",
                    textAlign: "center",
                    borderRadius: "100px",
                  }}
                >
                  <i
                    className="material-symbols-outlined"
                    style={{ lineHeight: "45px" }}
                  >
                    attach_money
                  </i>
                </Box>
                <Box>
                  <Typography className="text-white">Budget</Typography>
                  <Typography
                    variant="h6"
                    className="text-white"
                    fontWeight={600}
                    fontSize="16px"
                  >
                    $25,500
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mb: { xs: "10px", sm: "0" },
                }}
              >
                <Box
                  className="text-white"
                  sx={{
                    bgcolor: "#4936f5",
                    width: "45px",
                    height: "45px",
                    textAlign: "center",
                    borderRadius: "100px",
                  }}
                >
                  <i
                    className="material-symbols-outlined"
                    style={{ lineHeight: "45px" }}
                  >
                    pace
                  </i>
                </Box>
                <Box>
                  <Typography className="text-white">Duration</Typography>
                  <Typography
                    variant="h6"
                    className="text-white"
                    fontWeight={600}
                    fontSize="16px"
                  >
                    360 hrs
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                bgcolor: "#D5D9E2",
                width: "100%",
                height: "7px",
                display: "block",
                borderRadius: "30px",
                mt: "20px",
                mb: "10px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#FE7A36",
                  width: "60%",
                  height: "7px",
                  borderRadius: "30px",
                }}
              ></Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography className="text-white">Progress</Typography>
              <Typography className="text-white">60%</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Project Started: 01 Mar 2024</Typography>
            <Typography>Project Deadline: 25 Jun 2024</Typography>
          </Box>

          <Typography
            variant="h5"
            className="text-black"
            fontWeight={700}
            fontSize="14px"
            sx={{
              mt: "20px !important",
              mb: "10px",
            }}
          >
            Project Details
          </Typography>

          <p>
            Vestibulum euismod nisi vitae orci placerat, vitae vehicula eros
            dictum. Phasellus ut pharetra felis. Nulla facilisi. Nullam congue
            semper nunc, at sodales magna laoreet id. Nullam et lacus vitae
            ligula pretium suscipit. Fusce nec viverra enim. Sed feugiat gravida
            nibh sit amet suscipit. Integer tempor sapien eget metus lacinia,
            nec finibus lacus tincidunt. Sed sodales tellus nec metus aliquam,
            nec dignissim arcu lobortis.
          </p>

          <ul>
            <li>Outline the boundaries and deliverables of the project.</li>
            <li>List team members, their roles, and responsibilities.</li>
            <li>
              Specify the technology stack and tools to be used for development.
            </li>
            <li>Break down the project into manageable phases or sprints.</li>
            <li>
              Outline the design phase, including wireframing, prototyping
            </li>
          </ul>
        </Box>
      </Box>
    </>
  );
};

export default ProductDevelopment;
