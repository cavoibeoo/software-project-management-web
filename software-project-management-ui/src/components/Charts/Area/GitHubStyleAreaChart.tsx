"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Card, Box, Typography } from "@mui/material";

// Dummy GitHub data for the example
const githubData = {
  series: [
    {
      x: new Date("2023-01-01").getTime(),
      y: 30,
    },
    {
      x: new Date("2023-02-01").getTime(),
      y: 40,
    },
    {
      x: new Date("2023-03-01").getTime(),
      y: 35,
    },
    {
      x: new Date("2023-04-01").getTime(),
      y: 50,
    },
  ],
};

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const GitHubStyleAreaChart: React.FC = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "commits",
      data: githubData.series,
    },
  ];

  const options: ApexOptions = {
    chart: {
      id: "chartyear",
      toolbar: {
        show: false,
        autoSelected: "pan",
      },
    },
    colors: ["#605DFF"],
    yaxis: {
      show: false,
      tickAmount: 3,
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
  };

  const chartYearsOptions: ApexOptions = {
    chart: {
      id: "chartyear",
      height: 200,
      type: "area",
      toolbar: {
        autoSelected: "selection",
      },
      brush: {
        enabled: true,
        target: "chartyear",
      },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date("26 Jan 2014").getTime(),
          max: new Date("29 Mar 2015").getTime(),
        },
      },
    },
    colors: ["#7bd39a"],
    legend: {
      show: true,
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
      },
    },
  };

  const chartYearsSeries = [
    {
      name: "commits",
      data: githubData.series,
    },
  ];

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
          GitHub Style Area Chart
        </Typography>

        <Box
          sx={{
            marginBottom: "-15px",
            marginLeft: "-10px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={160}
              width={"100%"}
            />
          )}
        </Box>
      </Card>

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
          Additional Chart
        </Typography>

        <Box
          sx={{
            marginBottom: "-15px",
            marginLeft: "-10px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={chartYearsOptions}
              series={chartYearsSeries}
              type="area"
              height={200}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default GitHubStyleAreaChart;
