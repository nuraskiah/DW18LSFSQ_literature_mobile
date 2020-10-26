import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Image, BottomSheet, ListItem } from 'react-native-elements';

import Header from '../components/CustomHeader';

const TextHeader = () => {
  return <Text>Search</Text>;
};

const Search = () => {
  const [isVisible, setIsVisible] = useState(false);

  const list = [
    { title: 'Add to My Collections' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: '#af2e1c' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header center={<TextHeader />} />

      <View style={styles.container}>
        <Text style={{ color: 'white', marginBottom: 25 }}>Profile</Text>
        <Button title="press" onPress={() => setIsVisible(true)} />
      </View>
      <BottomSheet isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
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

export default Search;
