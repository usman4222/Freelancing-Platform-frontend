import React from "react";

import WebsiteServices from "./component/WebsiteServices";
import HeroSection from "./component/HeroSection";
import OurCategories from "./component/OurCategories";
import TalentedFreelancerComponent from "./component/TalentedFreelancerComponent";
import FeaturedServices from "./component/FeaturedServices";
import OurFreelancer from "./component/OurFreelancer";

function LandingPage() {
  return (
    <div className="">
      <HeroSection />
      <WebsiteServices />
      <FeaturedServices />
      <OurCategories />
      <TalentedFreelancerComponent />
      <OurFreelancer />
    </div>
  );
}

export default LandingPage;
