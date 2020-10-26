import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { Context } from '../context/Context';
import logo from '../../assets/logo.png';

import Header from '../components/CustomHeader';
import Button from '../components/PrimaryButton';

const Profile = () => {
  const [state, dispatch] = useContext(Context);
  return (
    <View style={{ flex: 1 }}>
      <Header
        center={
          <Image source={logo} style={{ height: 24, resizeMode: 'contain' }} />
        }
      />

      <View style={styles.container}>
        <Text style={{ color: 'white', marginBottom: 25 }}>Profile</Text>

        <Button
          label="Logout"
          onPress={() =>
            dispatch({
              type: 'LOGOUT',
            })
          }
        />
      </View>
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
  header: {
    backgroundColor: '#161616',
    borderBottomWidth: 0.5,
    borderBottomColor: '#454545',
  },
});

export default Profile;
