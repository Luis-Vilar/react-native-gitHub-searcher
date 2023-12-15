import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Avatar from "./components/Avatar";
import { StatusBar } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
      <Avatar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2c3e50",
    justifyContent: "center",
  },
});
export default App;
