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
  quotation: {
    list() {
      return callApi("/seller_quotation", {
        method: "GET"
      });
    },
    list_buyer() {
      return callApi("/customer_quotation", {
        method: "GET"
      });
    },
    getQuotation(id, country, company) {
      return callApi(`/quotation/get_liberate`, {
        method: "POST",
        body: JSON.stringify({ id: id, country: country, company: company })
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
    },
    postSaveForm(dataForm, dataClient, dataQuotation) {
      return callApi("/quotation", {
        method: "POST",
        body: JSON.stringify({
          search_product: dataForm,
          client: dataClient,
          quotation: dataQuotation
        })
      });
    }
  }
};

export { api };
