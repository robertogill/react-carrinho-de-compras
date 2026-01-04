
//jest.mock("@react-native-async-storage/async-storage");

import AsyncStorage from "@react-native-async-storage/async-storage";

import { KEYS } from "../constants";

describe("AsyncStorage set e remove", () => {

  beforeEach(async () => {
    AsyncStorage.clear();
    jest.clearAllMocks();
  });

  it("deve salvar um valor", async () => {
    await AsyncStorage.setItem(KEYS.CARRINHO, "valor1");

    const value = await AsyncStorage.getItem(KEYS.CARRINHO);

    expect(value).toBe("valor1");
  });

  it("deve remover um item", async () => {
    await AsyncStorage.setItem(KEYS.CARRINHO, "valor2");

    await AsyncStorage.removeItem(KEYS.CARRINHO);

    const removed = await AsyncStorage.getItem(KEYS.CARRINHO);

    expect(removed).toBeNull();
  });
});
