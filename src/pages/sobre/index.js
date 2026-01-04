import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import NavBar from "../../components/navBar";
import { useRoute, useNavigation } from "@react-navigation/native";
import { CartContext } from "../../contexts/cartContext";

export default function Sobre() {
  const navigation = useNavigation();
  const { removeAll } = useContext(CartContext);

  function goToHome() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <NavBar
        data={{ text: "Sobre", icon: "home", size: 30 }}
        onclick={goToHome}
      />
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.containerButtonStyle}
          onPress={removeAll}
        >
          <Text style={styles.containerButtonTextStyle}>Limpar carrinhos</Text>
          {/* <ActivityIndicator
            style={{ marginLeft: 4, opacity: loading ? 1 : 0 }}
            size="small"
            color="#121212"
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 4,
  },
  containerButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerButtonStyle: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#121212",
    borderRadius: 25,
    padding: 25,
    paddingRight: 20,
  },
  containerButtonTextStyle: {
    color: "#121212",
    fontSize: 25,
    fontWeight: "bold",
  },
});
