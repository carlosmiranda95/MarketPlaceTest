const isNull = () => {
  return null;
};

const isTrue = () => true;
const isFalse = () => false;
const isUndefined = () => undefined;

describe("Probar resultados nulos", () => {
  test("Nulo", () => {
    expect(isNull()).toBeNull();
  });
});
describe("Probar resultados verdaderos", () => {
  test("Verdadero", () => {
    expect(isTrue()).toBeTruthy();
  });
});
describe("Probar resultados falsos", () => {
  test("Falso", () => {
    expect(isFalse()).toBeFalsy();
  });
});
describe("Probar resultados indefinidos", () => {
  test("Indefinido", () => {
    expect(isUndefined()).toBeUndefined();
  });
  describe("Probar resultados no verdaderos", () => {
    test("Falso o verdadero", () => {
      expect(isFalse()).not.toBeTruthy();
    });
  });
});
