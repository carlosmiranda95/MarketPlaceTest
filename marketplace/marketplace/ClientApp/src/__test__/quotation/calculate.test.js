const {
  getDiference,
  getDiferenceDate
} = require("../../components/quotation/QuotationCalculate.js");

describe("Function calculate cellRender", () => {
  test("Calculate Discount", () => {
    expect(
      getDiference("2019-08-21 11:00:00", "2019-08-22 11:00:00").toEqual(86400)
    );

    expect(
      getDiferenceDate("2019-08-21 11:00:00", "2019-08-22 11:00:00", 0).toEqual(
        86400
      )
    );
  });
});
