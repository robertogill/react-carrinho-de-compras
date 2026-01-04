import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Produto({ data, getSelecionado }) {

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.textStyle}>{data.name}</Text>
        <Text style={styles.textStyle}>R$ {data.price.toFixed('2')}</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={getSelecionado}
        >
          <Feather name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#d1d1d1",
    borderWidth: 1,
    padding: 8,
    marginBottom: 4,
  },
  containerText: {
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    width: 100,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#121212",
  },
  containerButton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
  },
  buttonStyle: {
    flexDirection: "column",
    width: 35,
    height: 30,
    backgroundColor: "#5a8dc2",
    alignItems: "center",
    justifyContent: "center",
  },
});
