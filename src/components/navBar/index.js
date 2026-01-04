import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function NavBar({ data, onclick, length }) {
  function callback() {
    onclick && onclick();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data?.text}</Text>
      <Pressable style={styles.iconContainer} onPress={callback}>
        {data.icon && (
          <Feather name={data?.icon} size={data?.size || 25} color="black" />
        )}
        {length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{length}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  iconContainer: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    left: -1,
    bottom: -4,  
    minHeight:20,
    minWidth:20,  
    borderRadius: 12,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    paddingStart:4,
    paddingEnd:4
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});
