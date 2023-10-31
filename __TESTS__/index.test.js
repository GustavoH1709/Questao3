const digital_root = require("../app");

describe("Executa digiral root", () => {
  test("com valor numerico 493193 deve retornar o valor 2", () => {
    expect(digital_root(493193)).toBe(2);
  });
  test("com valor em string 493193 deve retornar um throw", () => {
    expect(() => {
      digital_root("493193");
    }).toThrow();
  });
  test("com valor numerico 0 deve retornar o valor 0", () => {
    expect(digital_root(0)).toBe(0);
  });
  test("com valor numerico -1 deve retornar um throw", () => {
    expect(() => {
      digital_root(-1);
    }).toThrow();
  });
});
