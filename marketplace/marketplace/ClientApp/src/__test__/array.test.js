const fruit = ["sandia", "manzana", "naranja", "mandarina", "limon"];
const colors = ["azul", "verde", "rojo", "amarillo"];

const arrayfruit = () => fruit;
const arraycolors = () => colors;

describe("Comprobar que existe un elemento", () => {
  test("¿Contiene una mandarina ?", () => {
    expect(arrayfruit()).toContain("mandarina");
  });
  test("No contiene una fruta", () => {
    expect(arrayfruit()).not.toContain("pera");
  });
  test("Comprobar el tamaño de un arreglo", () => {
    expect(arrayfruit()).toHaveLength(5);
  });
  test("Comprobaremos que existe un color", () => {
    expect(arraycolors()).toContain("azul");
  });
});

// test('Lista de colores', () => {
//     expect(arraycolors).toContain('verde');
// });
