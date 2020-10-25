import React from 'react';
import { View, ScrollView, Image, Button, StyleSheet } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const Landing = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo-full.png')}
        style={{ width: 300, resizeMode: 'contain', marginBottom: 75 }}
      />
      <PrimaryButton
        label="Sign Up"
        block
        onPress={() => props.navigation.navigate('Register')}
      />
      <View style={{ marginBottom: 10 }}></View>
      <SecondaryButton
        label="Sign In"
        block
        onPress={() => props.navigation.navigate('Login')}
      />
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
});

export default Landing;
