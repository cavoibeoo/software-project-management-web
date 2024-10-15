"use client";

import * as React from "react";
import { Card, Box, Typography, Tabs, Tab, Button } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import styles from "@/components/Apps/Chat/Chat.module.css";
import ChatBox from "./ChatBox";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ChatContent: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Card
            className="chat-sidebar-card"
            sx={{
              boxShadow: "none",
              bgcolor: "#fff",
              mb: "25px",
              borderRadius: "7px",
              padding: { xs: "20px", sm: "25px" },
            }}
          >
            <Box mb="20px">
              <Typography
                variant="h5"
                fontWeight={500}
                fontSize={16}
                mb={0}
                className="text-black"
              >
                Messages
              </Typography>
            </Box>

            <Box>
              <form className={styles.searchBox}>
                <label>
                  <i className="material-symbols-outlined">search</i>
                </label>
                <input
                  type="text"
                  className={styles.inputSearch}
                  placeholder="Search"
                />
              </form>

              <Box mt="20px" className="rmui-chat-sidebar-tab">
                <Box sx={{ mb: "15px" }} className="border-bottom">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{
                      minHeight: "auto",
                    }}
                  >
                    <Tab
                      label="All Message"
                      {...a11yProps(0)}
                      sx={{
                        padding: "0 10px 8px",
                        textTransform: "capitalize",
                        minWidth: "auto",
                        fontSize: { xs: "13px", sm: "14px" },
                        fontWeight: "500",
                        minHeight: "auto",
                      }}
                    />
                    <Tab
                      label="Group Chat"
                      {...a11yProps(1)}
                      sx={{
                        padding: "0 10px 8px",
                        textTransform: "capitalize",
                        minWidth: "auto",
                        fontSize: { xs: "13px", sm: "14px" },
                        fontWeight: "500",
                        minHeight: "auto",
                      }}
                    />
                    <Tab
                      label="Contacts"
                      {...a11yProps(2)}
                      sx={{
                        padding: "0 10px 8px",
                        textTransform: "capitalize",
                        minWidth: "auto",
                        fontSize: { xs: "13px", sm: "14px" },
                        fontWeight: "500",
                        minHeight: "auto",
                      }}
                    />
                  </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                  <Box className={styles.chatUsersList}>
                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user31.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="success.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>

                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Sarah Smith
                          </Typography>

                          <Typography color="success.main" fontSize="12px">
                            Typing...
                          </Typography>
                        </Box>
                      </Box>

                      <Box>
                        <Typography fontSize="12px">Just Now</Typography>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user6.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="error.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>

                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Michael Johnson
                          </Typography>

                          <Typography
                            fontSize="12px"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <i className="ri-file-text-line"></i>
                            Attachment...
                          </Typography>
                        </Box>
                      </Box>

                      <Box>
                        <Typography fontSize="12px">10:20 AM</Typography>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user7.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="success.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>

                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Emily Brown
                          </Typography>

                          <Typography
                            fontSize="12px"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <i className="ri-mic-line"></i>
                            Voice message
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography fontSize="12px">9:30 AM</Typography>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user8.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="success.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            David Martinez
                          </Typography>
                          <Typography fontSize="12px">
                            Excellent work...
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography fontSize="12px">3:20 PM</Typography>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user9.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="error.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Jessica Taylor
                          </Typography>
                          <Typography fontSize="12px">
                            Hello! Mr.. 🔥
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography fontSize="12px">12:00 AM</Typography>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user10.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="success.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Christopher Lee
                          </Typography>
                          <Typography fontSize="12px">Very good...</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography fontSize="12px">8:30 PM</Typography>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user11.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="success.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Amanda Rodriguez
                          </Typography>
                          <Typography fontSize="12px">
                            That’s cool...
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography fontSize="12px">2:20 PM</Typography>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user12.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="success.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Daniel Garcia
                          </Typography>
                          <Typography fontSize="12px">
                            Good morning!😀
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography fontSize="12px">10:00 PM</Typography>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user13.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="error.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Jennifer Thomas
                          </Typography>
                          <Typography fontSize="12px">Hi John!</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography fontSize="12px">11:10 AM</Typography>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user14.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="error.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Elizabeth Clark
                          </Typography>
                          <Typography fontSize="12px">
                            Sounds good...
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography fontSize="12px">12:30 PM</Typography>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user15.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="error.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            William Lewis
                          </Typography>
                          <Typography fontSize="12px">
                            How are you?😐
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography fontSize="12px">11:20 AM</Typography>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user16.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="error.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Michelle King
                          </Typography>
                          <Typography fontSize="12px">Good evening!</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography fontSize="12px">10:40 PM</Typography>
                      </Box>
                    </Box>
                  </Box>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                  <Box mb="20px">
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "primary.main",
                        width: "100%",
                        display: "block",
                        borderRadius: "0",
                        boxShadow: "none",
                        fontWeight: "500",
                        fontSize: { sx: "14px", md: "15px", lg: "16px" },
                        padding: "10px 20px",
                        textTransform: "capitalize",
                        color: "#fff !important",
                      }}
                    >
                      + Create New Group
                    </Button>
                  </Box>

                  <div className={styles.chatUsersList}>
                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/products/product1.jpg"
                            alt="group-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            UI/UX Designer Group
                          </Typography>
                          <Typography fontSize="12px">
                            Divan: Sure I’ll submit the file...
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography fontSize="12px">Just Now</Typography>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/products/product2.jpg"
                            alt="group-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Web Development Group
                          </Typography>
                          <Typography fontSize="12px">
                            Divan:{" "}
                            <span className="text-success">Typing...</span>
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography fontSize="12px">10:20 AM</Typography>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/products/product3.jpg"
                            alt="group-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Discussion Group
                          </Typography>
                          <Typography fontSize="12px">
                            Divan: Great ! 🔥
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography fontSize="12px">9:30 AM</Typography>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/products/product4.jpg"
                            alt="group-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Design Group
                          </Typography>
                          <Typography fontSize="12px">
                            Olivia: Hello! Mr..
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography fontSize="12px">12:00 AM</Typography>
                      </Box>
                    </Box>
                  </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={2}>
                  <div className={styles.chatUsersList}>
                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user31.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="success.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Sarah Smith
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user6.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="error.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Michael Johnson
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user7.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="success.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Emily Brown
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user8.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="success.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            David Martinez
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user9.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="error.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Jessica Taylor
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user10.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="success.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Christopher Lee
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user11.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="success.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Amanda Rodriguez
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user12.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="success.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Daniel Garcia
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user13.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="error.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Jennifer Thomas
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user14.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="error.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Elizabeth Clark
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user15.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="error.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            William Lewis
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      className={styles.singleUserItem}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box position="relative">
                          <Image
                            src="/images/users/user16.jpg"
                            alt="user-image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "100px" }}
                          />
                          <Box
                            bgcolor="error.main"
                            sx={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #fff",
                              borderRadius: "100px",
                              position: "absolute",
                              bottom: "4px",
                              right: "0",
                            }}
                          ></Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            fontSize="13px"
                            className="text-black"
                          >
                            Michelle King
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </div>
                </CustomTabPanel>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <ChatBox />
        </Grid>
      </Grid>
    </>
  );
};

export default ChatContent;
