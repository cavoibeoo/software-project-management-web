"use client";

import React from "react";
import Image from "next/image";
import {
  Grid,
  Card,
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  Pagination,
} from "@mui/material";
import Link from "next/link";

const EventsGrid: React.FC = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "12px", xl: "25px" },
            }}
            className="rmui-card"
          >
            <Box position="relative">
              <Link
                href="/events/details"
                className="border-radius"
                style={{
                  display: "block",
                }}
              >
                <Image
                  src="/images/events/event1.jpg"
                  className="border-radius"
                  alt="event-image"
                  width={700}
                  height={467}
                />
              </Link>

              <Box
                className="text-white po-right-0"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  bgcolor: "primary.main",
                  position: "absolute",
                  top: "0px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "7px",
                  fontSize: "16px",
                }}
              >
                $120
              </Box>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  mb: "5px",
                  fontWeight: "700",
                }}
              >
                <Link
                  href="/events/details"
                  className="text-black hover-text-color"
                >
                  Annual Conference 2024
                </Link>
              </Typography>

              <Typography mb="15px" lineHeight="1.8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Typography>

              <AvatarGroup
                max={4}
                sx={{
                  justifyContent: "flex-end",
                  mb: "20px",

                  "& .MuiAvatar-root": {
                    border: "2px solid #fff",
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    width: "35px",
                    height: "35px",
                  },
                  "& .MuiAvatarGroup-avatar": {
                    backgroundColor: "#605dff", // Custom background color for the total avatar
                    color: "#fff", // Custom color for the text
                    fontSize: "10px",
                  },
                }}
              >
                <Avatar alt="Remy Sharp" src="/images/users/user6.jpg" />
                <Avatar alt="Travis Howard" src="/images/users/user7.jpg" />
                <Avatar alt="Agnes Walker" src="/images/users/user8.jpg" />
                <Avatar alt="Trevor Le" src="/images/users/user9.jpg" />
                <Avatar alt="Trevor Le" src="/images/users/user10.jpg" />
              </AvatarGroup>

              <Box className="progress">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "10px",
                  }}
                >
                  <Typography>Seat Booked</Typography>

                  <Typography fontWeight={600} className="text-black">
                    1156
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#ecf0ff",
                    width: "100%",
                    height: "4px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: `primary.main`,
                      width: `85%`,
                      height: "4px",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "12px", xl: "25px" },
            }}
            className="rmui-card"
          >
            <Box position="relative">
              <Link
                href="/events/details"
                className="border-radius"
                style={{
                  display: "block",
                }}
              >
                <Image
                  src="/images/events/event2.jpg"
                  className="border-radius"
                  alt="event-image"
                  width={700}
                  height={467}
                />
              </Link>

              <Box
                className="text-white po-right-0"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  bgcolor: "primary.main",
                  position: "absolute",
                  top: "0px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "7px",
                  fontSize: "16px",
                }}
              >
                $59
              </Box>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  mb: "5px",
                  fontWeight: "700",
                }}
              >
                <Link
                  href="/events/details"
                  className="text-black hover-text-color"
                >
                  Leadership Summit 2024
                </Link>
              </Typography>

              <Typography mb="15px" lineHeight="1.8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Typography>

              <AvatarGroup
                max={4}
                sx={{
                  justifyContent: "flex-end",
                  mb: "20px",

                  "& .MuiAvatar-root": {
                    border: "2px solid #fff",
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    width: "35px",
                    height: "35px",
                  },
                  "& .MuiAvatarGroup-avatar": {
                    backgroundColor: "#605dff", // Custom background color for the total avatar
                    color: "#fff", // Custom color for the text
                    fontSize: "10px",
                  },
                }}
              >
                <Avatar alt="Remy Sharp" src="/images/users/user11.jpg" />
                <Avatar alt="Travis Howard" src="/images/users/user12.jpg" />
                <Avatar alt="Agnes Walker" src="/images/users/user13.jpg" />
                <Avatar alt="Trevor Le" src="/images/users/user14.jpg" />
              </AvatarGroup>

              <Box className="progress">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "10px",
                  }}
                >
                  <Typography>Seat Booked</Typography>

                  <Typography fontWeight={600} className="text-black">
                    556
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#ecf0ff",
                    width: "100%",
                    height: "4px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: `primary.main`,
                      width: `24%`,
                      height: "4px",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "12px", xl: "25px" },
            }}
            className="rmui-card"
          >
            <Box position="relative">
              <Link
                href="/events/details"
                className="border-radius"
                style={{
                  display: "block",
                }}
              >
                <Image
                  src="/images/events/event3.jpg"
                  className="border-radius"
                  alt="event-image"
                  width={700}
                  height={467}
                />
              </Link>

              <Box
                className="text-white po-right-0"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  bgcolor: "primary.main",
                  position: "absolute",
                  top: "0px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "7px",
                  fontSize: "16px",
                }}
              >
                $123
              </Box>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  mb: "5px",
                  fontWeight: "700",
                }}
              >
                <Link
                  href="/events/details"
                  className="text-black hover-text-color"
                >
                  Product Launch Webinar
                </Link>
              </Typography>

              <Typography mb="15px" lineHeight="1.8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Typography>

              <AvatarGroup
                max={4}
                sx={{
                  justifyContent: "flex-end",
                  mb: "20px",

                  "& .MuiAvatar-root": {
                    border: "2px solid #fff",
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    width: "35px",
                    height: "35px",
                  },
                  "& .MuiAvatarGroup-avatar": {
                    backgroundColor: "#605dff", // Custom background color for the total avatar
                    color: "#fff", // Custom color for the text
                    fontSize: "10px",
                  },
                }}
              >
                <Avatar alt="Remy Sharp" src="/images/users/user15.jpg" />
                <Avatar alt="Travis Howard" src="/images/users/user16.jpg" />
                <Avatar alt="Agnes Walker" src="/images/users/user17.jpg" />
              </AvatarGroup>

              <Box className="progress">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "10px",
                  }}
                >
                  <Typography>Seat Booked</Typography>

                  <Typography fontWeight={600} className="text-black">
                    356
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#ecf0ff",
                    width: "100%",
                    height: "4px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: `primary.main`,
                      width: `65%`,
                      height: "4px",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "12px", xl: "25px" },
            }}
            className="rmui-card"
          >
            <Box position="relative">
              <Link
                href="/events/details"
                className="border-radius"
                style={{
                  display: "block",
                }}
              >
                <Image
                  src="/images/events/event4.jpg"
                  className="border-radius"
                  alt="event-image"
                  width={700}
                  height={467}
                />
              </Link>

              <Box
                className="text-white po-right-0"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  bgcolor: "primary.main",
                  position: "absolute",
                  top: "0px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "7px",
                  fontSize: "16px",
                }}
              >
                $99
              </Box>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  mb: "5px",
                  fontWeight: "700",
                }}
              >
                <Link
                  href="/events/details"
                  className="text-black hover-text-color"
                >
                  AI in Healthcare Symposium
                </Link>
              </Typography>

              <Typography mb="15px" lineHeight="1.8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Typography>

              <AvatarGroup
                max={4}
                sx={{
                  justifyContent: "flex-end",
                  mb: "20px",

                  "& .MuiAvatar-root": {
                    border: "2px solid #fff",
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    width: "35px",
                    height: "35px",
                  },
                  "& .MuiAvatarGroup-avatar": {
                    backgroundColor: "#605dff", // Custom background color for the total avatar
                    color: "#fff", // Custom color for the text
                    fontSize: "10px",
                  },
                }}
              >
                <Avatar alt="Remy Sharp" src="/images/users/user18.jpg" />
                <Avatar alt="Travis Howard" src="/images/users/user19.jpg" />
                <Avatar alt="Agnes Walker" src="/images/users/user20.jpg" />
              </AvatarGroup>

              <Box className="progress">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "10px",
                  }}
                >
                  <Typography>Seat Booked</Typography>

                  <Typography fontWeight={600} className="text-black">
                    3226
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#ecf0ff",
                    width: "100%",
                    height: "4px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: `primary.main`,
                      width: `82%`,
                      height: "4px",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "12px", xl: "25px" },
            }}
            className="rmui-card"
          >
            <Box position="relative">
              <Link
                href="/events/details"
                className="border-radius"
                style={{
                  display: "block",
                }}
              >
                <Image
                  src="/images/events/event5.jpg"
                  className="border-radius"
                  alt="event-image"
                  width={700}
                  height={467}
                />
              </Link>

              <Box
                className="text-white po-right-0"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  bgcolor: "primary.main",
                  position: "absolute",
                  top: "0px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "7px",
                  fontSize: "16px",
                }}
              >
                $35
              </Box>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  mb: "5px",
                  fontWeight: "700",
                }}
              >
                <Link
                  href="/events/details"
                  className="text-black hover-text-color"
                >
                  Tech Summit 2024
                </Link>
              </Typography>

              <Typography mb="15px" lineHeight="1.8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Typography>

              <AvatarGroup
                max={4}
                sx={{
                  justifyContent: "flex-end",
                  mb: "20px",

                  "& .MuiAvatar-root": {
                    border: "2px solid #fff",
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    width: "35px",
                    height: "35px",
                  },
                  "& .MuiAvatarGroup-avatar": {
                    backgroundColor: "#605dff", // Custom background color for the total avatar
                    color: "#fff", // Custom color for the text
                    fontSize: "10px",
                  },
                }}
              >
                <Avatar alt="Remy Sharp" src="/images/users/user21.jpg" />
                <Avatar alt="Travis Howard" src="/images/users/user22.jpg" />
                <Avatar alt="Agnes Walker" src="/images/users/user23.jpg" />
                <Avatar alt="Trevor Le" src="/images/users/user24.jpg" />
                <Avatar alt="Trevor Le" src="/images/users/user25.jpg" />
              </AvatarGroup>

              <Box className="progress">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "10px",
                  }}
                >
                  <Typography>Seat Booked</Typography>

                  <Typography fontWeight={600} className="text-black">
                    4109
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#ecf0ff",
                    width: "100%",
                    height: "4px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: `primary.main`,
                      width: `48%`,
                      height: "4px",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "12px", xl: "25px" },
            }}
            className="rmui-card"
          >
            <Box position="relative">
              <Link
                href="/events/details"
                className="border-radius"
                style={{
                  display: "block",
                }}
              >
                <Image
                  src="/images/events/event6.jpg"
                  className="border-radius"
                  alt="event-image"
                  width={700}
                  height={467}
                />
              </Link>

              <Box
                className="text-white po-right-0"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  bgcolor: "primary.main",
                  position: "absolute",
                  top: "0px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "7px",
                  fontSize: "16px",
                }}
              >
                $76
              </Box>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  mb: "5px",
                  fontWeight: "700",
                }}
              >
                <Link
                  href="/events/details"
                  className="text-black hover-text-color"
                >
                  Startup Pitch Day
                </Link>
              </Typography>

              <Typography mb="15px" lineHeight="1.8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Typography>

              <AvatarGroup
                max={4}
                sx={{
                  justifyContent: "flex-end",
                  mb: "20px",

                  "& .MuiAvatar-root": {
                    border: "2px solid #fff",
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    width: "35px",
                    height: "35px",
                  },
                  "& .MuiAvatarGroup-avatar": {
                    backgroundColor: "#605dff", // Custom background color for the total avatar
                    color: "#fff", // Custom color for the text
                    fontSize: "10px",
                  },
                }}
              >
                <Avatar alt="Remy Sharp" src="/images/users/user26.jpg" />
                <Avatar alt="Travis Howard" src="/images/users/user27.jpg" />
              </AvatarGroup>

              <Box className="progress">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "10px",
                  }}
                >
                  <Typography>Seat Booked</Typography>

                  <Typography fontWeight={600} className="text-black">
                    432
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#ecf0ff",
                    width: "100%",
                    height: "4px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: `primary.main`,
                      width: `37%`,
                      height: "4px",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "12px", xl: "25px" },
            }}
            className="rmui-card"
          >
            <Box position="relative">
              <Link
                href="/events/details"
                className="border-radius"
                style={{
                  display: "block",
                }}
              >
                <Image
                  src="/images/events/event7.jpg"
                  className="border-radius"
                  alt="event-image"
                  width={700}
                  height={467}
                />
              </Link>

              <Box
                className="text-white po-right-0"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  bgcolor: "primary.main",
                  position: "absolute",
                  top: "0px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "7px",
                  fontSize: "16px",
                }}
              >
                $30
              </Box>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  mb: "5px",
                  fontWeight: "700",
                }}
              >
                <Link
                  href="/events/details"
                  className="text-black hover-text-color"
                >
                  Workshop: Digital Marketing
                </Link>
              </Typography>

              <Typography mb="15px" lineHeight="1.8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Typography>

              <AvatarGroup
                max={4}
                sx={{
                  justifyContent: "flex-end",
                  mb: "20px",

                  "& .MuiAvatar-root": {
                    border: "2px solid #fff",
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    width: "35px",
                    height: "35px",
                  },
                  "& .MuiAvatarGroup-avatar": {
                    backgroundColor: "#605dff", // Custom background color for the total avatar
                    color: "#fff", // Custom color for the text
                    fontSize: "10px",
                  },
                }}
              >
                <Avatar alt="Remy Sharp" src="/images/users/user28.jpg" />
                <Avatar alt="Travis Howard" src="/images/users/user29.jpg" />
                <Avatar alt="Agnes Walker" src="/images/users/user30.jpg" />
              </AvatarGroup>

              <Box className="progress">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "10px",
                  }}
                >
                  <Typography>Seat Booked</Typography>

                  <Typography fontWeight={600} className="text-black">
                    1728
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#ecf0ff",
                    width: "100%",
                    height: "4px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: `primary.main`,
                      width: `65%`,
                      height: "4px",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "12px", xl: "25px" },
            }}
            className="rmui-card"
          >
            <Box position="relative">
              <Link
                href="/events/details"
                className="border-radius"
                style={{
                  display: "block",
                }}
              >
                <Image
                  src="/images/events/event8.jpg"
                  className="border-radius"
                  alt="event-image"
                  width={700}
                  height={467}
                />
              </Link>

              <Box
                className="text-white po-right-0"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  bgcolor: "primary.main",
                  position: "absolute",
                  top: "0px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "7px",
                  fontSize: "16px",
                }}
              >
                $87
              </Box>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  mb: "5px",
                  fontWeight: "700",
                }}
              >
                <Link
                  href="/events/details"
                  className="text-black hover-text-color"
                >
                  Charity Gala Dinner
                </Link>
              </Typography>

              <Typography mb="15px" lineHeight="1.8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Typography>

              <AvatarGroup
                max={4}
                sx={{
                  justifyContent: "flex-end",
                  mb: "20px",

                  "& .MuiAvatar-root": {
                    border: "2px solid #fff",
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    width: "35px",
                    height: "35px",
                  },
                  "& .MuiAvatarGroup-avatar": {
                    backgroundColor: "#605dff", // Custom background color for the total avatar
                    color: "#fff", // Custom color for the text
                    fontSize: "10px",
                  },
                }}
              >
                <Avatar alt="Remy Sharp" src="/images/users/user1.jpg" />
                <Avatar alt="Travis Howard" src="/images/users/user2.jpg" />
                <Avatar alt="Agnes Walker" src="/images/users/user3.jpg" />
                <Avatar alt="Trevor Le" src="/images/users/user4.jpg" />
                <Avatar alt="Trevor Le" src="/images/users/user5.jpg" />
              </AvatarGroup>

              <Box className="progress">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "10px",
                  }}
                >
                  <Typography>Seat Booked</Typography>

                  <Typography fontWeight={600} className="text-black">
                    1306
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#ecf0ff",
                    width: "100%",
                    height: "4px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: `primary.main`,
                      width: `80%`,
                      height: "4px",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "12px", xl: "25px" },
            }}
            className="rmui-card"
          >
            <Box position="relative">
              <Link
                href="/events/details"
                className="border-radius"
                style={{
                  display: "block",
                }}
              >
                <Image
                  src="/images/events/event9.jpg"
                  className="border-radius"
                  alt="event-image"
                  width={700}
                  height={467}
                />
              </Link>

              <Box
                className="text-white po-right-0"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  bgcolor: "primary.main",
                  position: "absolute",
                  top: "0px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "7px",
                  fontSize: "16px",
                }}
              >
                $50
              </Box>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  mb: "5px",
                  fontWeight: "700",
                }}
              >
                <Link
                  href="/events/details"
                  className="text-black hover-text-color"
                >
                  Web Development Seminar
                </Link>
              </Typography>

              <Typography mb="15px" lineHeight="1.8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Typography>

              <AvatarGroup
                max={4}
                sx={{
                  justifyContent: "flex-end",
                  mb: "20px",

                  "& .MuiAvatar-root": {
                    border: "2px solid #fff",
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    width: "35px",
                    height: "35px",
                  },
                  "& .MuiAvatarGroup-avatar": {
                    backgroundColor: "#605dff", // Custom background color for the total avatar
                    color: "#fff", // Custom color for the text
                    fontSize: "10px",
                  },
                }}
              >
                <Avatar alt="Remy Sharp" src="/images/users/user6.jpg" />
                <Avatar alt="Travis Howard" src="/images/users/user7.jpg" />
                <Avatar alt="Agnes Walker" src="/images/users/user8.jpg" />
                <Avatar alt="Trevor Le" src="/images/users/user9.jpg" />
                <Avatar alt="Trevor Le" src="/images/users/user10.jpg" />
              </AvatarGroup>

              <Box className="progress">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "10px",
                  }}
                >
                  <Typography>Seat Booked</Typography>

                  <Typography fontWeight={600} className="text-black">
                    2756
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#ecf0ff",
                    width: "100%",
                    height: "4px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: `primary.main`,
                      width: `78%`,
                      height: "4px",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "12px", xl: "25px" },
            }}
            className="rmui-card"
          >
            <Box position="relative">
              <Link
                href="/events/details"
                className="border-radius"
                style={{
                  display: "block",
                }}
              >
                <Image
                  src="/images/events/event10.jpg"
                  className="border-radius"
                  alt="event-image"
                  width={700}
                  height={467}
                />
              </Link>

              <Box
                className="text-white po-right-0"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  bgcolor: "primary.main",
                  position: "absolute",
                  top: "0px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "7px",
                  fontSize: "16px",
                }}
              >
                $89
              </Box>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  mb: "5px",
                  fontWeight: "700",
                }}
              >
                <Link
                  href="/events/details"
                  className="text-black hover-text-color"
                >
                  Networking Mixer
                </Link>
              </Typography>

              <Typography mb="15px" lineHeight="1.8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Typography>

              <AvatarGroup
                max={4}
                sx={{
                  justifyContent: "flex-end",
                  mb: "20px",

                  "& .MuiAvatar-root": {
                    border: "2px solid #fff",
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    width: "35px",
                    height: "35px",
                  },
                  "& .MuiAvatarGroup-avatar": {
                    backgroundColor: "#605dff", // Custom background color for the total avatar
                    color: "#fff", // Custom color for the text
                    fontSize: "10px",
                  },
                }}
              >
                <Avatar alt="Remy Sharp" src="/images/users/user11.jpg" />
                <Avatar alt="Travis Howard" src="/images/users/user7.jpg" />
                <Avatar alt="Agnes Walker" src="/images/users/user12.jpg" />
                <Avatar alt="Trevor Le" src="/images/users/user9.jpg" />
                <Avatar alt="Trevor Le" src="/images/users/user15.jpg" />
              </AvatarGroup>

              <Box className="progress">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "10px",
                  }}
                >
                  <Typography>Seat Booked</Typography>

                  <Typography fontWeight={600} className="text-black">
                    1467
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#ecf0ff",
                    width: "100%",
                    height: "4px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: `primary.main`,
                      width: `30%`,
                      height: "4px",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "12px", xl: "25px" },
            }}
            className="rmui-card"
          >
            <Box position="relative">
              <Link
                href="/events/details"
                className="border-radius"
                style={{
                  display: "block",
                }}
              >
                <Image
                  src="/images/events/event1.jpg"
                  className="border-radius"
                  alt="event-image"
                  width={700}
                  height={467}
                />
              </Link>

              <Box
                className="text-white po-right-0"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  bgcolor: "primary.main",
                  position: "absolute",
                  top: "0px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "7px",
                  fontSize: "16px",
                }}
              >
                $105
              </Box>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  mb: "5px",
                  fontWeight: "700",
                }}
              >
                <Link
                  href="/events/details"
                  className="text-black hover-text-color"
                >
                  Annual Conference 2024
                </Link>
              </Typography>

              <Typography mb="15px" lineHeight="1.8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Typography>

              <AvatarGroup
                max={4}
                sx={{
                  justifyContent: "flex-end",
                  mb: "20px",

                  "& .MuiAvatar-root": {
                    border: "2px solid #fff",
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    width: "35px",
                    height: "35px",
                  },
                  "& .MuiAvatarGroup-avatar": {
                    backgroundColor: "#605dff", // Custom background color for the total avatar
                    color: "#fff", // Custom color for the text
                    fontSize: "10px",
                  },
                }}
              >
                <Avatar alt="Remy Sharp" src="/images/users/user16.jpg" />
                <Avatar alt="Travis Howard" src="/images/users/user17.jpg" />
                <Avatar alt="Agnes Walker" src="/images/users/user18.jpg" />
                <Avatar alt="Trevor Le" src="/images/users/user9.jpg" />
                <Avatar alt="Trevor Le" src="/images/users/user10.jpg" />
              </AvatarGroup>

              <Box className="progress">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "10px",
                  }}
                >
                  <Typography>Seat Booked</Typography>

                  <Typography fontWeight={600} className="text-black">
                    799
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#ecf0ff",
                    width: "100%",
                    height: "4px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: `primary.main`,
                      width: `90%`,
                      height: "4px",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "12px", xl: "25px" },
            }}
            className="rmui-card"
          >
            <Box position="relative">
              <Link
                href="/events/details"
                className="border-radius"
                style={{
                  display: "block",
                }}
              >
                <Image
                  src="/images/events/event1.jpg"
                  className="border-radius"
                  alt="event-image"
                  width={700}
                  height={467}
                />
              </Link>

              <Box
                className="text-white po-right-0"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  bgcolor: "primary.main",
                  position: "absolute",
                  top: "0px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "7px",
                  fontSize: "16px",
                }}
              >
                $120
              </Box>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  mb: "5px",
                  fontWeight: "700",
                }}
              >
                <Link
                  href="/events/details"
                  className="text-black hover-text-color"
                >
                  Leadership Summit 2024
                </Link>
              </Typography>

              <Typography mb="15px" lineHeight="1.8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Typography>

              <AvatarGroup
                max={4}
                sx={{
                  justifyContent: "flex-end",
                  mb: "20px",

                  "& .MuiAvatar-root": {
                    border: "2px solid #fff",
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    width: "35px",
                    height: "35px",
                  },
                  "& .MuiAvatarGroup-avatar": {
                    backgroundColor: "#605dff", // Custom background color for the total avatar
                    color: "#fff", // Custom color for the text
                    fontSize: "10px",
                  },
                }}
              >
                <Avatar alt="Remy Sharp" src="/images/users/user6.jpg" />
              </AvatarGroup>

              <Box className="progress">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "10px",
                  }}
                >
                  <Typography>Seat Booked</Typography>

                  <Typography fontWeight={600} className="text-black">
                    3241
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#ecf0ff",
                    width: "100%",
                    height: "4px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: `primary.main`,
                      width: `85%`,
                      height: "4px",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Pagination */}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box
            className="pagination-card bg-white"
            sx={{
              mb: "25px",
              padding: "25px",
              borderRadius: "7px",
            }}
          >
            <Box
              sx={{
                display: { sm: "flex" },
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ mb: { xs: "10px", sm: "0" } }}>
                Showing 9 of 36 results
              </Typography>

              <Pagination
                count={4}
                variant="outlined"
                shape="rounded"
                color="primary"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default EventsGrid;
