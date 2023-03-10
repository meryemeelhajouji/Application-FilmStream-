import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Menue from "../component/Menue";

const Favoris = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>list  favoris films</Text>
      <View style={styles.maincontainer}></View>
      <Menue />
      <View />
    </View>
  );
};

export default Favoris;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  maincontainer: {
    flex: 1,
  },
  text: {
    color: "#fff",
  },
});
