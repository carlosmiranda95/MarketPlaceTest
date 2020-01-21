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
const Router = {
  country: "BOLIVIA",
  company: "ZURIEL",
  fk_project: "0"
};

export const product = {
  products: {
    list(project, router) {
      Router.fk_project = project;
      if (router) {
        Router.country = router.country;
        Router.company = router.company;
      }
      return callApi("/product", {
        method: "POST",
        body: JSON.stringify(Router)
      });
    },
    listDiscount(projectID, route) {
      return callApi(`/product/${projectID}`, {
        method: "POST",
        body: JSON.stringify(route)
      });
    }
  }
};
