import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import Carrinho from "./components";
import NavBar from "../../components/navBar";
import { CartContext } from "../../contexts/cartContext";

export default function Cart() {
  const navigation = useNavigation();
  const { cart, update, remove, length, total } = useContext(CartContext);

  function goToHome() {
    navigation.navigate("Home");
  }

  function manterCarrinho(carrinho) {
    update(carrinho);
    remove(carrinho);
  }

  return (
    <View style={styles.container}>
      <NavBar
        data={{ text: "Carrinho", icon: "home", size: 30 }}
        onclick={goToHome}
      />
      <FlatList
        data={cart}
        keyExtractor={(data) => data.produto.id}
        renderItem={({ item }) => (
          <Carrinho
            data={{ ...item }}
            manter={(carrinho) => manterCarrinho(carrinho)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.containerVazio}>
            <Text style={styles.containerVazioText}>Carrinho vazio...</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.containerTotal}>
            {total > 0 && <Text>R$ {total}</Text>}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fafafa",
    padding: 4,
  },
  containerTotal: {
    color: "#1212",
    fontWeight: "bold",
    padding: 8,
    paddingStart: 14,
  },
  containerVazio: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerVazioText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#121212",
  },
});
