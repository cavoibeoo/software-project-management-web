"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Content = () => {
  return (
    <>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Image
            src="/images/vector-map.png"
            alt="vector-map"
            width={270}
            height={160}
          />
        </Box>

        <Box>
          {/* United States */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "10px",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                flexShrink: "0",
              }}
            >
              <Image
                src="/images/flags/usa.svg"
                alt="usa"
                width={32}
                height={32}
              />
            </Box>

            <Box sx={{ flexGrow: "1" }}>
              <Typography component="span" sx={{ fontWeight: "500" }}>
                United States
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
                      bgcolor: "#605dff",
                      width: "85%",
                      height: "4px",
                      borderRadius: "30px",
                    }}
                  ></Box>
                </Box>

                <Typography component="span">85%</Typography>
              </Box>
            </Box>
          </Box>

          {/* Germany */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "10px",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                flexShrink: "0",
              }}
            >
              <Image
                src="/images/flags/germany.svg"
                alt="usa"
                width={32}
                height={32}
              />
            </Box>

            <Box sx={{ flexGrow: "1" }}>
              <Typography component="span" sx={{ fontWeight: "500" }}>
                Germany
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
                      bgcolor: "#605dff",
                      width: "75%",
                      height: "4px",
                      borderRadius: "30px",
                    }}
                  ></Box>
                </Box>

                <Typography component="span">75%</Typography>
              </Box>
            </Box>
          </Box>

          {/* United Kingdom */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "10px",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                flexShrink: "0",
              }}
            >
              <Image
                src="/images/flags/uk.svg"
                alt="usa"
                width={32}
                height={32}
              />
            </Box>

            <Box sx={{ flexGrow: "1" }}>
              <Typography component="span" sx={{ fontWeight: "500" }}>
                United Kingdom
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
                      bgcolor: "#605dff",
                      width: "40%",
                      height: "4px",
                      borderRadius: "30px",
                    }}
                  ></Box>
                </Box>

                <Typography component="span">40%</Typography>
              </Box>
            </Box>
          </Box>

          {/* Canada */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "10px",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                flexShrink: "0",
              }}
            >
              <Image
                src="/images/flags/canada.svg"
                alt="usa"
                width={32}
                height={32}
              />
            </Box>

            <Box sx={{ flexGrow: "1" }}>
              <Typography component="span" sx={{ fontWeight: "500" }}>
                Canada
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
                      bgcolor: "#605dff",
                      width: "10%",
                      height: "4px",
                      borderRadius: "30px",
                    }}
                  ></Box>
                </Box>

                <Typography component="span">10%</Typography>
              </Box>
            </Box>
          </Box>

          {/* Portugal */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "10px",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                flexShrink: "0",
              }}
            >
              <Image
                src="/images/flags/portugal.svg"
                alt="usa"
                width={32}
                height={32}
              />
            </Box>

            <Box sx={{ flexGrow: "1" }}>
              <Typography component="span" sx={{ fontWeight: "500" }}>
                Portugal
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
                      bgcolor: "#605dff",
                      width: "5%",
                      height: "4px",
                      borderRadius: "30px",
                    }}
                  ></Box>
                </Box>

                <Typography component="span">05%</Typography>
              </Box>
            </Box>
          </Box>

          {/* Spain */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "10px",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                flexShrink: "0",
              }}
            >
              <Image
                src="/images/flags/spain.svg"
                alt="usa"
                width={32}
                height={32}
              />
            </Box>

            <Box sx={{ flexGrow: "1" }}>
              <Typography component="span" sx={{ fontWeight: "500" }}>
                Spain
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
                      bgcolor: "#605dff",
                      width: "15%",
                      height: "4px",
                      borderRadius: "30px",
                    }}
                  ></Box>
                </Box>

                <Typography component="span">15%</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Content;
