import React from 'react';
import { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import moment from "moment";
import { API_ENDPOINT_GET_LATEST_PHOTOS } from "../../config/unsplash";
import LatestPhoto from "../atoms/LatestPhoto";

const Homepage = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get(API_ENDPOINT_GET_LATEST_PHOTOS);
    setData(response.data.reverse());
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  const onPress = (item) => {
    navigation.navigate('Photo', { item: item });
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.rowContainer}>
        <LatestPhoto item={item} onPress={onPress}/>
      </View>
    )
  }

  const renderFlatListHeader = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>Newest photos</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.pageContainer}>
      <FlatList
        ListHeaderComponent={renderFlatListHeader}
        nestedScrollEnabled={true}
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  titleContainer: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 15,
  },
  rowContainer: {
    marginBottom: 40,
    paddingHorizontal: 24,
  },
});

export default Homepage;