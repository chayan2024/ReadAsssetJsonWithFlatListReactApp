import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const SampleFlatList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = require('./assets/data.json');
        setData(response.items);
      } catch (error) {
        console.error('Error reading JSON file:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SampleFlatList;
