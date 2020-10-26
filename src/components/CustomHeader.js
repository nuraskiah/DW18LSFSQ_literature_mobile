import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

const CustomHeader = (props) => {
  return (
    <Header
      placement={props.placement}
      centerComponent={props.center}
      containerStyle={styles.header}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#161616',
    borderBottomWidth: 0.5,
    borderBottomColor: '#454545',
  },
});

export default CustomHeader;
