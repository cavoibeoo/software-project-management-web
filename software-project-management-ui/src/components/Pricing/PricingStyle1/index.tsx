"use client";

import * as React from "react";
import { Grid, Typography, Button } from "@mui/material";
import styles from "@/components/Pricing/PricingStyle1/PricingStyle1.module.css";

const PricingStyle1: React.FC = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={12} lg={12} xl={6}>
          <div className={`border-radius bg-white ${styles.pricingStyle1Card}`}>
            <div className={styles.cardContent}>
              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
                <Grid item xs={12} sm={6}>
                  <div className={styles.info}>
                    <div className={styles.title}>
                      <span>Standard</span>
                    </div>

                    <div className={`text-black ${styles.price}`}>
                      $89<span>.99</span>
                    </div>

                    <Typography
                      component="span"
                      fontWeight={500}
                      display="block"
                      mb="20px"
                    >
                      For individual user
                    </Typography>

                    <Button
                      type="button"
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                        borderRadius: "6px",
                        fontWeight: "500",
                        fontSize: { xs: "13px", sm: "16px" },
                        padding: { xs: "10px 20px" },
                        color: "#fff !important",
                        boxShadow: "none",
                      }}
                    >
                      <i
                        className="material-symbols-outlined mr-5"
                        style={{ fontSize: "16px" }}
                      >
                        arrow_forward_ios
                      </i>
                      Buy Now
                    </Button>

                    <div className={styles.popular}>Most Popular</div>
                  </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <ul className={styles.featuresList}>
                    <li>
                      <i className="material-symbols-outlined">check</i>
                      Advanced Dashboard
                    </li>
                    <li>
                      <i className="material-symbols-outlined">check</i>
                      Task Management
                    </li>
                    <li>
                      <i className="material-symbols-outlined">check</i>
                      File Storage (5GB)
                    </li>
                    <li>
                      <i className="material-symbols-outlined">check</i>
                      Email Integration
                    </li>
                    <li>
                      <i className="material-symbols-outlined">check</i>
                      Mobile App Access
                    </li>
                    <li>
                      <i className="material-symbols-outlined">check</i>
                      Custom Branding
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          <div className={`border-radius bg-white ${styles.pricingStyle1Card}`}>
            <div className={styles.cardContent}>
              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
                <Grid item xs={12} sm={6}>
                  <div className={styles.info}>
                    <div className={styles.title}>
                      <span>Premium</span>
                    </div>

                    <div className={`text-black ${styles.price}`}>
                      $119<span>.99</span>
                    </div>

                    <Typography
                      component="span"
                      fontWeight={500}
                      display="block"
                      mb="20px"
                    >
                      For team of 10 users
                    </Typography>

                    <Button
                      type="button"
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                        borderRadius: "6px",
                        fontWeight: "500",
                        fontSize: { xs: "13px", sm: "16px" },
                        padding: { xs: "10px 20px" },
                        color: "#fff !important",
                        boxShadow: "none",
                      }}
                    >
                      <i
                        className="material-symbols-outlined mr-5"
                        style={{ fontSize: "16px" }}
                      >
                        arrow_forward_ios
                      </i>
                      Buy Now
                    </Button>
                  </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <ul className={styles.featuresList}>
                    <li>
                      <i className="material-symbols-outlined">check</i>
                      Customizable Dashboard
                    </li>
                    <li>
                      <i className="material-symbols-outlined">check</i>
                      Task Management
                    </li>
                    <li>
                      <i className="material-symbols-outlined">check</i>
                      File Storage (Unlimited)
                    </li>
                    <li>
                      <i className="material-symbols-outlined">check</i>
                      Custom Reporting
                    </li>
                    <li>
                      <i className="material-symbols-outlined">check</i>
                      24/7 Premium Support
                    </li>
                    <li>
                      <i className="material-symbols-outlined">check</i>
                      White-label Solution
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default PricingStyle1;
