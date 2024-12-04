"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { CheckCookieServices } from "@/api-services/AuthServices";
import { Box } from "@mui/material";
import DarkMode from "@/components/Layout/ControlPanel/DarkMode";
import ThemeButton from "./ThemeButton/ThemeButton";

const Navbar: React.FC = () => {
	const pathname = usePathname();

	const [isToggleNavbar, setToggleNavbar] = useState(true);
	const handleToggleNavbar = () => {
		setToggleNavbar(!isToggleNavbar);
	};

	useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId?.classList.add("sticky");
			} else {
				elementId?.classList.remove("sticky");
			}
		});
	});

	return (
		<>
			<div id="navbar" className="fp-navbar-area transition">
				<div className="container">
					<nav className="navbar navbar-expand-lg">
						<Box className="navbar-logo"></Box>

						<button className="navbar-toggler">
							<span className="burger-menu" onClick={handleToggleNavbar}>
								<span className="top-bar"></span>
								<span className="middle-bar"></span>
								<span className="bottom-bar"></span>
							</span>
						</button>
						<div className="other-options">
							<Box
								component="div"
								onClick={() => CheckCookieServices()}
								className="fp-outlined-btn"
							>
								<i className="material-symbols-outlined">login</i>
								Logins
							</Box>

							<Link href="/authentication/sign-up/" className="fp-btn">
								<i className="material-symbols-outlined">person</i>
								Register
							</Link>
							<ThemeButton />
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Navbar;
