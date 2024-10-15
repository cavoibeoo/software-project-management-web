"use client";

import * as React from "react";
import { Grid, Card, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import styles from "@/components/Events/EventsDetails.module.css";
import EventInfo from "./EventInfo";
import AboutThisEvent from "./AboutThisEvent";
import Speakers from "./Speakers";

const EventsDetails: React.FC = () => {
  return (
    <>
      <Box sx={{ mb: "25px" }}>
        <Image
          src="/images/events/event-details.jpg"
          className="border-radius"
          alt="event-details-image"
          width={1600}
          height={400}
        />
      </Box>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={12} lg={12} xl={7}>
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
              Event Details
            </Typography>

            <Box>
              <Box className={styles.eventDetailsContent}>
                <Typography variant="h6">Annual Conference 2024</Typography>

                <Typography>
                  The Annual Conference 2024 is a flagship event organized by
                  ABC Corporation. This conference aims to bring together
                  industry leaders, experts, and enthusiasts to discuss the
                  latest trends, innovations, and challenges in our field.
                  Participants can expect insightful keynote sessions, engaging
                  panel discussions, and valuable networking opportunities.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: { md: "flex" },
                  alignItems: "center",
                  gap: { xs: "15px", sm: "30px" },
                  mt: "25px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    mt: { xs: "15px", md: "0" },
                  }}
                >
                  <Box
                    className="bg-f4f6fc"
                    sx={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "100px",
                      textAlign: "center",
                      color: "primary.main",
                    }}
                  >
                    <i
                      className="material-symbols-outlined"
                      style={{
                        fontSize: "35px",
                        lineHeight: "70px",
                      }}
                    >
                      schedule
                    </i>
                  </Box>
                  <Box>
                    <Typography
                      fontWeight={600}
                      mb="5px"
                      className="text-black"
                    >
                      Time
                    </Typography>

                    <Typography>01 Dec 2024, 09:00 AM</Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    mt: { xs: "15px", md: "0" },
                  }}
                >
                  <Box
                    className="bg-f4f6fc"
                    sx={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "100px",
                      textAlign: "center",
                      color: "info.main",
                    }}
                  >
                    <i
                      className="material-symbols-outlined"
                      style={{
                        fontSize: "35px",
                        lineHeight: "70px",
                      }}
                    >
                      place
                    </i>
                  </Box>
                  <Box>
                    <Typography
                      fontWeight={600}
                      mb="5px"
                      className="text-black"
                    >
                      Location
                    </Typography>
                    <Typography>Convention Center</Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    mt: { xs: "15px", md: "0" },
                  }}
                >
                  <Box
                    className="bg-f4f6fc"
                    sx={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "100px",
                      textAlign: "center",
                      color: "error.main",
                    }}
                  >
                    <i
                      className="material-symbols-outlined"
                      style={{
                        fontSize: "35px",
                        lineHeight: "70px",
                      }}
                    >
                      event_seat
                    </i>
                  </Box>
                  <Box>
                    <Typography
                      fontWeight={600}
                      mb="5px"
                      className="text-black"
                    >
                      Event Seat
                    </Typography>
                    <Typography>50</Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: { sm: "flex" },
                  alingItems: "center",
                  gap: "10px",
                  marginTop: "25px",
                  paddingTop: "25px",
                }}
                className="border-top"
              >
                <Button
                  variant="contained"
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: "500",
                    borderRadius: "7px",
                    padding: { sx: "10px 12px", md: "10px 28px" },
                    textTransform: "capitalize",
                    boxShadow: "none",
                    display: "flex",
                    alingItems: "center",
                    gap: "8px",
                    mb: { xs: "10px", sm: "0" },
                    color: "#fff !important",
                  }}
                >
                  <i
                    className="material-symbols-outlined"
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    local_activity
                  </i>
                  Get Ticket
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: "500",
                    borderRadius: "7px",
                    padding: { sx: "10px 12px", md: "10px 28px" },
                    textTransform: "capitalize",
                    boxShadow: "none",
                    display: "flex",
                    alingItems: "center",
                    gap: "8px",
                    mb: { xs: "10px", sm: "0" },
                  }}
                >
                  <i
                    className="material-symbols-outlined"
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    event
                  </i>
                  Add To Calendar
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: "500",
                    borderRadius: "7px",
                    padding: { sx: "10px 12px", md: "10px 28px" },
                    textTransform: "capitalize",
                    boxShadow: "none",
                    display: "flex",
                    alingItems: "center",
                    gap: "8px",
                    mb: { xs: "10px", sm: "0" },
                  }}
                >
                  <i
                    className="material-symbols-outlined"
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    favorite_border
                  </i>
                  5937
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: "500",
                    borderRadius: "7px",
                    padding: { sx: "10px 12px", md: "10px 28px" },
                    textTransform: "capitalize",
                    boxShadow: "none",
                    display: "flex",
                    alingItems: "center",
                    gap: "8px",
                    mb: { xs: "10px", sm: "0" },
                  }}
                >
                  <i
                    className="material-symbols-outlined"
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    share
                  </i>
                  2582
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={5}>
          <EventInfo />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={12} lg={12} xl={6}>
          <AboutThisEvent />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          <Speakers />
        </Grid>
      </Grid>
    </>
  );
};

export default EventsDetails;
