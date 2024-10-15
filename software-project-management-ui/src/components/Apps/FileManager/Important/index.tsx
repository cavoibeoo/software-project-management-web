"use client";

import React from "react";
import {
  Card,
  Box,
  Typography,
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
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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
  fileName: string,
  owner: string,
  listedDate: string,
  fileType: string,
  fileSize: string,
  fileItems: number
) {
  return {
    id,
    fileName,
    owner,
    listedDate,
    fileType,
    fileSize,
    fileItems,
  };
}

const rows = [
  createData(
    1,
    "Dashboard Design",
    "Linda Maddox",
    "20 Nov 2024",
    ".pdf",
    "1.2 GB",
    69
  ),
  createData(
    2,
    "Important Documents",
    "Juanita Lavigne",
    "18 Nov 2024",
    ".zip",
    "2.6 GB",
    236
  ),
  createData(
    3,
    "Product Design",
    "Roy Pope",
    "17 Nov 2024",
    ".psd",
    "3.2 GB",
    365
  ),
  createData(
    4,
    "Dashboard Design File",
    "Cecil Jones",
    "15 Nov 2024",
    ".fig",
    "1 GB",
    25
  ),
  createData(
    5,
    "Media Files",
    "Trudy Venegas",
    "14 Nov 2024",
    ".jpg",
    "1.5 GB",
    153
  ),
  createData(
    6,
    "Graphic Design File",
    "Sharilyn Goodall",
    "13 Nov 2024",
    ".png",
    "1.6 GB",
    142
  ),
  createData(
    7,
    "Personal Photo",
    "Annie Carver",
    "09 Nov 2024",
    ".gif",
    "1.2 GB",
    175
  ),
  createData(
    8,
    "Audio File",
    "Winona Etzel",
    "08 Nov 2024",
    ".mp3",
    "1.3 GB",
    136
  ),
  createData(
    9,
    "Audio File",
    "Winona Etzel",
    "08 Nov 2024",
    ".mp3",
    "1.3 GB",
    136
  ),
  createData(
    10,
    "Personal Photo",
    "Annie Carver",
    "09 Nov 2024",
    ".gif",
    "1.2 GB",
    175
  ),
  createData(
    11,
    "Graphic Design File",
    "Sharilyn Goodall",
    "13 Nov 2024",
    ".png",
    "1.6 GB",
    142
  ),
  createData(
    12,
    "Media Files",
    "Trudy Venegas",
    "14 Nov 2024",
    ".jpg",
    "1.5 GB",
    153
  ),
  createData(
    13,
    "Dashboard Design File",
    "Cecil Jones",
    "15 Nov 2024",
    ".fig",
    "1 GB",
    25
  ),
  createData(
    14,
    "Product Design",
    "Roy Pope",
    "17 Nov 2024",
    ".psd",
    "3.2 GB",
    365
  ),
  createData(
    15,
    "Important Documents",
    "Juanita Lavigne",
    "18 Nov 2024",
    ".zip",
    "2.6 GB",
    236
  ),
  createData(
    16,
    "Dashboard Design",
    "Linda Maddox",
    "20 Nov 2024",
    ".pdf",
    "1.2 GB",
    80
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const Important: React.FC = () => {
  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

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

  // Select
  const [select, setSelect] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
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
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Important
          </Typography>

          <Box>
            <FormControl sx={{ minWidth: 115 }} size="small">
              <InputLabel id="demo-select-small">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                label="select"
                onChange={handleChange}
                className="select"
              >
                <MenuItem value={0}>This Day</MenuItem>
                <MenuItem value={0}>This Weekly</MenuItem>
                <MenuItem value={1}>This Monthly</MenuItem>
                <MenuItem value={2}>This Yearly</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "7px",
          }}
          className="rmui-table border"
        >
          <Table sx={{ minWidth: 950 }} aria-label="Recent Files Table">
            <TableHead className="bg-f6f7f9">
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 24px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  File Name
                </TableCell>

                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Owner
                </TableCell>

                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Listed Date
                </TableCell>

                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  File Type
                </TableCell>

                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  File Size
                </TableCell>

                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  File Items
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
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <i className="material-symbols-outlined text-warning">
                        folder
                      </i>
                      <Typography
                        variant="h5"
                        fontWeight={500}
                        fontSize="14px"
                        className="text-black"
                      >
                        {row.fileName}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "15px 20px",
                      fontSize: "14px",
                    }}
                    className="border-bottom"
                  >
                    {row.owner}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "15px 20px",
                      fontSize: "14px",
                    }}
                    className="border-bottom"
                  >
                    {row.listedDate}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "15px 20px",
                      fontSize: "14px",
                    }}
                    className="border-bottom"
                  >
                    {row.fileType}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "15px 20px",
                      fontSize: "14px",
                    }}
                    className="border-bottom"
                  >
                    {row.fileSize}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "15px 20px",
                    }}
                    className="border-bottom"
                  >
                    {row.fileItems}
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
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={8}
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

export default Important;
