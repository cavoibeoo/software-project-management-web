"use client";

import * as React from "react";
import { Grid, Box, Button, Pagination, Typography } from "@mui/material";
import Image from "next/image";
import styles from "@/components/ProjectManagement/PmClients/PmClients.module.css";

const PmClients: React.FC = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <div className={`bg-white ${styles.clientCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.image}>
                <Image
                  src="/images/clients/client1.jpg"
                  className="border-radius"
                  alt="client-image"
                  width={264}
                  height={204}
                />
              </div>

              <div className={styles.content}>
                <span className={styles.title}>CodeCraft</span>
                <span className={styles.subTitle}>info&#64;codecraft.com</span>
              </div>

              <ul>
                <li className="text-black">
                  <span className="text-body">Name:</span>
                  Olivia Taylor
                </li>

                <li className="text-black">
                  <span className="text-body">Phone:</span>
                  (555) 555-5555
                </li>

                <li className="text-black">
                  <span className="text-body">Projects:</span>
                  12
                </li>
              </ul>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <a href="mailto:info@codecraft.com">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                      color: "#fff !important",
                    }}
                  >
                    Message
                  </Button>
                </a>

                <a href="#">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                    }}
                  >
                    View Project
                  </Button>
                </a>
              </Box>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <div className={`bg-white ${styles.clientCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.image}>
                <Image
                  src="/images/clients/client2.jpg"
                  className="border-radius"
                  alt="client-image"
                  width={264}
                  height={204}
                />
              </div>

              <div className={styles.content}>
                <span className={styles.title}>ByteSavvy</span>
                <span className={styles.subTitle}>info&#64;bytesavvy.com</span>
              </div>

              <ul>
                <li className="text-black">
                  <span className="text-body">Name:</span>
                  David Smith
                </li>

                <li className="text-black">
                  <span className="text-body">Phone:</span>
                  (555) 123-4567
                </li>

                <li className="text-black">
                  <span className="text-body">Projects:</span>
                  16
                </li>
              </ul>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <a href="mailto:info@bytesavvy.com">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                      color: "#fff !important",
                    }}
                  >
                    Message
                  </Button>
                </a>

                <a href="#">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                    }}
                  >
                    View Project
                  </Button>
                </a>
              </Box>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <div className={`bg-white ${styles.clientCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.image}>
                <Image
                  src="/images/clients/client3.jpg"
                  className="border-radius"
                  alt="client-image"
                  width={264}
                  height={204}
                />
              </div>

              <div className={styles.content}>
                <span className={styles.title}>DataTech</span>
                <span className={styles.subTitle}>info&#64;datatech.com</span>
              </div>

              <ul>
                <li className="text-black">
                  <span className="text-body">Name:</span>
                  Alice Johnson
                </li>

                <li className="text-black">
                  <span className="text-body">Phone:</span>
                  (555) 234-5678
                </li>

                <li className="text-black">
                  <span className="text-body">Projects:</span>
                  07
                </li>
              </ul>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <a href="mailto:info@datatech.com">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                      color: "#fff !important",
                    }}
                  >
                    Message
                  </Button>
                </a>

                <a href="#">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                    }}
                  >
                    View Project
                  </Button>
                </a>
              </Box>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <div className={`bg-white ${styles.clientCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.image}>
                <Image
                  src="/images/clients/client4.jpg"
                  className="border-radius"
                  alt="client-image"
                  width={264}
                  height={204}
                />
              </div>

              <div className={styles.content}>
                <span className={styles.title}>CyberByte</span>
                <span className={styles.subTitle}>info&#64;cyberbyte.com</span>
              </div>

              <ul>
                <li className="text-black">
                  <span className="text-body">Name:</span>
                  Emily Brown
                </li>

                <li className="text-black">
                  <span className="text-body">Phone:</span>
                  (555) 345-6789
                </li>

                <li className="text-black">
                  <span className="text-body">Projects:</span>
                  05
                </li>
              </ul>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <a href="mailto:info@cyberbyte.com">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                      color: "#fff !important",
                    }}
                  >
                    Message
                  </Button>
                </a>

                <a href="#">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                    }}
                  >
                    View Project
                  </Button>
                </a>
              </Box>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <div className={`bg-white ${styles.clientCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.image}>
                <Image
                  src="/images/clients/client5.jpg"
                  className="border-radius"
                  alt="client-image"
                  width={264}
                  height={204}
                />
              </div>

              <div className={styles.content}>
                <span className={styles.title}>NetGen</span>
                <span className={styles.subTitle}>info&#64;netgen.com</span>
              </div>

              <ul>
                <li className="text-black">
                  <span className="text-body">Name:</span>
                  James Wilson
                </li>

                <li className="text-black">
                  <span className="text-body">Phone:</span>
                  (555) 456-7890
                </li>

                <li className="text-black">
                  <span className="text-body">Projects:</span>
                  14
                </li>
              </ul>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <a href="mailto:info@netgen.com">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                      color: "#fff !important",
                    }}
                  >
                    Message
                  </Button>
                </a>

                <a href="#">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                    }}
                  >
                    View Project
                  </Button>
                </a>
              </Box>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <div className={`bg-white ${styles.clientCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.image}>
                <Image
                  src="/images/clients/client6.jpg"
                  className="border-radius"
                  alt="client-image"
                  width={264}
                  height={204}
                />
              </div>

              <div className={styles.content}>
                <span className={styles.title}>TechFuse</span>
                <span className={styles.subTitle}>info&#64;techfuse.com</span>
              </div>

              <ul>
                <li className="text-black">
                  <span className="text-body">Name:</span>
                  Michael Jones
                </li>

                <li className="text-black">
                  <span className="text-body">Phone:</span>
                  (555) 567-8901
                </li>

                <li className="text-black">
                  <span className="text-body">Projects:</span>
                  18
                </li>
              </ul>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <a href="mailto:info@techfuse.com">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                      color: "#fff !important",
                    }}
                  >
                    Message
                  </Button>
                </a>

                <a href="#">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                    }}
                  >
                    View Project
                  </Button>
                </a>
              </Box>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <div className={`bg-white ${styles.clientCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.image}>
                <Image
                  src="/images/clients/client7.jpg"
                  className="border-radius"
                  alt="client-image"
                  width={264}
                  height={204}
                />
              </div>

              <div className={styles.content}>
                <span className={styles.title}>CodeGen</span>
                <span className={styles.subTitle}>info&#64;codegen.com</span>
              </div>

              <ul>
                <li className="text-black">
                  <span className="text-body">Name:</span>
                  Sophia Martinez
                </li>

                <li className="text-black">
                  <span className="text-body">Phone:</span>
                  (555) 678-9012
                </li>

                <li className="text-black">
                  <span className="text-body">Projects:</span>
                  34
                </li>
              </ul>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <a href="mailto:info@codegen.com">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                      color: "#fff !important",
                    }}
                  >
                    Message
                  </Button>
                </a>

                <a href="#">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                    }}
                  >
                    View Project
                  </Button>
                </a>
              </Box>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <div className={`bg-white ${styles.clientCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.image}>
                <Image
                  src="/images/clients/client8.jpg"
                  className="border-radius"
                  alt="client-image"
                  width={264}
                  height={204}
                />
              </div>

              <div className={styles.content}>
                <span className={styles.title}>WebWiz</span>
                <span className={styles.subTitle}>info&#64;webwiz.com</span>
              </div>

              <ul>
                <li className="text-black">
                  <span className="text-body">Name:</span>
                  William Davis
                </li>

                <li className="text-black">
                  <span className="text-body">Phone:</span>
                  (555) 789-0123
                </li>

                <li className="text-black">
                  <span className="text-body">Projects:</span>
                  08
                </li>
              </ul>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <a href="mailto:info@webwiz.com">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                      color: "#fff !important",
                    }}
                  >
                    Message
                  </Button>
                </a>

                <a href="#">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                    }}
                  >
                    View Project
                  </Button>
                </a>
              </Box>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <div className={`bg-white ${styles.clientCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.image}>
                <Image
                  src="/images/clients/client9.jpg"
                  className="border-radius"
                  alt="client-image"
                  width={264}
                  height={204}
                />
              </div>

              <div className={styles.content}>
                <span className={styles.title}>ByteTech</span>
                <span className={styles.subTitle}>info&#64;bytetech.com</span>
              </div>

              <ul>
                <li className="text-black">
                  <span className="text-body">Name:</span>
                  Ava Anderson
                </li>

                <li className="text-black">
                  <span className="text-body">Phone:</span>
                  (555) 890-1234
                </li>

                <li className="text-black">
                  <span className="text-body">Projects:</span>
                  03
                </li>
              </ul>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <a href="mailto:info@bytetech.com">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                      color: "#fff !important",
                    }}
                  >
                    Message
                  </Button>
                </a>

                <a href="#">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                    }}
                  >
                    View Project
                  </Button>
                </a>
              </Box>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <div className={`bg-white ${styles.clientCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.image}>
                <Image
                  src="/images/clients/client10.jpg"
                  className="border-radius"
                  alt="client-image"
                  width={264}
                  height={204}
                />
              </div>

              <div className={styles.content}>
                <span className={styles.title}>CloudFlex</span>
                <span className={styles.subTitle}>info&#64;codecraft.com</span>
              </div>

              <ul>
                <li className="text-black">
                  <span className="text-body">Name:</span>
                  Ethan Thomas
                </li>

                <li className="text-black">
                  <span className="text-body">Phone:</span>
                  (555) 901-2345
                </li>

                <li className="text-black">
                  <span className="text-body">Projects:</span>
                  10
                </li>
              </ul>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <a href="mailto:info@cloudflex.com">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                      color: "#fff !important",
                    }}
                  >
                    Message
                  </Button>
                </a>

                <a href="#">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                    }}
                  >
                    View Project
                  </Button>
                </a>
              </Box>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <div className={`bg-white ${styles.clientCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.image}>
                <Image
                  src="/images/clients/client11.jpg"
                  className="border-radius"
                  alt="client-image"
                  width={264}
                  height={204}
                />
              </div>

              <div className={styles.content}>
                <span className={styles.title}>WebWorx</span>
                <span className={styles.subTitle}>info&#64;webworx.com</span>
              </div>

              <ul>
                <li className="text-black">
                  <span className="text-body">Name:</span>
                  Isabella Clark
                </li>

                <li className="text-black">
                  <span className="text-body">Phone:</span>
                  (555) 012-3456
                </li>

                <li className="text-black">
                  <span className="text-body">Projects:</span>
                  25
                </li>
              </ul>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <a href="mailto:info@webworx.com">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                      color: "#fff !important",
                    }}
                  >
                    Message
                  </Button>
                </a>

                <a href="#">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                    }}
                  >
                    View Project
                  </Button>
                </a>
              </Box>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <div className={`bg-white ${styles.clientCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.image}>
                <Image
                  src="/images/clients/client12.jpg"
                  className="border-radius"
                  alt="client-image"
                  width={264}
                  height={204}
                />
              </div>

              <div className={styles.content}>
                <span className={styles.title}>TechSync</span>
                <span className={styles.subTitle}>info&#64;techsync.com</span>
              </div>

              <ul>
                <li className="text-black">
                  <span className="text-body">Name:</span>
                  Alexander Lewis
                </li>

                <li className="text-black">
                  <span className="text-body">Phone:</span>
                  (555) 210-9876
                </li>

                <li className="text-black">
                  <span className="text-body">Projects:</span>
                  15
                </li>
              </ul>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <a href="mailto:info@techsync.com">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                      color: "#fff !important",
                    }}
                  >
                    Message
                  </Button>
                </a>

                <a href="#">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      boxShadow: "none",
                      textTransform: "capitalize",
                      borderRadius: "7px",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "4px 16px",
                    }}
                  >
                    View Project
                  </Button>
                </a>
              </Box>
            </div>
          </div>
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

export default PmClients;
