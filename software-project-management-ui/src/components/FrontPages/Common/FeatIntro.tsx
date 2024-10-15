"use client";

import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
						modules={[Pagination]}
						className="fp-team-slides"
					>
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
													src="/images/front-pages/order-summary.png"
													alt="order-summary-image"
													width={662}
													height={807}
												/>
											</div>
											<div className="image2">
												<Image
													src="/images/front-pages/courses-sales.jpg"
													alt="courses-sales-image"
													width={330}
													height={295}
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
													Powerful agile boards
												</Typography>
												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">Scrum boards:</h3>
													<p>
														Scrum boards help agile teams break large, complex
														projects into manageable pieces of work so focused
														teams ship faster.
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">Kanban Boards:</h3>
													<p>
														Agile and DevOps teams can use flexible kanban
														boards to visualize workflows, limit
														work-in-progress, and maximize efficiency as a team.
														Templates make it easy to get started quickly and
														customize as you go.
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Choose your own adventure:
													</h3>
													<p>
														Sine Software is flexible enough to mold to your
														team’s own unique way of working, whether it is
														Scrum, Kanban, or something in between.
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
										<div className="image">
											<Image
												src="/images/front-pages/feature/feature_timeline.png"
												alt="order-summary-image"
												width={662}
												height={807}
											/>
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
													Timeline
												</Typography>
												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">Keep teams aligned:</h3>
													<p>
														Give your team the visibility they need to make fast
														and informed decisions while staying aligned with
														the bigger goals.
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Track the big picture:
													</h3>
													<p>
														Plan and track how you’re making progress on the big
														picture for a single team.
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Get ahead of dependencies:
													</h3>
													<p>
														Visualize dependencies within your team to account
														for them when making plans.
													</p>
												</li>
												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Plan with team capacity in mind (Advanced only):
													</h3>
													<p>
														Ensure your teams have bandwidth to complete the
														work they’ve scoped. See multiple teams' capacity on
														a sprint-by-sprint basis.
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
										<div className="image">
											<Image
												src="/images/front-pages/feature/feature_reports.png"
												alt="order-summary-image"
												width={662}
												height={807}
											/>
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
													Reports
												</Typography>
												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Ready to go reporting:
													</h3>
													<p>
														Out-of-the-box reports and dashboards in Jira
														Software offer critical insights within the context
														of your work to ensure your teams are always up to
														date and set up for success.
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">Sprint reporting:</h3>
													<p>
														Determine where your team is overcommitted to reduce
														excessive scope creep and better understand
														completed work in each sprint.
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">Burndown chart:</h3>
													<p>
														Track work towards sprint goals to manage progress
														and respond accordingly.
													</p>
												</li>
												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">Release Burndown:</h3>
													<p>
														Track and monitor the projected release date for
														versions and take action if work is falling behind
														schedule.
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
										<div className="image">
											<Image
												src="/images/front-pages/feature/feature_Automation.png"
												alt="order-summary-image"
												width={662}
												height={807}
											/>
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
													Automation
												</Typography>
												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">
														Drag and drop automation:
													</h3>
													<p>
														Focus on the important things. Let automation do the
														rest. Powerful, yet simple - Jira automation is
														actually fun to use.
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">Auto-assign issues:</h3>
													<p>
														When an issue is raised without an assignee,
														auto-assign to whoever created it so nothing falls
														through the cracks.
													</p>
												</li>

												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">Sync work:</h3>
													<p>
														When an epic is marked as ‘done’ move all of its
														stories to ‘done’ also.
													</p>
												</li>
												<li>
													<i className="material-symbols-outlined">
														done_outline
													</i>
													<h3 className="fw-semibold">Daily Slack summary:</h3>
													<p>
														Send a daily Slack message with a list of issues
														still open in the Sprint.
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
