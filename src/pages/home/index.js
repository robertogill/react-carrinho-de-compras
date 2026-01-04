import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import NavBar from "../../components/navBar";
import Produto from "./components";

import { CartContext } from "../../contexts/cartContext";

export default function Home() {
  const navigation = useNavigation();

  const { cart, length, total, add, update } = useContext(CartContext);
  const [produtos, setProdutos] = useState([
    { id: 1, name: "Coca-cola", price: 8.7 },
    { id: 2, name: "Chocolate", price: 6.5 },
    { id: 3, name: "Queiro 500g", price: 15.7 },
    { id: 4, name: "Batata frita", price: 21.0 },
    { id: 5, name: "Guaraná lata", price: 5.2 },
    { id: 6, name: "Agua mineral 250ml", price: 2.1 },
    { id: 7, name: "Manteiga 500g", price: 18.5 },
  ]);

  const navbar = {
    text: "Lista de Produtos",
    icon: "shopping-cart",
    size: 35,
  };

  function goToCart() {
    navigation.navigate("Cart");
  }

  return (
    <View style={styles.container}>
      <NavBar data={{ ...navbar }} length={length} onclick={goToCart} />
      <View style={styles.containerList}>
        <FlatList
          data={produtos}
          keyExtractor={(data) => data.id}
          renderItem={({ item }) => (
            <Produto
              data={{ ...item }}
              getSelecionado={() => add({ produto: { ...item }, length: 1 })}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 4,
  },
  containerList: {
    marginTop: 10,
  },
});
