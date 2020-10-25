import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Formik } from 'formik';

import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';

const Register = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo-full.png')}
        style={{ width: 300, resizeMode: 'contain', marginBottom: 50 }}
      />
      <Formik
        initialValues={{
          email: '',
          password: '',
          fullName: '',
          gender: '',
          phone: '',
          address: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={{ width: '100%' }}>
            <CustomInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              value={values.email}
            />
            <CustomInput
              placeholder="Password"
              onChangeText={handleChange('password')}
              value={values.password}
            />
            <CustomInput
              placeholder="Full Name"
              onChangeText={handleChange('fullName')}
              value={values.fullName}
            />
            <CustomInput
              placeholder="Gender"
              onChangeText={handleChange('gender')}
              value={values.gender}
            />
            <CustomInput
              placeholder="Phone"
              onChangeText={handleChange('phone')}
              value={values.phone}
            />
            <CustomInput
              placeholder="Address"
              onChangeText={handleChange('address')}
              value={values.address}
            />
            <View style={{ padding: 10, marginBottom: 10, width: '100%' }}>
              <PrimaryButton label="Sign Up" onPress={handleSubmit} block />
            </View>
          </View>
        )}
      </Formik>
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.text}>Already have an account? Click here.</Text>
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

export default Register;
