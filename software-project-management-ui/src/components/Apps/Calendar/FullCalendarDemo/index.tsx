"use client";

import * as React from "react";
import { Card } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const FullCalendarDemo: React.FC = () => {
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
        <div className="full-calendar-box">
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </div>
      </Card>
    </>
  );
};

export default FullCalendarDemo;
