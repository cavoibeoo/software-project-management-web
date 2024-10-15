import * as React from "react"; 
import Navbar from "@/components/FrontPages/Common/Navbar";
import FaqContent from "@/components/FrontPages/Common/FaqContent";
import Cta from "@/components/FrontPages/Common/Cta";
import Footer from "@/components/FrontPages/Common/Footer";
import PageBanner from "@/components/FrontPages/Common/PageBanner";

export default function Home() {
  return (
    <>
      <div className="fp-wrapper">
        <Navbar />

        <PageBanner 
          pageTitle="Frequently Asked Questions"
        />

        <FaqContent />

        <Cta />

        <Footer />
      </div>
    </>
  );
}
