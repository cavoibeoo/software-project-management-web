"use client";

import React, { use, useEffect, useState } from "react";
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
	TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { set } from "react-hook-form";

import * as roleServices from "@/api-services/roleServices";
import { permission } from "process";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const RoleMenuDialog = ({
	project,
	callUpdate,
}: {
	project: any;
	callUpdate: () => void;
}) => {
	const [open, setOpen] = useState(false);
	const [selectedRole, setSelectedRole] = useState<string | null>(
		project?.roles[0].name
	);
	const [currentRoleId, setCurrentRoleId] = useState<string | null>(
		project?.roles[0]._id
	);
	const [currentPermissions, setCurrentPermissions] = useState<string[]>(
		project?.roles[0]?.permissions
	);
	const [addRoleDialogOpen, setAddRoleDialogOpen] = useState(false);
	const [newRoleName, setNewRoleName] = useState("");

	const [rolePermissions, setRolePermissions] = useState<any>(project?.roles);
	const [roles, setRoles] = useState<any>(project?.roles);

	const [isUpdateRoleName, setIsUpdateRoleName] = useState(false);
	const [updatedName, setUpdatedName] = useState("");
	const [isDeleteRole, setIsDeleteRole] = useState(false);

	useEffect(() => {
		setRolePermissions(project?.roles);
		setCurrentPermissions(project?.roles[0]?.permissions);
		setSelectedRole(project?.roles[0]?.name);
		setCurrentRoleId(project?.roles[0]?._id);
		setUpdatedName(project?.roles[0]?.name);
		setRoles(project?.roles);
	}, [project]);

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

	const handleRoleClick = (index: number) => {
		setSelectedRole(rolePermissions?.permissions);
		setSelectedRole(project?.roles[index]?.name);
		setCurrentRoleId(project?.roles[index]?._id);
		setCurrentPermissions(roles[index]?.permissions || []);
		setUpdatedName(project?.roles[index]?.name);
	};

	const handlePermissionChange = (permission: string) => {
		setCurrentPermissions((prevPermissions: any) =>
			prevPermissions?.includes(permission)
				? prevPermissions.filter((p: any) => p !== permission)
				: [...prevPermissions, permission]
		);
	};

	const isPermissionChecked = (permission: string) => {
		return currentPermissions?.includes(permission);
	};

	const handleAddRoleClick = () => {
		setAddRoleDialogOpen(true);
	};

	const handleAddRoleClose = () => {
		setAddRoleDialogOpen(false);
	};

	const handleAddRole = async () => {
		const result = await roleServices.addNewRole({
			projectId: project._id,
			roleName: newRoleName,
			permissions: [
				"add_sprint",
				"update_sprint",
				"delete_sprint",
				"add_issue",
				"update_issue",
				"delete_issue",
			],
		});
		if (!result?.error) {
			callUpdate();
			setAddRoleDialogOpen(false);
		}
	};

	const handleUpdateRole = async () => {
		const result = await roleServices.updateRole({
			projectId: project._id,
			roleId: currentRoleId,
			...(updatedName !== selectedRole && { roleName: updatedName }),
			permissions: currentPermissions,
		});
		if (!result?.error) {
			callUpdate();
			setAddRoleDialogOpen(false);
			setIsUpdateRoleName(false);
		}
	};
	const handleDeleteRole = async () => {
		const result = await roleServices.deleteRole({
			projectId: project._id,
			roleId: currentRoleId,
		});
		if (!result?.error) {
			callUpdate();
			setIsDeleteRole(false);
		}
	};

	const handleRoleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewRoleName(event.target.value);
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
						<Button
							autoFocus
							color="inherit"
							onClick={() => setIsUpdateRoleName(true)}
						>
							update role name
						</Button>
						<Button
							autoFocus
							color="inherit"
							onClick={() => setIsDeleteRole(true)}
						>
							delete role
						</Button>
						<Button autoFocus color="inherit" onClick={handleUpdateRole}>
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
									{roles?.map((role: any, index: number) => (
										<Button
											key={index}
											variant="contained"
											color="primary"
											sx={
												selectedRole == role.name
													? {
															mb: 1,
															backgroundColor: "#34c3c194 !important",
														}
													: {
															mb: 1,
															backgroundColor: "#099f9d2b  !important",
														}
											}
											onClick={() => handleRoleClick(index)}
										>
											{role?.name}
										</Button>
									))}
									<Button
										variant="outlined"
										onClick={handleAddRoleClick}
										className="addrolesBtn"
										sx={{
											mb: 1,
										}}
									>
										+ ADD
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
									"add_role",
									"update_role",
									"delete_role",
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
			<Dialog open={addRoleDialogOpen} onClose={handleAddRoleClose}>
				<AppBar
					sx={{ position: "relative", backgroundColor: "#283045 !important" }}
				>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleAddRoleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							Add New Role
						</Typography>
					</Toolbar>
				</AppBar>
				<Container>
					<Box sx={{ padding: 1 }}>
						<Typography variant="h6" component="div" gutterBottom>
							Enter Role Name
						</Typography>
						<TextField
							fullWidth
							variant="outlined"
							value={newRoleName}
							onChange={handleRoleNameChange}
							placeholder="Role Name"
						/>
					</Box>
					<Box sx={{ padding: 2, display: "flex", justifyContent: "flex-end" }}>
						<Button variant="text" color="primary" onClick={handleAddRole}>
							Save
						</Button>
					</Box>
				</Container>
			</Dialog>
			<Dialog
				open={isUpdateRoleName}
				onClose={() => setIsUpdateRoleName(false)}
			>
				<AppBar
					sx={{ position: "relative", backgroundColor: "#283045 !important" }}
				>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={() => setIsUpdateRoleName(false)}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							Update role name
						</Typography>
					</Toolbar>
				</AppBar>
				<Container>
					<Box sx={{ padding: 1 }}>
						<Typography variant="h6" component="div" gutterBottom>
							Enter new role name
						</Typography>
						<TextField
							fullWidth
							variant="outlined"
							value={updatedName}
							onChange={(e) => setUpdatedName(e.target.value)}
							placeholder={selectedRole || ""}
						/>
					</Box>
					<Box sx={{ padding: 2, display: "flex", justifyContent: "flex-end" }}>
						<Button variant="text" color="primary" onClick={handleUpdateRole}>
							Save
						</Button>
					</Box>
				</Container>
			</Dialog>
			<Dialog open={isDeleteRole} onClose={() => setIsDeleteRole(false)}>
				<AppBar
					sx={{ position: "relative", backgroundColor: "#283045 !important" }}
				>
					<Toolbar>
						<Typography
							id="modal-modal-title"
							variant="h6"
							sx={{
								fontWeight: "600",
								color: "#fff !important",
							}}
							className="text-black"
						>
							Delete role
						</Typography>
					</Toolbar>
				</AppBar>

				<Container>
					<Box sx={{ padding: 1 }}>
						<Typography width="100%">
							Do you want to delete role '{selectedRole}'?
						</Typography>
						<Typography width="100%" paddingTop={"10px"}>
							You can’t undo this.
						</Typography>
					</Box>
					<Box sx={{ padding: 2, display: "flex", justifyContent: "flex-end" }}>
						<Button
							variant="text"
							color="primary"
							onClick={() => setIsDeleteRole(false)}
						>
							Cancel
						</Button>
						<Button variant="text" color="primary" onClick={handleDeleteRole}>
							Save
						</Button>
					</Box>
				</Container>
			</Dialog>
		</>
	);
};

export default RoleMenuDialog;
