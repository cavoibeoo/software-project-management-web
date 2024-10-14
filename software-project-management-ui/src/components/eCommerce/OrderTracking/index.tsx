"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "@/components/eCommerce/OrderTracking/OrderTracking.module.css";

const OrderTracking: React.FC = () => {
  return (
    <>
      <div className={`border-radius bg-white ${styles.orderTrackingCard}`}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              fontSize: { xs: "15px", sm: "18px" },
            }}
            className="text-black"
          >
            Order ID #2435679
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              fontSize: { xs: "15px", sm: "18px" },
            }}
            className="text-black"
          >
            Tracking ID #1004216609
          </Typography>
        </Box>

        <Box>
          <Typography mt="10px !important">IBAN: EST6049283742809</Typography>
          <Typography mt="10px !important">Date: 26 Mar 2024</Typography>

          <div className={styles.numbers}>
            <div className={styles.box}>
              <div className="rounded-circle text-center text-black">01</div>
              <Typography
                variant="h6"
                className="text-black"
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  mt: "15px !important",
                }}
              >
                Order Placed
              </Typography>

              <Typography fontSize="13px">22 Mar 2024 - 11:35AM</Typography>
            </div>

            <div className={styles.box}>
              <div className="rounded-circle text-center text-black">02</div>

              <Typography
                variant="h6"
                className="text-black"
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  mt: "15px !important",
                }}
              >
                Packed
              </Typography>

              <Typography fontSize="13px">23 Mar 2024 - 10:35AM</Typography>
            </div>

            <div className={styles.box}>
              <div className="rounded-circle text-center text-black">03</div>
              <Typography
                variant="h6"
                className="text-black"
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  mt: "15px !important",
                }}
              >
                Shipped
              </Typography>
              <Typography fontSize="13px">24 Mar 2024 - 3:45PM</Typography>
            </div>

            <div className={`${styles.box} ${styles.active}`}>
              <div className="rounded-circle text-center text-black">04</div>

              <Typography
                variant="h6"
                className="text-black"
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  mt: "15px !important",
                }}
              >
                Delivered
              </Typography>
              <Typography fontSize="13px">25 Mar 2024 - 2:21PM</Typography>
            </div>
          </div>

          <Typography fontWeight={600} className="text-black">
            View Details:
          </Typography>

          <Typography mt="10px !important">
            <span className="text-body">25 Mar 2024 - 2:21PM:</span> Your order
            delivered.
          </Typography>

          <Typography mt="10px !important">
            <span className="text-body">24 Mar 2024 - 3:45PM:</span> Your order
            shipped.
          </Typography>

          <Typography mt="10px !important">
            <span className="text-body">23 Mar 2024 - 10:35AM:</span> Your order
            is on the way for deliver.
          </Typography>

          <Typography mt="10px !important">
            <span className="text-body">22 Mar 2024 - 11:35AM:</span> Your order
            is now on warehouse. It’s being ready for shipped.
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default OrderTracking;
