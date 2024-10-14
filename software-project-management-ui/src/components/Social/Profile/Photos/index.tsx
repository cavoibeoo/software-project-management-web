"use client";

import * as React from "react";
import Image from "next/image";
import { Card, Grid, Typography } from "@mui/material";

const Photos: React.FC = () => {
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
          Photos
        </Typography>

        <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
          <Grid item xs={4} md={4} lg={4} xl={4}>
            <a href="#" target="_blank">
              <Image
                src="/images/products/product6.jpg"
                alt="photo-image"
                width={160}
                height={160}
                style={{
                  borderRadius: "7px",
                }}
              />
            </a>
          </Grid>

          <Grid item xs={4} md={4} lg={4} xl={4}>
            <a href="#" target="_blank">
              <Image
                src="/images/products/product7.jpg"
                alt="photo-image"
                width={160}
                height={160}
                style={{
                  borderRadius: "7px",
                }}
              />
            </a>
          </Grid>

          <Grid item xs={4} md={4} lg={4} xl={4}>
            <a href="#" target="_blank">
              <Image
                src="/images/products/product8.jpg"
                alt="photo-image"
                width={160}
                height={160}
                style={{
                  borderRadius: "7px",
                }}
              />
            </a>
          </Grid>

          <Grid item xs={4} md={4} lg={4} xl={4}>
            <a href="#" target="_blank">
              <Image
                src="/images/products/product9.jpg"
                alt="photo-image"
                width={160}
                height={160}
                style={{
                  borderRadius: "7px",
                }}
              />
            </a>
          </Grid>

          <Grid item xs={4} md={4} lg={4} xl={4}>
            <a href="#" target="_blank">
              <Image
                src="/images/products/product10.jpg"
                alt="photo-image"
                width={160}
                height={160}
                style={{
                  borderRadius: "7px",
                }}
              />
            </a>
          </Grid>

          <Grid item xs={4} md={4} lg={4} xl={4}>
            <a href="#" target="_blank">
              <Image
                src="/images/products/product11.jpg"
                alt="photo-image"
                width={160}
                height={160}
                style={{
                  borderRadius: "7px",
                }}
              />
            </a>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Photos;
