import AsyncStorage from "@react-native-async-storage/async-storage";

import { KEYS } from "../constants";

export async function set(carrinhos) {

  try {
    await AsyncStorage.setItem(KEYS.CARRINHO, JSON.stringify(carrinhos));
  } catch (error) {    
    throw error;
  }
}

export async function get() {
  try {
    return await AsyncStorage.getItem(KEYS.CARRINHO);
  } catch (error) {
    throw error;
  }
}

export async function remove() {
  try {
    await AsyncStorage.removeItem(KEYS.CARRINHO);
  } catch (error) {
    throw error;
  }
}
