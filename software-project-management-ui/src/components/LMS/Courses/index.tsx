"use client";

import * as React from "react";
import Image from "next/image";
import {
  Card,
  Box,
  Typography,
  FormControl,
  InputLabel,
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
import Link from "next/link";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/components/LMS/Search.module.css";

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

function createData(
  id: any,
  courseName: string,
  courseDetailsLink: string,
  category: string,
  instructorImg: string,
  instructorName: string,
  enrolled: number,
  startDate: string,
  endDate: string,
  price: number
) {
  return {
    id,
    courseName,
    courseDetailsLink,
    category,
    instructorImg,
    instructorName,
    enrolled,
    startDate,
    endDate,
    price,
  };
}

const rows = [
  createData(
    "#854",
    "Cybersecurity Awareness",
    "/lms/courses/details/",
    "Technology",
    "/images/users/user6.jpg",
    "Oliver Khan",
    180,
    "25 Mar 2024",
    "25 Apr 2024",
    49.99
  ),
  createData(
    "#855",
    "Python Programming",
    "/lms/courses/details/",
    "Science",
    "/images/users/user7.jpg",
    "Ava Cooper",
    250,
    "20 Mar 2024",
    "20 Apr 2024",
    45.32
  ),
  createData(
    "#856",
    "Big Data Analytics",
    "/lms/courses/details/",
    "Health & Wellness",
    "/images/users/user8.jpg",
    "Isabella Evans",
    320,
    "15 Mar 2024",
    "15 Apr 2024",
    99.0
  ),
  createData(
    "#857",
    "Introduction to Blockchain",
    "/lms/courses/details/",
    "Education",
    "/images/users/user9.jpg",
    "Mia Hughes",
    135,
    "11 Mar 2024",
    "11 Apr 2024",
    29.75
  ),
  createData(
    "#858",
    "Network Administration",
    "/lms/courses/details/",
    "Food & Cooking",
    "/images/users/user10.jpg",
    "Noah Mitchell",
    460,
    "5 Mar 2024",
    "5 Apr 2024",
    56.99
  ),
  createData(
    "#859",
    "Artificial Intelligenc",
    "/lms/courses/details/",
    "Lifestyle & Fashion",
    "/images/users/user11.jpg",
    "Oliver Khan",
    515,
    "10 Feb 2024",
    "10 Mar 2024",
    49.99
  ),
  createData(
    "#860",
    "Network Administration",
    "/lms/courses/details/",
    "Food & Cooking",
    "/images/users/user10.jpg",
    "Noah Mitchell",
    460,
    "05 Feb 2024",
    "05 Mar 2024",
    49.99
  ),
  createData(
    "#861",
    "Introduction to Blockchain",
    "/lms/courses/details/",
    "Education",
    "/images/users/user9.jpg",
    "Mia Hughes",
    135,
    "10 Mar 2024",
    "10 Mar 2024",
    29.75
  ),
  createData(
    "#862",
    "Big Data Analytics",
    "/lms/courses/details/",
    "Health & Wellness",
    "/images/users/user8.jpg",
    "Isabella Evans",
    320,
    "15 Mar 2024",
    "15 Mar 2024",
    99.0
  ),
  createData(
    "#863",
    "Python Programming",
    "/lms/courses/details/",
    "Science",
    "/images/users/user7.jpg",
    "Ava Cooper",
    250,
    "20 Mar 2024",
    "20 Mar 2024",
    45.32
  ),
  createData(
    "#864",
    "Photoshop Mastery",
    "/lms/courses/details/",
    "Education",
    "/images/users/user9.jpg",
    "Mia Hughes",
    135,
    "10 Mar 2024",
    "10 Apr 2024",
    60.99
  ),
  createData(
    "#865",
    "Business Finance",
    "/lms/courses/details/",
    "Health & Wellness",
    "/images/users/user8.jpg",
    "Isabella Evans",
    320,
    "15 Mar 2024",
    "15 Apr 2024",
    70.99
  ),
  createData(
    "#866",
    "Graphic Design Basics",
    "/lms/courses/details/",
    "Science",
    "/images/users/user7.jpg",
    "Ava Cooper",
    250,
    "20 Mar 2024",
    "20 Apr 2024",
    80.99
  ),
  createData(
    "#867",
    "Introduction Of Python",
    "/lms/courses/details/",
    "Technology",
    "/images/users/user6.jpg",
    "Oliver Khan",
    180,
    "25 Mar 2024",
    "25 Mar 2024",
    90.99
  ),
  createData(
    "#868",
    "Artificial Intelligence",
    "/lms/courses/details/",
    "Lifestyle & Fashion",
    "/images/users/user11.jpg",
    "Oliver Khan",
    180,
    "25 Feb 2024",
    "25 Mar 2024",
    95.99
  ),
  createData(
    "#869",
    "Network Administration",
    "/lms/courses/details/",
    "Food & Cooking",
    "/images/users/user10.jpg",
    "Noah Mitchel",
    460,
    "05 Mar 2024",
    "05 Apr 2024",
    85.99
  ),
  createData(
    "#870",
    "Introduction to Blockchain",
    "/lms/courses/details/",
    "Education",
    "/images/users/user9.jpg",
    "Mia Hughes",
    135,
    "10 Mar 2024",
    "10 Apr 2024",
    75.99
  ),
  createData(
    "#871",
    "Big Data Analytics",
    "/lms/courses/details/",
    "Health & Wellness",
    "/images/users/user8.jpg",
    "Isabella Evans",
    320,
    "15 Mar 2024",
    "15 Apr 2024",
    56.99
  ),
  createData(
    "#872",
    "Python Programming",
    "/lms/courses/details/",
    "Science",
    "/images/users/user7.jpg",
    "Ava Cooper",
    250,
    "20 Mar 2024",
    "20 Apr 2024",
    99.99
  ),
  createData(
    "#873",
    "Cybersecurity Awareness",
    "/lms/courses/details/",
    "Technology",
    "/images/users/user6.jpg",
    "Oliver Khan",
    180,
    "25 Mar 2024",
    "25 Mar 2024",
    47.99
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const Courses: React.FC = () => {
  // Select
  const [select, setSelect] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
            mb: "25px",
          }}
        >
          <Box
            component="form"
            className={styles.searchBox}
            sx={{
              width: { sm: "265px" },
            }}
          >
            <label>
              <i className="material-symbols-outlined">search</i>
            </label>
            <input
              type="text"
              className={styles.inputSearch}
              placeholder="Search course here..."
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FormControl sx={{ minWidth: "115px" }} size="small">
              <InputLabel id="demo-select-small">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                label="select"
                onChange={handleChange}
                className="select"
              >
                <MenuItem value={0}>Paid</MenuItem>
                <MenuItem value={0}>Free</MenuItem>
                <MenuItem value={1}>Top Rated</MenuItem>
                <MenuItem value={2}>Best Seller</MenuItem>
              </Select>
            </FormControl>
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
            <Table sx={{ minWidth: 1200 }} aria-label="Courses Table">
              <TableHead className="bg-primary-50">
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 24px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    ID
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Course Name
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Category
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Instructor
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Enrolled
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Start Date
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    End Date
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Price
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Action
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
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      {row.id}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      <Link
                        href={row.courseDetailsLink}
                        className="text-body hover-text-color"
                        style={{ fontWeight: "500" }}
                      >
                        {row.courseName}
                      </Link>
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      {row.category}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
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
                            alt="Product"
                            width={40}
                            height={40}
                            style={{ borderRadius: "100px" }}
                          />
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              fontWeight: "500",
                            }}
                          >
                            {row.instructorName}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      {row.enrolled}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      {row.startDate}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      {row.endDate}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      {row.price}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                      }}
                      className="border-bottom"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Link href={row.courseDetailsLink}>
                          <IconButton
                            aria-label="view"
                            color="primary"
                            sx={{ padding: "5px" }}
                          >
                            <i
                              className="material-symbols-outlined"
                              style={{ fontSize: "16px" }}
                            >
                              visibility
                            </i>
                          </IconButton>
                        </Link>

                        <IconButton
                          aria-label="edit"
                          color="secondary"
                          sx={{ padding: "5px" }}
                        >
                          <i
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            edit
                          </i>
                        </IconButton>

                        <IconButton
                          aria-label="delete"
                          color="error"
                          sx={{ padding: "5px" }}
                        >
                          <i
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            delete
                          </i>
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={9} />
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
                    colSpan={9}
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

export default Courses;
