"use client";

import * as React from "react";
import { Card, Box, Typography } from "@mui/material";
import Image from "next/image";

const ProfileIntro: React.FC = () => {
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
          Profile Intro
        </Typography>

        <Box>
          <Box
            className="user"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              mb: "15px",
            }}
          >
            <Box className="image">
              <Image
                src="/images/admin.png"
                className="rounded-circle"
                alt="admin-image"
                width={75}
                height={75}
              />
            </Box>
            <Box className="title">
              <Typography
                variant="h3"
                fontSize="17px"
                fontWeight={600}
                className="text-black"
              >
                Olivia John
              </Typography>

              <Typography>Marketing Manager</Typography>
            </Box>
          </Box>

          <Typography fontWeight={600} mb="7px" className="text-black">
            About Me
          </Typography>

          <Typography mb="10px" lineHeight="1.8">
            Molestie tincidunt ut consequat a urna tortor. Vitae velit ac nisl
            velit mauris placerat nisi placerat. Pellentesque viverra lorem
            malesuada nunc tristique sapien. Imperdiet sit hendrerit tincidunt
            bibendum donec adipiscing.
          </Typography>

          <Box mt="15px">
            <Typography fontWeight={600} mb="7px" className="text-black">
              Social Profile
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <a
                href="https://www.facebook.com/"
                target="_blank"
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  borderRadius: "100%",
                  width: "28px",
                  height: "28px",
                  lineHeight: "28px",
                  color: "#fff",
                  background: "#3a559f",
                }}
              >
                <i className="ri-facebook-fill"></i>
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  borderRadius: "100%",
                  width: "28px",
                  height: "28px",
                  lineHeight: "28px",
                  color: "#fff",
                  background: "#03a9f4",
                }}
              >
                <i className="ri-twitter-x-fill"></i>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  borderRadius: "100%",
                  width: "28px",
                  height: "28px",
                  lineHeight: "28px",
                  color: "#fff",
                  background: "#007ab9",
                }}
              >
                <i className="ri-linkedin-fill"></i>
              </a>

              <a
                href="mailto:micheal@gmail.com"
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  borderRadius: "100%",
                  width: "28px",
                  height: "28px",
                  lineHeight: "28px",
                  color: "#fff",
                  background: "#2196f3",
                }}
              >
                <i className="ri-mail-fill"></i>
              </a>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default ProfileIntro;
