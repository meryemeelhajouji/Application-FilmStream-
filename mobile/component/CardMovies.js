import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const CardMovies = ({ movie}) => {
  const navigation = useNavigation();

  const url = "https://image.tmdb.org/t/p/w500";
  const poster=movie.poster_path
  const img = url + poster;
  return (
    <View style={styles.listContainer}>
      <Image source={{uri: img}} style={styles.image} />
      <TouchableOpacity>
        <Text style={styles.filmTitle}></Text>
        <Text style={styles.nameArtist}>{movie.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity   onPress={() => navigation.navigate('OneFilm', {key: movie.id })}>
        <MaterialIcons name="my-library-add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CardMovies;
const styles = StyleSheet.create({
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 170,
    height: 200,
    borderRadius: 5,
    margin: 10,
  },
  filmTitle: {
    padding: 14,
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 2,
    fontWeight: "bold",
  },
  nameArtist: {
    fontSize: 14,
    marginLeft: 10,
    color: "#EEEEEE",
  },
});
