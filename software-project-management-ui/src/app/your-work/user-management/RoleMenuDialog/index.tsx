"use client";

import React, { useState } from "react";
import {
	Typography,
	Button,
	Dialog,
	AppBar,
	Toolbar,
	IconButton,
	Slide,
	Grid,
	Box,
	Checkbox,
	Container,
	Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const RoleMenuDialog = () => {
	const [open, setOpen] = useState(false);
	const [selectedRole, setSelectedRole] = useState<string | null>(null);
	const [currentPermissions, setCurrentPermissions] = useState<string[]>([]);

	const rolePermissions = {
		admin: [
			"update_project",
			"delete_project",
			"archive_project",
			"add_sprint",
			"update_sprint",
			"delete_sprint",
			"add_issue_type",
			"update_issue_type",
			"delete_issue_type",
			"add_issue",
			"update_issue",
			"delete_issue",
			"add_workflow",
			"update_workflow",
			"delete_workflow",
			"add_actor",
			"update_actor_role",
			"remove_actor",
			"add_comment",
			"update_comment",
			"delete_comment",
		],
		member: [
			"add_sprint",
			"update_sprint",
			"add_issue",
			"update_issue",
			"add_comment",
			"update_comment",
		],
		viewer: [],
	};

	const customRoleColor = "#5e5bfc";

	const getCheckboxColor = () => {
		return selectedRole === "custom" ? customRoleColor : "#099f9d";
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleRoleClick = (role: string) => {
		setSelectedRole(role);
		setCurrentPermissions(
			rolePermissions[role as keyof typeof rolePermissions] || []
		);
	};

	const handlePermissionChange = (permission: string) => {
		setCurrentPermissions((prevPermissions) =>
			prevPermissions.includes(permission)
				? prevPermissions.filter((p) => p !== permission)
				: [...prevPermissions, permission]
		);
	};

	const isPermissionChecked = (permission: string) => {
		return currentPermissions.includes(permission);
	};

	return (
		<>
			<Button onClick={handleClickOpen} variant="contained" color="primary">
				<span className="material-symbols-outlined" style={{ marginRight: 10 }}>
					manage_accounts
				</span>
				Role Management
			</Button>
			<Dialog
				sx={{
					"& .MuiDialog-paper": {
						width: "100%",
						backgroundColor: "#1e263c !important",
					},
				}}
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<AppBar
					sx={{ position: "relative", backgroundColor: "#283045 !important" }}
				>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							Role Settings
						</Typography>
						<Button autoFocus color="inherit" onClick={handleClose}>
							save
						</Button>
					</Toolbar>
				</AppBar>
				<Container>
					<Grid container spacing={3} padding={5}>
						<Grid item xs={12} md={3}>
							<Paper
								elevation={3}
								sx={{
									padding: 3,
									backgroundColor: "#343f5b !important",
									color: "#fff",
								}}
							>
								<Typography variant="h6" component="div" gutterBottom>
									Role Name
								</Typography>
								<Box sx={{ display: "flex", flexDirection: "column" }}>
									<Button
										variant="contained"
										color="primary"
										sx={{ mb: 1, backgroundColor: "#099f9d  !important" }}
										onClick={() => handleRoleClick("admin")}
									>
										Admin
									</Button>
									<Button
										variant="contained"
										color="primary"
										sx={{ mb: 1, backgroundColor: "#099f9d94   !important" }}
										onClick={() => handleRoleClick("member")}
									>
										Member
									</Button>
									<Button
										variant="contained"
										color="primary"
										sx={{ mb: 1, backgroundColor: "#099f9d2b  !important" }}
										onClick={() => handleRoleClick("viewer")}
									>
										Viewer
									</Button>
									<Button
										variant="contained"
										color="primary"
										sx={{ mb: 1, backgroundColor: "#d7d7d73d  !important" }}
										onClick={() => handleRoleClick("custom")}
									>
										Custom Role
									</Button>
									<Button variant="outlined" color="primary">
										Add more Roles
									</Button>
								</Box>
							</Paper>
						</Grid>
						<Grid item xs={12} md={3}>
							<Paper
								elevation={3}
								sx={{
									padding: 3,
									backgroundColor: "#283149 !important",
									color: "#fff",
								}}
							>
								<Typography variant="h6" component="div" gutterBottom>
									{selectedRole ? "Select Permissions" : "Project Access"}
								</Typography>
								{[
									"update_project",
									"delete_project",
									"archive_project",
									"add_sprint",
									"update_sprint",
									"delete_sprint",
									"add_issue_type",
									"update_issue_type",
									"delete_issue_type",
									"add_issue",
									"update_issue",
									"delete_issue",
								].map((right) => (
									<Box
										key={right}
										sx={{ display: "flex", alignItems: "center", mb: 1 }}
									>
										<Checkbox
											checked={isPermissionChecked(right)}
											onChange={() => handlePermissionChange(right)}
											sx={{
												color: `${getCheckboxColor()} !important`,
												"&.Mui-checked": {
													color: `${getCheckboxColor()} !important`,
												},
											}}
										/>
										<Typography variant="body1">
											{right.replace(/_/g, " ")}
										</Typography>
									</Box>
								))}
							</Paper>
						</Grid>
						<Grid item xs={12} md={3}>
							<Paper
								elevation={3}
								sx={{
									padding: 3,
									backgroundColor: "#283149 !important",
									color: "#fff",
								}}
							>
								<Typography variant="h6" component="div" gutterBottom>
									Workflow Access
								</Typography>
								{["add_workflow", "update_workflow", "delete_workflow"].map(
									(right) => (
										<Box
											key={right}
											sx={{ display: "flex", alignItems: "center", mb: 1 }}
										>
											<Checkbox
												checked={isPermissionChecked(right)}
												onChange={() => handlePermissionChange(right)}
												sx={{
													color: `${getCheckboxColor()} !important`,
													"&.Mui-checked": {
														color: `${getCheckboxColor()} !important`,
													},
												}}
											/>
											<Typography variant="body1">
												{right.replace(/_/g, " ")}
											</Typography>
										</Box>
									)
								)}
							</Paper>
						</Grid>
						<Grid item xs={12} md={3}>
							<Paper
								elevation={3}
								sx={{
									padding: 3,
									backgroundColor: "#283149 !important",
									color: "#fff",
								}}
							>
								<Typography variant="h6" component="div" gutterBottom>
									Social Access
								</Typography>
								{[
									"add_actor",
									"update_actor_role",
									"remove_actor",
									"add_comment",
									"update_comment",
									"delete_comment",
								].map((right) => (
									<Box
										key={right}
										sx={{ display: "flex", alignItems: "center", mb: 1 }}
									>
										<Checkbox
											checked={isPermissionChecked(right)}
											onChange={() => handlePermissionChange(right)}
											sx={{
												color: `${getCheckboxColor()} !important`,
												"&.Mui-checked": {
													color: `${getCheckboxColor()} !important`,
												},
											}}
										/>
										<Typography variant="body1">
											{right.replace(/_/g, " ")}
										</Typography>
									</Box>
								))}
							</Paper>
						</Grid>
					</Grid>
				</Container>
			</Dialog>
		</>
	);
};

export default RoleMenuDialog;
