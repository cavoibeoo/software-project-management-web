"use client";

import * as React from "react";
import { Card, Box, Typography } from "@mui/material";
import styles from "@/components/Events/EventsDetails.module.css";

const EventInfo: React.FC = () => {
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
          Event Info
        </Typography>

        <Box className={styles.eventInfo}>
          <ul>
            <li>
              <span>08:00 AM</span> - Registration
            </li>
            <li>
              <span>09:00 AM</span> - Opening Keynote
            </li>
            <li>
              <span>10:30 AM</span> - Panel Discussion: Future Trends
            </li>
            <li>
              <span>12:00 PM</span> - Lunch Break
            </li>
            <li>
              <span>02:00 PM</span> - Interactive Workshops
            </li>
            <li>
              <span>04:30 PM</span> - Networking Reception
            </li>
          </ul>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
              mb: "12px",
            }}
            className="text-black"
          >
            Registration Information
          </Typography>
          <ul>
            <li>Early Bird Registration Deadline: 15 November 2024</li>
            <li>Standard Registration Deadline: 30 November 2024</li>
          </ul>
        </Box>
      </Card>
    </>
  );
};

export default EventInfo;
