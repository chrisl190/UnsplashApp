import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

const Likes = ({ likes }) => {
  return (
    <View style={styles.container}>
      <Icon
        name="like1"
        size={20}
        style={styles.icon}
        />
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