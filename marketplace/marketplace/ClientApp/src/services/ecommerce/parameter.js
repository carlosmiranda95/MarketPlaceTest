import BASE_URI from "../uri";
const TOKEN = window.sessionStorage.getItem("token");
async function callApi(endpoint, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "*/*",
    Authorization: `Bearer ${TOKEN}`
  };
  const url = BASE_URI + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  parameters: {
    list() {
      return callApi("/parameter", {
        method: "GET"
      });
    },
    listCategory() {
      return callApi("/categorylist", {
        method: "GET"
      });
    },
    readCategory(parameterId, parameterRead) {
      return callApi(`/categorylist/${parameterId}`, {
        method: "POST",
        body: JSON.stringify(parameterRead)
      });
    },
    create(parameterCreate) {
      return callApi(`/parameter`, {
        method: "POST",
        body: JSON.stringify(parameterCreate)
      });
    },
    read(parameterId) {
      return callApi(`/parameter/${parameterId}`, {
        method: "GET"
      });
    },
    update(parameterId, parameterUpdate) {
      return callApi(`/parameter/${parameterId}`, {
        method: "PUT",
        body: JSON.stringify(parameterUpdate)
      });
    },
    remove(parameterId, parameterDelete) {
      return callApi(`/parameter/${parameterId}`, {
        method: "DELETE",
        body: JSON.stringify(parameterDelete)
      });
    }
  }
};

export { api };
