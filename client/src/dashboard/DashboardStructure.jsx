import React from "react";
import { Caption } from "../components/breadcrum/Caption";
import Header from "../components/header/Header";

const DashboardStructure = ({ children,captionTitle }) => {
  return (
    <>
      <Caption title={captionTitle}>
        <Header />
      </Caption>
      <section className="padding40 " style={{ marginTop: -90 }}>
        <div className="container">
          <div className="row">{children}</div>
        </div>
      </section>
    </>
  );
};

export default DashboardStructure;
