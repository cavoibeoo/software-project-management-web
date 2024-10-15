"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Card, Box, Typography } from "@mui/material";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LeadConversion: React.FC = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Lead Conversion",
      data: [3, 6, 7, 6, 9, 10, 7],
    },
  ];

  const options: ApexOptions = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },

    colors: ["#605DFF"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      labels: {
        show: false,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      show: false,
      labels: {
        formatter: (val) => {
          return val + "%";
        },
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
    },
    legend: {
      show: false,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "left",
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        offsetX: -2,
        offsetY: -0.5,
        radius: 2,
      },
    },
  };

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: "30px",
            position: "relative",
          }}
        >
          <Box>
            <Typography component="span" sx={{ mb: "3px", display: "block" }}>
              Lead Conversion
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", lg: "20px" },
                fontWeight: 700,
              }}
              className="text-black"
            >
              48.79%
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "-28px",
              right: "-9px",
              maxWidth: "120px",
            }}
            className="crm-lc"
          >
            {isChartLoaded && (
              <Chart
                options={options}
                series={series}
                type="area"
                height={95}
                width={"100%"}
              />
            )}
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "5px",
            }}
          >
            <Typography
              component="span"
              className="text-danger"
              sx={{
                bgcolor: "#ffe1dd",
                border: "1px solid #ffcea9",
                borderRadius: "100px",
                fontSize: "13px",
                padding: "1.3px 8.3px",
              }}
            >
              -15%
            </Typography>

            <Typography component="span" sx={{ fontSize: "13px" }}>
              Last 30 days
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default LeadConversion;
