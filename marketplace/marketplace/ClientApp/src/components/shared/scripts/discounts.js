const calculateDiscount = (price, discount) =>
  Math.round(price - price * discount);
const calculateInitialFee = (discount, initial) =>
  Math.round(discount * (initial / 100));
const calculateMonthlyFee = (place, priceInitial, priceExpected) =>
  Math.round((priceExpected - priceInitial) / place);

module.exports = {
  calculateDiscount,
  calculateInitialFee,
  calculateMonthlyFee
};
