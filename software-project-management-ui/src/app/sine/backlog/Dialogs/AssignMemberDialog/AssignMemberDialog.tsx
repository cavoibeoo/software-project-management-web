"use client";

import React, { use } from "react";
import {
	Card,
	Typography,
	Box,
	Button,
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	DialogTitle,
	Dialog,
	IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { blue, deepPurple } from "@mui/material/colors";

import { updateIssue } from "@/api-services/issueServices";
import ProjectLeftSidebarMenu from "@/components/Layout/ProjectLeftSidebarMenu";

const emails = ["Tran Duc Quang", "Tran Binh Phuoc"];

export interface SimpleDialogProps {
	open: boolean;
	selectedValue: string;
	onClose: (value: string) => void;
	actors: any;
	issue: any;
	callUpdate: () => void;
}

function SimpleDialog({ ...props }: SimpleDialogProps) {
	const { actors, issue, callUpdate, onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = async (value: string) => {
		console.log(value, issue);
		await updateIssue({
			projectId: issue.project,
			issueId: issue._id,
			assignee: value,
		});

		callUpdate();
		onClose(value);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Assign For</DialogTitle>
			<List sx={{ pt: 0 }}>
				{actors?.map((actor: any) => (
					<ListItem disableGutters key={actor?.user?._id}>
						<ListItemButton
							onClick={() => handleListItemClick(actor?.user?._id)}
						>
							<ListItemAvatar>
								<Avatar
									src={actor?.user?.avatar || actor?.user?.name.charAt(0)}
									className="avatar-hover"
									sx={{ bgcolor: deepPurple[500] }}
								></Avatar>
							</ListItemAvatar>
							<ListItemText primary={actor?.user?.name} />
						</ListItemButton>
					</ListItem>
				))}
				<ListItem disableGutters>
					<ListItemButton
						autoFocus
						onClick={() => handleListItemClick("addAccount")}
					></ListItemButton>
				</ListItem>
			</List>
		</Dialog>
	);
}

const AssignMemberDialog: React.FC<{
	actors: any;
	issue: any;
	callUpdate: () => void;
}> = ({ actors, issue, callUpdate }) => {
	const [open, setOpen] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState(emails[1]);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value: string) => {
		setOpen(false);
		setSelectedValue(value);
	};

	return (
		<>
			<Box>
				<Button>
					<Avatar
						src={issue.assignee?.avatar || issue.assignee?.name.charAt(0)}
						sx={{ bgcolor: deepPurple[500] }}
						onClick={handleClickOpen}
					></Avatar>
				</Button>
				<SimpleDialog
					selectedValue={selectedValue}
					open={open}
					onClose={handleClose}
					actors={actors}
					issue={issue}
					callUpdate={callUpdate}
				/>
			</Box>
		</>
	);
};

export default AssignMemberDialog;
