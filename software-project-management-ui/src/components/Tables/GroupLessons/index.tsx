"use client";

import * as React from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
  AvatarGroup,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box
      sx={{
        flexShrink: 0,
        display: "flex",
        gap: "10px",
      }}
      className="ml-15"
    >
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        sx={{
          borderRadius: "4px",
          padding: "6px",
        }}
        className="border"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>

      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        sx={{
          borderRadius: "4px",
          padding: "6px",
        }}
        className="border"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
}

interface groupImage {
  image: string;
}

interface Lessons {
  id: number;
  groupImages: groupImage[];
  lessonName: string;
  date: string;
  viewLink: string;
}

function createData(
  id: number,
  groupImages: groupImage[],
  lessonName: string,
  date: string,
  viewLink: string
): Lessons {
  return {
    id,
    groupImages,
    lessonName,
    date,
    viewLink,
  };
}

const rows = [
  createData(
    1,
    [
      {
        image: "/images/users/user20.jpg",
      },
      {
        image: "/images/users/user21.jpg",
      },
      {
        image: "/images/users/user6.jpg",
      },
    ],
    "Digital Marketing",
    "15 March 2024",
    "#"
  ),
  createData(
    2,
    [
      {
        image: "/images/users/user22.jpg",
      },
      {
        image: "/images/users/user22.jpg",
      },
      {
        image: "/images/users/user24.jpg",
      },
    ],
    "Web Development",
    "10 March 2024",
    "#"
  ),
  createData(
    3,
    [
      {
        image: "/images/users/user25.jpg",
      },
      {
        image: "/images/users/user26.jpg",
      },
      {
        image: "/images/users/user27.jpg",
      },
    ],
    "UX/UI Design",
    "05 March 2024",
    "#"
  ),
  createData(
    4,
    [
      {
        image: "/images/users/user28.jpg",
      },
      {
        image: "/images/users/user29.jpg",
      },
      {
        image: "/images/users/user30.jpg",
      },
    ],
    "Content Writer",
    "02 March 2024",
    "#"
  ),
  createData(
    5,
    [
      {
        image: "/images/users/user1.jpg",
      },
      {
        image: "/images/users/user2.jpg",
      },
      {
        image: "/images/users/user3.jpg",
      },
    ],
    "React App",
    "01 March 2024",
    "#"
  ),
  createData(
    6,
    [
      {
        image: "/images/users/user4.jpg",
      },
      {
        image: "/images/users/user5.jpg",
      },
      {
        image: "/images/users/user6.jpg",
      },
    ],
    "React Development",
    "11 March 2024",
    "#"
  ),
  createData(
    7,
    [
      {
        image: "/images/users/user7.jpg",
      },
      {
        image: "/images/users/user8.jpg",
      },
      {
        image: "/images/users/user9.jpg",
      },
    ],
    "UX/UI Design",
    "09 March 2024",
    "#"
  ),
  createData(
    8,
    [
      {
        image: "/images/users/user10.jpg",
      },
      {
        image: "/images/users/user11.jpg",
      },
      {
        image: "/images/users/user12.jpg",
      },
    ],
    "Content Writer",
    "05 March 2024",
    "#"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const GroupLessons: React.FC = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
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
            Group Lessons
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
              <MenuItem>This Day</MenuItem>
              <MenuItem>This Week</MenuItem>
              <MenuItem>This Month</MenuItem>
              <MenuItem>This Year</MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
          className="rmui-table border-top"
        >
          <Table sx={{ minWidth: 300 }} aria-label="Table">
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    sx={{
                      padding: "18.3px 0",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <Box sx={{ flexShrink: "0" }}>
                        <AvatarGroup
                          max={3}
                          sx={{
                            justifyContent: "flex-end",

                            "& .MuiAvatar-root": {
                              border: "2px solid #fff",
                              backgroundColor: "#f0f0f0",
                              color: "#000",
                              width: "40px",
                              height: "40px",
                            },
                            "& .MuiAvatarGroup-avatar": {
                              backgroundColor: "#605dff", // Custom background color for the total avatar
                              color: "#fff", // Custom color for the text
                              fontSize: "10px",
                            },
                          }}
                        >
                          {row.groupImages.map((groupImage, index) => (
                            <Avatar
                              key={index}
                              src={groupImage.image}
                              alt="Group Image"
                            />
                          ))}
                        </AvatarGroup>
                      </Box>

                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "14px",
                            fontWeight: "500 !important",
                          }}
                          className="text-black"
                        >
                          {row.lessonName}
                        </Typography>

                        <Typography
                          component="span"
                          className="text-body"
                          sx={{ display: "block" }}
                        >
                          {row.date}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "18.3px 0",
                    }}
                    className="text-end border-bottom"
                  >
                    <Link
                      href={row.viewLink}
                      style={{
                        display: "inline-block",
                        borderRadius: "100px",
                        width: "36px",
                        height: "36px",
                        lineHeight: "36px",
                        textAlign: "center",
                      }}
                      className="text-body border tp-link"
                    >
                      <i
                        className="material-symbols-outlined"
                        style={{ fontSize: "18px", lineHeight: "inherit" }}
                      >
                        arrow_outward
                      </i>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={5}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  slotProps={{
                    select: {
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    },
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                  sx={{
                    border: "none",
                  }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default GroupLessons;
