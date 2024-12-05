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
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    DialogTitle,
    Checkbox,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";
import { FormEvent } from "react";
import ProjectDefaultLogo from "@/app/img/icon/ProjectDefaultLogo";
import InputAdornment from "@mui/material/InputAdornment";
import Tooltip from "@mui/material/Tooltip";

import { useProject } from "@/app/context/ProjectContext";
import * as issueTypeService from "@/api-services/issueTypeService";
import { ArrowDropDownIcon } from "@mui/x-date-pickers/icons";

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

    const { projectID, setProjectID, issueTypeId, setIssueTypeId } = useProject();
    const [issueType, setIssueType] = React.useState<any | null>();

    React.useEffect(() => {
        const fetchApi = async () => {
            const data = await issueTypeService.fetchById({
                projectId: projectID,
                issueTypeId: issueTypeId,
            });
            setIssueType(data);
        };
        fetchApi();
    }, [issueTypeId]);

    const handleAddField = (dataType: any) => {
        // Add a field to the issue type
        const newFields = [
            ...issueType.fields,
            { name: dataType, dataType: dataType, isRequired: false, description: "" },
        ];
        let newIssueType = { ...issueType, fields: newFields };
        setIssueType(newIssueType);
    };

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

        if (keyInput.length > 10) {
            toast.error("Project key cannot exceed 10 characters.");
            return;
        }

        toast.info(
            "This change would re-index your project, and may break some external integrations."
        );
        toast.success("Project updated successfully!");

        // Proceed with the update logic here
    };

    return (
        <>
            <Box mb={10}>
                <Grid container spacing={2} marginInline={10}>
                    <Grid item xs={12} md={7}>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            flexWrap="wrap"
                            overflow="hidden"
                            width="100%"
                        >
                            <Breadcrumbs separator="›" aria-label="breadcrumb">
                                <Link className="hover-underlined breadcrumb-link" href="#">
                                    Sineizabes
                                </Link>
                                <Link
                                    className="hover-underlined breadcrumb-link"
                                    href="/your-work/project-setting/details"
                                >
                                    Project Settings
                                </Link>
                                <Link className="breadcrumb-link" href="#">
                                    Issue Types
                                </Link>
                                <Link className="breadcrumb-link" href="#">
                                    {issueType?.name}
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
                                <MenuItem onClick={handleClickOpenNotification}>
                                    Move to trash
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Box overflow="auto" maxWidth="100%">
                            <Typography
                                variant="h4"
                                display="flex"
                                alignItems="center"
                                gap={1}
                                marginBottom={2}
                            >
                                <img
                                    style={{ width: "30px", height: "30px" }}
                                    src={issueType?.img}
                                    alt="BugIcon"
                                />{" "}
                                {issueType?.name}
                            </Typography>
                            <Typography variant="subtitle1">{issueType?.description}</Typography>
                            <Box display="flex" flexDirection="column" gap={1} marginTop={3}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <Typography variant="h6">Description fields</Typography>
                                    <Tooltip
                                        sx={{ background: "#fff", padding: "10px" }}
                                        title={
                                            <div
                                                style={{
                                                    width: "300px",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                <p>
                                                    These fields describe the work that needs to be
                                                    done. They display prominently in most views.
                                                </p>
                                                <Link
                                                    href="https://confluence.atlassian.com/x/Jxm1O"
                                                    style={{
                                                        color: "#32b3ff",
                                                        textDecoration: "underline",
                                                    }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    More about description fields
                                                </Link>
                                            </div>
                                        }
                                        placement="right"
                                    >
                                        <span className="material-symbols-outlined">info</span>
                                    </Tooltip>
                                </Box>
                                <Tooltip
                                    sx={{ background: "#fff" }}
                                    title={
                                        <div
                                            style={{
                                                width: "200px",
                                                fontSize: "12px",
                                            }}
                                        >
                                            <p>Sine created this field. You can't:</p>
                                            <ul>
                                                <li>edit its name</li>
                                                <li>change if it's required</li>
                                                <li>remove it</li>
                                                <li>reorder it</li>
                                            </ul>
                                        </div>
                                    }
                                    placement="bottom"
                                >
                                    <TextField
                                        variant="outlined"
                                        sx={{ width: "93%" }}
                                        InputProps={{
                                            readOnly: true,
                                            startAdornment: (
                                                <InputAdornment
                                                    className="text-dark"
                                                    position="start"
                                                >
                                                    <span
                                                        className="material-symbols-outlined"
                                                        style={{ marginRight: 10 }}
                                                    >
                                                        format_size
                                                    </span>
                                                    Summary
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment
                                                    className="text-dark"
                                                    position="end"
                                                >
                                                    <span
                                                        className="material-symbols-outlined"
                                                        style={{ marginRight: 10 }}
                                                    >
                                                        check
                                                    </span>
                                                    <Typography variant="subtitle1">
                                                        Required
                                                    </Typography>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Tooltip>

                                <TextField
                                    variant="outlined"
                                    sx={{ width: "93%" }}
                                    InputProps={{
                                        readOnly: true,
                                        startAdornment: (
                                            <InputAdornment className="text-dark" position="start">
                                                <span
                                                    className="material-symbols-outlined"
                                                    style={{ marginRight: 10 }}
                                                >
                                                    subject
                                                </span>
                                                Description
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment className="text-dark" position="end">
                                                <span
                                                    className="material-symbols-outlined"
                                                    style={{ marginRight: 10 }}
                                                >
                                                    chevron_right
                                                </span>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                            <Box display="flex" flexDirection="column" gap={1} marginTop={3}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <Typography variant="h6">Context fields</Typography>
                                    <Tooltip
                                        sx={{ background: "#fff", padding: "10px" }}
                                        title={
                                            <div
                                                style={{
                                                    width: "300px",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                <p>
                                                    These fields provide context to the work, and
                                                    help group, filter, and report on similar
                                                    issues.
                                                </p>
                                                <Link
                                                    href="https://support.atlassian.com/jira-software-cloud/docs/customize-an-issues-fields-in-team-managed-projects/"
                                                    style={{
                                                        color: "#32b3ff",
                                                        textDecoration: "underline",
                                                    }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    More about context fields
                                                </Link>
                                            </div>
                                        }
                                        placement="right"
                                    >
                                        <span className="material-symbols-outlined">info</span>
                                    </Tooltip>
                                </Box>
                                <TextField
                                    variant="outlined"
                                    sx={{ width: "110px" }}
                                    InputProps={{
                                        // readOnly: true,
                                        startAdornment: (
                                            <InputAdornment className="text-dark" position="start">
                                                <span
                                                    className="material-symbols-outlined"
                                                    style={{ marginRight: 10 }}
                                                >
                                                    arrow_forward
                                                </span>
                                                Status
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                {issueType?.fields.map((field: any) => (
                                    <>
                                        <Accordion
                                            variant="outlined"
                                            className="bg-white"
                                            sx={{ width: "93%" }}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ArrowDropDownIcon />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                            >
                                                <Typography
                                                    sx={{
                                                        alignItem: "center",
                                                        justifyItem: "center",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            flex: "row",
                                                            gap: "10px",
                                                            alignItems: "center",
                                                            verticalAlign: "center",
                                                        }}
                                                    >
                                                        {field?.dataType === "String" && (
                                                            <span className="material-symbols-outlined">
                                                                text_fields
                                                            </span>
                                                        )}
                                                        {field?.dataType === "Paragraph" && (
                                                            <span className="material-symbols-outlined">
                                                                subject
                                                            </span>
                                                        )}
                                                        {field?.dataType === "Number" && (
                                                            <span className="material-symbols-outlined">
                                                                123
                                                            </span>
                                                        )}
                                                        {field?.dataType === "People" && (
                                                            <span className="material-symbols-outlined">
                                                                account_circle
                                                            </span>
                                                        )}
                                                        {field?.dataType === "Boolean" && (
                                                            <span className="material-symbols-outlined">
                                                                rule
                                                            </span>
                                                        )}
                                                        {field?.dataType === "Combobox" && (
                                                            <span className="material-symbols-outlined">
                                                                stat_minus_2
                                                            </span>
                                                        )}
                                                        {field?.name}
                                                    </Box>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <TextField
                                                    label="Issue type name"
                                                    variant="filled"
                                                    value={field?.name}
                                                    // onClick={() => setIsEditingDescription(true)}
                                                    sx={{
                                                        "& .MuiInputBase-root": {
                                                            border: "1px solid #D5D9E2 !important",
                                                            backgroundColor: "#fff",
                                                            borderRadius: "7px",
                                                        },
                                                        "& .MuiInputBase-root::before": {
                                                            border: "none",
                                                        },
                                                        "& .MuiInputBase-root:hover::before": {
                                                            border: "none",
                                                        },
                                                        width: "100%",
                                                        marginBottom: "20px",
                                                    }}
                                                />
                                                <TextField
                                                    label="Description"
                                                    variant="filled"
                                                    value={field?.description}
                                                    // onClick={() => setIsEditingDescription(true)}
                                                    sx={{
                                                        "& .MuiInputBase-root": {
                                                            border: "1px solid #D5D9E2 !important",
                                                            backgroundColor: "#fff",
                                                            borderRadius: "7px",
                                                        },
                                                        "& .MuiInputBase-root::before": {
                                                            border: "none",
                                                        },
                                                        "& .MuiInputBase-root:hover::before": {
                                                            border: "none",
                                                        },
                                                        width: "100%",
                                                        marginBottom: "20px",
                                                    }}
                                                />
                                                <Box
                                                    key="right"
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "flex-end",
                                                        alignItems: "center",
                                                        mb: 1,
                                                        gap: "5px",
                                                    }}
                                                >
                                                    <Typography>Required</Typography>
                                                    <Checkbox
                                                        value={field?.isRequired}
                                                        sx={{
                                                            color: `#099f9d !important`,
                                                            "&.Mui-checked": {
                                                                color: `#099f9d !important`,
                                                            },
                                                        }}
                                                    />
                                                    <Button variant="contained">Remove</Button>
                                                </Box>
                                            </AccordionDetails>
                                        </Accordion>
                                    </>
                                ))}
                            </Box>
                            <Box
                                marginTop={3}
                                display="flex"
                                flexDirection="row"
                                gap={1}
                                justifyContent="flex-end"
                                width="100%"
                                paddingRight={"50px"}
                            >
                                <Button variant="outlined" sx={{ width: "20%" }}>
                                    Discard
                                </Button>
                                <Button variant="contained" sx={{ width: "20%" }}>
                                    Save changes
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ padding: "0 !important", marginInline: "0 !important" }}
                        className="sidebar-menu-divider"
                    >
                        <Box maxWidth="100%" marginLeft={2} marginBlock={2} marginRight={3}>
                            <Typography variant="h6" marginBottom={2}>
                                Create A Fields
                            </Typography>
                            <Typography variant="subtitle1">
                                Drag a field type to one of the sections on the left to create a
                                custom field for this issue type.
                            </Typography>
                            <div
                                className="sidebar-menu-divider"
                                style={{ marginTop: 10, marginBottom: 10 }}
                            ></div>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Button
                                        onClick={() => handleAddField("String")}
                                        variant="text"
                                        sx={{ width: 100, height: 100 }}
                                    >
                                        <Box
                                            className="sidebar-menu-divider"
                                            padding={5}
                                            paddingBlock={5}
                                            width={60}
                                            height={60}
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                            justifyContent="center"
                                            sx={{ textTransform: "none" }}
                                        >
                                            <span className="material-symbols-outlined">
                                                text_fields
                                            </span>
                                            ShortText
                                        </Box>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Button variant="text" sx={{ width: 100, height: 100 }}>
                                        <Box
                                            className="sidebar-menu-divider"
                                            padding={5}
                                            paddingBlock={5}
                                            width={60}
                                            height={60}
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                            justifyContent="center"
                                            sx={{ textTransform: "none" }}
                                        >
                                            <span className="material-symbols-outlined">
                                                subject
                                            </span>
                                            Paragraph
                                        </Box>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Button variant="text" sx={{ width: 100, height: 100 }}>
                                        <Box
                                            onClick={() => handleAddField("Number")}
                                            className="sidebar-menu-divider"
                                            padding={5}
                                            paddingBlock={5}
                                            width={60}
                                            height={60}
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                            justifyContent="center"
                                            sx={{ textTransform: "none" }}
                                        >
                                            <span className="material-symbols-outlined">123</span>
                                            Number
                                        </Box>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Button variant="text" sx={{ width: 100, height: 100 }}>
                                        <Box
                                            onClick={() => handleAddField("People")}
                                            className="sidebar-menu-divider"
                                            padding={5}
                                            paddingBlock={5}
                                            width={60}
                                            height={60}
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                            justifyContent="center"
                                            sx={{ textTransform: "none" }}
                                        >
                                            <span className="material-symbols-outlined">
                                                account_circle
                                            </span>
                                            People
                                        </Box>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Button variant="text" sx={{ width: 100, height: 100 }}>
                                        <Box
                                            onClick={() => handleAddField("Boolean")}
                                            className="sidebar-menu-divider"
                                            padding={5}
                                            paddingBlock={5}
                                            width={60}
                                            height={60}
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                            justifyContent="center"
                                            sx={{ textTransform: "none" }}
                                        >
                                            <span className="material-symbols-outlined">rule</span>
                                            Boolean
                                        </Box>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Button variant="text" sx={{ width: 100, height: 100 }}>
                                        <Box
                                            onClick={() => handleAddField("Combobox")}
                                            className="sidebar-menu-divider"
                                            padding={5}
                                            paddingBlock={5}
                                            width={60}
                                            height={60}
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                            justifyContent="center"
                                            sx={{ textTransform: "none" }}
                                        >
                                            <span className="material-symbols-outlined">
                                                stat_minus_2
                                            </span>
                                            Combobox
                                        </Box>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
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
                                                }}
                                                className="text-dark"
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
        </>
    );
}
