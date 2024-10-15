import * as React from "react";
import Navbar from "@/components/FrontPages/Common/Navbar";
import Content from "@/components/FrontPages/Home/Features";
import FeatIntro from "@/components/FrontPages/Common/FeatIntro";
import Features from "@/components/FrontPages/Common/Features";
import Footer from "@/components/FrontPages/Common/Footer";

export default function Home() {
	return (
		<>
			<div className="fp-wrapper">
				<Navbar />
				<Content />
				<FeatIntro />
				<Features />
				<Footer />
			</div>
		</>
	);
}
