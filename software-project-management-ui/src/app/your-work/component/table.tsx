"use client";
import React, { useState, FormEvent, useEffect } from "react";
import { alpha } from "@mui/material/styles";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import FadeMenu from "./menu";
import styles from "@/components/Apps/FileManager/Sidebar/SearchForm/Search.module.css";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { SelectChangeEvent } from "@mui/material/Select";
import { useContext } from "react";
import {
	Box,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TablePagination,
	TableRow,
	Paper,
	IconButton,
	TableHead,
	Checkbox,
	Dialog,
	DialogTitle,
	Grid,
	Button,
	TextField,
} from "@mui/material";
import { ProjectNameContext } from "@/providers/ProjectNameProvider";
import Link from "next/link";

import { createProject } from "../../../api-services/projectServices";
import * as projectService from "../../../api-services/projectServices";
import { useProject } from "@/app/context/ProjectContext";

interface Data {
	id: number;
	name: string;
	key: string;
	type: string;
	lead: string;
}

const uniqueKeys = new Set<string>();

function createData(
	id: number,
	name: string,
	key: string,
	type: string,
	lead: string
): Data | null {
	if (uniqueKeys.has(key)) {
		console.error(`Duplicate key found: ${key}`);
		return null;
	}
	uniqueKeys.add(key);
	return {
		id,
		name,
		key,
		type,
		lead,
	};
}

export default function EnhancedTable() {
	const [order, setOrder] = React.useState<Order>("asc");
	const [orderBy, setOrderBy] = React.useState<keyof Data>("key");
	const [selected, setSelected] = React.useState<readonly number[]>([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [search, setSearch] = React.useState("");
	const [projects, setProjects] = useState([]);

	const [update, setUpdate] = useState(false);
	const [sortedProjects, setSortedProjects] = useState<Data[]>([]);
	const { projectID, setProjectID } = useProject();

	useEffect(() => {
		const fetchAPI = async () => {
			const result = await projectService.fetchAllProjects();
			console.log(result);
			setProjects(result);
		};
		fetchAPI();
	}, [update]);

	const handleDeleteSuccess = () => {
		setUpdate(!update); // Refresh projects after deletion
	};

	useEffect(() => {
		if (projects) {
			setSortedProjects([...projects].sort(getComparator(order, orderBy)));
		} else {
			console.error("Không thể lấy dữ liệu dự án");
		}
	}, [projects, order, orderBy]);

	function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
		if (b[orderBy] < a[orderBy]) {
			return -1;
		}
		if (b[orderBy] > a[orderBy]) {
			return 1;
		}
		return 0;
	}

	type Order = "asc" | "desc";

	function getComparator<Key extends keyof any>(
		order: Order,
		orderBy: Key
	): (
		a: { [key in Key]: number | string },
		b: { [key in Key]: number | string }
	) => number {
		return order === "desc"
			? (a, b) => descendingComparator(a, b, orderBy)
			: (a, b) => -descendingComparator(a, b, orderBy);
	}

	interface HeadCell {
		disablePadding: boolean;
		id: keyof Data;
		label: string;
		numeric: boolean;
	}

	const headCells: readonly HeadCell[] = [
		{
			id: "name",
			numeric: false,
			disablePadding: true,
			label: "Project name",
		},
		{
			id: "key",
			numeric: true,
			disablePadding: false,
			label: "Key",
		},
		{
			id: "lead",
			numeric: true,
			disablePadding: false,
			label: "Type",
		},
		{
			id: "type",
			numeric: true,
			disablePadding: false,
			label: "Lead",
		},
		{
			id: "id",
			numeric: true,
			disablePadding: false,
			label: "More actions",
		},
	];

	interface EnhancedTableProps {
		numSelected: number;
		onRequestSort: (
			event: React.MouseEvent<unknown>,
			property: keyof Data
		) => void;
		onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
		order: Order;
		orderBy: string;
		rowCount: number;
	}

	function EnhancedTableHead(props: EnhancedTableProps) {
		const {
			onSelectAllClick,
			order,
			orderBy,
			numSelected,
			rowCount,
			onRequestSort,
		} = props;
		const createSortHandler =
			(property: keyof Data) => (event: React.MouseEvent<unknown>) => {
				onRequestSort(event, property);
			};

		return (
			<TableHead>
				<TableRow>
					<TableCell padding="checkbox">
						<Checkbox
							color="primary"
							indeterminate={numSelected > 0 && numSelected < rowCount}
							checked={rowCount > 0 && numSelected === rowCount}
							onChange={onSelectAllClick}
							inputProps={{
								"aria-label": "select all desserts",
							}}
						/>
					</TableCell>
					{headCells.map((headCell) => (
						<TableCell
							key={headCell.id}
							align={headCell.numeric ? "right" : "left"}
							padding={headCell.disablePadding ? "none" : "normal"}
							sortDirection={orderBy === headCell.id ? order : false}
						>
							<TableSortLabel
								active={orderBy === headCell.id}
								direction={orderBy === headCell.id ? order : "asc"}
								onClick={createSortHandler(headCell.id)}
							>
								{headCell.label}
								{orderBy === headCell.id ? (
									<Box component="span" sx={visuallyHidden}>
										{order === "desc"
											? "sorted descending"
											: "sorted ascending"}
									</Box>
								) : null}
							</TableSortLabel>
						</TableCell>
					))}
				</TableRow>
			</TableHead>
		);
	}
	interface EnhancedTableToolbarProps {
		numSelected: number;
	}

	// Modal
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
						<CloseIcon />
					</IconButton>
				) : null}
			</DialogTitle>
		);
	}

	BootstrapDialogTitle.propTypes = {
		children: PropTypes.node,
		onClose: PropTypes.func.isRequired,
	};

	function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
		const { numSelected } = props;

		return (
			<Toolbar
				sx={[
					{
						pl: { sm: 2 },
						pr: { xs: 1, sm: 1 },
					},
					numSelected > 0 && {
						bgcolor: (theme) =>
							alpha(
								theme.palette.primary.main,
								theme.palette.action.activatedOpacity
							),
					},
				]}
			>
				{numSelected > 0 ? (
					<Typography
						sx={{ flex: "1 1 100%" }}
						color="inherit"
						variant="subtitle1"
						component="div"
						style={{ maxHeight: "20px" }}
					>
						{numSelected} selected
					</Typography>
				) : (
					<Typography
						sx={{ flex: "1 1 100%" }}
						variant="h6"
						id="tableTitle"
						component="div"
					>
						<Box
							sx={{
								display: { xs: "block", sm: "flex" },
								alignItems: "center",
								justifyContent: "space-between",
							}}
						></Box>
					</Typography>
				)}
				{numSelected > 0 ? (
					<Tooltip title="Delete">
						<IconButton>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				) : (
					<></>
				)}
			</Toolbar>
		);
	}

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof Data
	) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelected = projects.map((n: any) => n.id);
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
		const selectedIndex = selected.indexOf(id);
		let newSelected: readonly number[] = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}
		setSelected(newSelected);
	};

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	const visibleRows = React.useMemo(
		() =>
			sortedProjects
				.filter(
					(row: any) =>
						(row.name &&
							row.name.toLowerCase().includes(search.toLowerCase())) ||
						(row.key && row.key.toLowerCase().includes(search.toLowerCase())) ||
						(row.type &&
							row.type.toLowerCase().includes(search.toLowerCase())) ||
						(row.lead && row.lead.toLowerCase().includes(search.toLowerCase()))
				)
				.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
		[sortedProjects, page, rowsPerPage, search, projects]
	);

	// Modal
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const projectData = {
			name: event.currentTarget.projectName.value,
			key: event.currentTarget.projectKey.value,
			img: "https://example.com/sample-project-image.png",
		};
		await createProject(projectData);
		handleClose();
		setUpdate(!update);
	};

	const projectName = useContext(ProjectNameContext);

	return (
		<>
			<Button
				onClick={handleClickOpen}
				variant="outlined"
				sx={{
					textTransform: "capitalize",
					borderRadius: "7px",
					fontWeight: "500",
					fontSize: "13px",
					padding: "6px 13px",
					marginBottom: "20px",
				}}
				color="primary"
			>
				<AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New Project
			</Button>
			<form className={styles.searchBox} style={{ maxWidth: "30%" }}>
				<label>
					<i className="material-symbols-outlined">search</i>
				</label>
				<input
					type="text"
					className={styles.inputSearch}
					id="searchboxColor"
					placeholder="Search here..."
					value={search}
					onChange={handleSearch}
					style={{
						padding: "5px 38px 8px 10px",
						border: "1px solid #a6adba",
						marginBottom: "10px",
						fontSize: "0.86875rem",
					}}
				/>
			</form>
			<Box sx={{ width: "100%" }}>
				<Paper sx={{ width: "100%", mb: 2 }}>
					{selected.length > 0 && (
						<EnhancedTableToolbar numSelected={selected.length} />
					)}
					<TableContainer>
						<Table
							sx={{ minWidth: 750 }}
							aria-labelledby="tableTitle"
							size={dense ? "small" : "medium"}
						>
							<EnhancedTableHead
								numSelected={selected.length}
								order={order}
								orderBy={orderBy}
								onSelectAllClick={handleSelectAllClick}
								onRequestSort={handleRequestSort}
								rowCount={projects?.length || 0}
							/>
							<TableBody>
								{visibleRows.map((project: any, index: any) => {
									const isItemSelected = selected.includes(project.id);
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											hover
											role="checkbox"
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={project.key}
											selected={isItemSelected}
											sx={{ cursor: "pointer" }}
										>
											<TableCell padding="checkbox">
												<Checkbox
													onClick={(event) => handleClick(event, project.id)}
													color="primary"
													checked={isItemSelected}
													inputProps={{
														"aria-labelledby": labelId,
													}}
												/>
											</TableCell>
											<TableCell
												component="th"
												id={labelId}
												scope="row"
												padding="none"
												className="project-cell hover"
											>
												<Typography
													component="a"
													sx={{
														display: "flex",
														alignItems: "center",
														textDecoration: "none",
														color: "inherit",
													}}
												>
													<Link
														href={{
															pathname: "/sine/backlog",
															query: { projectId: `${project._id}` },
														}}
														className="project-link"
														onClick={() => {
															projectName?.setProjectName(project.name);
															setProjectID(project._id);
														}}
													>
														<img
															src={project.img}
															alt="Project Logo"
															className="icon_project"
														/>
														{project.name}
													</Link>
												</Typography>
											</TableCell>
											<TableCell align="right">{project.key}</TableCell>
											<TableCell align="right">
												{project.actors[0]?.role}
											</TableCell>
											<TableCell align="right">{project.author.name}</TableCell>
											<TableCell align="right">
												<FadeMenu
													_id={project._id}
													projectName={project.name}
													onDeleteSuccess={handleDeleteSuccess}
												/>
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
						component="div"
						count={projects?.length || 0}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
						className="tablePagination"
					/>
				</Paper>
			</Box>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
				className="rmu-modal"
			>
				<Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							background: "#f6f7f9",
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
							Add New Project
						</Typography>

						<IconButton aria-label="remove" size="small" onClick={handleClose}>
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
									<Grid item xs={12} md={12} lg={12}>
										<Typography
											component="h5"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "12px",
											}}
											className="text-black"
										>
											Project Name*
										</Typography>

										<TextField
											autoComplete="projectName"
											name="projectName"
											required
											fullWidth
											id="projectNaree"
											label="Project Name"
											autoFocus
											InputProps={{
												style: { borderRadius: 8 },
											}}
										/>
									</Grid>
									<Grid item xs={12} md={12} lg={5}>
										<Typography
											component="h5"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "12px",
											}}
											className="text-black"
										>
											Key*
										</Typography>

										<TextField
											autoComplete="projectKey"
											name="projectKey"
											required
											fullWidth
											id="projectKey"
											label="Project Key"
											autoFocus
											InputProps={{
												style: { borderRadius: 8 },
											}}
										/>
									</Grid>

									<Grid item xs={12} mt={1}>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												justifyContent: "end",
												gap: "10px",
											}}
										>
											<Button
												onClick={handleClose}
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
												sx={{
													textTransform: "capitalize",
													borderRadius: "8px",
													fontWeight: "500",
													fontSize: "13px",
													padding: "11px 30px",
													color: "#fff !important",
												}}
											>
												<AddIcon
													sx={{
														position: "relative",
														top: "-2px",
													}}
													className="mr-5px"
												/>{" "}
												Create
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
