"use client";
import * as React from "react";
import NextLink from "next/link";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { toast } from "react-toastify";
import { DialogContent, DialogActions, DialogContentText, DialogTitle, Slide } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";
import { FormEvent } from "react";
import ProjectDefaultLogo from "@/app/img/icon/ProjectDefaultLogo";
import { TransitionProps } from "@mui/material/transitions";
import { TextFields } from "@mui/icons-material";
import { useSearchParams } from "next/navigation";

import * as projectService from "@/api-services/projectServices";
import { set } from "react-hook-form";

export default function Page() {
    interface BootstrapDialogTitleProps {
        children?: React.ReactNode;
        onClose: () => void;
    }

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        "& .MuiDialogContent-root": {
            padding: theme.spacing(2),
        },
        "& .MuiDialogActions-root": {
            padding: theme.spacing(1),
        },
    }));

    function BootstrapDialogTitle(props: BootstrapDialogTitleProps) {
        const { children, onClose, ...other } = props;

        return (
            <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
                {children}
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <ClearIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
        );
    }
    BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const projectId = useSearchParams().get("projectId");
    const [fetchedProject, setFetchProject] = React.useState<any>();
    React.useEffect(() => {
        const fetchProject = async () => {
            const result = await projectService.fetchById(projectId);
            setFetchProject(result);
            setProjectInput(result?.name);
            setNameInput(result?.name);
            setKeyInput(result?.key);
            setSelectedFileName(result?.img);
            setActualImg(result?.img);
        };
        fetchProject();
    }, []);

    // Modal
    const [openNotification, setOpenNotification] = useState(false);
    const handleClickOpenNotification = () => {
        setOpenNotification(true);
    };
    const handleCloseNotification = () => {
        setOpenNotification(false);
    };
    const [projectInput, setProjectInput] = useState("");
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // if (projectInput === projectName) {
        // 	await moveToTrash(_id, projectName);
        // 	onDeleteSuccess();
        // } else {
        // 	toast.error("Project name does not match!");
        // }
    };
    const [nameInput, setNameInput] = useState("");
    const [keyInput, setKeyInput] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const handleUpdateProject = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (nameInput.length <= 2) {
            toast.error("Project name must be longer than 2 characters.");
            return;
        }

        if (!keyInput) {
            toast.error("Project key cannot be empty.");
            return;
        }

        if (keyInput?.length > 10) {
            toast.error("Project key cannot exceed 10 characters.");
            return;
        }

        // toast.info(
        //     "This change would re-index your project, and may break some external integrations."
        // );
        // toast.success("Project updated successfully!");
        let result = await projectService.updateProject(projectId, {
            name: nameInput,
            key: keyInput,
        });
        setNameInput(result.name);
        setKeyInput(result.key);
        setIsEdit(false);

        // Proceed with the update logic here
    };

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [openChangeLogoDialog, setOpenChangeLogoDialog] = React.useState(false);

    const handleClickOpenChangeLogoDialog = () => {
        setOpenChangeLogoDialog(true);
    };

    const handleCloseChangeLogoDialog = () => {
        setOpenChangeLogoDialog(false);
    };

    const [selectedFileName, setSelectedFileName] = useState<string>("cavoibeo.svg");
    const [actualImg, setActualImg] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<any>("/images/uploadImg.png");
    const [selectedAvatarIndex, setSelectedAvatarIndex] = useState<number | null>(null);

    const [openSelectAvatarDialog, setOpenSelectAvatarDialog] = useState(false);

    const handleUpdateImg = async () => {
        if (!selectedFile) {
            toast.error("Please select another image");
            return;
        }
        try {
            let file = selectedFile;
            if (typeof selectedFile === "string") {
                const response = await fetch(selectedFile); // Fetch file from public directory
                if (!response.ok) throw new Error("File not found");

                const blob = await response.blob(); // Get file as a blob
                file = new File([blob], "viewavatar (3).svg", { type: blob.type });
            }
            let result = await projectService.updateProject(projectId, { img: file });
            setActualImg(result.img);
            setOpenChangeLogoDialog(false);
        } catch (error) {
            console.error("Error updating project image:", error);
            toast.error("Failed to update project image");
        }
    };

    const handleOpenSelectAvatarDialog = () => {
        setOpenSelectAvatarDialog(true);
    };

    const handleCloseSelectAvatarDialog = () => {
        setOpenSelectAvatarDialog(false);
    };

    return (
        <>
            <Box
                marginInline={10}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link className="hover-underlined breadcrumb-link" href="/your-work/">
                        Projects
                    </Link>
                    <Link className="hover-underlined breadcrumb-link" href="#">
                        Sineizabes
                    </Link>
                    <Link className="hover-underlined breadcrumb-link" href="#">
                        Project Settings
                    </Link>
                </Breadcrumbs>
                <Button
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    <span className="material-symbols-outlined">more_horiz</span>
                </Button>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClickOpenNotification}>Move to trash</MenuItem>
                </Menu>
            </Box>

            <BootstrapDialog
                onClose={handleCloseNotification}
                aria-labelledby="customized-dialog-title"
                open={openNotification}
                className="rmu-modal"
            >
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#ff6666",
                            padding: { xs: "15px 20px", md: "25px" },
                        }}
                        className="rmu-modal-header"
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            sx={{
                                fontWeight: "600",
                                fontSize: { xs: "16px", md: "18px" },
                                color: "#fff !important",
                            }}
                            className="text-black"
                        >
                            Move to Trash
                        </Typography>

                        <IconButton
                            aria-label="remove"
                            size="small"
                            onClick={handleCloseNotification}
                        >
                            <ClearIcon />
                        </IconButton>
                    </Box>

                    <Box className="rmu-modal-content">
                        <Box component="form" noValidate onSubmit={handleSubmit}>
                            <Box
                                sx={{
                                    padding: "25px",
                                    borderRadius: "8px",
                                }}
                                className="bg-white"
                            >
                                <Grid container alignItems="center" spacing={2}>
                                    <Typography>
                                        Please input <strong>ProjectName</strong> to Temporary
                                        Delete
                                    </Typography>
                                    <TextField
                                        sx={{ mt: 2 }}
                                        label="Project Name"
                                        variant="outlined"
                                        fullWidth
                                        value={projectInput}
                                        onChange={(e) => setProjectInput(e.target.value)}
                                    />

                                    <Grid
                                        item
                                        xs={12}
                                        mt={1}
                                        display="flex"
                                        justifyContent="flex-end"
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                            }}
                                        >
                                            <Button
                                                onClick={handleCloseNotification}
                                                variant="outlined"
                                                color="error"
                                                sx={{
                                                    textTransform: "capitalize",
                                                    borderRadius: "8px",
                                                    fontWeight: "500",
                                                    fontSize: "13px",
                                                    padding: "11px 30px",
                                                }}
                                            >
                                                Cancel
                                            </Button>

                                            <Button
                                                type="submit"
                                                variant="contained"
                                                component="button"
                                                sx={{
                                                    textTransform: "capitalize",
                                                    borderRadius: "8px",
                                                    fontWeight: "500",
                                                    fontSize: "13px",
                                                    padding: "11px 30px",
                                                    color: "#fff !important",
                                                }}
                                            >
                                                Move
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </BootstrapDialog>

            <Typography variant="h5" sx={{ marginInline: 11, mt: 5, fontWeight: "bold" }}>
                Details
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    mb: 5,
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <ProjectDefaultLogo src={actualImg} />
                <Button variant="outlined" size="medium" onClick={handleClickOpenChangeLogoDialog}>
                    Change Icon
                </Button>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleUpdateProject}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        alignContent: "start",
                        width: "50vh",
                    }}
                >
                    <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
                        Required fields are marked with an asterisk{" "}
                        <span style={{ color: "#ff5630", marginBottom: "10px" }}> * </span>
                    </Typography>

                    <Typography variant="h6" fontWeight="bold">
                        Name<span style={{ color: "#ff5630" }}> * </span>
                    </Typography>

                    <TextField
                        placeholder="SineVoiBeo"
                        required
                        fullWidth
                        id="name"
                        autoFocus
                        value={nameInput}
                        onChange={(e) => {
                            setNameInput(e.target.value), setIsEdit(true);
                        }}
                        InputProps={{
                            style: { borderRadius: 8 },
                        }}
                    />
                    <Typography
                        variant="body2"
                        style={{
                            display:
                                nameInput?.length > 0 && nameInput?.length <= 2 ? "block" : "none",
                            color: "#ff5630",
                        }}
                    >
                        Project name must be longer than 2 characters.
                    </Typography>

                    <Typography variant="h6" fontWeight="bold">
                        Project Key<span style={{ color: "#ff5630" }}> * </span>
                    </Typography>

                    <TextField
                        placeholder="SVB"
                        required
                        fullWidth
                        id="projectKey"
                        value={keyInput}
                        onChange={(e) => {
                            setKeyInput(e.target.value), setIsEdit(true);
                        }}
                        InputProps={{
                            style: { borderRadius: 8 },
                        }}
                    />
                    <Typography
                        variant="body2"
                        style={{
                            display:
                                keyInput?.length > 0 && keyInput?.length > 10 ? "block" : "none",
                            color: "#ff5630",
                        }}
                    >
                        Project key cannot exceed 10 characters.
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{
                            display: keyInput?.length > 0 ? "block" : "none",
                            color: "#cc9c00",
                        }}
                    >
                        Changing the project key will re-index your project, and may break some
                        external integrations.
                    </Typography>

                    {isEdit ? (
                        <Button
                            variant="contained"
                            size="medium"
                            type="submit"
                            style={{ marginTop: "10px" }}
                        >
                            Save
                        </Button>
                    ) : null}
                </Box>
            </Box>
            <Dialog
                onClose={handleCloseNotification}
                aria-labelledby="customized-dialog-title"
                open={openChangeLogoDialog}
                className="rmu-modal"
            >
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",

                            alignItems: "center",
                            padding: { xs: "15px 20px", md: "25px" },
                        }}
                        className="rmu-modal-header"
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            sx={{
                                fontWeight: "600",
                                fontSize: { xs: "16px", md: "18px" },
                                color: "#fff !important",
                            }}
                            className="text-black"
                        >
                            Choose an icon
                        </Typography>

                        <IconButton
                            aria-label="remove"
                            size="small"
                            onClick={handleCloseChangeLogoDialog}
                        >
                            <ClearIcon />
                        </IconButton>
                    </Box>

                    <Box className="rmu-modal-content">
                        <Box component="form" noValidate onSubmit={handleSubmit}>
                            <Box
                                sx={{
                                    padding: "25px",
                                    borderRadius: "8px",
                                }}
                                className="bg-white"
                            >
                                <Grid container alignItems="center" spacing={2}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "100%",
                                        }}
                                    >
                                        <Box className="css-1790nmb" gap={"7px"}>
                                            <img
                                                style={{
                                                    width: "300px",
                                                    height: "auto",
                                                    borderRadius: "50%",
                                                }}
                                                src={selectedFileName}
                                                alt=""
                                            />
                                            {/* <Typography style={{ textAlign: "center" }}>
                                                Drag & Drop Your Image Here..
                                            </Typography> */}
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "5px",
                                                flexDirection: "column",
                                                marginTop: "5px",
                                            }}
                                        >
                                            <input
                                                type="file"
                                                id="file-upload"
                                                style={{ display: "none" }}
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        setSelectedFileName(
                                                            URL.createObjectURL(file)
                                                        );
                                                        setSelectedFile(file);
                                                    }
                                                }}
                                            />
                                            <label htmlFor="file-upload">
                                                <Button
                                                    sx={{
                                                        textTransform: "capitalize",
                                                    }}
                                                    variant="outlined"
                                                    component="span"
                                                >
                                                    Upload a photo
                                                </Button>
                                            </label>
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: "10px",
                                            flexWrap: "wrap",
                                            justifyContent: "center",
                                            rowGap: "10px",
                                            marginTop: "20px",
                                            alignItems: "center",
                                            alignContent: "center",
                                            width: "100%",
                                        }}
                                    >
                                        {[
                                            "/images/projectIcon/viewavatar (1).svg",
                                            "/images/projectIcon/viewavatar (2).svg",
                                            "/images/projectIcon/viewavatar (3).svg",
                                            "/images/projectIcon/viewavatar (4).svg",
                                            "/images/projectIcon/viewavatar (5).svg",
                                        ].map((src, index) => (
                                            <img
                                                key={index}
                                                src={src}
                                                alt={`default-${index}`}
                                                style={{
                                                    width: "45px",
                                                    height: "45px",
                                                    cursor: "pointer",
                                                    border:
                                                        selectedAvatarIndex === index
                                                            ? "4px solid #2fb5ef"
                                                            : "none",
                                                    borderRadius: "50%",
                                                }}
                                                onClick={() => {
                                                    setSelectedFileName(
                                                        `/images/projectIcon/viewavatar (${index + 1}).svg`
                                                    );
                                                    setSelectedFile(
                                                        `/images/projectIcon/viewavatar (${index + 1}).svg`
                                                    );
                                                    setSelectedAvatarIndex(index);
                                                }}
                                            />
                                        ))}
                                        <Button
                                            sx={{
                                                width: "45px",
                                                height: "45px",
                                                minWidth: "45px",
                                                borderRadius: "50%",
                                                padding: 0,
                                                overflow: "hidden",
                                            }}
                                            onClick={handleOpenSelectAvatarDialog}
                                        >
                                            <span className="material-symbols-outlined">
                                                more_horiz
                                            </span>
                                        </Button>
                                    </Box>

                                    <Grid
                                        item
                                        xs={12}
                                        mt={1}
                                        display="flex"
                                        justifyContent="flex-end"
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                            }}
                                        >
                                            <Button
                                                onClick={handleCloseChangeLogoDialog}
                                                variant="outlined"
                                                size="small"
                                                sx={{
                                                    textTransform: "capitalize",
                                                    borderRadius: "8px",
                                                    fontWeight: "500",
                                                    fontSize: "13px",
                                                    padding: "5px 15px",
                                                }}
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                component="button"
                                                size="small"
                                                sx={{
                                                    textTransform: "capitalize",
                                                    borderRadius: "8px",
                                                    fontWeight: "500",
                                                    fontSize: "13px",
                                                    padding: "5px 15px",
                                                    color: "#fff !important",
                                                }}
                                                onClick={handleUpdateImg}
                                            >
                                                Save
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Dialog>
            <Dialog
                onClose={handleCloseSelectAvatarDialog}
                aria-labelledby="select-avatar-dialog-title"
                open={openSelectAvatarDialog}
            >
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: { xs: "15px 20px", md: "25px" },
                        }}
                    >
                        <Typography variant="h6">Choose an Icon</Typography>
                        <IconButton
                            aria-label="close"
                            size="small"
                            onClick={handleCloseSelectAvatarDialog}
                        >
                            <ClearIcon />
                        </IconButton>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: "10px",
                            padding: "20px",
                        }}
                    >
                        {[
                            "/images/projectIcon/viewavatar (1).svg",
                            "/images/projectIcon/viewavatar (2).svg",
                            "/images/projectIcon/viewavatar (3).svg",
                            "/images/projectIcon/viewavatar (4).svg",
                            "/images/projectIcon/viewavatar (5).svg",
                            "/images/projectIcon/viewavatar (6).svg",
                            "/images/projectIcon/viewavatar (7).svg",
                            "/images/projectIcon/viewavatar (8).svg",
                            "/images/projectIcon/viewavatar (9).svg",
                            "/images/projectIcon/viewavatar (10).svg",
                            "/images/projectIcon/viewavatar (11).svg",
                            "/images/projectIcon/viewavatar (12).svg",
                            "/images/projectIcon/viewavatar (13).svg",
                            "/images/projectIcon/viewavatar (14).svg",
                            "/images/projectIcon/viewavatar (15).svg",
                            "/images/projectIcon/viewavatar (16).svg",
                            "/images/projectIcon/viewavatar (17).svg",
                            "/images/projectIcon/viewavatar (18).svg",
                            "/images/projectIcon/viewavatar (19).svg",
                            "/images/projectIcon/viewavatar (20).svg",
                            "/images/projectIcon/viewavatar (21).svg",
                            "/images/projectIcon/viewavatar (22).svg",
                            "/images/projectIcon/viewavatar (23).svg",
                            "/images/projectIcon/viewavatar (24).svg",
                            "/images/projectIcon/viewavatar (25).svg",
                            "/images/projectIcon/viewavatar (26).svg",
                        ].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`avatar-${index}`}
                                style={{
                                    width: "45px",
                                    height: "45px",
                                    cursor: "pointer",
                                    border:
                                        selectedAvatarIndex === index
                                            ? "2px solid #ff5630"
                                            : "none",
                                    borderRadius: "50%",
                                }}
                                onClick={() => {
                                    setSelectedFileName(
                                        `/images/projectIcon/viewavatar (${index + 1}).svg`
                                    );
                                    setSelectedFile(
                                        `/images/projectIcon/viewavatar (${index + 1}).svg`
                                    );
                                    setSelectedAvatarIndex(index);
                                    handleCloseSelectAvatarDialog();
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </Dialog>
        </>
    );
}
