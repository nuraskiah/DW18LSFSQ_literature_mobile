import React from 'react';
import { Image, StyleSheet } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import logo from '../../assets/logo.png';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Collection from '../screens/Collection';
import Profile from '../screens/Profile';

// const MainTab = createStackNavigator();
const MainTab = createBottomTabNavigator();

const Main = () => {
  return (
    <MainTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveBackgroundColor: '#161616',
        activeBackgroundColor: '#161616',
        activeTintColor: '#af2e1c',
        inactiveTintColor: '#ffffff',
        showLabel: false,
        style: {
          borderTopWidth: 0.5,
          borderTopColor: '#454545',
          backgroundColor: '#161616',
        },
      }}
    >
      <MainTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={24} />
          ),
        }}
      />

      <MainTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search" color={color} size={24} />
          ),
        }}
      />

      <MainTab.Screen
        name="Collection"
        component={Collection}
        options={{
          tabBarLabel: 'Collection',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-bookmarks" color={color} size={24} />
          ),
        }}
      />

      <MainTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={24} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default Main;
