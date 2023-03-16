import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const CardCast = ({ movie}) => {
 
  return (
    <View style={styles.castContainer}>
    <Image
      source={{
        uri: `https://image.tmdb.org/t/p/w200${movie.profile_path}`,
      }}
      style={styles.castImage}
    />
    <Text style={styles.castName}>{movie.name}</Text>
    <Text style={styles.castCharacter}>{movie.character}</Text>
  </View>
  );
};

export default CardCast;
const styles = StyleSheet.create({
    castContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      castImage: {
        width: 100,
        height: 150,
        borderRadius: 10,
      },
      castName: {
        fontWeight: 'bold',
        marginTop: 10,
      },
      castCharacter: {
        color: 'gray',
        marginTop: 5,
      },
});
