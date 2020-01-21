import {
  calculateDiscount,
  calculateInitialFee,
  calculateMonthlyFee
} from "../../components/shared/scripts/discounts";

describe("Function calculate cellRender", () => {
  test("Calculate Discount", () => {
    expect(calculateDiscount(15000, 0.25)).toEqual(11250);
  });
  test("Calculate Initial Fee", () => {
    expect(calculateInitialFee(11250, 10)).toEqual(1125);
  });
  test("Calculate Monthly Fee", () => {
    expect(calculateMonthlyFee(60, 1125, 11250)).toEqual(169);
  });
});
