import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Vortex Technologies",
  description: "This is Contact Page for Vortex Technologies",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Kindly leave your contact info and message in the provided section below."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
