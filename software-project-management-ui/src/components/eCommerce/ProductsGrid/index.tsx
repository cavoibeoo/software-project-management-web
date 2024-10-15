"use client";

import * as React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Grid, Box, Button, Typography, Pagination } from "@mui/material";
import ProductsFilter from "./ProductsFilter";

const ProductsGrid: React.FC = () => {
  return (
    <>
      <ProductsFilter />

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box
            className="single-product-item"
            sx={{ mb: { xs: "30px", sm: "45px" } }}
          >
            <Box sx={{ position: "relative" }}>
              <NextLink
                href="/ecommerce/products-list/details"
                style={{ display: "block" }}
              >
                <Image
                  src="/images/products/product6.jpg"
                  className="border-radius"
                  alt="product-image"
                  width={714}
                  height={714}
                />
              </NextLink>

              <Box
                sx={{
                  position: "absolute",
                  right: "0",
                  bottom: "5px",
                  bgcolor: "#fff",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  borderRadius: "7px 0px 0px 0px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "primary.main",
                    boxShadow: "none",
                    width: "60px",
                    height: "60px",
                    borderRadius: "7px",
                    padding: "0",
                    minWidth: "auto",
                  }}
                  className="text-white"
                >
                  <i className="material-symbols-outlined">shopping_cart</i>
                </Button>
              </Box>
            </Box>

            <Box mt="15px">
              <Typography variant="h6" className="text-black" mb="10px">
                <NextLink
                  href="/ecommerce/products-list/details"
                  className="text-black hover-text-color"
                  style={{ fontSize: "16px" }}
                >
                  Apple MacBook Pro 16.2" with M3 Pro Chip
                </NextLink>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography
                    fontWeight="700"
                    fontSize="20px"
                    className="text-black"
                  >
                    $3479
                  </Typography>
                  <Typography fontSize="16px" className="text-body">
                    $3599
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i
                    className="ri-star-half-fill"
                    style={{ color: "#fe7a36" }}
                  ></i>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box
            className="single-product-item"
            sx={{ mb: { xs: "30px", sm: "45px" } }}
          >
            <Box sx={{ position: "relative" }}>
              <NextLink
                href="/ecommerce/products-list/details"
                style={{ display: "block" }}
              >
                <Image
                  src="/images/products/product7.jpg"
                  className="border-radius"
                  alt="product-image"
                  width={714}
                  height={714}
                />
              </NextLink>

              <Box
                sx={{
                  position: "absolute",
                  right: "0",
                  bottom: "5px",
                  bgcolor: "#fff",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  borderRadius: "7px 0px 0px 0px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "primary.main",
                    boxShadow: "none",
                    width: "60px",
                    height: "60px",
                    borderRadius: "7px",
                    padding: "0",
                    minWidth: "auto",
                  }}
                  className="text-white"
                >
                  <i className="material-symbols-outlined">shopping_cart</i>
                </Button>
              </Box>
            </Box>

            <Box mt="15px">
              <Typography variant="h6" className="text-black" mb="10px">
                <NextLink
                  href="/ecommerce/products-list/details"
                  className="text-black hover-text-color"
                  style={{ fontSize: "16px" }}
                >
                  SAMSUNG Galaxy Tab A9+ Tablet 11”
                </NextLink>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography
                    fontWeight="700"
                    fontSize="20px"
                    className="text-black"
                  >
                    $549
                  </Typography>
                  <Typography fontSize="16px" className="text-body">
                    $649
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i
                    className="ri-star-half-fill"
                    style={{ color: "#fe7a36" }}
                  ></i>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box
            className="single-product-item"
            sx={{ mb: { xs: "30px", sm: "45px" } }}
          >
            <Box sx={{ position: "relative" }}>
              <NextLink
                href="/ecommerce/products-list/details"
                style={{ display: "block" }}
              >
                <Image
                  src="/images/products/product8.jpg"
                  className="border-radius"
                  alt="product-image"
                  width={714}
                  height={714}
                />
              </NextLink>

              <Box
                sx={{
                  position: "absolute",
                  right: "0",
                  bottom: "5px",
                  bgcolor: "#fff",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  borderRadius: "7px 0px 0px 0px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "primary.main",
                    boxShadow: "none",
                    width: "60px",
                    height: "60px",
                    borderRadius: "7px",
                    padding: "0",
                    minWidth: "auto",
                  }}
                  className="text-white"
                >
                  <i className="material-symbols-outlined">shopping_cart</i>
                </Button>
              </Box>
            </Box>

            <Box mt="15px">
              <Typography variant="h6" className="text-black" mb="10px">
                <NextLink
                  href="/ecommerce/products-list/details"
                  className="text-black hover-text-color"
                  style={{ fontSize: "16px" }}
                >
                  Apple iPhone 15 Pro Max (512 GB)
                </NextLink>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography
                    fontWeight="700"
                    fontSize="20px"
                    className="text-black"
                  >
                    $1479
                  </Typography>
                  <Typography fontSize="16px" className="text-body">
                    $1599
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i
                    className="ri-star-half-fill"
                    style={{ color: "#fe7a36" }}
                  ></i>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box
            className="single-product-item"
            sx={{ mb: { xs: "30px", sm: "45px" } }}
          >
            <Box sx={{ position: "relative" }}>
              <NextLink
                href="/ecommerce/products-list/details"
                style={{ display: "block" }}
              >
                <Image
                  src="/images/products/product9.jpg"
                  className="border-radius"
                  alt="product-image"
                  width={714}
                  height={714}
                />
              </NextLink>

              <Box
                sx={{
                  position: "absolute",
                  right: "0",
                  bottom: "5px",
                  bgcolor: "#fff",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  borderRadius: "7px 0px 0px 0px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "primary.main",
                    boxShadow: "none",
                    width: "60px",
                    height: "60px",
                    borderRadius: "7px",
                    padding: "0",
                    minWidth: "auto",
                  }}
                  className="text-white"
                >
                  <i className="material-symbols-outlined">shopping_cart</i>
                </Button>
              </Box>
            </Box>

            <Box mt="15px">
              <Typography variant="h6" className="text-black" mb="10px">
                <NextLink
                  href="/ecommerce/products-list/details"
                  className="text-black hover-text-color"
                  style={{ fontSize: "16px" }}
                >
                  Gildan Men's Crew T-Shirts, Multipack
                </NextLink>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography
                    fontWeight="700"
                    fontSize="20px"
                    className="text-black"
                  >
                    $79
                  </Typography>
                  <Typography fontSize="16px" className="text-body">
                    $89
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i
                    className="ri-star-half-fill"
                    style={{ color: "#fe7a36" }}
                  ></i>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box
            className="single-product-item"
            sx={{ mb: { xs: "30px", sm: "45px" } }}
          >
            <Box sx={{ position: "relative" }}>
              <NextLink
                href="/ecommerce/products-list/details"
                style={{ display: "block" }}
              >
                <Image
                  src="/images/products/product10.jpg"
                  className="border-radius"
                  alt="product-image"
                  width={714}
                  height={714}
                />
              </NextLink>

              <Box
                sx={{
                  position: "absolute",
                  right: "0",
                  bottom: "5px",
                  bgcolor: "#fff",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  borderRadius: "7px 0px 0px 0px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "primary.main",
                    boxShadow: "none",
                    width: "60px",
                    height: "60px",
                    borderRadius: "7px",
                    padding: "0",
                    minWidth: "auto",
                  }}
                  className="text-white"
                >
                  <i className="material-symbols-outlined">shopping_cart</i>
                </Button>
              </Box>
            </Box>

            <Box mt="15px">
              <Typography variant="h6" className="text-black" mb="10px">
                <NextLink
                  href="/ecommerce/products-list/details"
                  className="text-black hover-text-color"
                  style={{ fontSize: "16px" }}
                >
                  Skechers Men's Summits High Range
                </NextLink>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography
                    fontWeight="700"
                    fontSize="20px"
                    className="text-black"
                  >
                    $849
                  </Typography>
                  <Typography fontSize="16px" className="text-body">
                    $999
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i
                    className="ri-star-half-fill"
                    style={{ color: "#fe7a36" }}
                  ></i>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box
            className="single-product-item"
            sx={{ mb: { xs: "30px", sm: "45px" } }}
          >
            <Box sx={{ position: "relative" }}>
              <NextLink
                href="/ecommerce/products-list/details"
                style={{ display: "block" }}
              >
                <Image
                  src="/images/products/product11.jpg"
                  className="border-radius"
                  alt="product-image"
                  width={714}
                  height={714}
                />
              </NextLink>

              <Box
                sx={{
                  position: "absolute",
                  right: "0",
                  bottom: "5px",
                  bgcolor: "#fff",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  borderRadius: "7px 0px 0px 0px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "primary.main",
                    boxShadow: "none",
                    width: "60px",
                    height: "60px",
                    borderRadius: "7px",
                    padding: "0",
                    minWidth: "auto",
                  }}
                  className="text-white"
                >
                  <i className="material-symbols-outlined">shopping_cart</i>
                </Button>
              </Box>
            </Box>

            <Box mt="15px">
              <Typography variant="h6" className="text-black" mb="10px">
                <NextLink
                  href="/ecommerce/products-list/details"
                  className="text-black hover-text-color"
                  style={{ fontSize: "16px" }}
                >
                  Amazfit GTR 3 Smart Watch for Men
                </NextLink>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography
                    fontWeight="700"
                    fontSize="20px"
                    className="text-black"
                  >
                    $49
                  </Typography>
                  <Typography fontSize="16px" className="text-body">
                    $69
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i
                    className="ri-star-half-fill"
                    style={{ color: "#fe7a36" }}
                  ></i>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box
            className="single-product-item"
            sx={{ mb: { xs: "30px", sm: "45px" } }}
          >
            <Box sx={{ position: "relative" }}>
              <NextLink
                href="/ecommerce/products-list/details"
                style={{ display: "block" }}
              >
                <Image
                  src="/images/products/product12.jpg"
                  className="border-radius"
                  alt="product-image"
                  width={714}
                  height={714}
                />
              </NextLink>

              <Box
                sx={{
                  position: "absolute",
                  right: "0",
                  bottom: "5px",
                  bgcolor: "#fff",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  borderRadius: "7px 0px 0px 0px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "primary.main",
                    boxShadow: "none",
                    width: "60px",
                    height: "60px",
                    borderRadius: "7px",
                    padding: "0",
                    minWidth: "auto",
                  }}
                  className="text-white"
                >
                  <i className="material-symbols-outlined">shopping_cart</i>
                </Button>
              </Box>
            </Box>

            <Box mt="15px">
              <Typography variant="h6" className="text-black" mb="10px">
                <NextLink
                  href="/ecommerce/products-list/details"
                  className="text-black hover-text-color"
                  style={{ fontSize: "16px" }}
                >
                  SOJOS Small Round Polarized Sunglasses
                </NextLink>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography
                    fontWeight="700"
                    fontSize="20px"
                    className="text-black"
                  >
                    $39
                  </Typography>
                  <Typography fontSize="16px" className="text-body">
                    $49
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i
                    className="ri-star-half-fill"
                    style={{ color: "#fe7a36" }}
                  ></i>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box
            className="single-product-item"
            sx={{ mb: { xs: "30px", sm: "45px" } }}
          >
            <Box sx={{ position: "relative" }}>
              <NextLink
                href="/ecommerce/products-list/details"
                style={{ display: "block" }}
              >
                <Image
                  src="/images/products/product13.jpg"
                  className="border-radius"
                  alt="product-image"
                  width={714}
                  height={714}
                />
              </NextLink>

              <Box
                sx={{
                  position: "absolute",
                  right: "0",
                  bottom: "5px",
                  bgcolor: "#fff",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  borderRadius: "7px 0px 0px 0px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "primary.main",
                    boxShadow: "none",
                    width: "60px",
                    height: "60px",
                    borderRadius: "7px",
                    padding: "0",
                    minWidth: "auto",
                  }}
                  className="text-white"
                >
                  <i className="material-symbols-outlined">shopping_cart</i>
                </Button>
              </Box>
            </Box>

            <Box mt="15px">
              <Typography variant="h6" className="text-black" mb="10px">
                <NextLink
                  href="/ecommerce/products-list/details"
                  className="text-black hover-text-color"
                  style={{ fontSize: "16px" }}
                >
                  Nautical Clock Ship Table Clock Brass Desk
                </NextLink>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography
                    fontWeight="700"
                    fontSize="20px"
                    className="text-black"
                  >
                    $25
                  </Typography>
                  <Typography fontSize="16px" className="text-body">
                    $39
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i
                    className="ri-star-half-fill"
                    style={{ color: "#fe7a36" }}
                  ></i>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box
            className="single-product-item"
            sx={{ mb: { xs: "30px", sm: "45px" } }}
          >
            <Box sx={{ position: "relative" }}>
              <NextLink
                href="/ecommerce/products-list/details"
                style={{ display: "block" }}
              >
                <Image
                  src="/images/products/product14.jpg"
                  className="border-radius"
                  alt="product-image"
                  width={714}
                  height={714}
                />
              </NextLink>

              <Box
                sx={{
                  position: "absolute",
                  right: "0",
                  bottom: "5px",
                  bgcolor: "#fff",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  borderRadius: "7px 0px 0px 0px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "primary.main",
                    boxShadow: "none",
                    width: "60px",
                    height: "60px",
                    borderRadius: "7px",
                    padding: "0",
                    minWidth: "auto",
                  }}
                  className="text-white"
                >
                  <i className="material-symbols-outlined">shopping_cart</i>
                </Button>
              </Box>
            </Box>

            <Box mt="15px">
              <Typography variant="h6" className="text-black" mb="10px">
                <NextLink
                  href="/ecommerce/products-list/details"
                  className="text-black hover-text-color"
                  style={{ fontSize: "16px" }}
                >
                  Carhartt, Durable, Adjustable Crossbody Bag
                </NextLink>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography
                    fontWeight="700"
                    fontSize="20px"
                    className="text-black"
                  >
                    $149
                  </Typography>
                  <Typography fontSize="16px" className="text-body">
                    $299
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i
                    className="ri-star-half-fill"
                    style={{ color: "#fe7a36" }}
                  ></i>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Pagination */}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box
            className="pagination-card bg-white"
            sx={{
              mb: "25px",
              padding: "25px",
              borderRadius: "7px",
            }}
          >
            <Box
              sx={{
                display: { sm: "flex" },
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ mb: { xs: "10px", sm: "0" } }}>
                Showing 9 of 36 results
              </Typography>

              <Pagination
                count={4}
                variant="outlined"
                shape="rounded"
                color="primary"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductsGrid;
