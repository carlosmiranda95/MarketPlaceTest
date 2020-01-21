import React, { useState, useEffect } from "react";
import TagBox from "devextreme-react/tag-box";
import PropTypes from "prop-types";

export default function CustomTagbox(props) {
  return (
    <TagBox
      dataSource={props.dataSource}
      showSelectionControls={true}
      applyValueMode={"useButtons"}
      searchEnabled={true}
      valueExpr={"id"}
      displayExpr={"name"}
      defaultValue={props.dataSelected}
      onMultiTagPreparing={props.onSelectAll}
      onValueChanged={props.onChangeSelection}
    />
  );
}

CustomTagbox.propTypes = {
  dataSelected: PropTypes.array
};
