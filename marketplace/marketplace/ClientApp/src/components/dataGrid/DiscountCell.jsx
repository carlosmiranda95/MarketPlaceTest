import React from "./node_modules/react";

import Bullet, {
  Font,
  Margin,
  Size,
  Tooltip
} from "./node_modules/devextreme-react/bullet";

const customizeTooltip = function(data) {
  return {
    text: `${parseInt(data.value)}%`
  };
};

export default function DiscountCell(cellData) {
  return (
    <Bullet
      showTarget={false}
      showZeroLevel={true}
      value={cellData.value * 100}
      startScaleValue={0}
      endScaleValue={100}
    >
      <Size width={150} height={35} />
      <Margin top={5} bottom={0} left={5} />
      <Tooltip
        enabled={true}
        paddingTopBottom={2}
        zIndex={5}
        customizeTooltip={customizeTooltip}
      >
        <Font size={18} />
      </Tooltip>
    </Bullet>
  );
}
