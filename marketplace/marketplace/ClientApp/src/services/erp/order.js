import BASE_URI from "../uri";
const TOKEN = window.sessionStorage.getItem("token");
async function callApi(endpoint, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${TOKEN}`
  };
  const url = BASE_URI + endpoint;
  const response = await fetch(url, options);

  const data = await response.json();

  return data;
}

const api = {
  orders: {
    listSeller() {
      return callApi("/orders", {
        method: "GET"
      });
    },
    ListClient() {
      return callApi("/myorders", {
        method: "GET"
      });
    },
    save(fk_quotation, fk_category, country, company) {
      return callApi("/orders", {
        method: "POST",
        body: JSON.stringify({
          country: country,
          company: company,
          fk_quotation: fk_quotation,
          fk_category: fk_category
        })
      });
    },

    listDiscount(fk_project, country, company) {
      let url = `/order/reconfigurationpay?fk_project=${fk_project}&country=${country}&company=${company}`;
      return callApi(url, {
        method: "GET"
      });
    },
    saveReconfiguration(
      id,
      fkProduct,
      valueDiscount,
      installmentsPay,
      country,
      company
    ) {
      return callApi("/order/reconfigurationpay", {
        method: "POST",
        body: JSON.stringify({
          id: id,
          fk_product: fkProduct,
          value_discount: valueDiscount,
          installments_pay: installmentsPay,
          country: country,
          company: company
        })
      });
    }
  }
};

export { api };
