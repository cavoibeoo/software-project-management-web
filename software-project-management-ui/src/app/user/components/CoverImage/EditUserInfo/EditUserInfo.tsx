import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { changePassword, updateUserInfo } from "@/api-services/userServices";
import dayjs from "dayjs";

export const EditUserInfo = ({
	myInfo,
	callUpdate,
}: {
	myInfo: any;
	callUpdate: () => void;
}) => {
	// Dropdown
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const [name, setName] = useState(myInfo.name);
	const [department, setDepartment] = useState(myInfo.department);
	const [organization, setOrganization] = useState(myInfo.organization);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	// Dialog
	const [openDialog, setOpenDialog] = useState(false);
	const handleCloseDialog = () => {
		setOpenDialog(false);
	};
	const [openChangePasswordDialog, setOpenChangePasswordDialog] =
		useState(false);
	const handleCloseChangePasswordDialog = () => {
		setOpenChangePasswordDialog(false);
	};

	// State for password validation
	const [passwords, setPasswords] = useState({
		oldPassword: "",
		newPassword: "",
		confirmPassword: "",
	});

	const [errors, setErrors] = useState({
		oldPassword: "",
		newPassword: "",
		confirmPassword: "",
	});

	const handlePasswordChange = (field: string, value: string) => {
		const updatedPasswords = { ...passwords, [field]: value };
		setPasswords(updatedPasswords);

		// Validate passwords
		let newErrors = { ...errors };

		if (!updatedPasswords.oldPassword) {
			newErrors.oldPassword = "Required";
		} else {
			newErrors.oldPassword = "";
		}

		if (!updatedPasswords.newPassword) {
			newErrors.newPassword = "Required";
		} else {
			newErrors.newPassword = "";
		}

		if (!updatedPasswords.confirmPassword) {
			newErrors.confirmPassword = "Required";
		} else if (
			updatedPasswords.newPassword !== updatedPasswords.confirmPassword
		) {
			newErrors.confirmPassword = "Passwords must match";
		} else {
			newErrors.confirmPassword = "";
		}

		setErrors(newErrors);
	};

	const handleSavePassword = async () => {
		if (
			!passwords.oldPassword ||
			!passwords.newPassword ||
			!passwords.confirmPassword
		) {
			setErrors({
				oldPassword: passwords.oldPassword ? "" : "Required",
				newPassword: passwords.newPassword ? "" : "Required",
				confirmPassword: passwords.confirmPassword ? "" : "Required",
			});
			return;
		}

		if (passwords.newPassword !== passwords.confirmPassword) {
			setErrors({
				...errors,
				confirmPassword: "Passwords must match",
			});
			return;
		}

		await changePassword({
			oldPassword: passwords.oldPassword,
			newPassword: passwords.newPassword,
			confirmPassword: passwords.confirmPassword,
		});
		callUpdate();
		handleCloseChangePasswordDialog();
	};

	const handleSaveInfo = async () => {
		const data: any = {};

		if (name !== myInfo.name) {
			data.name = name;
		}
		if (department !== myInfo.department) {
			data.department = department;
		}
		if (organization !== myInfo.organization) {
			data.organization = organization;
		}

		if (Object.keys(data).length > 0) {
			await updateUserInfo(data);
		}

		handleCloseDialog();
		callUpdate();
	};

	return (
		<>
			<Box>
				<Button
					variant="outlined"
					onClick={handleClick}
					aria-controls={open ? "account-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					sx={{
						textTransform: "capitalize",
						padding: "10px 28px",
						borderRadius: "7px",
						fontSize: "16px",
						fontWeight: "500",
						boxShadow: "none",
					}}
					className="border text-body"
				>
					<i
						className="material-symbols-outlined mr-8"
						style={{
							fontSize: "20px",
						}}
					>
						edit
					</i>
					Edit
				</Button>

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
							boxShadow: "0 4px 45px #0000001a",
							mt: 0,
							minWidth: "160px",

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
					<MenuItem onClick={() => setOpenDialog(true)}>Edit Info</MenuItem>
					<MenuItem onClick={() => setOpenChangePasswordDialog(true)}>
						Change Password
					</MenuItem>
				</Menu>
			</Box>

			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				fullWidth
				maxWidth="sm"
			>
				<DialogTitle
					id="alert-dialog-title"
					sx={{ fontSize: "24px" }}
					className="custom-edit-dialog-header"
				>
					Edit My Info
				</DialogTitle>
				<DialogContent className="custom-edit-dialog-content">
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "16px",
							marginTop: "10px",
						}}
					>
						<Box display="flex" alignItems="center" gap="10px">
							<Typography variant="h6" width="200px">
								Name
							</Typography>
							<TextField
								placeholder={myInfo.name}
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Box>
						<Box display="flex" alignItems="center" gap="10px">
							<Typography variant="h6" width="200px">
								Email:
							</Typography>
							<TextField value={myInfo.email} contentEditable={false} />
						</Box>
						<Box display="flex" alignItems="center" gap="10px">
							<Typography variant="h6" width="200px">
								Create Date:
							</Typography>
							<TextField
								value={new Date(myInfo.createDate).toLocaleDateString()}
								contentEditable={false}
							/>
						</Box>
						<Box display="flex" alignItems="center" gap="10px">
							<Typography variant="h6" width="200px">
								Department:
							</Typography>
							<TextField
								placeholder={myInfo.department}
								value={department}
								onChange={(e) => setDepartment(e.target.value)}
							/>
						</Box>
						<Box display="flex" alignItems="center" gap="10px">
							<Typography variant="h6" width="200px">
								Organization:
							</Typography>
							<TextField
								placeholder={myInfo.organization}
								value={organization}
								onChange={(e) => setOrganization(e.target.value)}
							/>
						</Box>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>Cancel</Button>
					<Button variant="contained" onClick={handleSaveInfo} autoFocus>
						Save
					</Button>
				</DialogActions>
			</Dialog>
			<Dialog
				open={openChangePasswordDialog}
				onClose={handleCloseChangePasswordDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				fullWidth
				maxWidth="sm"
			>
				<DialogTitle
					id="alert-dialog-title"
					sx={{ fontSize: "24px" }}
					className="custom-edit-dialog-header"
				>
					Change Password
				</DialogTitle>
				<DialogContent className="custom-edit-dialog-content">
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "16px",
							marginTop: "10px",
						}}
					>
						<Box display="flex" alignItems="center" gap="10px">
							<Typography variant="h6" width="200px">
								Old Password:
							</Typography>
							<TextField
								placeholder="***********"
								type="password"
								value={passwords.oldPassword}
								onChange={(e) =>
									handlePasswordChange("oldPassword", e.target.value)
								}
							/>
						</Box>
						<Box display="flex" alignItems="center" gap="10px">
							<Typography variant="h6" width="200px">
								New Password:
							</Typography>
							<TextField
								placeholder="***********"
								type="password"
								value={passwords.newPassword}
								onChange={(e) =>
									handlePasswordChange("newPassword", e.target.value)
								}
								error={!!errors.newPassword}
								helperText={errors.newPassword}
							/>
						</Box>
						<Box display="flex" alignItems="center" gap="10px">
							<Typography variant="h6" width="200px">
								Confirm Password:
							</Typography>
							<TextField
								placeholder="***********"
								type="password"
								value={passwords.confirmPassword}
								onChange={(e) =>
									handlePasswordChange("confirmPassword", e.target.value)
								}
								error={!!errors.confirmPassword}
								helperText={errors.confirmPassword}
							/>
						</Box>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseChangePasswordDialog}>Cancel</Button>
					<Button variant="contained" onClick={handleSavePassword} autoFocus>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
