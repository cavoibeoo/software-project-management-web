"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

interface Props {
  pageTitle: string;
}

const PageBanner: React.FC<Props> = ({ pageTitle }) => {
  return (
    <>
      <Box
        className="page-banner-area text-center"
        sx={{
          pt: {
            xs: "100px",
            sm: "100px",
            md: "150px",
            lg: "170px",
            xl: "195px",
          },
          pb: { xs: "60px", sm: "70px", md: "100px", lg: "140px", xl: "150px" },
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "600px",
              md: "900px",
              lg: "1200px",
              xl: "1320px",
            },
            mx: "auto",
            px: "12px",
            position: "relative",
            zIndex: "1",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "30px", sm: "35px", md: "40px", lg: "60px" },
            }}
          >
            {pageTitle}
          </Typography>

          {/* Shape Images */}
          <div className="shape1">
            <Image
              src="/images/front-pages/shape3.png"
              alt="shape3"
              width={685}
              height={685}
            />
          </div>
          <div className="shape2">
            <Image
              src="/images/front-pages/shape5.png"
              alt="shape5"
              width={658}
              height={656}
            />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default PageBanner;
