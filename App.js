import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import React from "react";
export default function App() {
  return (
    <Provider store={store}>
      <Home></Home>
      <StatusBar translucent={true}></StatusBar>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
