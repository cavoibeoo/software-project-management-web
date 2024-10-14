"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "@/components/Widgets/Welcome/Welcome.module.css";

const Welcome: React.FC = () => {
  return (
    <>
      <Box className={styles.welcomeCard}>
        <div className={styles.content}>
          <h5>
            Welcome Back, <span>Olivia!</span>
          </h5>

          <p className="text-white">Your progress this week is Awesome.</p>

          <div className={styles.extraSpace}></div>

          <Box
            sx={{
              display: { sm: "flex" },
              alignItems: "center",
              gap: { sm: "35px" },
            }}
          >
            <Box
              className={styles.item}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                className={styles.icon}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "7px",
                  bgcolor: "#ffc8c0",
                  color: "error.main",
                }}
              >
                <i className="material-symbols-outlined">airplay</i>
              </Box>

              <Box>
                <Typography component="span" className={styles.title}>
                  75h
                </Typography>
                <Typography component="span" sx={{ display: "block" }}>
                  Hours Spent
                </Typography>
              </Box>
            </Box>

            <Box
              className={styles.item}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                className={styles.icon}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "7px",
                  bgcolor: "#d8ffc8",
                  color: "success.main",
                }}
              >
                <i className="material-symbols-outlined">local_library</i>
              </Box>

              <Box>
                <Typography component="span" className={styles.title}>
                  15
                </Typography>
                <Typography component="span" sx={{ display: "block" }}>
                  Courses Completed
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>

        <div className={styles.image}>
          <Image
            src="/images/online-learning.gif"
            alt="online-learning-image"
            width={290}
            height={222}
          />
        </div>
      </Box>
    </>
  );
};

export default Welcome;
