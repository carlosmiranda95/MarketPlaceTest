const BASE_URL =
  process.env.BACKEND_ECOMMERCE_URL + ":" + process.env.BACKEND_ECOMMERCE_PORT;
var username = "sira",
  password = "sira",
  auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
async function callApi(endpoint, options = {}) {
  options.headers = {
    Authorization: auth,
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);

  const data = await response.json();

  return data;
}

const api = {
  clients: {
    list() {
      return callApi("/client", {
        method: "GET"
      });
    },
    create(client) {
      console.log("servicio :" + JSON.stringify(client));
      return callApi(`/client`, {
        method: "POST",
        body: JSON.stringify(client)
      });
    },
    read(clientId, client) {
      return callApi(`/client/get/${clientId}`, {
        method: "POST",
        body: JSON.stringify(client)
      });
    },
    update(clientId, updates) {
      return callApi(`/client/${clientId}`, {
        method: "POST",
        body: JSON.stringify(updates)
      });
    },
    remove(clientId, data) {
      return callApi(`/client/${clientId}`, {
        method: "DELETE",
        body: JSON.stringify(data)
      });
    }
  }
};

export { api };
