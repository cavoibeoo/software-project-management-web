"use client";

import * as React from "react";
import { Grid, Box, Link } from "@mui/material";
import Image from "next/image";

const Footer: React.FC = () => {
	return (
		<>
			<Box
				className="fp-footer"
				sx={{
					pt: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
				}}
			>
				<Box
					sx={{
						maxWidth: {
							xs: "100%",
							sm: "700px",
							md: "720px",
							lg: "1140px",
							xl: "1320px",
						},
						mx: "auto",
						px: "12px",
					}}
				>
					<Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
						<Grid item xs={12} sm={6} md={6} lg={3} className="fp-grid-item">
							<div className="single-footer-widget">
								<Link href="/" className="">
									<Box sx={{ marginBottom: 2 }} className="navbar-logo"></Box>
								</Link>

								<p>
									Web tool for software project management. Connect every team,
									task, and project together with Sine.
								</p>

								<div className="socials">
									<a href="#" target="_blank">
										<i className="ri-facebook-fill"></i>
									</a>
									<a href="#" target="_blank">
										<i className="ri-twitter-x-fill"></i>
									</a>
									<a href="#" target="_blank">
										<i className="ri-linkedin-fill"></i>
									</a>
									<a href="#" target="_blank">
										<i className="ri-dribbble-fill"></i>
									</a>
								</div>
							</div>
						</Grid>

						<Grid item xs={12} sm={6} md={6} lg={3} className="fp-grid-item">
							<div className="single-footer-widget">
								<h3>Our Team</h3>
								<ul className="custom-links">
									<li>
										<Link href="#">Sine</Link>
									</li>
									<li>
										<Link href="#">Cavoibeo</Link>
									</li>
								</ul>
							</div>
						</Grid>

						<Grid item xs={12} sm={6} md={6} lg={3} className="fp-grid-item">
							<div className="single-footer-widget">
								<h3>Resources</h3>

								<ul className="custom-links">
									<li>
										<Link href="#">Technical support</Link>
									</li>
									<li>
										<Link href="#">Purchasing & licensing</Link>
									</li>
									<li>
										<Link href="#">Sine Community</Link>
									</li>
									<li>
										<Link href="#">Knowledge base</Link>
									</li>
									<li>
										<Link href="#">Marketplace</Link>
									</li>
									<li>
										<Link href="#">My account</Link>
									</li>
								</ul>
							</div>
						</Grid>

						<Grid item xs={12} sm={6} md={6} lg={3} className="fp-grid-item">
							<div className="single-footer-widget">
								<h3>Privacy Policy</h3>
								<ul className="custom-links">
									<li>
										<Link href="#">Terms & Conditions</Link>
									</li>
									<li>
										<Link href="#">Cookie Policy</Link>
									</li>
									<li>
										<Link href="#">Notice at Collection</Link>
									</li>
									<li>
										<Link href="#">Privacy Policy</Link>
									</li>
								</ul>
							</div>
						</Grid>
					</Grid>
				</Box>

				<div className="copyright-area bg-white text-center">
					<div className="container">
						<p>Copyright © 2024 Sine</p>
					</div>
				</div>
			</Box>
		</>
	);
};

export default Footer;
