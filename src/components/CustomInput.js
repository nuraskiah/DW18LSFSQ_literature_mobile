import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const CustomInput = ({ placeholder, value, onChangeText }) => {
  return (
    <Input
      inputStyle={styles.input}
      inputContainerStyle={styles.container}
      containerStyle={{ width: '100%' }}
      placeholder={placeholder}
      placeholderTextColor="grey"
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#727272',
    borderRadius: 5,
    backgroundColor: '#454545',
    paddingHorizontal: 10,
  },
  input: {
    color: 'white',
  },
});

export default CustomInput;
