"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Card, Box, Typography } from "@mui/material";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TotalCustomers: React.FC = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Orders",
      data: [55, 50, 60, 45, 85, 80, 100],
    },
    {
      name: "Sales",
      data: [45, 38, 80, 65, 55, 75, 90],
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

    dataLabels: {
      enabled: false,
    },
    colors: ["#605DFF", "#C2CDFF"],
    stroke: {
      width: 2,
      curve: "straight",
    },
    grid: {
      show: true,
      borderColor: "#ffffff",
    },
    xaxis: {
      categories: [
        "01 Jun",
        "02 Jun",
        "03 Jun",
        "04 Jun",
        "05 Jun",
        "06 Jun",
        "07 Jun",
      ],
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
    legend: {
      show: false,
      fontSize: "12px",
      position: "bottom",
      horizontalAlign: "center",
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
            mb: "25px",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: "4px",
                gap: "10px",
              }}
            >
              <Typography component="span">Total Customers</Typography>

              <Typography
                color="success"
                component="span"
                sx={{
                  bgcolor: "#d8ffc8",
                  border: "1px solid #82FC5A",
                  borderRadius: "100px",
                  fontSize: "13px",
                  padding: "1.3px 8.3px",
                }}
              >
                +5.4
              </Typography>
            </Box>

            <Typography
              variant="h5"
              sx={{
                fontSize: 20,
                fontWeight: 700,
              }}
              className="text-black"
            >
              1,528
            </Typography>
          </Box>

          <Typography sx={{ fontSize: "13px" }}>Last 7 days</Typography>
        </Box>

        <div
          style={{
            maxWidth: "300px",
            marginTop: "-58px",
            marginBottom: "-25px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="line"
              height={140}
              width={"100%"}
            />
          )}
        </div>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "5px",
            }}
          >
            <Typography component="span" sx={{ fontSize: "13px" }}>
              1 June
            </Typography>

            <Typography component="span" sx={{ fontSize: "13px" }}>
              7 June
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default TotalCustomers;
