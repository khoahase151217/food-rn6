const MOCK_IMAGES = [
    'https://th.bing.com/th/id/OIP.kxAq1RsiRZ1JT9VAPEOCzwHaE8?w=278&h=186&c=7&r=0&o=5&pid=1.7',
    'https://th.bing.com/th/id/OIP.V-eD-QgfsNRqNeXfNEpNywHaDx?w=342&h=178&c=7&r=0&o=5&pid=1.7',
    'https://th.bing.com/th/id/OIP.Vvdu8BZSxiO-2WeAMXeXeAHaDv?w=291&h=176&c=7&r=0&o=5&pid=1.7'
]
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
 
const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;
 
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
 
  if (!result) {
    return null;
  }
 
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={MOCK_IMAGES}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
 
export default ResultsShowScreen;