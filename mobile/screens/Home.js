import React from 'react';
import {StyleSheet, View, Text, Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/img111.png')}
      />

      <Text style={styles.heading}>Welcome to Movie Home</Text>
      <Text style={styles.subheading}>
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Films')}>
        <Text style={styles.buttonText}>View Movie List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  heading: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});