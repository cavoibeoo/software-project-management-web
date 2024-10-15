import * as React from "react"; 
import Navbar from "@/components/FrontPages/Common/Navbar";
import ContactUs from "@/components/FrontPages/Common/ContactUs";
import Cta from "@/components/FrontPages/Common/Cta";
import Footer from "@/components/FrontPages/Common/Footer";
import PageBanner from "@/components/FrontPages/Common/PageBanner";

export default function Home() {
  return (
    <>
      <div className="fp-wrapper">
        <Navbar />

        <PageBanner 
          pageTitle="Contact Us"
        />

        <ContactUs />

        <Cta />

        <Footer />
      </div>
    </>
  );
}
