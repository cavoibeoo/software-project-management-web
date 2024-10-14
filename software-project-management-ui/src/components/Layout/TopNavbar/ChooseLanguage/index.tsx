"use client";

import * as React from "react";
import styles from "@/components/Layout/TopNavbar/ChooseLanguage/ChooseLanguage.module.css";
import { IconButton, Button, Typography, Tooltip, Menu } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TranslateIcon from "@mui/icons-material/Translate";
import Image from "next/image";

const ChooseLanguage: React.FC = () => {
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
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ p: 0, borderRadius: "5px" }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <TranslateIcon />

          <KeyboardArrowDownIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "240px",
            padding: "0",
            borderRadius: "7px",
            boxShadow: "0 4px 45px #0000001a",
            overflow: "visible",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "15px",
            padding: "10px 20px 15px",
            fontWeight: "600",
          }}
          className="text-black"
        >
          Choose Language
        </Typography>

        <ul className={styles.langList}>
          <li>
            <Button variant="text">
              <Image
                src="/images/flags/usa.svg"
                alt="usa"
                width={30}
                height={30}
              />
              English
            </Button>
          </li>

          <li>
            <Button variant="text">
              <Image
                src="/images/flags/canada.svg"
                alt="canada"
                width={30}
                height={30}
              />
              Canada
            </Button>
          </li>

          <li>
            <Button variant="text">
              <Image
                src="/images/flags/germany.svg"
                alt="germany"
                width={30}
                height={30}
              />
              Germany
            </Button>
          </li>

          <li>
            <Button variant="text">
              <Image
                src="/images/flags/portugal.svg"
                alt="portugal"
                width={30}
                height={30}
              />
              Portugal
            </Button>
          </li>

          <li>
            <Button variant="text">
              <Image
                src="/images/flags/spain.svg"
                alt="spain"
                width={30}
                height={30}
              />
              Spain
            </Button>
          </li>
        </ul>
      </Menu>
    </>
  );
};

export default ChooseLanguage;
