"use client";

import React, { useState } from "react";
import {
	Grid,
	Card,
	Box,
	Typography,
	FormControl,
	InputLabel,
	MenuItem,
	TextField,
	Button,
	OutlinedInput,
	ListItemText,
	Checkbox,
	Select,
	SelectChangeEvent,
	styled,
} from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
});

const CreateProduct: React.FC = () => {
	const [productType, setProductType] = useState<string>("");
	const [brandName, setBrandName] = useState<string>("");
	const [category, setCategory] = useState<string>("");
	const [vendor, setVendor] = useState<string>("");
	const [collection, setCollection] = useState<string>("");
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

	const handleProductTypeChange = (event: SelectChangeEvent) => {
		setProductType(event.target.value as string);
	};

	const handleBrandNameChange = (event: SelectChangeEvent) => {
		setBrandName(event.target.value as string);
	};

	const handleCategoryChange = (event: SelectChangeEvent) => {
		setCategory(event.target.value as string);
	};

	const handleVendorChange = (event: SelectChangeEvent) => {
		setVendor(event.target.value as string);
	};

	const handleCollectionChange = (event: SelectChangeEvent) => {
		setCollection(event.target.value as string);
	};

	const handleMultipleSelectChange = (event: SelectChangeEvent<string[]>) => {
		const {
			target: { value },
		} = event;
		setSelectedOptions(typeof value === "string" ? value.split(",") : value);
	};

	// Textarea
	const blue = {
		100: "#DAECFF",
		200: "#b6daff",
		400: "#3399FF",
		500: "#007FFF",
		600: "#0072E5",
		900: "#605DFF",
	};

	const grey = {
		50: "#F3F6F9",
		100: "#E5EAF2",
		200: "#DAE2ED",
		300: "#C7D0DD",
		400: "#B0B8C4",
		500: "#9DA8B7",
		600: "#6B7A90",
		700: "#434D5B",
		800: "#303740",
		900: "#1C2025",
	};

	const Textarea = styled(BaseTextareaAutosize)(
		({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 7px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: none;

    &:hover {
      border-color: ${blue[900]};
    }

    &:focus {
      border-color: ${blue[900]};
      box-shadow: none;
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
	);

	return (
		<>
			<Box component="form">
				<Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
					<Grid item xs={12} sm={12} md={6} lg={12} xl={8}>
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
									Add A Product
								</Typography>
							</Box>

							<Grid
								container
								spacing={3}
								columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
							>
								<Grid item xs={12} md={12} lg={12} xl={6}>
									<Box>
										<FormControl fullWidth>
											<Typography
												component="label"
												sx={{
													fontWeight: "500",
													fontSize: "14px",
													mb: "10px",
													display: "block",
												}}
												className="text-black"
											>
												Product Title
											</Typography>

											<TextField
												label="Enter Product Title"
												placeholder="E.g. Google Pixel 7 Pro"
												variant="filled"
												id="productTitle"
												name="productTitle"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
													},
													"& .MuiInputBase-root::before": {
														border: "none",
													},
													"& .MuiInputBase-root:hover::before": {
														border: "none",
													},
												}}
											/>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={6}>
									<Box>
										<Typography
											component="label"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "10px",
												display: "block",
											}}
											className="text-black"
										>
											Product Type
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="product-type-label">Select</InputLabel>
											<Select
												labelId="product-type-label"
												id="product-type"
												value={productType}
												label="Select"
												onChange={handleProductTypeChange}
												sx={{
													"& fieldset": {
														border: "1px solid #D5D9E2",
														borderRadius: "7px",
													},
												}}
											>
												<MenuItem value={0}>Digital Product</MenuItem>
												<MenuItem value={1}>Physical Product</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={6}>
									<Box>
										<FormControl fullWidth>
											<Typography
												component="label"
												sx={{
													fontWeight: "500",
													fontSize: "14px",
													mb: "10px",
													display: "block",
												}}
												className="text-black"
											>
												SKU
											</Typography>

											<TextField
												label="Enter sku"
												placeholder="E.g. ABC-12345"
												variant="filled"
												id="sku"
												name="sku"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
													},
													"& .MuiInputBase-root::before": {
														border: "none",
													},
													"& .MuiInputBase-root:hover::before": {
														border: "none",
													},
												}}
											/>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={6}>
									<Box>
										<Typography
											component="label"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "10px",
												display: "block",
											}}
											className="text-black"
										>
											Brand Name
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="brand-name-label">Select</InputLabel>
											<Select
												labelId="brand-name-label"
												id="brand-name"
												value={brandName}
												label="Select"
												onChange={handleBrandNameChange}
												sx={{
													"& fieldset": {
														border: "1px solid #D5D9E2",
														borderRadius: "7px",
													},
												}}
											>
												<MenuItem value={0}>Emburo</MenuItem>
												<MenuItem value={1}>Fediz</MenuItem>
												<MenuItem value={2}>Debilop</MenuItem>
												<MenuItem value={3}>Canin</MenuItem>
												<MenuItem value={4}>sine</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={12}>
									<Box>
										<Typography
											component="label"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "10px",
												display: "block",
											}}
											className="text-black"
										>
											Product Description
										</Typography>

										<RichTextEditor
											id="rte"
											controls={[
												["bold", "italic", "underline", "link", "image"],
												["unorderedList", "h1", "h2", "h3"],
												["sup", "sub"],
												["alignLeft", "alignCenter", "alignRight"],
											]}
											style={{
												minHeight: "200px",
											}}
										/>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={6}>
									<Box>
										<FormControl fullWidth>
											<Typography
												component="label"
												sx={{
													fontWeight: "500",
													fontSize: "14px",
													mb: "10px",
													display: "block",
												}}
												className="text-black"
											>
												Regular Price
											</Typography>

											<TextField
												label="Enter Regular Price"
												placeholder="E.g. $99"
												variant="filled"
												id="regularPrice"
												name="regularPrice"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
													},
													"& .MuiInputBase-root::before": {
														border: "none",
													},
													"& .MuiInputBase-root:hover::before": {
														border: "none",
													},
												}}
											/>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={6}>
									<Box>
										<FormControl fullWidth>
											<Typography
												component="label"
												sx={{
													fontWeight: "500",
													fontSize: "14px",
													mb: "10px",
													display: "block",
												}}
												className="text-black"
											>
												Sale Price
											</Typography>

											<TextField
												label="Enter Sale Price"
												placeholder="E.g. $29"
												variant="filled"
												id="salePrice"
												name="salePrice"
												required
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
													},
													"& .MuiInputBase-root::before": {
														border: "none",
													},
													"& .MuiInputBase-root:hover::before": {
														border: "none",
													},
												}}
											/>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={6}>
									<Typography
										component="h5"
										sx={{
											fontWeight: "500",
											fontSize: "14px",
											mb: "12px",
										}}
										className="text-black"
									>
										Publish Schedule
									</Typography>

									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DatePicker
											sx={{
												width: "100%",

												"& fieldset": {
													border: "1px solid #D5D9E2",
													borderRadius: "7px",
												},
											}}
										/>
									</LocalizationProvider>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={6}>
									<Box>
										<FormControl fullWidth>
											<Typography
												component="label"
												sx={{
													fontWeight: "500",
													fontSize: "14px",
													mb: "10px",
													display: "block",
												}}
												className="text-black"
											>
												Product in Stock
											</Typography>

											<TextField
												label="Enter Product in Stock"
												placeholder="E.g. 17"
												variant="filled"
												id="stock"
												name="stock"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
													},
													"& .MuiInputBase-root::before": {
														border: "none",
													},
													"& .MuiInputBase-root:hover::before": {
														border: "none",
													},
												}}
											/>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={6}>
									<Box>
										<FormControl fullWidth>
											<Typography
												component="label"
												sx={{
													fontWeight: "500",
													fontSize: "14px",
													mb: "10px",
													display: "block",
												}}
												className="text-black"
											>
												Product ID
											</Typography>

											<TextField
												label="Enter Product ID"
												placeholder="E.g. #JAN-2345"
												variant="filled"
												id="productID"
												name="productID"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
													},
													"& .MuiInputBase-root::before": {
														border: "none",
													},
													"& .MuiInputBase-root:hover::before": {
														border: "none",
													},
												}}
											/>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={6}>
									<Box>
										<FormControl fullWidth>
											<Typography
												component="label"
												sx={{
													fontWeight: "500",
													fontSize: "14px",
													mb: "10px",
													display: "block",
												}}
												className="text-black"
											>
												Discount / Offer
											</Typography>

											<TextField
												label="Enter Discount / Offer"
												placeholder="E.g. $20"
												variant="filled"
												id="discountOffer"
												name="discountOffer"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
													},
													"& .MuiInputBase-root::before": {
														border: "none",
													},
													"& .MuiInputBase-root:hover::before": {
														border: "none",
													},
												}}
											/>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={6}>
									<Typography
										component="h5"
										sx={{
											fontWeight: "500",
											fontSize: "14px",
											mb: "12px",
										}}
										className="text-black"
									>
										Available Date
									</Typography>

									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DatePicker
											sx={{
												width: "100%",

												"& fieldset": {
													border: "1px solid #D5D9E2",
													borderRadius: "7px",
												},
											}}
										/>
									</LocalizationProvider>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={6}>
									<Typography
										component="h5"
										sx={{
											fontWeight: "500",
											fontSize: "14px",
											mb: "12px",
										}}
										className="text-black"
									>
										End Date
									</Typography>

									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DatePicker
											sx={{
												width: "100%",

												"& fieldset": {
													border: "1px solid #D5D9E2",
													borderRadius: "7px",
												},
											}}
										/>
									</LocalizationProvider>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={12}>
									<Typography
										component="h5"
										sx={{
											fontWeight: "500",
											fontSize: "14px",
											mb: "12px",
										}}
										className="text-black"
									>
										Upload Product Images
									</Typography>

									<TextField
										autoComplete="uploadFile"
										name="uploadFile"
										required
										fullWidth
										id="uploadFile"
										type="file"
										autoFocus
										inputProps={{
											multiple: true,
										}}
										sx={{
											"& fieldset": {
												border: "1px solid #D5D9E2",
												borderRadius: "7px",
											},
										}}
									/>
								</Grid>
							</Grid>
						</Card>
					</Grid>

					<Grid item xs={12} sm={12} md={6} lg={12} xl={4}>
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
									Product Category & Tags
								</Typography>
							</Box>

							<Grid
								container
								spacing={3}
								columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
							>
								<Grid item xs={12} md={12} lg={12} xl={12}>
									<Box>
										<Typography
											component="label"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "10px",
												display: "block",
											}}
											className="text-black"
										>
											Category
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="category-label">Select</InputLabel>
											<Select
												labelId="category-label"
												id="category"
												value={category}
												label="select"
												onChange={handleCategoryChange}
												sx={{
													"& fieldset": {
														border: "1px solid #D5D9E2",
														borderRadius: "7px",
													},
												}}
											>
												<MenuItem value={0}>Watch</MenuItem>
												<MenuItem value={1}>Mobile</MenuItem>
												<MenuItem value={2}>Laptop</MenuItem>
												<MenuItem value={3}>Headphone</MenuItem>
												<MenuItem value={4}>Shoe</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={12}>
									<Box>
										<Typography
											component="label"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "10px",
												display: "block",
											}}
											className="text-black"
										>
											Vendor
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="vendor-label">Select</InputLabel>
											<Select
												labelId="vendor-label"
												id="vendor"
												value={vendor}
												label="Select"
												onChange={handleVendorChange}
												sx={{
													"& fieldset": {
														border: "1px solid #D5D9E2",
														borderRadius: "7px",
													},
												}}
											>
												<MenuItem value={0}>Dennis Matthews</MenuItem>
												<MenuItem value={1}>Susan Rader</MenuItem>
												<MenuItem value={2}>Douglas Harvey</MenuItem>
												<MenuItem value={3}>John Valdez</MenuItem>
												<MenuItem value={4}>Kathryn Turner</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={12}>
									<Box>
										<Typography
											component="label"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "10px",
												display: "block",
											}}
											className="text-black"
										>
											Collection
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="collection-label">Select</InputLabel>
											<Select
												labelId="collection-label"
												id="collection"
												value={collection}
												label="Select"
												onChange={handleCollectionChange}
												sx={{
													"& fieldset": {
														border: "1px solid #D5D9E2",
														borderRadius: "7px",
													},
												}}
											>
												<MenuItem value={0}>Collection 1</MenuItem>
												<MenuItem value={1}>Collection 2</MenuItem>
												<MenuItem value={2}>Collection 3</MenuItem>
												<MenuItem value={3}>Collection 4</MenuItem>
												<MenuItem value={4}>Collection 5</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={12}>
									<Box>
										<Typography
											component="label"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "10px",
												display: "block",
											}}
											className="text-black"
										>
											Tags
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="tags-label">Select</InputLabel>
											<Select
												labelId="tags-label"
												id="tags-select"
												multiple
												value={selectedOptions}
												onChange={handleMultipleSelectChange}
												input={<OutlinedInput label="Select" />}
												renderValue={(selected) => selected.join(", ")}
											>
												{[
													"Watch",
													"Electronics",
													"Sports",
													"Fashion",
													"Jewellery",
												].map((option) => (
													<MenuItem key={option} value={option}>
														<Checkbox
															checked={selectedOptions.indexOf(option) > -1}
														/>
														<ListItemText primary={option} />
													</MenuItem>
												))}
											</Select>
										</FormControl>
									</Box>
								</Grid>
							</Grid>
						</Card>

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
									Other Options
								</Typography>
							</Box>

							<Grid
								container
								spacing={3}
								columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
							>
								<Grid item xs={12} md={12} lg={12} xl={12}>
									<Box>
										<FormControl fullWidth>
											<Typography
												component="label"
												sx={{
													fontWeight: "500",
													fontSize: "14px",
													mb: "10px",
													display: "block",
												}}
												className="text-black"
											>
												Title
											</Typography>

											<TextField
												label="Enter Title"
												placeholder="E.g. Google Pixel 7 Pro"
												variant="filled"
												id="title"
												name="title"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
													},
													"& .MuiInputBase-root::before": {
														border: "none",
													},
													"& .MuiInputBase-root:hover::before": {
														border: "none",
													},
												}}
											/>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={12}>
									<Box>
										<FormControl fullWidth>
											<Typography
												component="label"
												sx={{
													fontWeight: "500",
													fontSize: "14px",
													mb: "10px",
													display: "block",
												}}
												className="text-black"
											>
												Description
											</Typography>

											<Textarea
												aria-label="minimum height"
												minRows={5}
												placeholder="Type here..."
											/>
										</FormControl>
									</Box>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: { xs: "10px", sm: "20px" },
							mb: "25px",
						}}
					>
						<Button
							type="submit"
							variant="contained"
							color="error"
							sx={{
								textTransform: "capitalize",
								borderRadius: "6px",
								fontWeight: "500",
								fontSize: { xs: "13px", sm: "16px" },
								padding: { xs: "10px 20px", sm: "10px 24px" },
								color: "#fff !important",
								boxShadow: "none",
							}}
						>
							Cancel
						</Button>

						<Button
							type="submit"
							variant="contained"
							sx={{
								textTransform: "capitalize",
								borderRadius: "6px",
								fontWeight: "500",
								fontSize: { xs: "13px", sm: "16px" },
								padding: { xs: "10px 20px", sm: "10px 24px" },
								color: "#fff !important",
								boxShadow: "none",
							}}
						>
							<i className="material-symbols-outlined">add</i> Create Product
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default CreateProduct;
