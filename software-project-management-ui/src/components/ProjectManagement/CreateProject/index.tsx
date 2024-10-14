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

const CreateProject: React.FC = () => {
  const [priorityStatus, setPriorityStatus] = useState<string>("");
  const [categories, setCategories] = useState<string>("");
  const [projectManager, setProjectManager] = useState<string>("");
  const [teamMembers, setTeamMembers] = useState<string>("");
  const [projectTags, setProjectTags] = useState<string>("");

  const handlePriorityStatusChange = (event: SelectChangeEvent) => {
    setPriorityStatus(event.target.value as string);
  };

  const handleCategoriesChange = (event: SelectChangeEvent) => {
    setCategories(event.target.value as string);
  };

  const handleProjectManagerChange = (event: SelectChangeEvent) => {
    setProjectManager(event.target.value as string);
  };

  const handleTeamMembersChange = (event: SelectChangeEvent) => {
    setTeamMembers(event.target.value as string);
  };

  const handleProjectTagsChange = (event: SelectChangeEvent) => {
    setProjectTags(event.target.value as string);
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
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
                    Project Name
                  </Typography>

                  <TextField
                    label="Enter project name"
                    placeholder="E.g. Project CyberSphere"
                    variant="filled"
                    id="projectName"
                    name="projectName"
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

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
                    Project ID
                  </Typography>

                  <TextField
                    label="Enter project ID"
                    placeholder="E.g. #854"
                    variant="filled"
                    id="projectID"
                    name="projectID"
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

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                  Product Description
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

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
                    Budget
                  </Typography>

                  <TextField
                    label="Enter budget"
                    placeholder="E.g. $90"
                    variant="filled"
                    id="budget"
                    name="budget"
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

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
                  Priority Status
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="priority-status-label">Select</InputLabel>
                  <Select
                    labelId="priority-status-label"
                    id="priorityStatus"
                    value={priorityStatus}
                    label="Select"
                    onChange={handlePriorityStatusChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>In Progress</MenuItem>
                    <MenuItem value={1}>Pending</MenuItem>
                    <MenuItem value={2}>Completed</MenuItem>
                    <MenuItem value={3}>Not Started</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
                  Categories
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="brand-name-label">Select</InputLabel>
                  <Select
                    labelId="brand-name-label"
                    id="brand-name"
                    value={categories}
                    label="Select"
                    onChange={handleCategoriesChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Book</MenuItem>
                    <MenuItem value={1}>Watch</MenuItem>
                    <MenuItem value={2}>Electronics</MenuItem>
                    <MenuItem value={3}>Sports</MenuItem>
                    <MenuItem value={4}>Fashion</MenuItem>
                    <MenuItem value={5}>Jewellery</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
                  Project Manager
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="brand-name-label">Select</InputLabel>
                  <Select
                    labelId="brand-name-label"
                    id="brand-name"
                    value={projectManager}
                    label="Select"
                    onChange={handleProjectManagerChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Walter Frazier</MenuItem>
                    <MenuItem value={1}>Kimberly Anderson</MenuItem>
                    <MenuItem value={2}>Roscoe Guerrero</MenuItem>
                    <MenuItem value={3}>Robert Stewart</MenuItem>
                    <MenuItem value={4}>Dustin Fritch</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
                  Team Members
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="brand-name-label">Select</InputLabel>
                  <Select
                    labelId="brand-name-label"
                    id="brand-name"
                    value={teamMembers}
                    label="Select"
                    onChange={handleTeamMembersChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Sarah Johnson</MenuItem>
                    <MenuItem value={1}>Michael Smith</MenuItem>
                    <MenuItem value={2}>Emily Brown</MenuItem>
                    <MenuItem value={3}>Jason Lee</MenuItem>
                    <MenuItem value={4}>Ashley Davis</MenuItem>
                    <MenuItem value={5}>Mark Thompson</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
                  Project Tags
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="brand-name-label">Select</InputLabel>
                  <Select
                    labelId="brand-name-label"
                    id="brand-name"
                    value={projectTags}
                    label="Select"
                    onChange={handleProjectTagsChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Book</MenuItem>
                    <MenuItem value={1}>Watch</MenuItem>
                    <MenuItem value={2}>Electronics</MenuItem>
                    <MenuItem value={3}>Sports</MenuItem>
                    <MenuItem value={4}>Fashion</MenuItem>
                    <MenuItem value={5}>Jewellery</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typography
                component="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
                className="text-black"
              >
                Project Preview Image
              </Typography>

              <TextField
                autoComplete="projectPreviewImage"
                name="projectPreviewImage"
                required
                fullWidth
                id="projectPreviewImage"
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

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typography
                component="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
                className="text-black"
              >
                Attached File
              </Typography>

              <TextField
                autoComplete="attachedFile"
                name="attachedFile"
                required
                fullWidth
                id="attachedFile"
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

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "10px", sm: "20px" },
                  mb: "25px",
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
                  <i className="material-symbols-outlined">add</i> Create
                  Project
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default CreateProject;
