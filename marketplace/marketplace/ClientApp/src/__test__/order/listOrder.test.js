import React from "react";
import GetTimer from "../../components/shared/scripts/timerCount";
import moment from "moment";

describe("TestListOrderDateCounter", () => {
  test("Should be expired, date off", () => {
    var date = moment()
      .subtract(2, "days")
      .calendar();

    var result = GetTimer(
      date,
      "expired",
      "dias",
      "hora",
      "minuto",
      "segundos"
    );
    return expect(result).toEqual("expired");
  });
});
