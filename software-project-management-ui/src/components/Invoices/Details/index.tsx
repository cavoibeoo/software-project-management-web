"use client";

import React from "react";
import {
  Card,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Image from "next/image";

const Details: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card invoice-details-card"
      >
        <Box
          className="invoice-info"
          sx={{
            display: { sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Box>
            <Typography sx={{ mb: { xs: "15px", md: "30px" } }}>
              Invoice Number: <span className="text-black">#1346</span>
            </Typography>

            <Typography sx={{ mb: "5px" }}>Invoice To:</Typography>

            <Typography sx={{ mb: "5px" }} className="text-black">
              Shannon Nelson
            </Typography>

            <Typography sx={{ mb: "5px" }} className="text-black">
              4545 Seth Street Ballinger, TX 78965
            </Typography>

            <Typography sx={{ mb: "5px" }} className="text-black">
              +1 444 556 8899
            </Typography>
          </Box>

          <Box sx={{ my: { xs: "15px", sm: "0" } }}>
            <Image
              src="/images/qr-code.svg"
              className="qr-code-image"
              alt="qr-code-image"
              width={150}
              height={150}
            />
          </Box>

          <Box
            className="text-end"
            sx={{
              textAlign: { xs: "left !important", sm: "end !important" },
            }}
          >
            <Typography sx={{ mb: { xs: "15px", md: "30px" } }}>
              Date: <span className="text-black">01 Dec 2024</span>
            </Typography>

            <Typography sx={{ mb: "5px" }} className="text-body">
              Pay To:
            </Typography>

            <Typography sx={{ mb: "5px" }}>Mercedes Foreman</Typography>

            <Typography sx={{ mb: "5px" }}>
              458 Friendship Lane Walnut Creek, CA 5828
            </Typography>

            <Typography sx={{ mb: "5px" }}>+1 444 888 0055</Typography>
          </Box>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "7px",
          }}
          className="rmui-table border"
        >
          <Table sx={{ minWidth: 750 }} aria-label="table">
            <TableHead className="bg-f6f7f9">
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 24px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  No
                </TableCell>

                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 24px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Item Description
                </TableCell>

                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 24px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Quantity
                </TableCell>

                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 24px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Price
                </TableCell>

                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 24px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Total
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  1
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  className="border-bottom text-black"
                >
                  Apple MacBook Pro 16.2' with M3 Pro Chip
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  4
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  $80
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  $320
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  2
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  className="border-bottom text-black"
                >
                  SAMSUNG Galaxy Tab A9+ Tablet 11
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  3
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  $45
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  $135
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  3
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  className="border-bottom text-black"
                >
                  Apple iPhone 15 Pro Max (512 GB)
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  5
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  $30
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  $150
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  4
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  className="border-bottom text-black"
                >
                  Gildan Men's Crew T-Shirts, Multipack
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  1
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  $56
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  $56
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  5
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  className="border-bottom text-black"
                >
                  Skechers Men's Summits High Range
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  4
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  $90
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  $360
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  6
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  className="border-bottom text-black"
                >
                  Amazfit GTR 3 Smart Watch for Men
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  2
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  $75
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  $150
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                ></TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                ></TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                ></TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  Sub Total:
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  $1,171
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                ></TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                ></TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                ></TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  Tax (0.22%)
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  $5.55
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                ></TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                ></TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                ></TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  Discount (0.52%)
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                >
                  - $4.00
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                ></TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                ></TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom"
                ></TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  className="border-bottom text-black"
                >
                  Grand Total
                </TableCell>

                <TableCell
                  sx={{
                    padding: "15px 20px",
                    fontSize: "14px",
                  }}
                  className="border-bottom text-black"
                >
                  $1,172.55
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          className="text-center"
          sx={{
            mt: "25px",
            display: "flex",
            alignItems: "çenter",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Button
            type="button"
            variant="contained"
            color="error"
            sx={{
              textTransform: "capitalize",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: { xs: "13px", sm: "16px" },
              padding: { xs: "10px 20px", sm: "10px 24px" },
              color: "#fff !important",
              boxShadow: "none",
            }}
          >
            Print
          </Button>

          <Button
            type="button"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: { xs: "13px", sm: "16px" },
              padding: { xs: "10px 20px", sm: "10px 24px" },
              color: "#fff !important",
              boxShadow: "none",
            }}
          >
            <i className="material-symbols-outlined">download</i>
            Download
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default Details;
