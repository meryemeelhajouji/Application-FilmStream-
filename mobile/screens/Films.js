import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Menue from "../component/Menue";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import CardMovies from "../component/CardMovies";

const Films = () => {
  const [listFilms, setListFilms] = useState([]);
  const API_KEY = "3bfc7e772d261f76fc5d3f33379ba743";
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    axios;
    axios
      .get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        setListFilms(response.data.results);
        console.log(listFilms);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search your movies here"
        style={{
          backgroundColor: '#f0f0f0',
          color: '#888888',
          padding: 10,
          fontSize: 15,
          height: 50,
          marginTop: 50,
          placeholderTextColor: '#888888',
          selectionColor: '#888888',
          borderRadius: 10,
        }}
        // left={<TextInput.Icon name="magnify" />}
      />
      <Text style={styles.text}>list films</Text>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {listFilms.map((movie, i) => (
          <CardMovies movie={movie} key={i} />
        ))}
      </ScrollView>
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
    backgroundColor: "#222831",
  },
  maincontainer: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    color: "#EEEEEE",
    marginTop: 10,
  },
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
