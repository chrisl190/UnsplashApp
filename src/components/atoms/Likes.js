import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import IconLikes from "../../assets/svg/iconLikes.svg";

const Likes = ({ likes }) => {
  return (
    <View style={styles.container}>
      <IconLikes style={styles.icon}/>
      <Text style={styles.description}>{likes}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    marginRight: 10,
  },
  description: {
  },
});

export default Likes;