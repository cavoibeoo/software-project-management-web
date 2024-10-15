// File Path: /styles/control-panel.scss

"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Tooltip, Button } from "@mui/material";
import RTLMode from "./RTLMode";
import DarkMode from "./DarkMode";
import OnlySidebarDarkMode from "./OnlySidebarDarkMode";
import OnlyHeaderDarkMode from "./OnlyHeaderDarkMode";

const ControlPanel: React.FC = () => {
  const [isControlPanel, setControlPanel] = useState<boolean>(false);

  const handleToggleControlPanel = () => {
    setControlPanel(!isControlPanel);
  };

  return (
    <>
      <Tooltip title="Control Panel" placement="left" arrow>
        <IconButton
          onClick={handleToggleControlPanel}
          size="small"
          sx={{
            width: "30px",
            height: "30px",
            p: 0,
          }}
        >
          <i className="material-symbols-outlined text-body">settings</i>
        </IconButton>
      </Tooltip>

      <div className={`control-panel-modal ${isControlPanel ? "show" : ""}`}>
        <div className="control-panel-dialog">
          <AppBar sx={{ position: "relative" }}>
            <Toolbar
              sx={{
                gap: "10px",
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleToggleControlPanel}
                aria-label="close"
              >
                <CloseIcon sx={{ color: "#fff !important" }} />
              </IconButton>

              <Typography
                sx={{ flex: 1, color: "#fff !important" }}
                variant="h6"
                component="div"
              >
                Control Panel
              </Typography>
            </Toolbar>
          </AppBar>

          <Box p={3} className="control-panel-content">
            <RTLMode />

            <DarkMode />

            <OnlySidebarDarkMode />

            <OnlyHeaderDarkMode />
          </Box>

          <div className="control-panel-footer">
            <Button
              onClick={handleToggleControlPanel}
              variant="contained"
              color="error"
              sx={{
                textTransform: "capitalize",
                color: "#fff !important",
              }}
            >
              Cancel
            </Button>
          </div>
        </div>

        <div className="close-modal" onClick={handleToggleControlPanel}></div>
      </div>
    </>
  );
};

export default ControlPanel;
