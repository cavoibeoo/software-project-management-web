"use client";

import React from "react";
import {
	Card,
	Box,
	Typography,
	Menu,
	IconButton,
	MenuItem,
	Grid,
	Button,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "@/components/eCommerce/Search.module.css";

const SellersContent: React.FC = () => {
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
			<Card
				sx={{
					boxShadow: "none",
					borderRadius: "7px",
					mb: "25px",
					padding: { xs: "18px", sm: "20px", lg: "25px" },
					display: { sm: "flex" },
					alignItems: "center",
					justifyContent: "space-between",
				}}
				className="rmui-card"
			>
				<Box>
					<Box
						component="form"
						className={styles.searchBox}
						sx={{
							width: { sm: "265px" },
						}}
					>
						<label>
							<i className="material-symbols-outlined">search</i>
						</label>
						<input
							type="text"
							className={styles.inputSearch}
							placeholder="Search seller here....."
						/>
					</Box>
				</Box>

				<Box sx={{ mt: { xs: "10px", sm: "0" } }}>
					<Link href="/ecommerce/sellers/create">
						<Button
							variant="outlined"
							sx={{
								textTransform: "capitalize",
								borderRadius: "7px",
								fontWeight: "500",
								fontSize: "13px",
								padding: "6px 13px",
							}}
							color="primary"
						>
							<i className="material-symbols-outlined">add</i> Add New Seller
						</Button>
					</Link>
				</Box>
			</Card>

			<Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card seller-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/sellers/seller1.png"
										alt="seller-image"
										width={50}
										height={50}
									/>
								</Box>
								<Box>
									<Link href="/ecommerce/sellers/details">
										<Typography
											variant="h6"
											fontSize="16px"
											className="text-black"
										>
											Ava Turner
										</Typography>
									</Link>

									<Typography fontSize="13px">turner&#64;sine.com</Typography>
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
											boxShadow: "0px 1px 7px #ddd",
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
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box>
							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Last Sale Date:</span>
								25 Nov 2024
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Item Stock:</span>
								50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Wallet Balance:</span>
								$9,999.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Revenue:</span>
								$5,999.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Store:</span>
								TechMaster Store
							</Box>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card seller-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/sellers/seller2.png"
										alt="seller-image"
										width={50}
										height={50}
									/>
								</Box>
								<Box>
									<Link href="/ecommerce/sellers/details">
										<Typography
											variant="h6"
											fontSize="16px"
											className="text-black"
										>
											Ethan Parker
										</Typography>
									</Link>

									<Typography fontSize="13px">ethan&#64;sine.com</Typography>
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
											boxShadow: "0px 1px 7px #ddd",
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
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box>
							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Last Sale Date:</span>1 Nov
								2024
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Item Stock:</span>
								39
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Wallet Balance:</span>
								$6,756.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Revenue:</span>
								$4,645.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Store:</span>
								RisionTech Outlet
							</Box>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card seller-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/sellers/seller3.png"
										alt="seller-image"
										width={50}
										height={50}
									/>
								</Box>
								<Box>
									<Link href="/ecommerce/sellers/details">
										<Typography
											variant="h6"
											fontSize="16px"
											className="text-black"
										>
											Isabella Lee
										</Typography>
									</Link>

									<Typography fontSize="13px">isabella&#64;sine.com</Typography>
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
											boxShadow: "0px 1px 7px #ddd",
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
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box>
							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Last Sale Date:</span>
								30 Sep 2024
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Item Stock:</span>
								75
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Wallet Balance:</span>
								$5,550.00
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Revenue:</span>
								$4,350.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Store:</span>
								ComfotLiving
							</Box>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card seller-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/sellers/seller4.png"
										alt="seller-image"
										width={50}
										height={50}
									/>
								</Box>
								<Box>
									<Link href="/ecommerce/sellers/details">
										<Typography
											variant="h6"
											fontSize="16px"
											className="text-black"
										>
											Thompson Torres
										</Typography>
									</Link>

									<Typography fontSize="13px">thompson&#64;sine.com</Typography>
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
											boxShadow: "0px 1px 7px #ddd",
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
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box>
							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Last Sale Date:</span>
								02 Aug 2024
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Item Stock:</span>
								99
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Wallet Balance:</span>
								$2,100.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Revenue:</span>
								$1,500.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Store:</span>
								SportFit Store
							</Box>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card seller-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/sellers/seller5.png"
										alt="seller-image"
										width={50}
										height={50}
									/>
								</Box>
								<Box>
									<Link href="/ecommerce/sellers/details">
										<Typography
											variant="h6"
											fontSize="16px"
											className="text-black"
										>
											Lucas Lyon
										</Typography>
									</Link>

									<Typography fontSize="13px">lucas&#64;sine.com</Typography>
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
											boxShadow: "0px 1px 7px #ddd",
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
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box>
							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Last Sale Date:</span>
								22 July 2024
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Item Stock:</span>
								350
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Wallet Balance:</span>
								$15,250.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Revenue:</span>
								$10,200.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Store:</span>
								Velas Store
							</Box>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card seller-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/sellers/seller6.png"
										alt="seller-image"
										width={50}
										height={50}
									/>
								</Box>
								<Box>
									<Link href="/ecommerce/sellers/details">
										<Typography
											variant="h6"
											fontSize="16px"
											className="text-black"
										>
											Morgan Sturges
										</Typography>
									</Link>

									<Typography fontSize="13px">morgan&#64;sine.com</Typography>
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
											boxShadow: "0px 1px 7px #ddd",
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
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box>
							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Last Sale Date:</span>
								10 Jun 2024
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Item Stock:</span>
								200
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Wallet Balance:</span>
								$10,500.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Revenue:</span>
								$5,458.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Store:</span>
								Herna Store
							</Box>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card seller-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/sellers/seller7.png"
										alt="seller-image"
										width={50}
										height={50}
									/>
								</Box>
								<Box>
									<Link href="/ecommerce/sellers/details">
										<Typography
											variant="h6"
											fontSize="16px"
											className="text-black"
										>
											Sophia McNeel
										</Typography>
									</Link>

									<Typography fontSize="13px">sophia&#64;sine.com</Typography>
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
											boxShadow: "0px 1px 7px #ddd",
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
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box>
							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Last Sale Date:</span>
								16 Feb 2024
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Item Stock:</span>
								80
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Wallet Balance:</span>
								$2,580.00
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Revenue:</span>
								$1,500.00
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Store:</span>
								Dona Store
							</Box>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card seller-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/sellers/seller8.png"
										alt="seller-image"
										width={50}
										height={50}
									/>
								</Box>
								<Box>
									<Link href="/ecommerce/sellers/details">
										<Typography
											variant="h6"
											fontSize="16px"
											className="text-black"
										>
											Rodriguez Meade
										</Typography>
									</Link>

									<Typography fontSize="13px">
										rodriguez&#64;sine.com
									</Typography>
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
											boxShadow: "0px 1px 7px #ddd",
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
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box>
							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Last Sale Date:</span>
								12 May 2024
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Item Stock:</span>
								150
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Wallet Balance:</span>
								$9,000.00
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Revenue:</span>
								$6,000.00
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Store:</span>
								Willi Dav Store
							</Box>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card seller-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/sellers/seller9.png"
										alt="seller-image"
										width={50}
										height={50}
									/>
								</Box>
								<Box>
									<Link href="/ecommerce/sellers/details">
										<Typography
											variant="h6"
											fontSize="16px"
											className="text-black"
										>
											Olivia Taylor
										</Typography>
									</Link>

									<Typography fontSize="13px">olivia&#64;sine.com</Typography>
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
											boxShadow: "0px 1px 7px #ddd",
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
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box>
							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Last Sale Date:</span>
								10 Apr 2024
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Item Stock:</span>
								75
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Wallet Balance:</span>
								$7,500.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Revenue:</span>
								$4,500.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Store:</span>
								Donne Store
							</Box>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card seller-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/sellers/seller10.png"
										alt="seller-image"
										width={50}
										height={50}
									/>
								</Box>
								<Box>
									<Link href="/ecommerce/sellers/details">
										<Typography
											variant="h6"
											fontSize="16px"
											className="text-black"
										>
											David Smith
										</Typography>
									</Link>

									<Typography fontSize="13px">david&#64;sine.com</Typography>
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
											boxShadow: "0px 1px 7px #ddd",
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
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box>
							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Last Sale Date:</span>
								03 Dec 2024
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Item Stock:</span>
								500
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Wallet Balance:</span>
								$18,500.00
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Revenue:</span>
								$13,200.00
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Store:</span>
								RichMaster Store
							</Box>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card seller-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/sellers/seller11.png"
										alt="seller-image"
										width={50}
										height={50}
									/>
								</Box>
								<Box>
									<Link href="/ecommerce/sellers/details">
										<Typography
											variant="h6"
											fontSize="16px"
											className="text-black"
										>
											Alice Johnson
										</Typography>
									</Link>

									<Typography fontSize="13px">alice&#64;sine.com</Typography>
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
											boxShadow: "0px 1px 7px #ddd",
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
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box>
							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Last Sale Date:</span>
								23 Mar 2024
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Item Stock:</span>
								50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Wallet Balance:</span>
								$6,300.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Revenue:</span>
								$4,000.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Store:</span>
								Dajon Store
							</Box>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card seller-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/sellers/seller12.png"
										alt="seller-image"
										width={50}
										height={50}
									/>
								</Box>
								<Box>
									<Link href="/ecommerce/sellers/details">
										<Typography
											variant="h6"
											fontSize="16px"
											className="text-black"
										>
											Emily Brown
										</Typography>
									</Link>

									<Typography fontSize="13px">emily&#64;sine.com</Typography>
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
											boxShadow: "0px 1px 7px #ddd",
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
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box>
							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Last Sale Date:</span>
								20 Jan 2024
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Item Stock:</span>
								99
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Wallet Balance:</span>
								$3,699.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Revenue:</span>
								$5,999.50
							</Box>

							<Box className="text-black" mt="10px">
								<span className="text-body mr-5">Store:</span>
								Barbahall Store
							</Box>
						</Box>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default SellersContent;
