import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Image
        source={require('../../assets/logo.png')}
        style={{ width: 100, resizeMode: 'contain' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
