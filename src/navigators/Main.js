import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import logo from '../../assets/logo.png';

const MainStack = createStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: styles.container,
        headerTitleStyle: styles.title,
      }}
    >
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          title: <Image source={logo} style={{ width: 30, height: 30 }} />,
        }}
      ></MainStack.Screen>
    </MainStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161616',
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Main;
