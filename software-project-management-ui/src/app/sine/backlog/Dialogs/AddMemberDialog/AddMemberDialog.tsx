"use client";

import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {
    Card,
    Typography,
    Button,
    DialogActions,
    DialogContentText,
    DialogContent,
    DialogTitle,
    Dialog,
    TextField,
} from "@mui/material";
import SelectAutoWidth from "./Component/SelectRole";

import { addActor } from "@/api-services/actorServices";

const FormDialog: React.FC<{
    project: any;
    callUpdate: () => void;
}> = ({ project, callUpdate }) => {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [role, setRole] = React.useState("Member");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async () => {
        let result = await addActor({ role, projectId: project._id, email });
        callUpdate();
        setOpen(false);
    };

    return (
        <>
            <Button
                sx={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                    color: "inherit",
                    borderRadius: "50%",
                    "&:hover": {
                        backgroundColor: "darken(#d0d4db, 1.6)",
                    },
                    backgroundColor: "#d0d4db",
                    marginRight: "5px",
                }}
                className="addMember"
                onClick={handleClickOpen}
            >
                <AddIcon />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: "form",
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        fontWeight: "500",
                        fontSize: "20px",
                    }}
                >
                    Add People to {project.name}
                </DialogTitle>
                <DialogContent sx={{ width: "300px", height: "auto" }}>
                    <DialogContentText
                        sx={{
                            fontWeight: "500",
                        }}
                    >
                        Emails
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        placeholder="  e.g., maria@company.com"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e: any) => setEmail(e.target.value)}
                    />
                </DialogContent>
                <div style={{ paddingLeft: "15px" }}>
                    <SelectAutoWidth roles={project.roles} setRole={setRole} />
                </div>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={handleSubmit}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default FormDialog;
