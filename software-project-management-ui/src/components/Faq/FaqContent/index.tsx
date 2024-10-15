"use client";

import React from "react";
import { Card, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&::before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === "dark"
			? "rgba(255, 255, 255, .05)"
			: "rgba(0, 0, 0, .03)",
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FaqContent: React.FC = () => {
	const [expanded, setExpanded] = React.useState<string | false>("panel1");

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

	return (
		<>
			<Card
				sx={{
					boxShadow: "none",
					borderRadius: "7px",
					mb: "25px",
					px: { xs: "18px", sm: "20px", lg: "25px" },
					py: "50px",
				}}
				className="rmui-card"
			>
				<Box
					className="text-center"
					sx={{
						maxWidth: "550px",
						mb: "35px",
						mx: "auto",
					}}
				>
					<Typography
						variant="h3"
						sx={{
							fontSize: { xs: "16px", md: "18px", lg: "24px" },
							fontWeight: 700,
							mb: "12px",
						}}
						className="text-black"
					>
						Frequently Asked Questions
					</Typography>

					<Typography sx={{ lineHeight: "1.8" }}>
						sine offers customization options to tailor the platform to your
						team's unique requirements. You can customize workflows, templates,
						and dashboards to align with your processes.
					</Typography>
				</Box>

				<Box
					sx={{
						maxWidth: "738px",
						mx: "auto",
					}}
				>
					<Accordion
						expanded={expanded === "panel1"}
						onChange={handleChange("panel1")}
						className="toc-accordion bg-f6f7f9"
						sx={{
							border: "none",
							borderRadius: "3px",
							mt: "10px",
						}}
					>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header"
							className="bg-f6f7f9"
							sx={{
								padding: "9px 25px",
								borderRadius: "3px",
							}}
						>
							<Typography
								variant="h4"
								fontWeight={600}
								fontSize="14px"
								className="text-black"
							>
								What is sine?
							</Typography>
						</AccordionSummary>

						<AccordionDetails
							sx={{
								border: "none",
								padding: "0 25px 5px",
							}}
						>
							<Typography sx={{ lineHeight: "1.8" }} mb="15px">
								sine is a comprehensive project management software designed to
								help teams streamline their workflow, collaborate effectively,
								and achieve project success.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion
						expanded={expanded === "panel2"}
						onChange={handleChange("panel2")}
						className="toc-accordion bg-f6f7f9"
						sx={{
							border: "none",
							borderRadius: "3px",
							mt: "10px",
						}}
					>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header"
							className="bg-f6f7f9"
							sx={{
								padding: "9px 25px",
								borderRadius: "3px",
							}}
						>
							<Typography
								variant="h4"
								fontWeight={600}
								fontSize="14px"
								className="text-black"
							>
								What features does sine offer?
							</Typography>
						</AccordionSummary>

						<AccordionDetails
							sx={{
								border: "none",
								padding: "0 25px 5px",
							}}
						>
							<Typography sx={{ lineHeight: "1.8" }} mb="15px">
								sine is a comprehensive project management software designed to
								help teams streamline their workflow, collaborate effectively,
								and achieve project success.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion
						expanded={expanded === "panel3"}
						onChange={handleChange("panel3")}
						className="toc-accordion bg-f6f7f9"
						sx={{
							border: "none",
							borderRadius: "3px",
							mt: "10px",
						}}
					>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header"
							className="bg-f6f7f9"
							sx={{
								padding: "9px 25px",
								borderRadius: "3px",
							}}
						>
							<Typography
								variant="h4"
								fontWeight={600}
								fontSize="14px"
								className="text-black"
							>
								How can sine benefit my team?
							</Typography>
						</AccordionSummary>

						<AccordionDetails
							sx={{
								border: "none",
								padding: "0 25px 5px",
							}}
						>
							<Typography sx={{ lineHeight: "1.8" }} mb="15px">
								sine is a comprehensive project management software designed to
								help teams streamline their workflow, collaborate effectively,
								and achieve project success.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion
						expanded={expanded === "panel4"}
						onChange={handleChange("panel4")}
						className="toc-accordion bg-f6f7f9"
						sx={{
							border: "none",
							borderRadius: "3px",
							mt: "10px",
						}}
					>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header"
							className="bg-f6f7f9"
							sx={{
								padding: "9px 25px",
								borderRadius: "3px",
							}}
						>
							<Typography
								variant="h4"
								fontWeight={600}
								fontSize="14px"
								className="text-black"
							>
								Is sine suitable for small businesses?
							</Typography>
						</AccordionSummary>

						<AccordionDetails
							sx={{
								border: "none",
								padding: "0 25px 5px",
							}}
						>
							<Typography sx={{ lineHeight: "1.8" }} mb="15px">
								sine is a comprehensive project management software designed to
								help teams streamline their workflow, collaborate effectively,
								and achieve project success.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion
						expanded={expanded === "panel5"}
						onChange={handleChange("panel5")}
						className="toc-accordion bg-f6f7f9"
						sx={{
							border: "none",
							borderRadius: "3px",
							mt: "10px",
						}}
					>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header"
							className="bg-f6f7f9"
							sx={{
								padding: "9px 25px",
								borderRadius: "3px",
							}}
						>
							<Typography
								variant="h4"
								fontWeight={600}
								fontSize="14px"
								className="text-black"
							>
								Can I customize sine to fit my team's specific needs?
							</Typography>
						</AccordionSummary>

						<AccordionDetails
							sx={{
								border: "none",
								padding: "0 25px 5px",
							}}
						>
							<Typography sx={{ lineHeight: "1.8" }} mb="15px">
								sine is a comprehensive project management software designed to
								help teams streamline their workflow, collaborate effectively,
								and achieve project success.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion
						expanded={expanded === "panel6"}
						onChange={handleChange("panel6")}
						className="toc-accordion bg-f6f7f9"
						sx={{
							border: "none",
							borderRadius: "3px",
							mt: "10px",
						}}
					>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header"
							className="bg-f6f7f9"
							sx={{
								padding: "9px 25px",
								borderRadius: "3px",
							}}
						>
							<Typography
								variant="h4"
								fontWeight={600}
								fontSize="14px"
								className="text-black"
							>
								Is sine cloud-based or on-premises?
							</Typography>
						</AccordionSummary>

						<AccordionDetails
							sx={{
								border: "none",
								padding: "0 25px 5px",
							}}
						>
							<Typography sx={{ lineHeight: "1.8" }} mb="15px">
								sine is a comprehensive project management software designed to
								help teams streamline their workflow, collaborate effectively,
								and achieve project success.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion
						expanded={expanded === "panel7"}
						onChange={handleChange("panel7")}
						className="toc-accordion bg-f6f7f9"
						sx={{
							border: "none",
							borderRadius: "3px",
							mt: "10px",
						}}
					>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header"
							className="bg-f6f7f9"
							sx={{
								padding: "9px 25px",
								borderRadius: "3px",
							}}
						>
							<Typography
								variant="h4"
								fontWeight={600}
								fontSize="14px"
								className="text-black"
							>
								Does sine integrate with other tools?
							</Typography>
						</AccordionSummary>

						<AccordionDetails
							sx={{
								border: "none",
								padding: "0 25px 5px",
							}}
						>
							<Typography sx={{ lineHeight: "1.8" }} mb="15px">
								sine is a comprehensive project management software designed to
								help teams streamline their workflow, collaborate effectively,
								and achieve project success.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion
						expanded={expanded === "panel8"}
						onChange={handleChange("panel8")}
						className="toc-accordion bg-f6f7f9"
						sx={{
							border: "none",
							borderRadius: "3px",
							mt: "10px",
						}}
					>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header"
							className="bg-f6f7f9"
							sx={{
								padding: "9px 25px",
								borderRadius: "3px",
							}}
						>
							<Typography
								variant="h4"
								fontWeight={600}
								fontSize="14px"
								className="text-black"
							>
								How secure is sine?
							</Typography>
						</AccordionSummary>

						<AccordionDetails
							sx={{
								border: "none",
								padding: "0 25px 5px",
							}}
						>
							<Typography sx={{ lineHeight: "1.8" }} mb="15px">
								sine is a comprehensive project management software designed to
								help teams streamline their workflow, collaborate effectively,
								and achieve project success.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion
						expanded={expanded === "panel9"}
						onChange={handleChange("panel9")}
						className="toc-accordion bg-f6f7f9"
						sx={{
							border: "none",
							borderRadius: "3px",
							mt: "10px",
						}}
					>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header"
							className="bg-f6f7f9"
							sx={{
								padding: "9px 25px",
								borderRadius: "3px",
							}}
						>
							<Typography
								variant="h4"
								fontWeight={600}
								fontSize="14px"
								className="text-black"
							>
								Can I try sine before purchasing?
							</Typography>
						</AccordionSummary>

						<AccordionDetails
							sx={{
								border: "none",
								padding: "0 25px 5px",
							}}
						>
							<Typography sx={{ lineHeight: "1.8" }} mb="15px">
								sine is a comprehensive project management software designed to
								help teams streamline their workflow, collaborate effectively,
								and achieve project success.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion
						expanded={expanded === "panel10"}
						onChange={handleChange("panel10")}
						className="toc-accordion bg-f6f7f9"
						sx={{
							border: "none",
							borderRadius: "3px",
							mt: "10px",
						}}
					>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header"
							className="bg-f6f7f9"
							sx={{
								padding: "9px 25px",
								borderRadius: "3px",
							}}
						>
							<Typography
								variant="h4"
								fontWeight={600}
								fontSize="14px"
								className="text-black"
							>
								What type of customer support does sine provide?
							</Typography>
						</AccordionSummary>

						<AccordionDetails
							sx={{
								border: "none",
								padding: "0 25px 5px",
							}}
						>
							<Typography sx={{ lineHeight: "1.8" }} mb="15px">
								sine is a comprehensive project management software designed to
								help teams streamline their workflow, collaborate effectively,
								and achieve project success.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion
						expanded={expanded === "panel11"}
						onChange={handleChange("panel11")}
						className="toc-accordion bg-f6f7f9"
						sx={{
							border: "none",
							borderRadius: "3px",
							mt: "10px",
						}}
					>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header"
							className="bg-f6f7f9"
							sx={{
								padding: "9px 25px",
								borderRadius: "3px",
							}}
						>
							<Typography
								variant="h4"
								fontWeight={600}
								fontSize="14px"
								className="text-black"
							>
								How do I get started with sine?
							</Typography>
						</AccordionSummary>

						<AccordionDetails
							sx={{
								border: "none",
								padding: "0 25px 5px",
							}}
						>
							<Typography sx={{ lineHeight: "1.8" }} mb="15px">
								sine is a comprehensive project management software designed to
								help teams streamline their workflow, collaborate effectively,
								and achieve project success.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion
						expanded={expanded === "panel12"}
						onChange={handleChange("panel12")}
						className="toc-accordion bg-f6f7f9"
						sx={{
							border: "none",
							borderRadius: "3px",
							mt: "10px",
						}}
					>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header"
							className="bg-f6f7f9"
							sx={{
								padding: "9px 25px",
								borderRadius: "3px",
							}}
						>
							<Typography
								variant="h4"
								fontWeight={600}
								fontSize="14px"
								className="text-black"
							>
								Does sine offer training for new users?
							</Typography>
						</AccordionSummary>

						<AccordionDetails
							sx={{
								border: "none",
								padding: "0 25px 5px",
							}}
						>
							<Typography sx={{ lineHeight: "1.8" }} mb="15px">
								sine is a comprehensive project management software designed to
								help teams streamline their workflow, collaborate effectively,
								and achieve project success.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Box>
			</Card>
		</>
	);
};

export default FaqContent;
