import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Literature = ({ id, title, author, year }) => {
  const history = useHistory();
  return (
    <View
      className="literature-card"
      onClick={() => history.push(`/detail/${id}`)}
    >
      <img
        src={'http://localhost:5000/covers/cover.jpg'}
        alt={title}
        className="mb-3"
        style={{
          width: 200,
          height: 270,
          objectFit: 'cover',
          borderRadius: 10,
        }}
      />

      <Text
        className="title tnr mb-2"
        style={{
          fontWeight: '700',
          fontSize: 20,
          lineHeight: '23px',
        }}
      >
        {title}
      </Text>
      <View className="author grey">
        <Text>{author}</Text>
        <Text>{year}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({});

export default Literature;
