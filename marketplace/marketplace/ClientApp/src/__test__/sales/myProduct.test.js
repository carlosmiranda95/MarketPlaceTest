import React from "react";
import MyShopping from "../../components/sales/ShopGrid";
import renderer from "react-test-renderer";

const dataSource = [
  {
    id: 1,
    fk_product: 1,
    name_product: "T. SANTA URUBO - MZNO37 - LTE99",
    fk_sale: 1,
    sales_unit: 0,
    type_initial_quota: "NN",
    initial_percentage_rate: 0.0,
    discount_percentage: 0.0,
    quantity: 1.0,
    unit_price: 5000.0,
    value_tax: 0.0,
    subtotal: 5000.0,
    overdue_payments: 0,
    state: "VIGENTE",
    enabled: 1,
    user_insert: "JOSE MARIA SARACHO MERCADO",
    date_insert: "2019-08-22 21:15:47",
    user_update: null,
    date_update: "",
    concurrence: 1
  }
];

describe("Test My Shopping", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<MyShopping dataSource={dataSource}></MyShopping>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe("Test Project", () => {
  it("toEquals return", () => {
    const component = renderer.create(
      <MyShopping dataSource={dataSource}></MyShopping>
    );
    expect(component).toReturn(MyShopping(dataSource));
  });
});
