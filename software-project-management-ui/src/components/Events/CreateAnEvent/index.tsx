"use client";

import React, { useState } from "react";
import {
  Grid,
  Card,
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Button,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
});

const CreateAnEvent: React.FC = () => {
  const [ticketType, setTicketType] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");
  const [selectTopic, setSelectTopic] = useState<string>("");
  const [eventCountry, setEventCountry] = useState<string>("");
  const [eventState, setEventState] = useState<string>("");
  const [eventCity, setEventCity] = useState<string>("");
  const [eventTime, setEventTime] = useState<string>("");

  const handleTicketTypeChange = (event: SelectChangeEvent) => {
    setTicketType(event.target.value as string);
  };

  const handleEventTypeChange = (event: SelectChangeEvent) => {
    setEventType(event.target.value as string);
  };

  const handleSelectTopicChange = (event: SelectChangeEvent) => {
    setSelectTopic(event.target.value as string);
  };

  const handleEventCountryChange = (event: SelectChangeEvent) => {
    setEventCountry(event.target.value as string);
  };

  const handleEventStateChange = (event: SelectChangeEvent) => {
    setEventState(event.target.value as string);
  };

  const handleEventCityChange = (event: SelectChangeEvent) => {
    setEventCity(event.target.value as string);
  };

  const handleEventTimeChange = (event: SelectChangeEvent) => {
    setEventTime(event.target.value as string);
  };

  return (
    <>
      <Box component="form">
        <Card
          sx={{
            boxShadow: "none",
            borderRadius: "7px",
            mb: "25px",
            padding: { xs: "18px", sm: "20px", lg: "25px" },
          }}
          className="rmui-card"
        >
          <Grid
            container
            spacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          >
            <Grid item xs={12} sm={6} lg={6} xl={4}>
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
                    Event Name
                  </Typography>

                  <TextField
                    label="Enter event name"
                    placeholder="E.g. Annual Conference 2024"
                    variant="filled"
                    id="eventName"
                    name="eventName"
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

            <Grid item xs={12} sm={6} lg={6} xl={4}>
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
                  Ticket Type
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="ticket-type-label">Select</InputLabel>
                  <Select
                    labelId="ticket-type-label"
                    id="product-type"
                    value={ticketType}
                    label="Select"
                    onChange={handleTicketTypeChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Free</MenuItem>
                    <MenuItem value={1}>Paid</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={6} xl={4}>
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
                    Ticket Price
                  </Typography>

                  <TextField
                    label="Enter ticket price"
                    placeholder="E.g. $20.00"
                    variant="filled"
                    id="ticketPrice"
                    name="ticketPrice"
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

            <Grid item xs={12} sm={6} lg={6} xl={4}>
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
                  Event Type
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="event-type-label">Select</InputLabel>
                  <Select
                    labelId="event-type-label"
                    id="event-type"
                    value={eventType}
                    label="Select"
                    onChange={handleEventTypeChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Online</MenuItem>
                    <MenuItem value={1}>Offline</MenuItem>
                    <MenuItem value={2}>Both</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={6} xl={4}>
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
                  Select Topic
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="select-topic-label">Select</InputLabel>
                  <Select
                    labelId="select-topic-label"
                    id="select-topic"
                    value={selectTopic}
                    label="Select"
                    onChange={handleSelectTopicChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Pepper Festival</MenuItem>
                    <MenuItem value={1}>A Day of Comedy</MenuItem>
                    <MenuItem value={2}>Replicate Oktoberfest</MenuItem>
                    <MenuItem value={3}>Kite Flying Festival</MenuItem>
                    <MenuItem value={4}>Music Concert</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={6} xl={4}>
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
                    Event Vanue
                  </Typography>

                  <TextField
                    label="Enter event vanue"
                    placeholder="E.g. 2750 Quadra Street Victoria Road"
                    variant="filled"
                    id="eventVanue"
                    name="eventVanue"
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

            <Grid item xs={12} sm={6} lg={6} xl={4}>
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
                  Event Country
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="select-topic-label">Select</InputLabel>
                  <Select
                    labelId="select-topic-label"
                    id="select-topic"
                    value={eventCountry}
                    label="Select"
                    onChange={handleEventCountryChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Switzerland</MenuItem>
                    <MenuItem value={1}>New Zealand</MenuItem>
                    <MenuItem value={2}>Germany</MenuItem>
                    <MenuItem value={3}>United States</MenuItem>
                    <MenuItem value={4}>Japan</MenuItem>
                    <MenuItem value={5}>Netherlands</MenuItem>
                    <MenuItem value={6}>Sweden</MenuItem>
                    <MenuItem value={7}>Canada</MenuItem>
                    <MenuItem value={8}>United Kingdom</MenuItem>
                    <MenuItem value={9}>Australia</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={6} xl={4}>
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
                  Event State
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="select-topic-label">Select</InputLabel>
                  <Select
                    labelId="select-topic-label"
                    id="select-topic"
                    value={eventState}
                    label="Select"
                    onChange={handleEventStateChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Florida</MenuItem>
                    <MenuItem value={1}>Wisconsin</MenuItem>
                    <MenuItem value={2}>Washington</MenuItem>
                    <MenuItem value={3}>Nebraska</MenuItem>
                    <MenuItem value={4}>Minnesota</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={6} xl={4}>
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
                  Event City
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="select-topic-label">Select</InputLabel>
                  <Select
                    labelId="select-topic-label"
                    id="select-topic"
                    value={eventCity}
                    label="Select"
                    onChange={handleEventCityChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>New York</MenuItem>
                    <MenuItem value={1}>Tokyo</MenuItem>
                    <MenuItem value={2}>London</MenuItem>
                    <MenuItem value={3}>Amsterdam</MenuItem>
                    <MenuItem value={4}>Paris</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={6} xl={4}>
              <Typography
                component="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
                className="text-black"
              >
                Event Start Date
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
            </Grid>

            <Grid item xs={12} sm={6} lg={6} xl={4}>
              <Typography
                component="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
                className="text-black"
              >
                Event End Date
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
            </Grid>

            <Grid item xs={12} sm={6} lg={6} xl={4}>
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
                  Event Time
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="select-topic-label">Select</InputLabel>
                  <Select
                    labelId="select-topic-label"
                    id="select-topic"
                    value={eventTime}
                    label="Select"
                    onChange={handleEventTimeChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>9AM - 10AM</MenuItem>
                    <MenuItem value={1}>11AM - 12PM</MenuItem>
                    <MenuItem value={2}>2PM - 4PM</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={6} xl={4}>
              <Typography
                component="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
                className="text-black"
              >
                Registration Deadline
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
            </Grid>

            <Grid item xs={12} sm={6} lg={6} xl={4}>
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
                    Event Organizers
                  </Typography>

                  <TextField
                    label="Enter event organizers name"
                    placeholder="E.g. Hand Watch"
                    variant="filled"
                    id="eventOrganizers"
                    name="eventOrganizers"
                    required
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

            <Grid item xs={12} sm={12} lg={12} xl={4}>
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
                    Event Sponsors
                  </Typography>

                  <TextField
                    label="Enter event sponsors name"
                    placeholder="E.g. Hand Watch"
                    variant="filled"
                    id="eventSponsors"
                    name="eventSponsors"
                    required
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

            <Grid item xs={12} sm={12} lg={12} xl={12}>
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
                  Event Details
                </Typography>

                <RichTextEditor
                  id="rte"
                  controls={[
                    ["bold", "italic", "underline", "link", "image"],
                    ["unorderedList", "h1", "h2", "h3"],
                    ["sup", "sub"],
                    ["alignLeft", "alignCenter", "alignRight"],
                  ]}
                  style={{
                    minHeight: "200px",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} lg={12} xl={12}>
              <Typography
                component="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
                className="text-black"
              >
                Event Image
              </Typography>

              <TextField
                autoComplete="uploadFile"
                name="uploadFile"
                required
                fullWidth
                id="uploadFile"
                type="file"
                autoFocus
                inputProps={{
                  multiple: true,
                }}
                sx={{
                  "& fieldset": {
                    border: "1px solid #D5D9E2",
                    borderRadius: "7px",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12} lg={12} xl={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "10px", sm: "20px" },
                }}
              >
                <Button
                  type="submit"
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
                  Cancel
                </Button>

                <Button
                  type="submit"
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
                  <i className="material-symbols-outlined">add</i>{" "}
                  Create/Publish
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default CreateAnEvent;
