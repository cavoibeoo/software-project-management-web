"use client";

import * as React from "react";
import { Grid, Card, Box, Typography, Button } from "@mui/material";
import ProductImg from "./ProductImg";
import ProductTypes from "./ProductTypes";
import Capacity from "./Capacity";
import Color from "./Color";
import QuantityCounter from "./QuantityCounter";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ProductDetailsTabs from "./ProductDetailsTabs";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ProductDetailsContent: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px", xl: "40px" },
        }}
        className="product-details-card"
      >
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 6 }}
          spacing={{ xs: 2, sm: 2, md: 2, lg: 3, xl: 0 }}
          sx={{
            maxWidth: { lg: "1070px" },
          }}
        >
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ProductImg />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className="product-details-content">
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  bgcolor: "#eeffe5",
                  color: "success.main",
                  padding: "4px 15px",
                  borderRadius: "7px",
                  mb: "10px",
                  fontSize: "12px",
                }}
              >
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "19px" }}
                >
                  check
                </i>
                in stock
              </Box>

              <Typography
                variant="h6"
                fontWeight={500}
                fontSize="18px"
                mb="10px"
                className="text-black"
              >
                Apple MacBook Pro 16.2" with Liquid Retina XDR Display, M2 Max
                Chip with 12-Core CPU
              </Typography>

              <Box
                className="ratings border-bottom"
                sx={{
                  paddingBottom: "20px",
                  marginBottom: "20px",
                }}
              >
                <i
                  className="ri-star-fill"
                  style={{ fontSize: "16px", color: "#ffc107" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ fontSize: "16px", color: "#ffc107" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ fontSize: "16px", color: "#ffc107" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ fontSize: "16px", color: "#ffc107" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ fontSize: "16px", color: "#ffc107" }}
                ></i>
                <span style={{ fontSize: "12px" }} className="ml-12">
                  (76 reviews)
                </span>
              </Box>

              <Box
                className="price"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  mb: "15px",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  fontSize="18px"
                  className="text-black"
                >
                  $3,499
                </Typography>
                <Typography
                  variant="h6"
                  fontSize="16px"
                  fontWeight={400}
                  className="text-body"
                >
                  $3,799
                </Typography>
              </Box>

              <Box mb="15px">
                <ProductTypes />
              </Box>

              <Box mb="15px">
                <Capacity />
              </Box>

              <Box mb="25px">
                <Color />
              </Box>

              <Box
                className="add-to-cart"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                mb="25px"
              >
                <QuantityCounter />

                <Button
                  type="button"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "7px",
                    fontWeight: "500",
                    fontSize: { xs: "12px", sm: "13px" },
                    padding: "2.1px 22px",
                    boxShadow: "none",
                    color: "#fff !important",
                  }}
                >
                  <i
                    className="ri-shopping-cart-line mr-10"
                    style={{ fontSize: "17px" }}
                  ></i>
                  Add To Cart
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mb: "10px",
                }}
              >
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  sx={{
                    bgcolor: "#eceef2",
                    padding: "5px",
                  }}
                />

                <Typography
                  variant="h6"
                  className="text-black"
                  fontWeight={500}
                  fontSize="14px"
                >
                  Add to wishlist
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mb: "25px",
                }}
              >
                <i
                  className="material-symbols-outlined"
                  style={{
                    fontSize: "18px",
                    background: "#eceef2",
                    width: "31px",
                    height: "31px",
                    textAlign: "center",
                    lineHeight: "31px",
                    borderRadius: "100px",
                  }}
                >
                  visibility
                </i>
                565 people are viewing the products
              </Box>

              <Box
                className="border-top border-bottom"
                sx={{
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  mb: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    mb: "5px",
                  }}
                >
                  <i
                    className="material-symbols-outlined text-success"
                    style={{ fontSize: "20px" }}
                  >
                    check
                  </i>
                  Free delivery today
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    mb: "5px",
                  }}
                >
                  <i
                    className="material-symbols-outlined text-success"
                    style={{ fontSize: "20px" }}
                  >
                    check
                  </i>
                  100% money back Guarantee
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    mb: "5px",
                  }}
                >
                  <i
                    className="material-symbols-outlined text-success"
                    style={{ fontSize: "20px" }}
                  >
                    check
                  </i>{" "}
                  7 days product return policy
                </Box>
              </Box>

              <Box mb="20px">
                <Box
                  sx={{
                    display: "flex",
                    alingItems: "center",
                    gap: "5px",
                    mb: "5px",
                  }}
                >
                  SKU:{" "}
                  <Typography fontWeight={500} className="text-black">
                    SMTGS6T45
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alingItems: "center",
                    gap: "5px",
                    mb: "5px",
                  }}
                >
                  Category:{" "}
                  <Typography fontWeight={500} className="text-black">
                    computer
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alingItems: "center",
                    gap: "5px",
                    mb: "5px",
                  }}
                >
                  Tags:{" "}
                  <Typography fontWeight={500} className="text-black">
                    laptop, macbook, PC
                  </Typography>
                </Box>
              </Box>

              <div className="share-to-socials">
                <span className="title">Share:</span>
                <a href="#" target="_blank" mat-button>
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="#" target="_blank" mat-button>
                  <i className="ri-twitter-x-fill"></i>
                </a>
                <a href="#" target="_blank" mat-button>
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a href="#" target="_blank" mat-button>
                  <i className="ri-whatsapp-line"></i>
                </a>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Card>

      {/* ProductDetailsTabs */}
      <ProductDetailsTabs />
    </>
  );
};

export default ProductDetailsContent;
