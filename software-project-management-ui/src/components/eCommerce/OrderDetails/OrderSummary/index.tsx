"use client";

import React from "react";
import {
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
} from "@mui/material";

const OrderSummary: React.FC = () => {
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
            Order Summary
          </Typography>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "7px",
          }}
          className="rmui-table border"
        >
          <Table aria-label="Table">
            <TableHead className="bg-f6f7f9">
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Description
                </TableCell>

                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom text-end"
                >
                  Price
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    padding: "14px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Grand Total :
                </TableCell>

                <TableCell
                  sx={{
                    padding: "14px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom text-end"
                >
                  $1,105.00
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "14px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Discount :
                </TableCell>

                <TableCell
                  sx={{
                    padding: "14px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom text-end"
                >
                  -$105.00
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "14px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Tax :
                </TableCell>

                <TableCell
                  sx={{
                    padding: "14px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom text-end"
                >
                  $75.00
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "14px 20px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  className="text-black border-bottom"
                >
                  Subtotal :
                </TableCell>

                <TableCell
                  sx={{
                    padding: "14px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom text-end"
                >
                  $1,000.00
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "14px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Shipping Charge :
                </TableCell>

                <TableCell
                  sx={{
                    padding: "14px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom text-end"
                >
                  $80.00
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "14px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Coupon Charge :
                </TableCell>

                <TableCell
                  sx={{
                    padding: "14px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom text-end"
                >
                  $20.00
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "14px 20px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  className="text-black border-bottom"
                >
                  Total :
                </TableCell>

                <TableCell
                  sx={{
                    padding: "14px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom text-end"
                >
                  $900.00
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box mt="20px">
          <Typography
            variant="h6"
            sx={{
              fontSize: "15px",
              fontWeight: "700",
              mb: "10px",
            }}
            className="text-black"
          >
            Payment Method
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box>
                <img src="/images/master-card.png" alt="master-card" />
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  className="text-black"
                  fontWeight={500}
                  fontSize="14px"
                >
                  Payment
                </Typography>

                <Typography fontSize="13px">Via MasterCard</Typography>
              </Box>
            </Box>

            <Typography>$900.00</Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default OrderSummary;
