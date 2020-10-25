import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const SecondaryButton = ({ label, block, onPress }) => {
  return (
    <Button
      buttonStyle={styles.button}
      onPress={onPress}
      title={label}
      titleStyle={styles.title}
      type="clear"
      containerStyle={block ? { width: '100%' } : {}}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    // backgroundColor: 'white',
  },
  title: {
    color: '#af2e1c',
  },
});

export default SecondaryButton;
