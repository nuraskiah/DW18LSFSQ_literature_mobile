import React, { useContext } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';

import { Context } from '../context/Context';
import { API } from '../config/config.js';

import logo from '../../assets/logo.png';

import Header from '../components/CustomHeader';
import LiteratureList from '../components/LiteratureList';

import Splash from './Splash';

const Collection = () => {
  const [state] = useContext(Context);
  const { isLoading, data, refetch } = useQuery(
    'getCollections',
    async () => await API.get(`/bookmarks/${state.user.id}`)
  );

  let literatures;
  if (!isLoading) {
    literatures = data.data.data.map((data) => data.literature);
  }

  return isLoading ? (
    <Splash />
  ) : (
    <View style={{ flex: 1, backgroundColor: '#161616' }}>
      <Header
        center={
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 22,
            }}
          >
            Collections
          </Text>
        }
        placement="left"
      />

      <View style={styles.container}>
        <LiteratureList literatures={literatures} refetch={refetch} />
      </View>
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

export default Collection;
