"use client";

import React, { useState, FormEvent } from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  AvatarGroup,
  Avatar,
  Button,
  DialogTitle,
  Grid,
  FormControl,
  InputLabel,
  TextField,
  Dialog,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Done data
interface TeamMember {
  img: string;
}

interface DoneList {
  title: string;
  description: string;
  daysLeft: string;
  TeamMembers: TeamMember[];
  bgClass: string;
}

const doneListData: DoneList[] = [
  {
    title: "Admin Template",
    description:
      "A brief description of the project, its objectives, and its importance to the organization.",
    daysLeft: "3 days left",
    TeamMembers: [
      {
        img: "/images/users/user6.jpg",
      },
      {
        img: "/images/users/user7.jpg",
      },
      {
        img: "/images/users/user8.jpg",
      },
    ],
    bgClass: "bg-primary-100",
  },
  {
    title: "eCommerce Template",
    description:
      "A brief description of the project, its objectives, and its importance to the organization.",
    daysLeft: "5 days left",
    TeamMembers: [
      {
        img: "/images/users/user9.jpg",
      },
      {
        img: "/images/users/user10.jpg",
      },
    ],
    bgClass: "bg-purple-100",
  },
  {
    title: "Shopify Theme",
    description:
      "A brief description of the project, its objectives, and its importance to the organization.",
    daysLeft: "7 days left",
    TeamMembers: [
      {
        img: "/images/users/user11.jpg",
      },
      {
        img: "/images/users/user12.jpg",
      },
      {
        img: "/images/users/user13.jpg",
      },
    ],
    bgClass: "bg-success-100",
  },
];

// Modal
interface BootstrapDialogTitleProps {
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props: BootstrapDialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
// End Modal

// Select input data
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Sarah Johnson",
  "Michael Smith",
  "Emily Brown",
  "Jason Lee",
  "Ashley Davis",
  "Mark Thompson",
];

const Done: React.FC = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Modal
  const [openModal, setOpenModal] = useState(false);
  const handleClickOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log();
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

  // Select team members
  const [teamMembersName, setTeamMembersName] = useState<string[]>([]);

  const handleChange = (
    event: SelectChangeEvent<typeof teamMembersName>,
    setNames: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const {
      target: { value },
    } = event;
    setNames(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "15px",
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
            Done
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <MoreHorizIcon sx={{ fontSize: "25px" }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,

                sx: {
                  overflow: "visible",
                  boxShadow: "0 4px 45px #0000001a",
                  mt: 0,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>Select All</MenuItem>
              <MenuItem>Edit All</MenuItem>
              <MenuItem>Delete All</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box>
          {doneListData &&
            doneListData.map((doneList, index) => (
              <Box
                className={`bg-purple-100 ${doneList.bgClass}`}
                sx={{
                  padding: "25px",
                  borderRadius: "7px",
                  marginBottom: "25px",
                }}
                key={index}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "17px",
                  }}
                >
                  <Typography
                    variant="h4"
                    fontWeight={600}
                    fontSize="15px"
                    className="text-black"
                  >
                    {doneList.title}
                  </Typography>

                  <IconButton aria-label="delete" size="small">
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                </Box>

                <Typography mb="15px">{doneList.description}</Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: "23px",
                  }}
                >
                  <AvatarGroup
                    max={3}
                    sx={{
                      "& .MuiAvatar-root": {
                        border: "2px solid #fff",
                        backgroundColor: "#f0f0f0",
                        color: "#000",
                        width: "28px",
                        height: "28px",
                      },
                      "& .MuiAvatarGroup-avatar": {
                        backgroundColor: "#605dff", // Custom background color for the total avatar
                        color: "#fff", // Custom color for the text
                        fontSize: "10px",
                      },
                    }}
                  >
                    {doneList.TeamMembers.map((member, i) => (
                      <Avatar key={i} alt="Remy Sharp" src={member.img} />
                    ))}
                  </AvatarGroup>

                  <Typography color="primary.main">
                    {doneList.daysLeft}
                  </Typography>
                </Box>
              </Box>
            ))}

          <Box>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: "7px",
                padding: "3.3px 11px",
                fontSize: "14px",
                fontWeight: "500",
                textTransform: "capitalize",
                boxShadow: "none",
                textAlign: "center",
              }}
              onClick={handleClickOpenModal}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  add
                </i>
                Add New Card
              </Box>
            </Button>
          </Box>
        </Box>
      </Card>

      {/* Modal */}
      <BootstrapDialog
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={openModal}
        className="rmu-modal"
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#f6f7f9",
              padding: { xs: "15px 20px", md: "25px" },
            }}
            className="rmu-modal-header"
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              sx={{
                fontWeight: "600",
                fontSize: { xs: "16px", md: "18px" },
              }}
              className="text-black"
            >
              Add New Card
            </Typography>

            <IconButton
              aria-label="remove"
              size="small"
              onClick={handleCloseModal}
            >
              <ClearIcon />
            </IconButton>
          </Box>

          <Box className="rmu-modal-content">
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Box
                sx={{
                  padding: "25px",
                  borderRadius: "8px",
                }}
                className="bg-white"
              >
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Card Name
                    </Typography>

                    <TextField
                      autoComplete="cardName"
                      name="cardName"
                      required
                      fullWidth
                      id="cardName"
                      label="Title"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12} lg={12}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Card Description
                    </Typography>

                    <Textarea
                      aria-label="minimum height"
                      minRows={5}
                      placeholder="Type here..."
                    />
                  </Grid>

                  <Grid item xs={12} md={12} lg={6}>
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
                        <InputLabel id="bcc-multiple-checkbox-label">
                          Select
                        </InputLabel>
                        <Select
                          labelId="bcc-multiple-checkbox-label"
                          id="bcc-multiple-checkbox"
                          multiple
                          value={teamMembersName}
                          onChange={(event) =>
                            handleChange(event, setTeamMembersName)
                          }
                          input={<OutlinedInput label="Select" />}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem key={name} value={name}>
                              <Checkbox
                                checked={teamMembersName.indexOf(name) > -1}
                              />
                              <ListItemText primary={name} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={12} lg={6}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Deadline Date
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

                  <Grid item xs={12} mt={1}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: "10px",
                      }}
                    >
                      <Button
                        onClick={handleCloseModal}
                        variant="outlined"
                        color="error"
                        sx={{
                          textTransform: "capitalize",
                          borderRadius: "8px",
                          fontWeight: "500",
                          fontSize: "13px",
                          padding: "11px 30px",
                        }}
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          textTransform: "capitalize",
                          borderRadius: "8px",
                          fontWeight: "500",
                          fontSize: "13px",
                          padding: "11px 30px",
                          color: "#fff !important",
                        }}
                      >
                        <AddIcon
                          sx={{
                            position: "relative",
                            top: "-1px",
                          }}
                        />{" "}
                        Create
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </BootstrapDialog>
    </>
  );
};

export default Done;
