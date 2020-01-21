import React from "react";
import { SelectBox } from "devextreme-react";

export default function SelectComponent(props) {
  return (
    <React.Fragment>
      <div>{props.labelText}</div>
      <SelectBox
        items={props.items}
        value={props.value}
        onValueChanged={props.onValueChanged}
        stylingMode={"underlined"}
      />
    </React.Fragment>
  );
}
