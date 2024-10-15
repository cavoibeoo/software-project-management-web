"use client";

import * as React from "react";
import Image from "next/image";
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
  TableHead,
} from "@mui/material";
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
        padding: "0 20px",
      }}
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

interface Ratings {
  star: string;
}

interface Instructors {
  id: number;
  instructorImg: string;
  instructorName: string;
  designation: string;
  courses: number;
  ratings: Ratings[];
}

function createData(
  id: number,
  instructorImg: string,
  instructorName: string,
  designation: string,
  courses: number,
  ratings: Ratings[]
): Instructors {
  return {
    id,
    instructorImg,
    instructorName,
    designation,
    courses,
    ratings,
  };
}

const rows = [
  createData(1, "/images/users/user13.jpg", "Olivia Clark", "Big Data", 55, [
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
  ]),
  createData(2, "/images/users/user16.jpg", "Ava Turner", "UX/UI", 120, [
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-half-fill",
    },
  ]),
  createData(3, "/images/users/user17.jpg", "Lucas Morgan", "Developer", 86, [
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
  ]),
  createData(4, "/images/users/user18.jpg", "Isabella Cooper", "Designer", 55, [
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-half-fill",
    },
  ]),
  createData(
    5,
    "/images/users/user31.jpg",
    "Jhon Smith",
    "React Developer",
    155,
    [
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
    ]
  ),
  createData(
    6,
    "/images/users/user30.jpg",
    "Oliver Jhon",
    "Angular Developer",
    99,
    [
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-half-fill",
      },
    ]
  ),
  createData(7, "/images/users/user29.jpg", "Jake Morgan", "Developer", 67, [
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
  ]),
  createData(8, "/images/users/user28.jpg", "Mason Cooper", "Designer", 155, [
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-fill",
    },
    {
      star: "ri-star-half-fill",
    },
  ]),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const TopInstructors: React.FC = () => {
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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "20px",
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
            Top Instructors
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
        <Box
          sx={{
            marginLeft: "-25px",
            marginRight: "-25px",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              borderRadius: "0",
            }}
            className="rmui-table"
          >
            <Table sx={{ minWidth: 480 }} aria-label="Table">
              <TableHead className="bg-primary-50">
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Name
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Courses
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Ratings
                  </TableCell>
                </TableRow>
              </TableHead>

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
                        padding: "13px 20px",
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
                          <Image
                            src={row.instructorImg}
                            alt="instructor"
                            width={44}
                            height={44}
                            style={{ borderRadius: "100px" }}
                          />
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
                            {row.instructorName}
                          </Typography>

                          <Typography
                            component="span"
                            className="text-body"
                            sx={{ display: "block" }}
                          >
                            {row.designation}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "13px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      {row.courses}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "13px 20px",
                      }}
                      className="border-bottom"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2px",
                        }}
                      >
                        {row.ratings.map((ratings, index) => (
                          <i
                            key={index}
                            className={ratings.star}
                            style={{ color: "#fe7a36", fontSize: "15px" }}
                          ></i>
                        ))}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={3} />
                  </TableRow>
                )}
              </TableBody>

              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
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
        </Box>
      </Card>
    </>
  );
};

export default TopInstructors;
