import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const PrimaryButton = ({ label, block, onPress, loading }) => {
  return (
    <Button
      buttonStyle={styles.button}
      onPress={onPress}
      title={label}
      containerStyle={block ? { width: '100%' } : {}}
      loading={loading}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#af2e1c',
    overflow: 'hidden',
  },
});

export default PrimaryButton;
