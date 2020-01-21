import BASE_URI from "../uri";
const TOKEN = window.sessionStorage.getItem("token");
async function callApi(endpoint, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${TOKEN}`
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);

  const data = await response.json();

  return data;
}

const api = {
  users: {
    list() {
      return callApi("/user", {
        method: "GET"
      });
    },
    create(user) {
      //console.log('servicio :'+JSON.stringify(client));
      return callApi(`/user`, {
        method: "POST",
        body: JSON.stringify(user)
      });
    },
    read(userId, liberateQuantity) {
      return callApi(`/user/${userId}`, {
        method: "POST",
        body: { liberate_quantity: liberateQuantity }
      });
    },
    update(userId, updates) {
      return callApi(`/user/${userId}`, {
        method: "POST",
        body: JSON.stringify(updates)
      });
    },
    remove(userId, data) {
      return callApi(`/user/${userId}`, {
        method: "DELETE",
        body: JSON.stringify(data)
      });
    }
  }
};

export { api };
