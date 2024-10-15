"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Card, Box, Typography } from "@mui/material";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const seriesData = {
  monthDataSeries1: {
    prices: [
      8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85,
      8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25,
      8500.65, 8881.1, 9340.85,
    ],
    dates: [
      "13 Nov 2018",
      "14 Nov 2018",
      "15 Nov 2018",
      "16 Nov 2018",
      "17 Nov 2018",
      "20 Nov 2018",
      "21 Nov 2018",
      "22 Nov 2018",
      "23 Nov 2018",
      "24 Nov 2018",
      "27 Nov 2018",
      "28 Nov 2018",
      "29 Nov 2018",
      "30 Nov 2018",
      "01 Dec 2018",
      "04 Dec 2018",
      "05 Dec 2018",
      "06 Dec 2018",
      "07 Dec 2018",
      "08 Dec 2018",
    ],
  },
};

const BasicAreaChart: React.FC = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const [series] = useState([
    {
      name: "STOCK ABC",
      data: seriesData.monthDataSeries1.prices,
    },
  ]);

  const [options] = useState<ApexOptions>({
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#605DFF"],
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Fundamental Analysis of Stocks",
      align: "left",
      offsetX: -9,
      style: {
        fontWeight: "500",
        fontSize: "14px",
        color: "#64748B",
      },
    },
    subtitle: {
      text: "Price Movements",
      align: "left",
      offsetX: -9,
      style: {
        fontWeight: "normal",
        fontSize: "13px",
        color: "#64748B",
      },
    },
    labels: seriesData.monthDataSeries1.dates,
    xaxis: {
      type: "datetime",
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      labels: {
        show: true,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
    yaxis: {
      opposite: true,
      labels: {
        show: true,
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
  });

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
          Basic Area Chart
        </Typography>

        <Box
          sx={{
            marginBottom: "-15px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={350}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default BasicAreaChart;
