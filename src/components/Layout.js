import React, { useState, useEffect } from "react";
import Typical from "react-typical";

import Navbar from "./Navbar";
import SocialBar from "./SocialBar";
import Footer from "./Footer";

export default function Layout(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const preloaderTimer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(preloaderTimer);
  });

  return !loading ? (
    <div id="layout">
      <Navbar />
      {props.children}
      <SocialBar />
      <Footer />
    </div>
  ) : (
    <div id="preloader">
      <h1 className="outline text-center my-auto">
        <Typical
          className="text-center px-3"
          steps={["Hello", 3000]}
          loop={1}
        />
      </h1>
    </div>
  );
}
