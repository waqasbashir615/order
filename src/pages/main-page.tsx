import Features from "@/components/main-pages/feature";
import Services from "@/components/main-pages/services";
import Testimonials from "@/components/main-pages/testimonials";
import Tracking from "@/components/main-pages/tracking";
import HeaderNavbar from "../components/main-pages/header-navbar";
import FooterSection from "@/components/main-pages/footer-section";
import HeroSection from "@/components/main-pages/hero-section";
import VisualRequirements from "@/components/main-pages/What-need";
import MxRiderPromo from "@/components/main-pages/make-money-want";
import RiderFAQ from "@/components/main-pages/faq";
import DriverExtras from "@/components/main-pages/driver-extras";
// import ContactSection from "@/components/main-pages/contact";



const Mainpage = () => {

  return (
    <div className="w-full ">
      <div className="min-h-screen bg-white">
        <HeaderNavbar />
        <HeroSection />
        <Services />
        <Features />
        <Tracking />
        <VisualRequirements />
        <MxRiderPromo />
           <DriverExtras/>                                                                                           
        <Testimonials />
        {/* <ContactSection /> */}
        <RiderFAQ />

        <FooterSection />
      </div>
    </div>

  );
};

export default Mainpage;
