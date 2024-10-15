"use client";

import * as React from "react";
import { Card, Box, Button } from "@mui/material";
import Link from "next/link";
import SearchForm from "./SearchForm";
import { usePathname } from "next/navigation";
import styles from "@/components/Apps/Email/Sidebar/Sidebar.module.css";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <Card
        className="email-sidebar-card"
        sx={{
          boxShadow: "none",
          bgcolor: "#fff",
          mb: "25px",
          borderRadius: "7px",
          padding: { xs: "20px", sm: "25px" },
          position: "relative",
        }}
      >
        <Box sx={{ mb: "20px" }}>
          <SearchForm />
        </Box>

        <Box sx={{ mb: "25px" }}>
          <Link href="/apps/email/compose">
            <Button
              variant="contained"
              sx={{
                bgcolor: "primary.main",
                display: "block",
                width: "100%",
                borderRadius: "7px",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "500",
                textTransform: "capitalize",
                boxShadow: "none",
                textAlign: "center",
              }}
              className="text-white"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  edit
                </i>
                Compose
              </Box>
            </Button>
          </Link>
        </Box>

        <Box sx={{ mb: "25px" }}>
          <ul className={styles.sidebarMenu}>
            <li>
              <Link
                href="/apps/email/"
                className={`link ${
                  pathname === "/apps/email/" ? `${styles.active}` : ""
                }`}
              >
                <i className="material-symbols-outlined">inbox</i>
                Inbox
                <span className="text-body">10</span>
              </Link>
            </li>

            <li>
              <Link href="#">
                <i className="material-symbols-outlined">star_rate</i>
                Starred
              </Link>
            </li>

            <li>
              <Link href="#">
                <i className="material-symbols-outlined">alarm</i>
                Snoozed
              </Link>
            </li>

            <li>
              <Link href="#">
                <i className="material-symbols-outlined">send</i>
                Sent
              </Link>
            </li>

            <li>
              <Link href="#">
                <i className="material-symbols-outlined">draft</i>
                Drafts
              </Link>
            </li>

            <li>
              <Link href="#">
                <i className="material-symbols-outlined">bookmark</i>
                Important
              </Link>
            </li>

            <li>
              <Link href="#">
                <i className="material-symbols-outlined">auto_read_pause</i>
                Chats
              </Link>
            </li>

            <li>
              <Link href="#">
                <i className="material-symbols-outlined">schedule_send</i>
                Scheduled
              </Link>
            </li>

            <li>
              <Link href="#">
                <i className="material-symbols-outlined">forward_to_inbox</i>
                All Mail
              </Link>
            </li>

            <li>
              <Link href="#">
                <i className="material-symbols-outlined">live_help</i>
                Spam
              </Link>
            </li>

            <li>
              <Link href="#">
                <i className="material-symbols-outlined">delete</i>
                Trash
              </Link>
            </li>

            <li>
              <Link href="#">
                <i className="material-symbols-outlined">account_circle</i>
                Personal
              </Link>
            </li>

            <li>
              <Link href="#">
                <i className="material-symbols-outlined">trip</i>
                Company
              </Link>
            </li>
          </ul>
        </Box>

        <Button
          variant="outlined"
          sx={{
            borderRadius: "7px",
            padding: "3.3px 11px",
            fontSize: "14px",
            fontWeight: "500",
            textTransform: "capitalize",
            boxShadow: "none",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <i
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              add
            </i>
            Add New Label
          </Box>
        </Button>
      </Card>
    </>
  );
};

export default Sidebar;
