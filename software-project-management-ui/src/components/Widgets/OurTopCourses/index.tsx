"use client";

import * as React from "react";
import { Button, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "@/components/Widgets/OurTopCourses/OurTopCourses.module.css";

const OurTopCourses: React.FC = () => {
  return (
    <>
      <div className={styles.ourTopCoursesCard}>
        <h5 className={styles.heading}>Our Top Courses</h5>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="top-courses"
        >
          <SwiperSlide>
            <div className={styles.sliderContent}>
              <Box
                className="d-flex align-items-center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  className={styles.image}
                  sx={{
                    borderRadius: "7px",
                    flex: "shrink-1",
                  }}
                >
                  <Image
                    src="/images/courses/course1.jpg"
                    alt="course-image"
                    width={520}
                    height={520}
                    style={{ borderRadius: "7px" }}
                  />
                </Box>

                <div className={styles.content}>
                  <span className="d-block text-white">Basic Python</span>
                  <div className={styles.price}>$35.99</div>
                </div>
              </Box>

              <div className={styles.info}>
                <span className="text-white">Course content</span>

                <ul>
                  <li>10 sections</li>
                  <li>45 lectures</li>
                  <li>25h 50m</li>
                </ul>

                <Box textAlign="end">
                  <Link href="#">
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#fff",
                        borderColor: "#fff",
                        textTransform: "capitalize",
                      }}
                    >
                      <i className="material-symbols-outlined">add</i>
                      View Details
                    </Button>
                  </Link>
                </Box>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.sliderContent}>
              <Box
                className="d-flex align-items-center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  className={styles.image}
                  sx={{
                    borderRadius: "7px",
                    flex: "shrink-1",
                  }}
                >
                  <Image
                    src="/images/courses/course2.jpg"
                    alt="course-image"
                    width={520}
                    height={520}
                    style={{ borderRadius: "7px" }}
                  />
                </Box>

                <div className={styles.content}>
                  <span className="d-block text-white">HTML Developer</span>
                  <div className={styles.price}>$49.99</div>
                </div>
              </Box>

              <div className={styles.info}>
                <span className="text-white">Course content</span>

                <ul>
                  <li>12 sections</li>
                  <li>54 lectures</li>
                  <li>35h 40m</li>
                </ul>

                <Box textAlign="end">
                  <Link href="#">
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#fff",
                        borderColor: "#fff",
                        textTransform: "capitalize",
                      }}
                    >
                      <i className="material-symbols-outlined">add</i>
                      View Details
                    </Button>
                  </Link>
                </Box>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.sliderContent}>
              <Box
                className="d-flex align-items-center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  className={styles.image}
                  sx={{
                    borderRadius: "7px",
                    flex: "shrink-1",
                  }}
                >
                  <Image
                    src="/images/courses/course3.jpg"
                    alt="course-image"
                    width={520}
                    height={520}
                    style={{ borderRadius: "7px" }}
                  />
                </Box>

                <div className={styles.content}>
                  <span className="d-block text-white">Basic Angular</span>
                  <div className={styles.price}>$55.99</div>
                </div>
              </Box>

              <div className={styles.info}>
                <span className="text-white">Course content</span>

                <ul>
                  <li>12 sections</li>
                  <li>48 lectures</li>
                  <li>29h 30m</li>
                </ul>

                <Box textAlign="end">
                  <Link href="#">
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#fff",
                        borderColor: "#fff",
                        textTransform: "capitalize",
                      }}
                    >
                      <i className="material-symbols-outlined">add</i>
                      View Details
                    </Button>
                  </Link>
                </Box>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default OurTopCourses;
