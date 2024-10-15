"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";

const Specifications: React.FC = () => {
  return (
    <>
      <Box
        className="bg-white pd-description"
        sx={{
          padding: "25px",
          borderRadius: "0px 0px 7px 7px",
        }}
      >
        <Typography variant="h3">General</Typography>

        <ul>
          <li>
            <span className="text-black">Brand:</span> Apple
          </li>
          <li>
            <span className="text-black">Model:</span> MacBook Pro
          </li>
          <li>
            <span className="text-black">Price:</span> $2499
          </li>
          <li>
            <span className="text-black">Dimensions (mm):</span> 304.10 x 212.40
            x 14.90
          </li>
          <li>
            <span className="text-black">Weight (kg):</span> 1.37
          </li>
          <li>
            <span className="text-black">Colors:</span> Space Grey
          </li>
          <li>
            <span className="text-black">Operating system:</span> macOS
          </li>
          <li>
            <span className="text-black">Battery Life (up to hours):</span> 10
          </li>
        </ul>

        <Typography variant="h3">Display</Typography>
        <ul className="pl-0 pr-0 mb-0 mt-0 list-unstyled">
          <li>
            <span className="text-black">Size:</span> 13.30-inch
          </li>
          <li>
            <span className="text-black">Resolution:</span> 2560x1600 pixels
          </li>
          <li>
            <span className="text-black">Touch Screen:</span> No
          </li>
        </ul>

        <Typography variant="h3">Processor</Typography>
        <ul className="pl-0 pr-0 mb-0 mt-0 list-unstyled">
          <li>
            <span className="text-black">Processor:</span> Intel Core i5 7th Gen
          </li>
          <li>
            <span className="text-black">Base Clock Speed:</span> 2.3 GHz
          </li>
        </ul>

        <Typography variant="h3">Memory</Typography>
        <ul className="pl-0 pr-0 mb-0 mt-0 list-unstyled">
          <li>
            <span className="text-black">RAM:</span> 12GB
          </li>
        </ul>

        <Typography variant="h3">Storage</Typography>
        <ul className="pl-0 pr-0 mb-0 mt-0 list-unstyled">
          <li>
            <span className="text-black">Hard disk:</span> No
          </li>
          <li>
            <span className="text-black">SSD:</span> 512GB
          </li>
        </ul>

        <Typography variant="h3">Connectivity</Typography>
        <ul className="pl-0 pr-0 mb-0 mt-0 list-unstyled">
          <li>
            <span className="text-black">Wi-Fi standards supported:</span> Apple
          </li>
          <li>
            <span className="text-black">Bluetooth version:</span> 4.2
          </li>
        </ul>

        <Typography variant="h3">Inputs</Typography>
        <ul className="pl-0 pr-0 mb-0 mt-0 list-unstyled">
          <li>
            <span className="text-black">Web Camera:</span> Yes
          </li>
          <li>
            <span className="text-black">Pointer Device:</span> Touchpad
          </li>
          <li>
            <span className="text-black">Touchpad:</span> Yes
          </li>
          <li>
            <span className="text-black">Internal Mic:</span> Yes
          </li>
          <li>
            <span className="text-black">Speakers:</span> Stereo Speakers
          </li>
          <li>
            <span className="text-black">Finger Print Sensor:</span> Yes
          </li>
        </ul>

        <Typography variant="h3">Ports and slots</Typography>
        <ul className="pl-0 pr-0 mb-0 mt-0 list-unstyled">
          <li>
            <span className="text-black">Number of USB Ports:</span> 2
          </li>
          <li>
            <span className="text-black">USB Ports:</span> 2 x USB 3.0
          </li>
          <li>
            <span className="text-black">Price:</span> $2499
          </li>
          <li>
            <span className="text-black">Mic In:</span> Yes
          </li>
        </ul>
      </Box>
    </>
  );
};

export default Specifications;
