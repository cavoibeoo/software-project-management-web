"use client";

import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
  Checkbox,
} from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import StarRateIcon from "@mui/icons-material/StarRate";

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
        gap: "5px",
      }}
      className="ml-10"
    >
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        sx={{
          borderRadius: "4px",
          padding: "3px",
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
          padding: "3px",
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

function createData(id: number, title: string, subTitle: string, date: string) {
  return {
    id,
    title,
    subTitle,
    date,
  };
}

const rows = [
  createData(
    1,
    "Google",
    "2-Step Verification Turn Off - Integer nec arcu ac nisi...",
    "3:36 PM"
  ),
  createData(
    2,
    "Facebook",
    "Friend Request - Sed in libero eget lorem fermentum...",
    "9:25 AM"
  ),
  createData(
    3,
    "LinkedIn",
    "Travel Information - Vivamus vestibulum ligula in mauris...",
    "Jun 25"
  ),
  createData(
    4,
    "Ethan Parker",
    "Leave Application - Integer nec arcu ac nisi...",
    "Jun 22"
  ),
  createData(
    5,
    "Dribbble",
    "Design Inspiration - Sed in libero eget lorem fermentum...",
    "Jun 21"
  ),
  createData(
    6,
    "Instagram",
    "Training Schedule - Vivamus vestibulum ligula in mauris...",
    "Jun 21"
  ),
  createData(
    7,
    "Isabella Cooper",
    "Internal Auditor - Sed in libero eget lorem fermentum...",
    "Jun 19"
  ),
  createData(
    8,
    "Google",
    "Password Changed - Integer nec arcu ac nisi...",
    "Jun 17"
  ),
  createData(
    9,
    "Olivia Rodriguez",
    "Virtual Training - Vivamus vestibulum ligula in mauris...",
    "Jun 15"
  ),
  createData(
    10,
    "YouTube",
    "New Subscriber - Sed in libero eget lorem fermentum...",
    "Jun 12"
  ),
  createData(
    11,
    "Google",
    "Security Alert - Vivamus vestibulum ligula in mauris...",
    "Jun 10"
  ),
  createData(
    12,
    "Google",
    "Security Alert - Vivamus vestibulum ligula in mauris...",
    "Jun 10"
  ),
  createData(
    13,
    "YouTube",
    "New Subscriber - Sed in libero eget lorem fermentum...",
    "Jun 12"
  ),
  createData(
    14,
    "Olivia Rodriguez",
    "Virtual Training - Vivamus vestibulum ligula in mauris...",
    "Jun 15"
  ),
  createData(
    15,
    "Google",
    "Password Changed - Integer nec arcu ac nisi...",
    "Jun 17"
  ),
  createData(
    16,
    "Isabella Cooper",
    "Internal Auditor - Sed in libero eget lorem fermentum...",
    "Jun 19"
  ),
  createData(
    17,
    "Instagram",
    "Training Schedule - Vivamus vestibulum ligula in mauris...",
    "Jun 21"
  ),
  createData(
    18,
    "Dribbble",
    "Design Inspiration - Sed in libero eget lorem fermentum...",
    "Jun 21"
  ),
  createData(
    19,
    "Ethan Parker",
    "Leave Application - Integer nec arcu ac nisi...",
    "Jun 22"
  ),
  createData(
    20,
    "LinkedIn",
    "Travel Information - Vivamus vestibulum ligula in mauris...",
    "Jun 25"
  ),
  createData(
    21,
    "Facebook",
    "Friend Request - Sed in libero eget lorem fermentum...",
    "9:25 AM"
  ),
  createData(
    22,
    "Google",
    "2-Step Verification Turn Off - Integer nec arcu ac nisi...",
    "3:36 PM"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const PrimaryEmails: React.FC = () => {
  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(11);

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
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          borderRadius: "0",
        }}
        className="rmui-table"
      >
        <Table
          className="rmui-email-table"
          sx={{ minWidth: 750 }}
          aria-label="Primary Emails Table"
        >
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  sx={{
                    padding: "10.8px 20px",
                    fontSize: "14px",
                    width: "65px",
                  }}
                  className="border-bottom"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Checkbox
                      {...label}
                      sx={{
                        padding: "0",

                        "& .MuiSvgIcon-root": { fontSize: 22 },
                      }}
                    />

                    <Checkbox
                      {...label}
                      sx={{
                        padding: "5px",

                        "& .MuiSvgIcon-root": { fontSize: 18 },
                      }}
                      icon={
                        <StarBorderPurple500Icon
                          sx={{
                            fontSize: "18px",
                          }}
                        />
                      }
                      checkedIcon={
                        <StarRateIcon
                          sx={{
                            fontSize: "18px",
                          }}
                        />
                      }
                    />
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    padding: "0",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  <Link
                    href="/apps/email/read"
                    className="text-black"
                    style={{ display: "block", padding: "12.4px 20px" }}
                  >
                    {row.title}
                  </Link>
                </TableCell>

                <TableCell
                  sx={{
                    padding: "0",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  <Link
                    href="/apps/email/read"
                    className="text-black"
                    style={{ display: "block", padding: "12.4px 20px" }}
                  >
                    {row.subTitle}
                  </Link>
                </TableCell>

                <TableCell
                  sx={{
                    padding: "12.4px 20px",
                  }}
                  className="text-end border-bottom"
                >
                  {row.date}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>

          <TableFooter
            sx={{
              position: { sm: "absolute" },
              top: "15px",
            }}
            className="po-right-25"
          >
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={6}
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
    </>
  );
};

export default PrimaryEmails;
