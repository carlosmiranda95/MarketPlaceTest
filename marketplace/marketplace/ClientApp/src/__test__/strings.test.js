describe("comprobar cadenas de texto", () => {
  const text = "Texto a mostrar en la terminal";
  test("Debe contener el siguiente texto", () => {
    expect(text).toMatch(/Texto/);
  });
  test("no contiene el siguiente texto", () => {
    expect(text).not.toMatch(/es/);
  });
  test("comprobar el tamaño del texto", () => {
    expect(text).not.toHaveLength(5);
  });
});
