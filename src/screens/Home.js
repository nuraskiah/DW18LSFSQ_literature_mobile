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
import { useQuery } from 'react-query';

import { Context } from '../context/Context';
import { API } from '../config/config.js';

import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import LiteratureList from '../components/LiteratureList';

import Splash from './Splash';

const Home = (props) => {
  const [state, dispatch] = useContext(Context);
  const { isLoading, data } = useQuery(
    'getLiteratures',
    async () => await API.get('/literatures')
  );

  return isLoading ? (
    <Splash />
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>This is Home Page</Text>
      <LiteratureList literatures={data.data.data} />
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
    alignItems: 'flex-start',
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
