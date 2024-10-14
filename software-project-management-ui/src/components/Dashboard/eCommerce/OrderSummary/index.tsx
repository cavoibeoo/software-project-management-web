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

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const OrderSummary: React.FC = () => {
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

  const series = [60, 30, 10];

  const options: ApexOptions = {
    labels: ["Completed", "New Order", "Pending"],
    colors: ["#37D80A", "#605DFF", "#AD63F6"],
    legend: {
      show: true,
      position: "top",
      fontSize: "12px",
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
    dataLabels: {
      enabled: false,
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
            Order Summary
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

        <Box>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="donut"
              height={327}
              width={"100%"}
            />
          )}
        </Box>

        <Box>
          {/* Completed Order */}
          <Box
            sx={{
              mt: "7px",
            }}
          >
            <Typography component="span" sx={{ fontWeight: "500" }}>
              Completed Order
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#ecf0ff",
                  width: "100%",
                  height: "4px",
                  display: "block",
                  borderRadius: "30px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#25B003",
                    width: "60%",
                    height: "4px",
                    borderRadius: "30px",
                  }}
                ></Box>
              </Box>

              <Typography component="span">60%</Typography>
            </Box>
          </Box>

          {/* New Order */}
          <Box
            sx={{
              mt: "7px",
            }}
          >
            <Typography component="span" sx={{ fontWeight: "500" }}>
              New Order
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#ecf0ff",
                  width: "100%",
                  height: "4px",
                  display: "block",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#605DFF",
                    width: "30%",
                    height: "4px",
                  }}
                ></Box>
              </Box>

              <Typography component="span">30%</Typography>
            </Box>
          </Box>

          {/* Pending Order */}
          <Box
            sx={{
              mt: "7px",
            }}
          >
            <Typography component="span" sx={{ fontWeight: "500" }}>
              Pending Order
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#ecf0ff",
                  width: "100%",
                  height: "4px",
                  display: "block",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#AD63F6",
                    width: "10%",
                    height: "4px",
                  }}
                ></Box>
              </Box>

              <Typography component="span">10%</Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default OrderSummary;
