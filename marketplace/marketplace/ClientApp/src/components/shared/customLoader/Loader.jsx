import React, { useEffect } from "react";
import PropagateLoader from "react-spinners/BarLoader";
import LogoAnimadoLoader from "../logo/LogoAnimadoLoader";
import "../../../assets/style/components/loader.css";

export default function Loader() {
  useEffect(function() {
    // setTimeout(() => {
    //   document.getElementById("elementorojo").classList.add("elementorojo");
    //   document.getElementById("lineaizquierda").classList.add("lineaizquierda");
    //   document.getElementById("lineaderecha").classList.add("lineaderecha");
    //   setTimeout(() => {
    //     document.getElementById("internacional").classList.add("internacional");
    //   }, 5);
    // }, 20);
  }, []);
  return (
    <div className={"containerLoader"}>
      <div style={{ width: "100px" }}>
        <LogoAnimadoLoader />
      </div>
      <PropagateLoader height={1} width={200} color={"rgba(255,255,255,1)"} />
    </div>
  );
}
