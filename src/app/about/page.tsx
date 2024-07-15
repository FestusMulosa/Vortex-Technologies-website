import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Vortex Technologies",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Welcome to Vortex Technologies, your trusted partner in building and designing exceptional digital experiences. We specialize in creating high-quality websites and mobile apps tailored to meet the unique needs of startups, enterprises, SaaS providers, and business sites. Our mission is to empower businesses with innovative technology solutions that drive efficiency, enhance user engagement, and foster growth."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
