import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Menue from "../component/Menue";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";

const Films = () => {
  const [listFilms, setListFilms] = useState([]);
  const API_KEY = "3bfc7e772d261f76fc5d3f33379ba743";
  const BASE_URL = 'https://api.themoviedb.org/3';


  useEffect(() => {
    axios
    axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
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
      <Text style={styles.text}>list films</Text>
      
      {listFilms.map((films, i) => (
      <View key={i}style={styles.listContainer}>
        <Image source={require("../assets/img.jpg")} style={styles.image} />
        <TouchableOpacity>
          <Text style={styles.songTitle}>{films.title}</Text>
          <Text style={styles.nameArtist}>Name Of Artist: unconnu</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" color="white" size={30} />
        </TouchableOpacity>
      </View>
      ))}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  songTitle: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
    color: "#EEEEEE",
  },
  nameArtist: {
    fontSize: 14,
    marginLeft: 10,
    color: "#EEEEEE",
  },
});
