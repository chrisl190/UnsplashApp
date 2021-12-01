import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import moment from "moment";

const LatestPhoto = ({ item, onPress }) => {
  const createdAt = new Date(item.created_at);
  const relativeTime = moment(createdAt).fromNow();

  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <Image style={styles.image} source={{ uri: item.urls.regular }}></Image>
      { item.description ? <Text style={styles.description}>{item.description}</Text> : null }
      <Text style={styles.submitted}>Submitted by {item.user.name} {relativeTime}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  description: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  submitted: {
    marginTop: 10,
  },
});

export default LatestPhoto;