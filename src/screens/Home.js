import React, { useState, useContext } from 'react';
import {
  View,
  ScrollView,
  Image,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Context } from '../context/Context';

import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const Home = (props) => {
  const [state, dispatch] = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Home Page</Text>
      <Text>Reload</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: 'LOGOUT',
          });
        }}
      >
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161616',
    color: 'white',
    padding: 15,
  },
  text: {
    color: 'white',
  },
});

export default Home;
