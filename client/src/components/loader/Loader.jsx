import React from "react";
import { Triangle,MutatingDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
        opacity:0.8,
        zIndex: 10,
        overflow: "hidden",
      }}
    >
      <MutatingDots color="#FF5733" height={120} width={120} />
    </div>
  );
};
