//import { numbers } from '../numbers'

// const numbers = (a, b) => {
//   return a + b;
// };
const {
  calculateInitialFee
} = require("../../components/quotation/devExpress/CellRenderSeller2");

describe("Comparacion de numeros", () => {
  test("Mayor que", () => {
    expect(numbers(2, 2)).toBeGreaterThan(3750);
  });

  test("Menor o igual que", () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(3750);
  });
});
