"use client";

import React from "react";
import {
	Card,
	Typography,
	Box,
	InputLabel,
	MenuItem,
	FormControl,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectAutoWidth: React.FC = () => {
	const [age, setAge] = React.useState("1");

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};

	return (
		<>
			<Box>
				<FormControl sx={{ m: 1, minWidth: 140 }}>
					<InputLabel id="demo-simple-select-autowidth-label">Role</InputLabel>
					<Select
						labelId="demo-simple-select-autowidth-label"
						id="demo-simple-select-autowidth"
						value={age}
						onChange={handleChange}
						autoWidth
						label="Age"
					>
						<MenuItem defaultValue={"Administrator"}></MenuItem>
						<MenuItem value={2}>Administrator</MenuItem>
						<MenuItem value={1}>Member</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</>
	);
};

export default SelectAutoWidth;
