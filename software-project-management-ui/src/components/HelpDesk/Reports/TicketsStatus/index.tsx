"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import {
  Card,
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "@/components/HelpDesk/Reports/TicketsStatus/TicketsStatus.module.css";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TicketsStatus: React.FC = () => {
  // Select
  const [select, setSelect] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Solved",
      data: [28, 50, 90, 95, 20, 70, 35],
    },
    {
      name: "In Progress",
      data: [80, 60, 70, 30, 45, 20, 80],
    },
    {
      name: "Pending",
      data: [32, 23, 78, 35, 65, 35, 15],
    },
    {
      name: "Others",
      data: [60, 25, 80, 25, 15, 40, 15],
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

    colors: ["#605DFF", "#3584FC", "#AD63F6", "#FD5812"],
    plotOptions: {
      bar: {
        columnWidth: "65%",
      },
    },
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
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
        show: true,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      max: 100,
      min: 0,
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
          return val + " Tickets";
        },
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
          position: "relative",
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
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Tickets Status
          </Typography>

          <Box>
            <FormControl sx={{ minWidth: "115px" }} size="small">
              <InputLabel id="demo-select-small">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                label="select"
                onChange={handleChange}
                className="select"
              >
                <MenuItem value={0}>This Day</MenuItem>
                <MenuItem value={0}>This Weekly</MenuItem>
                <MenuItem value={1}>This Monthly</MenuItem>
                <MenuItem value={2}>This Yearly</MenuItem>
                <MenuItem value={4}>All Time</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <div className={styles.ticketsStatusContent}>
          <div
            style={{
              marginBottom: "-22px",
              marginLeft: "-15px",
              marginTop: "-20px",
            }}
          >
            {isChartLoaded && (
              <Chart
                options={options}
                series={series}
                type="bar"
                height={380}
                width={"100%"}
              />
            )}
          </div>

          <div className={styles.info}>
            <Typography variant="h6" className="text-black">
              Avg. 1.5k
            </Typography>

            <Typography>Tickets Weekly Solved</Typography>

            <ul>
              <li>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    className={styles.dot}
                    sx={{ bgcolor: "primary.main" }}
                  ></Box>
                  Solved
                </Box>
                <Typography component="span" className="text-black">
                  1.5k
                </Typography>
              </li>

              <li>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    className={styles.dot}
                    sx={{ bgcolor: "secondary.main" }}
                  ></Box>
                  In Progress
                </Box>
                <Typography component="span" className="text-black">
                  4.7k
                </Typography>
              </li>

              <li>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    className={styles.dot}
                    sx={{ bgcolor: "success.main" }}
                  ></Box>
                  Pending
                </Box>
                <Typography component="span" className="text-black">
                  780
                </Typography>
              </li>

              <li>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    className={styles.dot}
                    sx={{ bgcolor: "error.main" }}
                  ></Box>
                  Others
                </Box>
                <Typography component="span" className="text-black">
                  320
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
};

export default TicketsStatus;
