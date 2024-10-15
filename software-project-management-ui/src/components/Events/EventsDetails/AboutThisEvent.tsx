"use client";

import * as React from "react";
import { Card, Box, Typography } from "@mui/material";
import styles from "@/components/Events/EventsDetails.module.css";

const AboutThisEvent: React.FC = () => {
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
          About This Event
        </Typography>

        <Box className={styles.aboutThisEvent}>
          <Typography>
            Pellentesque viverra lorem malesuada nunc tristique sapien.
            Imperdiet sit hendrerit tincidunt bibendum donec adipiscing. Tellus
            non morbi nascetur cursus etiam facilisis mi. Dolor aliquam sed amet
            aliquam venenatis. Ac viverra interdum tortor enim. Molestie
            tincidunt ut consequat a urna tortor. Vitae velit ac nisl velit
            mauris placerat nisi placerat.
          </Typography>

          <Typography>
            Imperdiet sit hendrerit tincidunt bibendum donec adipiscing. Tellus
            non morbi nascetur cursus etiam facilisis mi. Dolor aliquam sed amet
            aliquam venenatis. Ac viverra interdum tortor enim. Molestie
            tincidunt ut consequat a urna tortor. Vitae velit ac nisl velit
            mauris placerat nisi placerat.
          </Typography>

          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>

          <ul>
            <li>Pellentesque viverra lorem malesuada nunc tristique sapien.</li>
            <li>
              Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
            </li>
            <li>Tellus non morbi nascetur cursus etiam facilisis mi.</li>
            <li>
              Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
            </li>
          </ul>
        </Box>
      </Card>
    </>
  );
};

export default AboutThisEvent;
