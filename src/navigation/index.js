import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";


import Home from "../pages/home";
import Cart from "../pages/cart";
import Sobre from "../pages/sobre";

const Drawer = createDrawerNavigator();

export default function Routes() {
  
  const options = {
    headerStyle: { backgroundColor: "#121212" },
    headerTintColor: "#fff",
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: "Página Home", ...options }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{ title: "Página Cart", ...options }}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{ title: "Página Sobre", ...options }}
      />
    </Drawer.Navigator>
  );
}
