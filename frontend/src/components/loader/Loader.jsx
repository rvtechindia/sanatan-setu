import React from "react";
import { Triangle } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "transparent",
        zIndex: 10,
        overflow: "hidden",
      }}
    >
      <Triangle color="#FF5733" height={120} width={120} />
    </div>
  );
};
