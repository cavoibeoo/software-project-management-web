import * as React from "react";
import Navbar from "@/components/FrontPages/Common/Navbar";
import FeatIntro from "@/components/FrontPages/Common/FeatIntro";
import Footer from "@/components/FrontPages/Common/Footer";
import PageBanner from "@/components/FrontPages/Common/PageBanner";

export default function Home() {
	return (
		<>
			<div className="fp-wrapper">
				<Navbar />

				<PageBanner pageTitle="Our Team" />

				<FeatIntro />

				<Footer />
			</div>
		</>
	);
}
