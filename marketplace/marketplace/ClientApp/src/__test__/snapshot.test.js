import getCharacter from "./node_modules/.../snapshot";
import simulaciondatos from "./simulaciondedatos.json.js";

describe("Es hora de las instantaneas", () => {
  test("Snapshot", () => {
    expect(getCharacter(simulaciondatos)).toMatchSnapshot();
  });

  test("Siempre fallara la instantanea", () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20)
    };
    expect(user).toMatchSnapshot();
  });

  test("tenemos una excepcion dentro del codigo", () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: "Oscar Barajas"
    };
    expect(user).toMatchSnapshot({
      id: expect.any(Number)
    });
  });
});
