import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";


const PublicPageLayout = (Component) => {
  return (props) => (
    <>
      <NavBar />
      <Component {...props} />
      <Footer />
    </>
  );
};

export default PublicPageLayout;
