"use client";

import * as React from "react";
import { Card, Box, Typography, Button } from "@mui/material";
import Image from "next/image";

import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
});

const Comments: React.FC = () => {
	return (
		<>
			<Card
				sx={{
					boxShadow: "none",
					borderRadius: "7px",
					mb: "25px",
					padding: { xs: "18px", sm: "20px", lg: "25px" },
				}}
				className="rmui-card"
			>
				<Box>
					<Box
						className="border-bottom"
						sx={{
							paddingBottom: "20px",
							marginBottom: "20px",
						}}
					>
						<Box
							sx={{
								display: { sm: "flex" },
								alignItems: "center",
								gap: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
									mb: { xs: "5px", sm: "0" },
								}}
							>
								<Image
									src="/images/users/user6.jpg"
									width={30}
									height={30}
									className="rounded-circle"
									alt="user-image"
								/>
								<Typography fontWeight={500} color="primary">
									Ponsiano
								</Typography>
							</Box>

							<Typography>a day ago</Typography>

							<Typography
								className="sine-badge bg-primary text-white"
								sx={{ mt: { xs: "5px !important", sm: "0 !important" } }}
							>
								#BD0JL0G6
							</Typography>
						</Box>

						<Typography mt="15px !important">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
						</Typography>

						<Typography
							variant="h6"
							fontSize="15px"
							fontWeight={700}
							mb="10px"
							mt="10px !important"
							className="text-black"
						>
							Screenshots
						</Typography>
						<Box>
							<Image
								src="/images/courses/course1.jpg"
								className="border-radius"
								alt="screenshot-image"
								width={80}
								height={80}
							/>
						</Box>
					</Box>

					<Box
						className="border-bottom"
						sx={{
							paddingBottom: "20px",
							marginBottom: "20px",
							paddingLeft: "20px",
							paddingRight: "20px",
						}}
					>
						<Box
							sx={{
								display: { sm: "flex" },
								alignItems: "center",
								gap: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
									mb: { xs: "5px", sm: "0" },
								}}
							>
								<Image
									src="/images/users/user7.jpg"
									width={30}
									height={30}
									className="rounded-circle"
									alt="user-image"
								/>
								<Typography fontWeight={500} color="error">
									Zelxa
								</Typography>
							</Box>

							<Typography className="d-block">18 hours ago</Typography>

							<Typography
								className="sine-badge bg-secondary text-white"
								sx={{ mt: { xs: "5px !important", sm: "0 !important" } }}
							>
								Support Staff
							</Typography>
						</Box>

						<Typography mt="15px !important">
							It was popularised in the 1960s with the release of Letraset
							sheets containing Lorem Ipsum passages, and more recently with
							desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.
						</Typography>

						<Typography
							variant="h6"
							fontSize="15px"
							fontWeight={700}
							mb="10px"
							mt="10px !important"
							className="text-black"
						>
							Screenshots
						</Typography>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "10px",
							}}
						>
							<Image
								src="/images/products/product1.jpg"
								className="border-radius"
								alt="screenshot-image"
								width={80}
								height={80}
							/>
							<Image
								src="/images/products/product2.jpg"
								className="border-radius"
								alt="screenshot-image"
								width={80}
								height={80}
							/>
						</Box>
					</Box>

					<Box
						className="border-bottom"
						sx={{
							paddingBottom: "20px",
							marginBottom: "20px",
							paddingLeft: "20px",
							paddingRight: "20px",
						}}
					>
						<Box
							sx={{
								display: { sm: "flex" },
								alignItems: "center",
								gap: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
									mb: { xs: "5px", sm: "0" },
								}}
							>
								<Image
									src="/images/users/user6.jpg"
									width={30}
									height={30}
									className="rounded-circle"
									alt="user-image"
								/>
								<Typography fontWeight={500} color="primarys">
									Ponsiano
								</Typography>
							</Box>
							<Typography className="d-block">12 hours ago</Typography>
						</Box>

						<Typography mt="15px !important">
							It has survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
						</Typography>
					</Box>

					<Box
						className="border-bottom"
						sx={{
							paddingBottom: "20px",
							marginBottom: "20px",
							paddingLeft: "20px",
							paddingRight: "20px",
						}}
					>
						<Box
							sx={{
								display: { sm: "flex" },
								alignItems: "center",
								gap: "15px",
								mb: "12px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
									mb: { xs: "5px", sm: "0" },
								}}
							>
								<Image
									src="/images/users/user7.jpg"
									width={30}
									height={30}
									className="rounded-circle"
									alt="user-image"
								/>
								<Typography fontWeight={500} color="error">
									Zelxa
								</Typography>
							</Box>

							<Typography className="d-block">05 hours ago</Typography>
							<Typography
								className="sine-badge bg-secondary text-white"
								sx={{ mt: { xs: "5px !important", sm: "0 !important" } }}
							>
								Support Staff
							</Typography>
						</Box>

						<Typography mt="15px !important">
							The standard chunk of Lorem Ipsum used since the 1500s is
							reproduced below for those interested. Sections 1.10.32 and
							1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
							reproduced in their exact original form, accompanied by English
							versions from the 1914 translation.
						</Typography>
					</Box>
				</Box>

				<Box component="form">
					<Box mb="20px">
						<Typography
							component="label"
							sx={{
								fontWeight: "500",
								fontSize: "14px",
								mb: "10px",
								display: "block",
							}}
							className="text-black"
						>
							Post A Reply
						</Typography>

						<RichTextEditor
							id="rte"
							controls={[
								["bold", "italic", "underline", "link", "image"],
								["unorderedList", "h1", "h2", "h3"],
								["sup", "sub"],
								["alignLeft", "alignCenter", "alignRight"],
							]}
							style={{
								minHeight: "200px",
							}}
						/>
					</Box>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: { xs: "10px", sm: "20px" },
						}}
					>
						<Button
							type="submit"
							variant="contained"
							color="error"
							sx={{
								textTransform: "capitalize",
								borderRadius: "6px",
								fontWeight: "500",
								fontSize: { xs: "13px", sm: "16px" },
								padding: { xs: "10px 20px", sm: "10px 24px" },
								color: "#fff !important",
								boxShadow: "none",
							}}
						>
							Save As Draft
						</Button>

						<Button
							type="submit"
							variant="contained"
							sx={{
								textTransform: "capitalize",
								borderRadius: "6px",
								fontWeight: "500",
								fontSize: { xs: "13px", sm: "16px" },
								padding: { xs: "10px 20px", sm: "10px 24px" },
								color: "#fff !important",
								boxShadow: "none",
							}}
						>
							<i className="material-symbols-outlined mr-5">send</i> Submit Now
						</Button>
					</Box>
				</Box>
			</Card>
		</>
	);
};

export default Comments;
