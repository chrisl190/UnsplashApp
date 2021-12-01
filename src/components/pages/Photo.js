import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image
} from 'react-native';
import Likes from "../atoms/Likes";
import Profile from "../atoms/Profile";

const Photo = ({route}) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.urls.regular }}/>

          <View style={styles.iconContainer}>
            <View style={styles.iconItemContainer}>
              <Likes likes={item?.likes ?? null}/>
            </View>
            <View style={styles.iconItemContainer}>
              <Profile name={item?.user?.name ?? null}/>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  imageContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
    width: '100%',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
  },
  iconItemContainer: {
    height: 100,
    marginRight: 15,
  },
});

export default Photo;