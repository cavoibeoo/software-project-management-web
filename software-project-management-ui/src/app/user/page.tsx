import AboutMe from "@/components/Social/About/AboutMe";
import CoverImage from "@/components/Social/Profile/CoverImage";
import Friends from "@/components/Social/Profile/Friends";
import Photos from "@/components/Social/Profile/Photos";
import Grid from "@mui/material/Grid";
import * as React from "react";

export default function Page() {
	return (
		<>
			<Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
				<Grid item xs={12} md={12} lg={12} xl={9}>
					<CoverImage />

					<Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
						<Grid item xs={12} md={6} lg={6} xl={6}>
							<AboutMe />
						</Grid>
						<Grid item xs={12} md={6} lg={6} xl={6}>
							<Photos />
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12} md={12} lg={12} xl={3}>
					<Friends />
				</Grid>
			</Grid>
		</>
	);
}
