import BASE_URI from "../uri";
async function callApi(endpoint, options = {}) {
  var TOKEN = window.sessionStorage.getItem("token");
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${TOKEN}`
  };

  const url = BASE_URI + endpoint;
  const response = await fetch(url, options);
  const data = await response;
  return data;
}

const salesApi = {
  sales: {
    myShopping() {
      return callApi("/my_shopping", {
        method: "GET"
      });
    },
    MySales() {
      return callApi("/my_sales", {
        method: "GET"
      });
    },
    save(
      fkOrder,
      fkCategory,
      amountFixed,
      valueTimeLimit,
      country,
      company,
      dataClient,
      dataPay
    ) {
      return callApi("/sale", {
        method: "POST",
        body: JSON.stringify({
          fk_order: fkOrder,
          fk_category: fkCategory,
          fixed_amount: amountFixed,
          quantity_quotas: valueTimeLimit,
          country: country,
          company: company,
          data_client: dataClient,
          pay_details: dataPay
        })
      });
    }
  }
};

export { salesApi };
