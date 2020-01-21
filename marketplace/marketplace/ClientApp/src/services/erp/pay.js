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

const apiPay = {
  pay: {
    list() {
      return callApi("/seller_quotation", {
        method: "GET"
      });
    },
    getBalanceQuotation(id, fk_category, country, company) {
      return callApi(`/pay_quotation/balance`, {
        method: "POST",
        body: JSON.stringify({
          fk_quotation: id,
          fk_category: fk_category,
          country: country,
          company: company
        })
      });
    },
    pay(id, currency, fk_category, fk_type_pay, code, country, company) {
      console.log([id, currency, fk_type_pay, code, country, company]);
      return callApi(`/pay_quotation`, {
        method: "POST",
        body: JSON.stringify({
          fk_quotation: id,
          currency: currency,
          fk_category: fk_category,
          fk_type_pay: fk_type_pay,
          code: code,
          country: country,
          company: company
        })
      });
    },
    getBalanceOrder(id, country, company) {
      return callApi(`/pay_order/balance`, {
        method: "POST",
        body: JSON.stringify({
          fk_order: id,
          country: country,
          company: company
        })
      });
    },
    payOrder(id, fk_currency, fk_type_pay, code, fk_client, country, company) {
      return callApi(`/pay_order`, {
        method: "POST",
        body: JSON.stringify({
          fk_order: id,
          fk_currency: fk_currency,
          fk_type_pay: fk_type_pay,
          code: code,
          fk_client: fk_client,
          country: country,
          company: company
        })
      });
    },
    read(quotationId, quotation) {
      return callApi(`/seller_quotation/get/${quotationId}`, {
        method: "POST",
        body: JSON.stringify(quotation)
      });
    },
    getUser(userId) {
      return callApi(`/user/${userId}`, {
        method: "GET"
      });
    },
    updateQuantityLiberateUser(userId, quantity) {
      return callApi(`/user/${userId}`, {
        method: "POST",
        body: JSON.stringify({ liberate_quantity: quantity })
      });
    },
    update(quotationId, country, company, reason, state) {
      console.log([quotationId, country, company, reason, state]);
      return callApi(`/quotation/liberate/${quotationId}`, {
        method: "POST",
        body: JSON.stringify({
          country: country,
          company: company,
          reason: reason,
          state: state
        })
      });
    },
    remove(quotationId, data) {
      return callApi(`/seller_quotation/${quotationId}`, {
        method: "DELETE",
        body: JSON.stringify(data)
      });
    },
    getResidenceCountries() {
      return callApi("/residence", {
        method: "GET"
      });
    },
    getResidenceCities(countryId) {
      return callApi(`/residence_city/${countryId}`, {
        method: "GET"
      });
    },
    getIssuedIn(nationalityId) {
      return callApi(`/issued_in/${nationalityId}`, {
        method: "GET"
      });
    },
    getCustomerByCi(customerCi) {
      return callApi(`/customerci/${customerCi}`, {
        method: "GET"
      });
    },
    getGender() {
      return callApi("/gender", {
        method: "GET"
      });
    }
  }
};

export { apiPay };
