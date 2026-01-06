export function add(carrinhos, carrinho) {
  try {
    const array = carrinhos || [];

    if (!carrinho) throw new Error("Carrinho inexistente");

    if (array.some((c) => c.produto?.id == carrinho.produto?.id)) {
      return array.map((c) => {
        if (c.produto?.id == carrinho.produto?.id) {
          c.length = Number(c.length);
          return { ...c, length: ++c.length };
        }
        return c;
      });
    }

    return [...array, { ...carrinho, length: 1 }];
  } catch (error) {
    throw error;
  }
}

export function update(carrinhos, carrinho) {
  try {
    if (!carrinho) throw new Error("Carrinho inexistente");

    if (carrinho.length > 0) {
      var array = carrinhos || [];

      if (array.length > 0) {
        array = array.map((c) => {
          if (c.produto.id == carrinho.produto.id) {
            return { ...c, length: Number(carrinho.length) };
          }

          return c;
        });

        carrinhos = array;
      }
    }

    return carrinhos;
  } catch (error) {
    throw error;
  }
}

export function remove(carrinhos, carrinho) {
  try {
    if (!carrinho) throw new Error("Carrinho inexistente");

    if (carrinho.length == 0) {
      var array = carrinhos || [];

      if (array.length > 0) {
        array = array.map((c) => {
          if (c.produto.id == carrinho.produto.id) {
            c.length = carrinho.length;
          }

          return c;
        });

        carrinhos = array.filter((c) => c.length > 0);
      }
    }

    return carrinhos;
  } catch (error) {
    throw error;
  }
}

export function getLength(carrinhos) {
  if (!carrinhos) return 0;

  if (carrinhos.length === 0) return 0;

  return carrinhos.reduce((cc, o) => (cc += o.length), 0);
}

export function getTotal(carrinhos) {
  if (!carrinhos) return Number(0).toFixed(2);

  if (carrinhos.length === 0) return Number(0).toFixed(2);

  return carrinhos
    .reduce((cc, o) => (cc += o.length * o.produto?.price), 0)
    .toFixed(2);
}
