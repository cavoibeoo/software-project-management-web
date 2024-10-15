"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Card, Box, Typography } from "@mui/material";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TotalOrders: React.FC = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Total Orders",
      data: [44, 55, 57, 56, 61, 58, 63],
    },
  ];

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 2,
      },
    },
    colors: ["#0dcaf0"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    stroke: {
      width: 2,
      show: true,
      colors: ["transparent"],
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
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val;
        },
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
              Total Orders
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", lg: "20px" },
                fontWeight: 700,
              }}
              className="text-black"
            >
              $72,458
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "-28px",
              right: "-9px",
              maxWidth: "120px",
            }}
            className="crm-to"
          >
            {isChartLoaded && (
              <Chart
                options={options}
                series={series}
                type="bar"
                height={110}
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
              color="success"
              sx={{
                bgcolor: "#d8ffc8",
                border: "1px solid #82FC5A",
                borderRadius: "100px",
                fontSize: "13px",
                padding: "1.3px 8.3px",
              }}
              component="span"
            >
              +25%
            </Typography>

            <Typography component="span" sx={{ fontSize: "13px" }}>
              Last 90 days
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default TotalOrders;
