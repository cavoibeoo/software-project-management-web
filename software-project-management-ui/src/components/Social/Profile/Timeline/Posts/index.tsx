"use client";

import * as React from "react";
import {
  Card,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import Image from "next/image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "@/components/Social/Profile/Timeline/Posts/Posts.module.css";

const Posts: React.FC = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Post #1 */}
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
            paddingBottom: "20px",
            mb: "18px",
          }}
          className="border-bottom"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box>
              <Image
                src="/images/users/user6.jpg"
                className="rounded-circle"
                alt="user-image"
                width={50}
                height={50}
              />
            </Box>
            <Box>
              <Typography fontWeight={700} className="text-black">
                Cynthia Baggett
              </Typography>

              <Typography>05 mins ago</Typography>
            </Box>
          </Box>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <MoreHorizIcon sx={{ fontSize: "25px" }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,

                sx: {
                  overflow: "visible",
                  minWidth: "150px",
                  boxShadow: "0 4px 45px #0000001a",
                  mt: 0,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>Save Post</MenuItem>
              <MenuItem>Hide Post</MenuItem>
              <MenuItem>Report Photo</MenuItem>
              <MenuItem>Block Cynthia</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box className={styles.postContent}>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>

          <Typography>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions.
          </Typography>
        </Box>

        <Box
          className="border-top border-bottom"
          sx={{
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            py: "15px",
            gap: "30px",
            mt: "20px",
            mb: "20px",
          }}
        >
          <IconButton
            sx={{
              padding: "0",
              borderRadius: "0",
              fontSize: "14px",
            }}
            className="mr-15"
          >
            <i
              className="material-symbols-outlined mr-5"
              style={{
                fontSize: "18px",
              }}
            >
              thumb_up
            </i>
            10 Likes
          </IconButton>

          <IconButton
            sx={{
              padding: "0",
              borderRadius: "0",
              fontSize: "14px",
            }}
            className="mr-15"
          >
            <i
              className="material-symbols-outlined mr-5"
              style={{
                fontSize: "18px",
              }}
            >
              chat_bubble_outline
            </i>
            0 Comments
          </IconButton>

          <IconButton
            sx={{
              padding: "0",
              borderRadius: "0",
              fontSize: "14px",
            }}
            className="mr-15"
          >
            <i
              className="material-symbols-outlined mr-5"
              style={{
                fontSize: "18px",
              }}
            >
              share
            </i>
            0 Share
          </IconButton>
        </Box>

        <Box
          className="cp-footer"
          sx={{
            display: { sm: "flex" },
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: { xs: "10px", sm: "0" },
            }}
          >
            <Image
              src="/images/profile.jpg"
              className="rounded-circle"
              alt="profile-image"
              width={55}
              height={55}
            />
          </Box>

          <Box sx={{ flex: "1 1 auto" }}>
            <form>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <TextField
                    autoComplete="message"
                    name="message"
                    required
                    fullWidth
                    id="message"
                    label="Type something"
                    autoFocus
                    InputProps={{
                      style: {
                        borderRadius: 7,
                      },
                    }}
                    sx={{
                      borderRadius: "7px",
                    }}
                    className="bg-white"
                  />
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "primary.main",
                      padding: "14px 10px",
                      color: "#fff !important",
                    }}
                  >
                    <i className="material-symbols-outlined">send</i>
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: { xs: "10px", sm: "0" },
            }}
          >
            <IconButton aria-label="call" size="small">
              <i
                className="material-symbols-outlined"
                style={{ fontSize: "18px" }}
              >
                sentiment_satisfied
              </i>
            </IconButton>

            <IconButton aria-label="video" size="small">
              <i
                className="material-symbols-outlined"
                style={{ fontSize: "18px" }}
              >
                attach_file
              </i>
            </IconButton>
          </Box>
        </Box>
      </Card>

      {/* Post #2 */}
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
            paddingBottom: "20px",
            mb: "18px",
          }}
          className="border-bottom"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box>
              <Image
                src="/images/users/user7.jpg"
                className="rounded-circle"
                alt="user-image"
                width={50}
                height={50}
              />
            </Box>
            <Box>
              <Typography fontWeight={700} className="text-black">
                Douglas Hairston
              </Typography>

              <Typography>1 hour ago</Typography>
            </Box>
          </Box>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <MoreHorizIcon sx={{ fontSize: "25px" }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,

                sx: {
                  overflow: "visible",
                  minWidth: "150px",
                  boxShadow: "0 4px 45px #0000001a",
                  mt: 0,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>Save Post</MenuItem>
              <MenuItem>Hide Post</MenuItem>
              <MenuItem>Report Photo</MenuItem>
              <MenuItem>Block Cynthia</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box className={styles.postContent}>
          <Typography>
            t was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of lorem
            ipsum.
          </Typography>
        </Box>

        <Box
          className="border-top border-bottom"
          sx={{
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            py: "15px",
            gap: "30px",
            mt: "20px",
            mb: "20px",
          }}
        >
          <IconButton
            sx={{
              padding: "0",
              borderRadius: "0",
              fontSize: "14px",
            }}
            className="mr-15"
          >
            <i
              className="material-symbols-outlined mr-5"
              style={{
                fontSize: "18px",
              }}
            >
              thumb_up
            </i>
            42 Likes
          </IconButton>

          <IconButton
            sx={{
              padding: "0",
              borderRadius: "0",
              fontSize: "14px",
            }}
            className="mr-15"
          >
            <i
              className="material-symbols-outlined mr-5"
              style={{
                fontSize: "18px",
              }}
            >
              chat_bubble_outline
            </i>
            2 Comments
          </IconButton>

          <IconButton
            sx={{
              padding: "0",
              borderRadius: "0",
              fontSize: "14px",
            }}
            className="mr-15"
          >
            <i
              className="material-symbols-outlined mr-5"
              style={{
                fontSize: "18px",
              }}
            >
              share
            </i>
            1 Share
          </IconButton>
        </Box>

        <Box
          className="cp-footer"
          sx={{
            display: { sm: "flex" },
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: { xs: "10px", sm: "0" },
            }}
          >
            <Image
              src="/images/profile.jpg"
              className="rounded-circle"
              alt="profile-image"
              width={55}
              height={55}
            />
          </Box>

          <Box sx={{ flex: "1 1 auto" }}>
            <form>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <TextField
                    autoComplete="message"
                    name="message"
                    required
                    fullWidth
                    id="message"
                    label="Type something"
                    autoFocus
                    InputProps={{
                      style: {
                        borderRadius: 7,
                      },
                    }}
                    sx={{
                      borderRadius: "7px",
                    }}
                    className="bg-white"
                  />
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "primary.main",
                      padding: "14px 10px",
                      color: "#fff !important",
                    }}
                  >
                    <i className="material-symbols-outlined">send</i>
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: { xs: "10px", sm: "0" },
            }}
          >
            <IconButton aria-label="call" size="small">
              <i
                className="material-symbols-outlined"
                style={{ fontSize: "18px" }}
              >
                sentiment_satisfied
              </i>
            </IconButton>

            <IconButton aria-label="video" size="small">
              <i
                className="material-symbols-outlined"
                style={{ fontSize: "18px" }}
              >
                attach_file
              </i>
            </IconButton>
          </Box>
        </Box>
      </Card>

      {/* Post #3 */}
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
            paddingBottom: "20px",
            mb: "18px",
          }}
          className="border-bottom"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box>
              <Image
                src="/images/users/user8.jpg"
                className="rounded-circle"
                alt="user-image"
                width={50}
                height={50}
              />
            </Box>
            <Box>
              <Typography fontWeight={700} className="text-black">
                Olivia John
              </Typography>

              <Typography>1 day ago</Typography>
            </Box>
          </Box>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <MoreHorizIcon sx={{ fontSize: "25px" }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,

                sx: {
                  overflow: "visible",
                  minWidth: "150px",
                  boxShadow: "0 4px 45px #0000001a",
                  mt: 0,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>Save Post</MenuItem>
              <MenuItem>Hide Post</MenuItem>
              <MenuItem>Report Photo</MenuItem>
              <MenuItem>Block Cynthia</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box className={styles.postContent}>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </Box>

        <Box
          className="border-top border-bottom"
          sx={{
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            py: "15px",
            gap: "30px",
            mt: "20px",
            mb: "20px",
          }}
        >
          <IconButton
            sx={{
              padding: "0",
              borderRadius: "0",
              fontSize: "14px",
            }}
            className="mr-15"
          >
            <i
              className="material-symbols-outlined mr-5"
              style={{
                fontSize: "18px",
              }}
            >
              thumb_up
            </i>
            100 Likes
          </IconButton>

          <IconButton
            sx={{
              padding: "0",
              borderRadius: "0",
              fontSize: "14px",
            }}
            className="mr-15"
          >
            <i
              className="material-symbols-outlined mr-5"
              style={{
                fontSize: "18px",
              }}
            >
              chat_bubble_outline
            </i>
            16 Comments
          </IconButton>

          <IconButton
            sx={{
              padding: "0",
              borderRadius: "0",
              fontSize: "14px",
            }}
            className="mr-15"
          >
            <i
              className="material-symbols-outlined mr-5"
              style={{
                fontSize: "18px",
              }}
            >
              share
            </i>
            5 Share
          </IconButton>
        </Box>

        <Box
          className="cp-footer"
          sx={{
            display: { sm: "flex" },
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: { xs: "10px", sm: "0" },
            }}
          >
            <Image
              src="/images/profile.jpg"
              className="rounded-circle"
              alt="profile-image"
              width={55}
              height={55}
            />
          </Box>

          <Box sx={{ flex: "1 1 auto" }}>
            <form>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <TextField
                    autoComplete="message"
                    name="message"
                    required
                    fullWidth
                    id="message"
                    label="Type something"
                    autoFocus
                    InputProps={{
                      style: {
                        borderRadius: 7,
                      },
                    }}
                    sx={{
                      borderRadius: "7px",
                    }}
                    className="bg-white"
                  />
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "primary.main",
                      padding: "14px 10px",
                      color: "#fff !important",
                    }}
                  >
                    <i className="material-symbols-outlined">send</i>
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: { xs: "10px", sm: "0" },
            }}
          >
            <IconButton aria-label="call" size="small">
              <i
                className="material-symbols-outlined"
                style={{ fontSize: "18px" }}
              >
                sentiment_satisfied
              </i>
            </IconButton>

            <IconButton aria-label="video" size="small">
              <i
                className="material-symbols-outlined"
                style={{ fontSize: "18px" }}
              >
                attach_file
              </i>
            </IconButton>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Posts;
