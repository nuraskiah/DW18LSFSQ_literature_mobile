import React, { useEffect, useState, useContext } from 'react';
import {
  TouchableHighlight,
  View,
  // Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Image, BottomSheet, ListItem } from 'react-native-elements';
import { useMutation, useQuery } from 'react-query';

import { Context } from '../context/Context';
import { API } from '../config/config';

// const dimensions = Dimensions.get('window');
// const imageWidth = dimensions.width;

const win = Dimensions.get('window');
const imageHeight = Math.round((win.width / 20) * 27);

const LiteratureCard = ({ id, title, author, year, bookmarks }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [state, dispatch] = useContext(Context);
  const userId = state.user.id;

  useEffect(() => {
    if (bookmarks.some((bookmark) => bookmark.userId === userId)) {
      setBookmarked(true);
    }
  }, []);

  const [bookmark] = useMutation((id) => API.post(`/bookmark/${id}`));

  const [unbookmark] = useMutation((id) => API.delete(`/unbookmark/${id}`));

  const addBookmark = () => {
    bookmark(id);
    setBookmarked(true);
  };

  const removeBookmark = () => {
    unbookmark(id);
    setBookmarked(false);
  };

  let list;

  if (!bookmarked)
    list = [
      {
        title: 'Add to My Collections',
        containerStyle: { backgroundColor: '#161616' },
        titleStyle: { color: 'white' },
        onPress: () => {
          addBookmark();
          setIsVisible(false);
        },
      },
      {
        title: 'Cancel',
        containerStyle: { backgroundColor: '#af2e1c' },
        titleStyle: { color: 'white' },
        onPress: () => setIsVisible(false),
      },
    ];
  else
    list = [
      {
        title: 'Remove from My Collections',
        containerStyle: { backgroundColor: '#161616' },
        titleStyle: { color: 'white' },
        onPress: () => {
          removeBookmark();
          setIsVisible(false);
        },
      },
      {
        title: 'Cancel',
        containerStyle: { backgroundColor: '#af2e1c' },
        titleStyle: { color: 'white' },
        onPress: () => setIsVisible(false),
      },
    ];

  return (
    <View>
      <View style={styles.card}>
        <Image
          source={{ uri: 'http://192.168.44.81:5000/covers/cover.jpg' }}
          style={styles.cover}
          resizeMode="contain"
          onLongPress={() => {
            setIsVisible(true);
          }}
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
  card: {},
  cover: {
    marginBottom: 10,
    width: '100%',
    height: 220,
    borderRadius: 10,
  },
  title: {
    // fontFamily: "'Times New Roman', Times, serif",
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    // lineHeight: 23,
    marginBottom: 5,
  },
  idContainer: {
    justifyContent: 'space-between',
  },
  id: {
    color: 'grey',
  },
});

export default LiteratureCard;
