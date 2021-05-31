import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./pages/Home";
import MyLinks from "./pages/MyLinks";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: "#0085ff",
        activeTintColor: "#fff",
        inactiveTintColor: "#000",
        marginTop: 16,
        labelStyle: {
          fontSize: 18,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Encurtar links",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MyLinks"
        component={MyLinks}
        options={{
          title: "Meus links",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "stats-chart" : "stats-chart-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default Routes;
