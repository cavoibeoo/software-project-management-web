"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  FormControl,
  TextField,
  Grid,
  Select,
  SelectChangeEvent,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const PaymentMethod: React.FC = () => {
  const [paymentCard, setPaymentCard] = useState<string>("");
  const handlePaymentCardChange = (event: SelectChangeEvent) => {
    setPaymentCard(event.target.value as string);
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
            Payment Method
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        >
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box>
              <Typography
                component="label"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "10px",
                  display: "block",
                }}
                className="text-black"
              >
                Payment Card
              </Typography>

              <FormControl fullWidth>
                <InputLabel id="payment-card-label">Select</InputLabel>
                <Select
                  labelId="payment-card-label"
                  id="payment-card-type"
                  value={paymentCard}
                  label="Select"
                  onChange={handlePaymentCardChange}
                  sx={{
                    "& fieldset": {
                      border: "1px solid #D5D9E2",
                      borderRadius: "7px",
                    },
                  }}
                >
                  <MenuItem value={0}>PayPal</MenuItem>
                  <MenuItem value={1}>Stax</MenuItem>
                  <MenuItem value={2}>Helcim</MenuItem>
                  <MenuItem value={3}>Square</MenuItem>
                  <MenuItem value={4}>Stripe</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box>
              <FormControl fullWidth>
                <Typography
                  component="label"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "10px",
                    display: "block",
                  }}
                  className="text-black"
                >
                  Card Number
                </Typography>

                <TextField
                  label="Enter card number"
                  placeholder="E.g. 3588XXXXXXXXX"
                  variant="filled"
                  id="cardNumber"
                  name="cardNumber"
                  sx={{
                    "& .MuiInputBase-root": {
                      border: "1px solid #D5D9E2",
                      backgroundColor: "#fff",
                      borderRadius: "7px",
                    },
                    "& .MuiInputBase-root::before": {
                      border: "none",
                    },
                    "& .MuiInputBase-root:hover::before": {
                      border: "none",
                    },
                  }}
                />
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box>
              <FormControl fullWidth>
                <Typography
                  component="label"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "10px",
                    display: "block",
                  }}
                  className="text-black"
                >
                  Expiration Date
                </Typography>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{
                      width: "100%",

                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  />
                </LocalizationProvider>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box>
              <FormControl fullWidth>
                <Typography
                  component="label"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "10px",
                    display: "block",
                  }}
                  className="text-black"
                >
                  Security Code
                </Typography>

                <TextField
                  label="Enter security code"
                  placeholder="E.g. CVV"
                  variant="filled"
                  id="securityCode"
                  name="securityCode"
                  sx={{
                    "& .MuiInputBase-root": {
                      border: "1px solid #D5D9E2",
                      backgroundColor: "#fff",
                      borderRadius: "7px",
                    },
                    "& .MuiInputBase-root::before": {
                      border: "none",
                    },
                    "& .MuiInputBase-root:hover::before": {
                      border: "none",
                    },
                  }}
                />
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default PaymentMethod;
