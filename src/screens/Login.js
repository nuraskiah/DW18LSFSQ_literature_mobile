import React, { useState, useContext } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Formik } from 'formik';

import { Context } from '../context/Context';
import { API, setToken } from '../config/config.js';

import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';

const Login = (props) => {
  const [exist, setExist] = useState('');
  const [loading, setLoading] = useState(false);

  const [state, dispatch] = useContext(Context);

  const handleSubmit = async (values) => {
    setExist('');
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { email, password } = values;

    const body = JSON.stringify({ email, password });

    try {
      setLoading(true);
      const { data } = await API.post('/login', body, config);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: data.data,
      });

      setToken(data.data.token);
      setExist(true);

      try {
        const { data } = await API.get('/validate');

        await dispatch({
          type: 'GET_USER',
          payload: data.data,
        });
      } catch (error) {
        dispatch({
          type: 'AUTH_ERROR',
        });
      }
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILED',
      });
      setExist(false);
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView style={{ width: '100%', flex: 1, backgroundColor: 'salmon' }}> */}
      <Image
        source={require('../../assets/logo-full.png')}
        style={{ width: 300, resizeMode: 'contain', marginBottom: 50 }}
      />

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
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
            {exist === false && (
              <Text
                style={{
                  color: '#ad2b2b',
                  textAlign: 'center',
                  marginBottom: 10,
                }}
              >
                You have entered invalid email or password
              </Text>
            )}
            <View style={{ padding: 10, marginBottom: 10, width: '100%' }}>
              <PrimaryButton
                label="Sign In"
                block
                onPress={handleSubmit}
                loading={loading}
              />
            </View>
          </View>
        )}
      </Formik>
      <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
        <Text style={styles.text}>Don't have an account? Click here.</Text>
      </TouchableOpacity>
      {/* </ScrollView> */}
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

export default Login;
