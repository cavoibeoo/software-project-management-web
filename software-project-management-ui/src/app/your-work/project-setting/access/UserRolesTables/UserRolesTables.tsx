"use client";

import * as React from "react";
import {
    Card,
    Box,
    Typography,
    FormControl,
    InputLabel,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TablePagination,
    TableRow,
    Paper,
    IconButton,
    TableHead,
    Avatar,
    AvatarGroup,
    Grid,
    Dialog,
    styled,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";

import FormDialog from "@/app/sine/backlog/Dialogs/AddMemberDialog/AddMemberDialog";
import { set } from "react-hook-form";

import * as actorServices from "@/api-services/actorServices";

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    return (
        <Box
            sx={{
                flexShrink: 0,
                display: "flex",
                gap: "10px",
                padding: "0 20px",
            }}
        >
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
                sx={{
                    borderRadius: "4px",
                    padding: "6px",
                }}
                className="border"
            >
                {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>

            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
                sx={{
                    borderRadius: "4px",
                    padding: "6px",
                }}
                className="border"
            >
                {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
        </Box>
    );
}

interface Assignee {
    image: string;
}

interface Project {
    id: string;
    avatar: Assignee[];
    name: string;
    email: string;
    roles: string;
}

function createData(
    id: string,
    avatar: Assignee[],
    name: string,
    email: string,
    roles: string
): Project {
    return {
        id,
        avatar,
        name,
        email,
        roles,
    };
}

// const rows = [
//     createData(
//         "#854",
//         [
//             {
//                 image: "/images/avt_quang.jpg",
//             },
//         ],
//         "Duc Quang",
//         "quangcuatuonglai@gmail.com",
//         "Administrator"
//     ),
//     createData(
//         "#853",
//         [
//             {
//                 image: "/images/cavoibeoLogo.png",
//             },
//         ],
//         "Binh Phuoc",
//         "cavoibeo@gmail.com",
//         "Administrator"
//     ),
// ].sort((b, a) => (a.id < b.id ? -1 : 1));

export const UserRolesTables: React.FC<{ project: any; callUpdate: () => void }> = ({
    project,
    callUpdate,
}) => {
    // Modal
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        "& .MuiDialogContent-root": {
            padding: theme.spacing(2),
        },
        "& .MuiDialogActions-root": {
            padding: theme.spacing(1),
        },
    }));
    // Select
    const [select, setSelect] = React.useState("");
    const [selectChangeRoles, setSelectChangeRoles] = React.useState("");
    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value as string);
    };

    const handleChangeRoles = async (event: SelectChangeEvent, email: any) => {
        let result = await actorServices.updateActor({
            role: event.target.value as string,
            projectId: project?._id,
            email: email,
        });
        callUpdate();
    };

    const [rows, setRows] = useState<any>();
    React.useEffect(() => {
        let sortedRow = project?.actors.sort((b: any, a: any) => (a.id < b.id ? -1 : 1));
        setRows(sortedRow);
    }, [project]);

    // Table
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows?.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Remove User Dialog
    const [openDelete, setOpenDelete] = useState(false);
    const [currentDeleteUser, setCurrentDeleteUser] = useState<any>();
    const handleClickOpenDelete = () => {
        setOpenDelete(true);
    };
    const handleRemoveUser = async () => {
        let result = await actorServices.removeActor({
            userId: currentDeleteUser,
            projectId: project?._id,
        });
        if (!result.error) {
            callUpdate()
            setOpenDelete(false);
        }
    };
    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    return (
        <>
            <Card
                sx={{
                    boxShadow: "none",
                    borderRadius: "7px",
                    mb: "25px",
                    padding: { xs: "18px", sm: "20px", lg: "25px" },
                }}
                className="rmui-card"
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: "25px",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: "16px", md: "18px" },
                            fontWeight: 700,
                        }}
                        className="text-black"
                    >
                        All Users
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {project ? (
                            <FormDialog project={project} callUpdate={callUpdate}></FormDialog>
                        ) : null}
                        <FormControl sx={{ minWidth: "115px" }} size="small">
                            <InputLabel id="demo-select-small">Roles</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={select}
                                label="Roles"
                                onChange={handleChange}
                                className="select"
                            >
                                {project?.roles?.map((role: any, index: number) => (
                                    <MenuItem value={index}>{role?.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>

                {/* Table */}
                <Box
                    sx={{
                        marginLeft: "-25px",
                        marginRight: "-25px",
                    }}
                >
                    <TableContainer
                        component={Paper}
                        sx={{
                            boxShadow: "none",
                            borderRadius: "0",
                        }}
                        className="rmui-table"
                    >
                        <Table sx={{ minWidth: 800 }} aria-label="All Projects Table">
                            <TableHead className="bg-primary-50">
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            fontWeight: "500",
                                            padding: "10px 24px",
                                            fontSize: "14px",
                                        }}
                                        className="text-black border-bottom"
                                    >
                                        Name
                                    </TableCell>

                                    <TableCell
                                        sx={{
                                            fontWeight: "500",
                                            padding: "10px 20px",
                                            fontSize: "14px",
                                        }}
                                        className="text-black border-bottom"
                                    >
                                        Email
                                    </TableCell>

                                    <TableCell
                                        sx={{
                                            fontWeight: "500",
                                            padding: "10px 20px",
                                            fontSize: "14px",
                                        }}
                                        className="text-black border-bottom"
                                    >
                                        Roles
                                    </TableCell>

                                    <TableCell
                                        sx={{
                                            fontWeight: "500",
                                            padding: "10px 20px",
                                            fontSize: "14px",
                                        }}
                                        className="text-black border-bottom"
                                    >
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {(rowsPerPage > 0
                                    ? rows?.slice(
                                          page * rowsPerPage,
                                          page * rowsPerPage + rowsPerPage
                                      )
                                    : rows
                                )?.map((row: any) => (
                                    <TableRow key={row?.user?.id}>
                                        <TableCell
                                            sx={{
                                                padding: "15px 20px",
                                                fontSize: "14px",
                                            }}
                                            className="text-black border-bottom"
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    verticalAlign: "middle",
                                                }}
                                            >
                                                <Avatar
                                                    key={row?.user?._id}
                                                    src={row?.user?.avatar}
                                                    alt="Assignee"
                                                />
                                                <Typography marginLeft="10px">
                                                    {row?.user?.name}
                                                </Typography>
                                            </Box>
                                        </TableCell>

                                        <TableCell
                                            sx={{
                                                padding: "15px 20px",
                                                fontSize: "14px",
                                            }}
                                            className="border-bottom"
                                        >
                                            {row?.user?.email}
                                        </TableCell>

                                        <TableCell
                                            component="th"
                                            scope="row"
                                            sx={{
                                                padding: "15px 20px",
                                                fontSize: "14px",
                                            }}
                                            className="text-black border-bottom"
                                        >
                                            <Box>
                                                <FormControl fullWidth>
                                                    <Select
                                                        sx={{ width: "300px" }}
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={row?.role}
                                                        onChange={(event: any) =>
                                                            handleChangeRoles(
                                                                event,
                                                                row?.user?.email
                                                            )
                                                        }
                                                        className="select"
                                                    >
                                                        {row?.user?._id == project?.author?._id ? (
                                                            <MenuItem value={"Admin"}>
                                                                Admin
                                                            </MenuItem>
                                                        ) : (
                                                            project?.roles?.map((role: any) => (
                                                                <MenuItem value={role?.name}>
                                                                    {role?.name}
                                                                </MenuItem>
                                                            ))
                                                        )}
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </TableCell>

                                        <TableCell
                                            sx={{
                                                padding: "15px 20px",
                                            }}
                                            className="border-bottom"
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <IconButton
                                                    aria-label="delete"
                                                    color="error"
                                                    sx={{ padding: "5px" }}
                                                >
                                                    <i
                                                        className="material-symbols-outlined"
                                                        style={{ fontSize: "16px" }}
                                                        onClick={() => {
                                                            setCurrentDeleteUser(row?.user._id);
                                                            handleClickOpenDelete();
                                                        }}
                                                    >
                                                        delete
                                                    </i>
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={9} />
                                    </TableRow>
                                )}
                            </TableBody>

                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[
                                            5,
                                            10,
                                            25,
                                            { label: "All", value: -1 },
                                        ]}
                                        colSpan={8}
                                        count={rows?.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        slotProps={{
                                            select: {
                                                sx: {
                                                    justifyContent: "center",
                                                },
                                                inputProps: {
                                                    "aria-label": "rows per page",
                                                },
                                                native: true,
                                            },
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActions}
                                        sx={{
                                            border: "none",
                                        }}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Box>
            </Card>
            <BootstrapDialog
                onClose={handleCloseDelete}
                aria-labelledby="customized-dialog-title"
                open={openDelete}
                maxWidth="xs"
            >
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#4498d4",
                            padding: { xs: "15px 20px", md: "25px" },
                        }}
                        className="custom-delete-dialog-header"
                    >
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                role="presentation"
                                style={{ color: "#DE350B" }}
                            >
                                <g fill-rule="evenodd">
                                    <path
                                        fill="currentcolor"
                                        d="M13.416 4.417a2 2 0 0 0-2.832 0l-6.168 6.167a2 2 0 0 0 0 2.833l6.168 6.167a2 2 0 0 0 2.832 0l6.168-6.167a2 2 0 0 0 0-2.833z"
                                    ></path>
                                    <path
                                        fill="inherit"
                                        d="M12 14a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1m0 3a1 1 0 0 1 0-2 1 1 0 0 1 0 2"
                                    ></path>
                                </g>
                            </svg>
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                sx={{
                                    fontWeight: "600",
                                    color: "#fff !important",
                                }}
                                className="text-black"
                            >
                                Remove User
                            </Typography>
                        </Box>

                        <IconButton aria-label="remove" size="small" onClick={handleCloseDelete}>
                            <ClearIcon />
                        </IconButton>
                    </Box>

                    <Box className="custom-delete-dialog-content">
                        <Box component="form" noValidate>
                            <Box
                                sx={{
                                    padding: "25px",
                                    borderRadius: "8px",
                                }}
                            >
                                <Grid
                                    container
                                    alignItems="center"
                                    spacing={2}
                                    paddingLeft={"20px"}
                                    paddingTop={"5px"}
                                >
                                    <Typography width="100%">
                                        The user will be removed from the project.
                                    </Typography>
                                    <Typography width="100%" paddingTop={"10px"}>
                                        You can’t undo this.
                                    </Typography>
                                    <Grid
                                        item
                                        xs={12}
                                        mt={1}
                                        display="flex"
                                        justifyContent="center"
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                                width: "100%",
                                                flexDirection: "row-reverse",
                                                textAlign: "left",
                                            }}
                                        >
                                            <Button
                                                variant="contained"
                                                component="button"
                                                size="medium"
                                                onClick={handleRemoveUser}
                                                sx={{
                                                    textTransform: "capitalize",
                                                    fontWeight: "500",
                                                    fontSize: "13px",
                                                    color: "#fff !important",
                                                    backgroundColor: "#cc4426",
                                                }}
                                            >
                                                Remove
                                            </Button>
                                            <Button
                                                onClick={handleCloseDelete}
                                                variant="text"
                                                size="medium"
                                                sx={{
                                                    textTransform: "capitalize",
                                                    fontWeight: "500",
                                                    fontSize: "13px",
                                                }}
                                            >
                                                Cancel
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
};
