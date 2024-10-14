"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const UpcomingEvents: React.FC = () => {
  return (
    <>
      <Box className="upcoming-events">
        <Typography
          component="span"
          sx={{ fontWeight: "500", mb: "10px", display: "block" }}
        >
          Upcoming Events:
        </Typography>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                alignItems: "top",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "primary.main",
                  width: "7px",
                  height: "7px",
                  borderRadius: "2px",
                  position: "relative",
                  top: "6px",
                }}
              ></Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600", fontSize: "13px", mb: "3px" }}
                  className="text-black"
                >
                  Pythons Unleashed: A Development Expedition
                </Typography>

                <Typography component="div" fontSize="12px">
                  <Typography component="span" fontSize="12px" color="primary">
                    15 April 2024
                  </Typography>
                  - 12.00 PM - 6.00 PM
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                alignItems: "top",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "primary.main",
                  width: "7px",
                  height: "7px",
                  borderRadius: "2px",
                  position: "relative",
                  top: "6px",
                }}
              ></Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600", fontSize: "13px", mb: "3px" }}
                  className="text-black"
                >
                  Pythons Unleashed: A Development Expedition
                </Typography>

                <Typography component="div" fontSize="12px">
                  <Typography component="span" fontSize="12px" color="primary">
                    15 April 2024
                  </Typography>
                  - 12.00 PM - 6.00 PM
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                alignItems: "top",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "primary.main",
                  width: "7px",
                  height: "7px",
                  borderRadius: "2px",
                  position: "relative",
                  top: "6px",
                }}
              ></Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600", fontSize: "13px", mb: "3px" }}
                  className="text-black"
                >
                  Pythons Unleashed: A Development Expedition
                </Typography>

                <Typography component="div" fontSize="12px">
                  <Typography component="span" fontSize="12px" color="primary">
                    15 April 2024
                  </Typography>
                  - 12.00 PM - 6.00 PM
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default UpcomingEvents;
