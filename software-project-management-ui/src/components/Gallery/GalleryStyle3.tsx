"use client";

import React from "react";
import { Grid, Card, Typography } from "@mui/material";
import Image from "next/image";

const GalleryStyle3: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          p: { xs: "18px", sm: "20px", lg: "25px" },
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
          Gallery Style - 3
        </Typography>

        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          spacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        >
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Image
              src="/images/gallery/gallery1.jpg"
              className="border-radius"
              alt="gallery-image"
              width={760}
              height={760}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Image
              src="/images/gallery/gallery2.jpg"
              className="border-radius"
              alt="gallery-image"
              width={760}
              height={760}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Image
              src="/images/gallery/gallery3.jpg"
              className="border-radius"
              alt="gallery-image"
              width={760}
              height={760}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} xl={6}>
            <Image
              src="/images/gallery/gallery4.jpg"
              className="border-radius"
              alt="gallery-image"
              width={760}
              height={760}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} xl={6}>
            <Image
              src="/images/gallery/gallery5.jpg"
              className="border-radius"
              alt="gallery-image"
              width={760}
              height={760}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Image
              src="/images/gallery/gallery6.jpg"
              className="border-radius"
              alt="gallery-image"
              width={760}
              height={760}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Image
              src="/images/gallery/gallery7.jpg"
              className="border-radius"
              alt="gallery-image"
              width={760}
              height={760}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Image
              src="/images/gallery/gallery8.jpg"
              className="border-radius"
              alt="gallery-image"
              width={760}
              height={760}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Image
              src="/images/gallery/gallery9.jpg"
              className="border-radius"
              alt="gallery-image"
              width={760}
              height={760}
            />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default GalleryStyle3;
