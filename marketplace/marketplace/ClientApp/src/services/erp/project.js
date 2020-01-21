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
  projects: {
    list() {
      return callApi("/project", {
        method: "GET"
      });
    },
    create(project) {
      return callApi(`/project`, {
        method: "POST",
        body: JSON.stringify(project)
      });
    },
    read(projectId, project) {
      return callApi(`/project/get/${projectId}`, {
        method: "POST",
        body: JSON.stringify(project)
      });
    },
    update(projectId, updates) {
      return callApi(`/project/${projectId}`, {
        method: "POST",
        body: JSON.stringify(updates)
      });
    },
    remove(projectId, data) {
      return callApi(`/project/${projectId}`, {
        method: "DELETE",
        body: JSON.stringify(data)
      });
    },
    listByCategory(categoryID) {
      return callApi(`/project/${categoryID}`, {
        method: "POST"
      });
    }
  }
};

export { api };
