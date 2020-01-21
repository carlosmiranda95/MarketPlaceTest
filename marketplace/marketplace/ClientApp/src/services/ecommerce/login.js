import BASE_URI from "../uri";

async function callApi(endpoint, options = {}) {
  console.log(BASE_URI);
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  const url = BASE_URI + endpoint;
  const response = await fetch(url, options);
  const data = await response;
  return data;
}

async function callApiCSharp(endpoint, options = {}) {
  console.log(BASE_URI);
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  const url = endpoint;
  const response = await fetch(url, options).then(response => {
    return response
      .json()
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  });
  return response;
}

async function callApiLogout(endpoint, options = {}) {
  var TOKEN = window.sessionStorage.getItem("token");
  options.headers = {
    "Content-Type": "application/json",
    Accept: "*/*",
    Authorization: `Bearer ${TOKEN}`
  };
  const url = BASE_URI + endpoint;
  const response = await fetch(url, options);
  const data = await response;
  return data;
}

const loginApi = {
  login: {
    newLogin(username, password, webBrowser) {
      return callApiCSharp("http://localhost:59583/api/Logins/LoginIn", {
        method: "POST",
        body: JSON.stringify({
          user: username,
          password: password,
          web_browser: webBrowser
        })
      });
    },
    logout(webBrowser) {
      return callApiLogout("/logout", {
        method: "DELETE",
        body: JSON.stringify({
          web_browser: webBrowser
        })
      });
    },
    logoutInactive(webBrowser, messageLogout) {
      return callApiLogout("/logout", {
        method: "POST",
        body: JSON.stringify({
          web_browser: webBrowser,
          message_logout: messageLogout
        })
      });
    }
  }
};

export { loginApi };
