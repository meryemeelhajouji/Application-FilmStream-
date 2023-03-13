import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Menue from "../component/Menue";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState, useEffect } from "react";
import axios from "axios";

const OneFilm = ({ route }) => {
  const { key } = route.params;
 

  const [Movie, setMovie] = useState([]);
  const[title, setTitle] = useState(null);
  const API_KEY = "3bfc7e772d261f76fc5d3f33379ba743";
  const BASE_URL = "https://api.themoviedb.org/3";

  const url = "https://image.tmdb.org/t/p/w500";
  const poster=Movie.poster_path
  const img = url + poster;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${key}?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data);
       
         console.log(key);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); console.log(Movie);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: img}}
        style={{ width: "100%", height: 280 }}
      />

      <View style={styles.movieContainer1}>
        <Text style={styles.title}> {Movie.title}</Text>
        {/* <TouchableOpacity>
          <Ionicons
            name="heart-outline"
            color="white"
            size={40}
            style={{ marginRight: 20 }}
          />
        </TouchableOpacity> */}
      </View>

      <View style={styles.movieContainer}>
        <Text style={styles.date}>{Movie.release_date}</Text>
        <Text style={styles.vote}>{Movie.vote_count} Votes</Text>
      </View>

      <View>
        <Text style={styles.titleDescription}> Movie description</Text>
        <Text
          style={{ color: "white", opacity: 0.8, fontSize: 18, marginTop: 5 }}
        >
        {Movie.overview}
        </Text>
      </View>

      <View style={styles.maincontainer}></View>
      <Menue />
      <View />
    </View>
  );
};

export default OneFilm;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  maincontainer: {
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 10,
  },
  movieContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  movieContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    fontSize: 14,
    color: "#EEEEEE",
    marginLeft: 10,
  },
  vote: {
    fontSize: 14,
    marginLeft: 10,
    color: "#EEEEEE",
  },
  titleDescription: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 25,
  },
});
