jest.mock("../server/services/parameter");

const dataGetParameterCategory = {
  username: "JSOLANO@GRUPOSION.BO",
  ip: "192.168.0.1",
  mac: "65:48:A4:TD:45",
  web_browser: "CHROME,73.0.3683.103,DESKTOP"
};

describe("TestParameterCategory", () => {
  test("Should Parameter Category be 1,2,3,4", () => {
    const ListCategoriesSelected = () => {
      const data = {
        json: {
          name: "TIMEPO INACTIVIDAD",
          id: 2,
          description: "TIEMPO DE INACTIVIDAD DEL SISTEMA",
          value: "1,2,3,4",
          enabled: 1,
          user_insert: "JSOLANO",
          date_insert: "29-07-2019 11:46:42",
          user_update: "JOSE GERARDO SOLANO ROMERO",
          date_update: "31-07-2019 16:50:16",
          concurrence: "37"
        },
        codigo: 0,
        mensaje: "Parameter, The Parameter was obtained Correctly"
      };
      return data.json.value;
    };
    return expect(ListCategoriesSelected()).toEqual("1,2,3,4");
  });
});
