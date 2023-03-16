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

const API_KEY = "3bfc7e772d261f76fc5d3f33379ba743";
const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const ALL_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

const Films = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleInputChange = (text) => {
    setQuery(text);
  };

  const searchMovie = async (movieTitle) => {
    try {
      const response = await axios.get(`${BASE_URL}${movieTitle}`);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllMovies = async () => {
    try {
      const response = await axios.get(ALL_MOVIES_URL);
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (query.length > 0) {
      searchMovie(query)
        .then((data) => {
          setMovies(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      fetchAllMovies();
    }
  }, [query]);
  return (
    <View style={styles.container}>
      <View style={styles.maincontainer}></View>
      <Menue />
     
      <TextInput
        value={query}
        onChangeText={handleInputChange}
        placeholder="Search your movies here"
        style={{
          backgroundColor: "#f0f0f0",
          color: "#888888",
          padding: 10,
          fontSize: 15,
          height: 50,
          marginTop: 10,
          marginBottom:5,
          placeholderTextColor: "#888888",
          selectionColor: "#888888",
          borderRadius: 10,
        }}
        // left={<TextInput.Icon name="magnify" />}
      />
  
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {movies.map((movie, i) => (
          <CardMovies movie={movie} key={i} />
        ))}
      </ScrollView>
     
    </View>
  );
};

export default Films;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  maincontainer: {
    flex: 1,
  },
  text: {
    fontSize: 38,
    fontWeight: "600",
    color: "#EEEEEE",
    marginTop: 15,
    marginLeft:15,
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
