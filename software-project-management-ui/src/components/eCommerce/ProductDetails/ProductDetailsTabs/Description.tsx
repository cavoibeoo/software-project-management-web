"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";

const Description: React.FC = () => {
  return (
    <>
      <Box
        className="bg-white pd-description"
        sx={{
          padding: "25px",
          borderRadius: "0px 0px 7px 7px",
        }}
      >
        <Typography>
          The Apple MacBook Pro 16.2 is a cutting-edge laptop designed to
          deliver exceptional performance and advanced features for
          professionals and creative enthusiasts. With its sleek aluminum body
          and precision engineering, this MacBook Pro represents the pinnacle of
          Apple's laptop technology.
        </Typography>

        <Typography>
          Stay connected with a variety of ports, including Thunderbolt 3,
          USB-C, and audio jacks. These versatile ports support high-speed data
          transfer and external device connections. Enjoy a rich audio
          experience with high-fidelity speakers that deliver clear and
          immersive sound. Perfect for content creators and multimedia
          enthusiasts.
        </Typography>

        <Typography>
          Equipped with the latest processors, ample RAM, and high-performance
          graphics, the MacBook Pro 16.2 ensures smooth multitasking, fast
          rendering, and efficient handling of resource-intensive tasks.
          Seamlessly integrate with the macOS ecosystem, benefiting from
          features like iCloud, Siri, and a vast selection of applications
          available on the App Store.
        </Typography>
      </Box>
    </>
  );
};

export default Description;
