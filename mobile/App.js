import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Films from "./screens/Films";
import Favoris from "./screens/Favoris";
import OneFilm from "./screens/OneFilm";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Films">
        <Stack.Screen name="Films" component={Films} options={{ headerShown: false }} />
        <Stack.Screen name="OneFilm" component={OneFilm} options={{ headerShown: false }} />
        <Stack.Screen name="Favoris" component={Favoris} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
