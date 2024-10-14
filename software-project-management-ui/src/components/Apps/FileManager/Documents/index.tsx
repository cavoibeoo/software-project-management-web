"use client";

import * as React from "react";
import Image from "next/image";
import { Grid, Box, IconButton, Typography, Tooltip } from "@mui/material";

const Personal: React.FC = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/png.png"
                alt="png-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              Projects
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/jpg.png"
                alt="jpg-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              Documents
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/txt.png"
                alt="txt-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              Media
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/pdf.png"
                alt="pdf-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              Applications
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/xl4.png"
                alt="xl4-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              ET Template
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/doc.png"
                alt="doc-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              React Template
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/png.png"
                alt="png-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              Material UI
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/jpg.png"
                alt="jpg-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              WP Themes
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/txt.png"
                alt="txt-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              Personal Photos
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/pdf.png"
                alt="pdf-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              Mobile Apps
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/xl4.png"
                alt="xl4-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              Important Files
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/jpg.png"
                alt="jpg-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              Angular Template
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/png.png"
                alt="png-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              Projects
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/jpg.png"
                alt="jpg-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              Documents
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/txt.png"
                alt="txt-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              Media
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              padding: "25px",
              mb: "25px",
              textAlign: "center",
            }}
          >
            <Box mb="15px">
              <Image
                src="/images/icons/pdf.png"
                alt="pdf-image"
                width={56}
                height={56}
              />
            </Box>

            <Typography
              fontWeight={700}
              fontSize="15px"
              className="text-black"
              mb="10px"
            >
              Applications
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Tooltip title="View" arrow>
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
              </Tooltip>

              <Tooltip title="Edit" arrow>
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
              </Tooltip>

              <Tooltip title="Delete" arrow>
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
              </Tooltip>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Personal;
