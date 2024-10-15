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
        padding: "14px 20px",
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
  name: string,
  image: string,
  link: string,
  date: string,
  price: number,
  order: number,
  stock: any,
  amount: number
) {
  return {
    name,
    image,
    link,
    date,
    price,
    order,
    stock,
    amount,
  };
}

const rows = [
  createData(
    "Smart Band",
    "/images/products/product1.jpg",
    "/ecommerce/products-list/details/",
    "08 Jun 2024",
    35.0,
    75,
    750,
    2625
  ),
  createData(
    "Headphone",
    "/images/products/product2.jpg",
    "/ecommerce/products-list/details/",
    "07 Jun 2024",
    49.0,
    25,
    825,
    1225
  ),
  createData(
    "iPhone 15 Plus",
    "/images/products/product3.jpg",
    "/ecommerce/products-list/details/",
    "06 Jun 2024",
    99.0,
    55,
    "Stock Out",
    5445
  ),
  createData(
    "Bluetooth Speaker",
    "/images/products/product4.jpg",
    "/ecommerce/products-list/details/",
    "05 Jun 2024",
    59.0,
    40,
    535,
    2360
  ),
  createData(
    "Airbuds 2nd Gen",
    "/images/products/product5.jpg",
    "/ecommerce/products-list/details/",
    "04 Jun 2024",
    79.0,
    56,
    460,
    4424
  ),
  createData(
    "MacBook Air 13-inch",
    "/images/products/product6.jpg",
    "/ecommerce/products-list/details/",
    "03 Jun 2024",
    279.0,
    50,
    125,
    13950
  ),
  createData(
    "iPad Air - Apple",
    "/images/products/product7.jpg",
    "/ecommerce/products-list/details/",
    "02 Jun 2024",
    599.0,
    2,
    20,
    5992
  ),
  createData(
    "iPhone 15",
    "/images/products/product8.jpg",
    "/ecommerce/products-list/details/",
    "01 Jun 2024",
    799.0,
    2,
    50,
    1598
  ),
  createData(
    "T-Shirt",
    "/images/products/product9.jpg",
    "/ecommerce/products-list/details/",
    "01 May 2024",
    50.0,
    2,
    50,
    100
  ),
  createData(
    "Casual Shoes",
    "/images/products/product10.jpg",
    "/ecommerce/products-list/details/",
    "02 May 2024",
    500.0,
    5,
    50,
    2500
  ),
].sort((a, b) => (a.name < b.name ? -1 : 1));

const TopSellingProducts: React.FC = () => {
  // Select
  const [select, setSelect] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Top Selling Products
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
                <MenuItem value={4}>All Time</MenuItem>
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
          <Table sx={{ minWidth: 650 }} aria-label="Top Selling Products Table">
            <TableHead className="bg-f6f7f9">
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Product
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
                  Order
                </TableCell>

                <TableCell
                  sx={{
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Stock
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  Amount
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
                <TableRow key={row.name}>
                  <TableCell
                    sx={{
                      padding: "14px 20px",
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
                          src={row.image}
                          alt="Product"
                          width={40}
                          height={40}
                          style={{ borderRadius: "7px" }}
                        />
                      </Box>

                      <Box>
                        <Link
                          href={row.link}
                          style={{
                            fontSize: "15px",
                            fontWeight: "500",
                            display: "inline-block",
                            textDecoration: "none",
                          }}
                          className="text-black hover-text-color"
                        >
                          {row.name}
                        </Link>

                        <Typography
                          sx={{ fontSize: "13px" }}
                          className="text-body"
                        >
                          {row.date}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "14px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    ${row.price}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "14px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.order}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "14px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.stock}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      padding: "14px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    ${row.amount}
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

export default TopSellingProducts;
