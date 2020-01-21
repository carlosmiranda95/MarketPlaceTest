import React from "react";
import { GetTimer } from "../order/TimerCountDown";
import moment from "moment";

describe("TestListOrderDateCounter", () => {
  test("Should Counter be ", () => {
    var date = moment()
      .add(2, "days")
      .calendar();

    var result = GetTimer(date);
    return expect(result).toEqual("2dias 0hora(s) 0minuto(s) 0segundos");
  });
});
