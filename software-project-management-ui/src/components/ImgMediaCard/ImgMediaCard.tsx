import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
	return (
		<Card
			sx={{
				maxWidth: 200,
				height: "auto",
				boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
				"&:hover": { boxShadow: "0 6px 10px rgba(0, 0, 0, 0.19)" },
			}}
		>
			<CardMedia
				component="img"
				alt="green iguana"
				height="20px"
				image="https://famsgroup05.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404"
				style={{ height: "73px" }}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Sine_SPM
				</Typography>
				<Typography variant="body2" sx={{ color: "text.secondary" }}>
					<img src="" alt="" />
					Project
				</Typography>
			</CardContent>
		</Card>
	);
}
