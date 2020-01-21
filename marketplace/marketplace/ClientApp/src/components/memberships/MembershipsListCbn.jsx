import React, { useState, useEffect } from "react";
import CardsMembership from "../shared/card/CardsMembership";
import { display } from "@material-ui/system";

export function MembershipsListSinCbn(props) {
  return (
    <ul style={{ padding: 0, margin: 0 }}>
      {props.list.map(memberships => {
        return (
          <li key={memberships.ID} style={{ display: "block" }}>
            {memberships.attributesProduct[0].value == "FALSE" ? (
              <CardsMembership
                type={
                  memberships.attributesProduct[1].value == "ORO"
                    ? "gold"
                    : memberships.attributesProduct[1].value == "PLATA"
                    ? "silver"
                    : memberships.attributesProduct[1].value == "BRONCE"
                    ? "bronze"
                    : null
                }
                typeKits={memberships.attributesProduct[1].value}
                membershipsData={memberships}
                discountList={memberships.discountList}
                discountKit={memberships.discountList.kit_discount}
                discountAmount={memberships.discountList.amount_discount}
                onClickPrereserva={props.onClickPrereserva}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
export function MembershipsListConCbn(props) {
  return (
    <ul style={{ padding: 0, margin: 0 }}>
      {props.list.map(memberships => {
        return (
          <li key={memberships.ID} style={{ display: "block" }}>
            {memberships.attributesProduct[0].value == "TRUE" ? (
              <CardsMembership
                type={
                  memberships.attributesProduct[1].value == "ORO"
                    ? "gold"
                    : memberships.attributesProduct[1].value == "PLATA"
                    ? "silver"
                    : memberships.attributesProduct[1].value == "BRONCE"
                    ? "bronze"
                    : null
                }
                typeKits={memberships.attributesProduct[1].value}
                membershipsData={memberships}
                discountList={memberships.discountList}
                discountKit={memberships.discountList.kit_discount}
                discountAmount={memberships.discountList.amount_discount}
                onClickPrereserva={props.onClickPrereserva}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
