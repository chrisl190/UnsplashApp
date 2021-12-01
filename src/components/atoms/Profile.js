import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import IconProfile from "../../assets/svg/iconProfile.svg";

const Profile = ({ name }) => {
  return (
    <View style={styles.container}>
      <IconProfile style={styles.icon}/>
      <Text style={styles.description}>{name}</Text>
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

export default Profile;