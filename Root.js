import React, { useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AsyncStorage, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Context } from './src/context/Context';
import { API, setToken } from './src/config/config.js';

import Auth from './src/navigators/Auth';
import Main from './src/navigators/Main';

import Splash from './src/screens/Splash';

const Stack = createStackNavigator();

const storage = AsyncStorage || localStorage;
if (storage.token) setToken(storage.token);

const Root = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { data } = await API.get('/validate');

        dispatch({
          type: 'GET_USER',
          payload: data.data,
        });
      } catch (error) {
        dispatch({
          type: 'AUTH_ERROR',
        });
      }
    };

    loadUser();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#161616' }}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {state.isLoading ? (
            <Stack.Screen name="Splash" component={Splash} />
          ) : state.isLogin ? (
            <Stack.Screen name="Main" component={Main} />
          ) : (
            <Stack.Screen name="Auth" component={Auth} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Root;
