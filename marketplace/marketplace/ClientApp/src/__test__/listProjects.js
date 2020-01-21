import { api } from "../server/services/project";

describe("Probando promesas", () => {
  test("Realizando una peticion a una Api", done => {
    api.projects.list().then(data => {
      console.log(data);
      expect(data.json.length).toBeGreaterThan(0);
      done();
    });
  });
  test("Resuelve un Hola!", () => {
    return expect(Promise.resolve("Hola")).resolves.toBe("Hola!");
  });
});
