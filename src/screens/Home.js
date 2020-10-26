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

import logo from '../../assets/logo.png';

import { Context } from '../context/Context';
import { API } from '../config/config.js';

import Header from '../components/CustomHeader';
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
    <View style={{ flex: 1 }}>
      <Header
        center={
          <Image source={logo} style={{ height: 24, resizeMode: 'contain' }} />
        }
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Discover Literatures</Text>
          <LiteratureList literatures={data.data.data} />
        </View>
      </ScrollView>
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
    fontSize: 24,
    marginBottom: 25,
    fontWeight: 'bold',
  },
});

export default Home;
