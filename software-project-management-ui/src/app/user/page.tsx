"use client";

import { fetchUsers, useFetchUser } from "@/api-services/userServices";
import AboutMe from "@/components/Social/About/AboutMe";
import CoverImage from "@/components/Social/Profile/CoverImage";
import Friends from "@/components/Social/Profile/Friends";
import Photos from "@/components/Social/Profile/Photos";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useState } from "react";

export default function Page() {
	const [update, setUpdate] = useState(false);
	const [myInfo, setMyInfo] = useState<any[]>([]);

	const callUpdate = () => {
		setUpdate(!update);
	};

	useEffect(() => {
		const fetchAPI = async () => {
			const myInfo = await useFetchUser();
			setMyInfo(myInfo);

			console.log(myInfo);
		};
		fetchAPI();
	}, [update]);

	return (
		<>
			<Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
				<Grid item xs={12} md={12} lg={12} xl={9}>
					<CoverImage myInfo={myInfo} callUpdate={callUpdate} />

					<Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
						<Grid item xs={12} md={6} lg={6} xl={6}>
							<AboutMe myInfo={myInfo} />
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
