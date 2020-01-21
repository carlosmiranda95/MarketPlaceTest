const calculateDiscount = (price, discount) => price - price * discount;
const calculateInitialFee = (discount, initial) => discount * (initial / 100);
const calculateMonthlyFee = (place, priceInitial, priceExpected) =>
  (priceExpected - priceInitial) / place;

module.exports = {
  calculateDiscount,
  calculateInitialFee,
  calculateMonthlyFee
};
