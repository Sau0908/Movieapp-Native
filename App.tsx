import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './component/Home';
import Movie from './component/Movie';

const App = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Moive">
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Movie" component={Movie} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
