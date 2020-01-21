function callbackHell(callback) {
  callback("Hola Javascripters");
}

describe("Probando un callback", () => {
  test("Callback", done => {
    function otherCallback(data) {
      expect(data).toBe("Hola Javascripters");
      done();
    }
    callbackHell(otherCallback);
  });
});
