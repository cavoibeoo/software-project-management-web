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
  styled,
} from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
});

const EditCourse: React.FC = () => {
  const [instructor, setInstructor] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  const handleInstructorChange = (event: SelectChangeEvent) => {
    setInstructor(event.target.value as string);
  };

  const handleTagsChange = (event: SelectChangeEvent) => {
    setTags(event.target.value as string);
  };

  // Textarea
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#605DFF",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 7px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: none;

    &:hover {
      border-color: ${blue[900]};
    }

    &:focus {
      border-color: ${blue[900]};
      box-shadow: none;
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );

  return (
    <>
      <Box component="form">
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={8}>
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
                  Add Course
                </Typography>
              </Box>

              <Grid
                container
                spacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
              >
                <Grid item xs={12} md={12} lg={12} xl={12}>
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
                        Title
                      </Typography>

                      <TextField
                        label="Enter title"
                        placeholder="E.g. Cybersecurity Awareness"
                        defaultValue="Cybersecurity Awareness"
                        variant="filled"
                        id="title"
                        name="title"
                        sx={{
                          "& .MuiInputBase-root": {
                            border: "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                            color: "#000",
                            fontWeight: "500",
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

                <Grid item xs={12} md={12} lg={12} xl={12}>
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
                      Description
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

                <Grid item xs={12} md={12} lg={12} xl={12}>
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
                        Price
                      </Typography>

                      <TextField
                        label="Enter price"
                        placeholder="E.g. $90"
                        defaultValue="$90"
                        variant="filled"
                        id="price"
                        name="price"
                        sx={{
                          "& .MuiInputBase-root": {
                            border: "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                            color: "#000",
                            fontWeight: "500",
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

                <Grid item xs={12} md={12} lg={12} xl={6}>
                  <Typography
                    component="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                    className="text-black"
                  >
                    Start Date
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

                <Grid item xs={12} md={12} lg={12} xl={6}>
                  <Typography
                    component="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                    className="text-black"
                  >
                    End Date
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

                <Grid item xs={12} md={12} lg={12} xl={6}>
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
                      Instructor
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="instructor-label">Select</InputLabel>
                      <Select
                        labelId="instructor-label"
                        id="instructor"
                        value={instructor}
                        label="Select"
                        onChange={handleInstructorChange}
                        sx={{
                          "& fieldset": {
                            border: "1px solid #D5D9E2",
                            borderRadius: "7px",
                          },
                        }}
                      >
                        <MenuItem value={0}>Olivia Clark</MenuItem>
                        <MenuItem value={1}>Ava Turner</MenuItem>
                        <MenuItem value={2}>Lucas Morgan</MenuItem>
                        <MenuItem value={3}>Isabella Cooper</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>

                <Grid item xs={12} md={12} lg={12} xl={6}>
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
                      Tags
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="brand-name-label">Select</InputLabel>
                      <Select
                        labelId="brand-name-label"
                        id="brand-name"
                        value={tags}
                        label="Select"
                        onChange={handleTagsChange}
                        sx={{
                          "& fieldset": {
                            border: "1px solid #D5D9E2",
                            borderRadius: "7px",
                          },
                        }}
                      >
                        <MenuItem value={0}>Technology</MenuItem>
                        <MenuItem value={1}>Science</MenuItem>
                        <MenuItem value={2}>Health & Wellness</MenuItem>
                        <MenuItem value={3}>Education</MenuItem>
                        <MenuItem value={4}>Food & Cooking</MenuItem>
                        <MenuItem value={5}>Lifestyle & Fashion</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>

                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <Typography
                    component="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                    className="text-black"
                  >
                    Course Avatar
                  </Typography>

                  <TextField
                    autoComplete="uploadFile"
                    name="uploadFile"
                    required
                    fullWidth
                    id="uploadFile"
                    type="file"
                    autoFocus
                    // inputProps={{
                    //   multiple: true,
                    // }}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
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
                  Course Content
                </Typography>
              </Box>

              <Grid
                container
                spacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
              >
                <Grid item xs={12} md={12} lg={12} xl={12}>
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
                        Lesson Title
                      </Typography>

                      <TextField
                        label="Enter lesson title"
                        placeholder="E.g. Course Overview"
                        defaultValue="Course Overview"
                        variant="filled"
                        id="lessonTitle"
                        name="lessonTitle"
                        sx={{
                          "& .MuiInputBase-root": {
                            border: "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                            color: "#000",
                            fontWeight: "500",
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

                <Grid item xs={12} md={12} lg={12} xl={12}>
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
                        Lesson Time
                      </Typography>

                      <TextField
                        label="Enter lesson time"
                        placeholder="E.g. 05:30"
                        defaultValue="05:30"
                        variant="filled"
                        id="lessonTime"
                        name="lessonTime"
                        sx={{
                          "& .MuiInputBase-root": {
                            border: "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                            color: "#000",
                            fontWeight: "500",
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

                <Grid item xs={12} md={12} lg={12} xl={12}>
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
                        Lesson Description
                      </Typography>

                      <Textarea
                        aria-label="minimum height"
                        minRows={5}
                        placeholder="Type here..."
                      />
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "25px",
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
                    padding: { xs: "8px 14px", sm: "10px 24px" },
                    color: "#fff !important",
                    boxShadow: "none",
                  }}
                >
                  Save Course
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "6px",
                    fontWeight: "500",
                    fontSize: { xs: "13px", sm: "16px" },
                    padding: { xs: "8px 14px", sm: "10px 24px" },
                    color: "#fff !important",
                    boxShadow: "none",
                  }}
                >
                  <i className="material-symbols-outlined">add</i> Add More
                  Field
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EditCourse;
