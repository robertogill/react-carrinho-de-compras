import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { add, subtract } from "../utils/cartUtil";

export default function Carrinho({ data, manter }) {
  function addCart() {
    var length = add(data.length);

    manter({ ...data, length });
  }

  function subtractCart() {
    var length = subtract(data.length);

    manter({ ...data, length });
  }

  function removeCart() {
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja excluir este item?",
      [
        {
          text: "Cancelar",
          style: "cancel",
          onPress: () => console.log("Exclusão cancelada"),
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            var length = 0;

            manter({ ...data, length });
          },
        },
      ],
      { cancelable: false }
    );
  }

  if (data.length) {
    return (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.textNome}>{data.produto.name}</Text>
          <Text style={styles.textNome}>
            R$ {data.produto.price.toFixed("2")}
          </Text>
        </View>
        <View style={styles.containerQuantidade}>
          <TouchableOpacity
            style={styles.containerQuantidadeButton}
            onPress={subtractCart}
          >
            <Feather name="minus" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.containerQuantidadeText}>{data.length}</Text>
          <TouchableOpacity
            style={styles.containerQuantidadeButton}
            onPress={addCart}
          >
            <Feather name="plus" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={removeCart}
            style={styles.touchableRemover}
          >
            <Text>Remover</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 80,
    justifyContent: "center",
    alignItems: "flex-start",
    borderColor: "#d1d1d1",
    borderWidth: 1,
    padding: 8,
    marginBottom: 4,
  },
  containerText: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  textNome: {
    color: "#000",
    fontWeight: "bold",
  },
  containerQuantidade: {
    flexDirection: "row",
    marginBottom: 8,
  },
  containerQuantidadeButton: {
    flexDirection: "column",
    width: 35,
    height: 30,
    backgroundColor: "#5a8dc2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  containerQuantidadeText: {
    width: 50,
    borderWidth: 1,
    borderColor: "#1212",
    textAlign: "center",
    textAlignVertical: "center",
    padding: 2,
    marginBottom: 4,
  },
  touchableRemover: {
    flexDirection: "row",
    alignItems: "flex-end",
    color: "#4169E1",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
