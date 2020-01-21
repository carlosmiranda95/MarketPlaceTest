//import { exportSpecifier } from "@babel/types";

describe("Comparadores comunes", () => {
  const user = {
    name: "Rene",
    lastname: "Ribera"
  };
  const user2 = {
    name: "Rene",
    lastname: "Ribera"
  };
  const user3 = {
    name: "Jose",
    lastname: "Solano"
  };

  test("igualdad de elementos", () => {
    expect(user).toEqual(user2);
  });

  test("No son iguales", () => {
    expect(user).not.toEqual(user3);
  });
});
