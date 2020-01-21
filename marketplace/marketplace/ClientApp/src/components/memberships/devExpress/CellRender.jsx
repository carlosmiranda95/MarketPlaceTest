import React from "react";

import image from "../../../assets/img/kalomai.jpg";

export default function CellRender(data) {
  return (
    <div className={"custom-item"}>
      <img src={image} height={"25%"} width={"100%"} />
      <div className={"product-name"}>{data.name}</div>
    </div>
  );
}
