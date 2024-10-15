"use client";

import * as React from "react";
import Image from "next/image";
import {
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
  TableHead,
} from "@mui/material";
import Link from "next/link";

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
].sort((b, a) => (a.id < b.id ? -1 : 1));

const Courses: React.FC = () => {
  // Table
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(1);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Course
          </Typography>
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
                        <Link href="/lms/edit-course/">
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
                        </Link>
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
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </>
  );
};

export default Courses;
