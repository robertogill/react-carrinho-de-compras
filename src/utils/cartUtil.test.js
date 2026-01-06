import { add, remove, getLength, getTotal } from "./cartUtil";

describe("addCartUtil", () => {
  const coca = {
    id: 1,
    name: "coca-cola",
    price: "8.0",
  };

  const fanta = {
    id: 2,
    name: "fanta",
    price: "7.0",
  };

  test("deve adicionar o produto pela primeira vez com length = 1", () => {
    const carrinhos = [];

    const resultado = add(carrinhos, { produto: coca, length: 1 });

    const carrinhos2 = undefined;

    const resultado2 = add(carrinhos2, { produto: coca, length: 1 });

    expect(resultado).toHaveLength(1);
    expect(resultado[0]).toEqual({
      produto: coca,
      length: 1,
    });

    expect(resultado2).toHaveLength(1);
    expect(resultado2[0]).toEqual({
      produto: coca,
      length: 1,
    });
  });

  test("deve incrementar length quando adicionar o mesmo produto novamente", () => {
    const carrinhos = [
      {
        produto: coca,
        length: 1,
      },
    ];

    const resultado = add(carrinhos, { produto: coca, length: 1 });

    expect(resultado).toHaveLength(1);
    expect(resultado[0].length).toBe(2);
  });

  test("deve manter outros produtos e incrementar apenas o correto", () => {
    const carrinhos = [
      { produto: coca, length: 1 },
      { produto: fanta, length: 1 },
    ];

    const resultado = add(carrinhos, { produto: coca, length: 1 });

    expect(resultado).toHaveLength(2);
    expect(resultado[0].length).toBe(2);
    expect(resultado[1].length).toBe(1);
  });

  test("deve lançar erro quando o carrinho for null", () => {
    expect(() => add([], null)).toThrow("Carrinho inexistente");
  });

  test("deve lançar erro quando o carrinho for undefined", () => {
    expect(() => add([], undefined)).toThrow("Carrinho inexistente");
  });
});

describe("removeCartUtil", () => {
  const coca = {
    id: 1,
    name: "coca-cola",
    price: "8.0",
  };

  const fanta = {
    id: 2,
    name: "fanta",
    price: "8.0",
  };

  const pepsi = {
    id: 3,
    name: "pepsi",
    price: "8.0",
  };

  test("deve excluir o carrinho se length = 0", () => {
    const carrinhos = [
      { produto: { ...coca }, length: 1 },
      { produto: { ...fanta }, length: 1 },
      { produto: { ...pepsi }, length: 1 },
    ];

    const carrinhoAExcluir = {
      produto: { ...coca },
      length: 0,
    };

    const resultado = remove(carrinhos, carrinhoAExcluir);

    expect(resultado).toHaveLength(2);
    expect(resultado[0]).toEqual({
      produto: fanta,
      length: 1,
    });
    expect(resultado[1]).toEqual({
      produto: pepsi,
      length: 1,
    });
  });

  test("deve lançar erro quando o carrinho for null", () => {
    expect(() => remove([], null)).toThrow("Carrinho inexistente");
  });
});

describe("getLengthCartUtil", () => {
  var cart = [];

  beforeEach(() => {
    const coca = {
      id: 1,
      name: "coca-cola",
      price: "8.0",
    };

    const fanta = {
      id: 2,
      name: "fanta",
      price: "8.0",
    };

    const pepsi = {
      id: 3,
      name: "pepsi",
      price: "8.0",
    };

    cart = [{produto: coca, length: 10 },{produto: fanta, length: 10 },{produto: pepsi, length: 15 }];
  });

  it("deve retornar length 0", () => {
    //Arange

    const carrinhos = undefined;

    const carrinhos2 = [];

    //Action

    const length = getLength(carrinhos);

    const length2 = getLength(carrinhos2);

    //Asert

    expect(length).toBe(0);
    expect(length2).toBe(0);
  });

  it("deve retornar length 35", () => {

    //Arange

    const carrinhos = cart;

    //Action

    const length = getLength(carrinhos);

    //Asert

    expect(length).toBe(35);
  });
});

describe("getTotalCartUtil", () => {
  
  var cart = [];

  beforeEach(() => {
    const coca = {
      id: 1,
      name: "coca-cola",
      price: 8.0,
    };

    const fanta = {
      id: 2,
      name: "fanta",
      price: 8.0,
    };

    const pepsi = {
      id: 3,
      name: "pepsi",
      price: 8.0,
    };

    cart=[{produto: coca, length: 10 },{produto: fanta, length: 10 },{produto: pepsi, length: 15 }];
  });

  it("deve retornar total 0.00", () => {
    //Arange

    const carrinhos = undefined;

    const carrinhos2 = [];

    //Action

    const total = getTotal(carrinhos);

    const total2 = getTotal(carrinhos2);

    //Asert

    expect(total).toBe("0.00");
    expect(total2).toBe("0.00");
  });

  it("deve retornar total 280.00", () => {

    //Arange

    const carrinhos = cart;

     //Action

    const total = getTotal(carrinhos);

    //Asert

    expect(total).toEqual("280.00");
  });
});
