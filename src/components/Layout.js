import React, { useState, useEffect } from "react";
import Typical from "react-typical";

export default function Layout(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloaderTimer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(preloaderTimer);
  }, []);

  return (
    <div className="container-fluid">
      {!loading ? (
        <div id="content">{props.children}</div>
      ) : (
        <div id="preloader">
          <h1 className="outline text-center my-auto">
            <Typical
              className="text-center px-3"
              steps={["Hello.", 3000]}
              loop={1}
            />
          </h1>
        </div>
      )}
    </div>
  );
}
