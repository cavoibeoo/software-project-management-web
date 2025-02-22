"use client";

import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const FeatIntro: React.FC = () => {
	return (
		<>
			<Box
				className="fp-team-area"
				sx={{
					pb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
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
						position: "relative",
						zIndex: "1",
					}}
				>
					<div className="section-title text-center">
						<div className="sub-title">
							<span className="text-purple">Features</span>
						</div>
						<Typography
							variant="h2"
							sx={{
								fontSize: { xs: "24px", md: "28px", lg: "34px", xl: "36px" },
							}}
						>
							Discover the features that make Sine so easy to use
						</Typography>
					</div>

					<Swiper
						spaceBetween={25}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							2400: {
								slidesPerView: 2,
							},
							4800: {
								slidesPerView: 3,
							},
						}}
						modules={[Pagination, Autoplay]}
						className="fp-team-slides"
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
					>
						<SwiperSlide>
							<Box
								sx={{
									maxWidth: {
										sm: "700px",
										md: "720px",
										lg: "1140px",
										xl: "1320px",
									},
									mx: "auto",
									px: "12px",
									position: "relative",
									zIndex: "1",
								}}
							>
								<Grid
									container
									alignItems="center"
									columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
								>
									<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
										<div className="fp-widgets-image">
											<div className="image" style={{ padding: "20px 16px" }}>
												<Image
													src="/images/featureImg/BacklogPage.png"
													alt="order-summary-image"
													width={8622}
													height={1807}
												/>
											</div>
										</div>
									</Grid>

									<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
										<div className="fp-widgets-content">
											<ul className="features-list">
												<Typography
													variant="h2"
													sx={{
														fontSize: {
															xs: "24px",
															md: "28px",
															lg: "34px",
															xl: "36px",
														},
													}}
												>
													Backlog Management Made Easy
												</Typography>
												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">Clear hierarchy:</h3>
													<p>
														Use filters to view only relevant backlog items
														(e.g., by assignee, label, or due date).
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">Sprint Planning:</h3>
													<p>
														Quickly assign tasks to sprints: Drag items into the
														sprint section to plan upcoming work. View sprint
														capacity with progress indicators.
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Collaboration and Transparency:
													</h3>
													<p>
														Add comments directly to backlog items for quick
														discussions. Tag teammates for follow-ups or
														clarifications. Status updates at a glance: Open, In
														Progress, Done.
													</p>
												</li>
											</ul>
										</div>
									</Grid>
								</Grid>
							</Box>
						</SwiperSlide>
						<SwiperSlide>
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
									position: "relative",
									zIndex: "1",
								}}
							>
								<Grid
									container
									alignItems="center"
									columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
								>
									<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
										<div className="fp-widgets-image">
											<div className="image">
												<Image
													src="/images/featureImg/Kanban.png"
													alt="order-summary-image"
													width={662}
													height={807}
												/>
											</div>
										</div>
									</Grid>
									<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
										<div className="fp-widgets-content">
											<ul className="features-list">
												<Typography
													variant="h2"
													sx={{
														fontSize: {
															xs: "24px",
															md: "28px",
															lg: "34px",
															xl: "36px",
														},
													}}
												>
													Effortless Workflow Management
												</Typography>
												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Visualize your process:
													</h3>
													<p>
														Visualize your process, track progress, and deliver
														results efficiently with Kanban boards.
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">Customizable Boards:</h3>
													<p>
														Create columns to represent workflow stages (e.g.,
														To-Do, In Progress, Done).
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Drag-and-Drop Simplicity:
													</h3>
													<p>
														Move tasks seamlessly between columns to reflect
														progress. Visual cues for blocked or overdue items.
													</p>
												</li>
												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Real-Time Updates (Advanced only):
													</h3>
													<p>
														Automatic updates for all team members to keep
														everyone in sync. Highlight tasks assigned to the
														user or critical deadlines.
													</p>
												</li>
											</ul>
										</div>
									</Grid>
								</Grid>
							</Box>
						</SwiperSlide>
						<SwiperSlide>
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
									position: "relative",
									zIndex: "1",
								}}
							>
								<Grid
									container
									alignItems="center"
									columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
								>
									<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
										<div className="fp-widgets-image">
											<div className="image" style={{ padding: "20px 16px" }}>
												<Image
													src="/images/featureImg/IssueTypeManagement.png"
													alt="order-summary-image"
													width={8622}
													height={1807}
												/>
											</div>
										</div>
									</Grid>

									<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
										<div className="fp-widgets-content">
											<ul className="features-list">
												<Typography
													variant="h2"
													sx={{
														fontSize: {
															xs: "24px",
															md: "28px",
															lg: "34px",
															xl: "36px",
														},
													}}
												>
													Customize Your Issue Types
												</Typography>
												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Create and Edit Issue Types:
													</h3>
													<p>
														Define new issue types specific to your team’s
														workflow (e.g., Bug, Story, Task, Epic). Customize
														issue type names, icons, and descriptions to align
														with your processes.
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Custom Fields for Issue Types:
													</h3>
													<p>
														Add custom fields (e.g., severity, effort, or
														impact) for different issue types. Specify mandatory
														or optional fields to capture essential information.
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Set Default Issue Types:
													</h3>
													<p>
														Assign default issue types for specific projects or
														workflows. Ensure new issues automatically use the
														right type based on predefined rules.
													</p>
												</li>
											</ul>
										</div>
									</Grid>
								</Grid>
							</Box>
						</SwiperSlide>
						<SwiperSlide>
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
									position: "relative",
									zIndex: "1",
								}}
							>
								<Grid
									container
									alignItems="center"
									columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
								>
									<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
										<div className="fp-widgets-image">
											<div className="image">
												<Image
													src="/images/featureImg/RoleManagement.png"
													alt="order-summary-image"
													width={662}
													height={807}
												/>
											</div>
										</div>
									</Grid>

									<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
										<div className="fp-widgets-content">
											<ul className="features-list">
												<Typography
													variant="h2"
													sx={{
														fontSize: {
															xs: "24px",
															md: "28px",
															lg: "34px",
															xl: "36px",
														},
													}}
												>
													Control Access, Empower Teams
												</Typography>
												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Role Creation and Customization:
													</h3>
													<p>
														Create new roles to fit your organization's
														structure (e.g., Admin, Developer, Viewer).
														Customize each role's permissions to match specific
														needs.
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Granular Permissions Control:
													</h3>
													<p>
														Define access levels for key functionalities (e.g,..
														Issue tracking, Boards,...). Distinguish between
														project-level and global permissions.
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">Role Assignment:</h3>
													<p>
														Assign roles to users or groups. Bulk assign roles
														to multiple users or projects simultaneously.
													</p>
												</li>
												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Default Roles and Templates:
													</h3>
													<p>
														Use pre-built role templates for common use cases
														(e.g., Admin, Member, Viewer). Set default roles for
														new team members.
													</p>
												</li>
											</ul>
										</div>
									</Grid>
								</Grid>
							</Box>
						</SwiperSlide>
					</Swiper>

					{/* Shape Images */}
					<div className="shape1">
						<Image
							src="/images/front-pages/shape1.png"
							alt="shape1"
							width={530}
							height={530}
						/>
					</div>
					<div className="shape2">
						<Image
							src="/images/front-pages/shape2.png"
							alt="shape2"
							width={447}
							height={453}
						/>
					</div>
				</Box>
			</Box>
		</>
	);
};

export default FeatIntro;
