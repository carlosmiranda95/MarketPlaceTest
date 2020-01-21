import React from "react";

import image from "../../../assets/img/kalomai.jpg";
import { TextBox } from "devextreme-react";

export default function Field(data) {
  return (
    <div className={"custom-item"}>
      <img src={data && image} />
      <TextBox
        className={"product-name"}
        defaultValue={data && data.name}
        readOnly={true}
      />
    </div>
  );
}
