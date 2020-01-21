jest.mock(product);
const product = require("../server/services/__mocks__/product");
const {
  calculateDiscount,
  calculateInitialFee,
  calculateMonthlyFee
} = require("../components/DevExpress/__mocks__/cellRender");

describe("Product Test Api", () => {
  test("testing 1", () => {
    expect(product.product["product"]).toEqual(
      expect.stringContaining("testing 1")
    );
  });
  test("testing 2", () => {
    expect(product.product["list"]).toEqual(
      expect.stringContaining("testing 2")
    );
  });
  test("testing 3", () => {
    expect(product.product["list_Discount"]).toEqual(
      expect.stringContaining("testing 3")
    );
  });
});

describe("Function calculate cellRender", () => {
  test("Calculate Discount", () => {
    expect(calculateDiscount(15000, 0.25)).toEqual(11250);
  });
  test("Calculate Initial Fee", () => {
    expect(calculateInitialFee(11250, 10)).toEqual(1125);
  });
  test("Calculate Monthly Fee", () => {
    expect(calculateMonthlyFee(60, 1125, 11250)).toEqual(168.75);
  });
});
