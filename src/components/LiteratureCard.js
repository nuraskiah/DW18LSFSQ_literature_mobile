import React from 'react';
import {
  TouchableHighlight,
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

// const dimensions = Dimensions.get('window');
// const imageWidth = dimensions.width;

const win = Dimensions.get('window');
const imageHeight = Math.round((win.width / 20) * 27);

const LiteratureCard = ({ id, title, author, year }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'http://192.168.44.81:5000/covers/cover.jpg' }}
        style={styles.cover}
        resizeMode="contain"
      />

      <Text style={styles.title}>{title}</Text>

      <View style={styles.idContainer}>
        <View style={{ flex: 2 }}>
          <Text style={styles.id}>{author}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.id}>{year}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {},
  cover: {
    marginBottom: 10,
    width: '100%',
    height: 230,
    borderRadius: 10,
  },
  title: {
    // fontFamily: "'Times New Roman', Times, serif",
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23,
  },
  idContainer: {
    justifyContent: 'space-between',
  },
  id: {
    color: 'grey',
  },
});

export default LiteratureCard;
