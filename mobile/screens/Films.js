import * as React from "react";
import { View, Text ,StyleSheet} from "react-native";
import Menue from "../component/Menue";

const Films = () => {
  return (
  <View style={styles.container}>
    <Text>list films</Text>
    <View style={styles.maincontainer}></View>
      <Menue />
      <View />
  </View>
  );
};

export default Films;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222831',
    },
    maincontainer: {
      flex: 1,
    }


});