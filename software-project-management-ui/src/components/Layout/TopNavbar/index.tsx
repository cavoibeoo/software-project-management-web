// File path: /styles/top-navbar.scss

"use client";

import React, { useEffect } from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import SearchForm from "./SearchForm";
import Notifications from "./Notifications";
import Profile from "./Profile";
import FullscreenButton from "./FullscreenButton";
import ChooseLanguage from "./ChooseLanguage/index";
import ControlPanel from "../ControlPanel";

interface TopNavbarProps {
	toggleActive: () => void;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ toggleActive }) => {
	useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				elementId?.classList.add("sticky");
			} else {
				elementId?.classList.remove("sticky");
			}
		});
	});

	return (
		<>
			<div className="top-navbar-dark">
				<AppBar
					id="navbar"
					color="inherit"
					sx={{
						backgroundColor: "#fff",
						boxShadow: "initial",
						borderRadius: "0 0 15px 15px",
						py: { xs: "15px", sm: "3px" },
						width: "initial",
						zIndex: "489",
					}}
					className="top-navbar"
				>
					<Toolbar
						sx={{
							display: { xs: "block", sm: "flex" },
							justifyContent: { xs: "center", sm: "space-between" },
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: { xs: "10px", sm: "5px", md: "10px" },
							}}
						>
							<Tooltip title="Hide/Show" arrow>
								<IconButton
									size="small"
									edge="start"
									color="inherit"
									onClick={toggleActive}
								>
									<i className="material-symbols-outlined">menu</i>
								</IconButton>
							</Tooltip>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: { xs: "8px", sm: "8px", lg: "15px" },
								mt: { xs: "10px", sm: "0px" },
							}}
						>
							<SearchForm />

							<FullscreenButton />

							<Notifications />

							<Tooltip title="Control Panel" placement="left" arrow>
								<IconButton
									size="small"
									sx={{
										width: "30px",
										height: "30px",
										p: 0,
									}}
								>
									<i className="material-symbols-outlined text-body">
										contact_support
									</i>
								</IconButton>
							</Tooltip>

							<ControlPanel />

							<Profile />
						</Box>
					</Toolbar>
				</AppBar>
			</div>
		</>
	);
};

export default TopNavbar;
