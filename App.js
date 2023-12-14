import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {

  const [searchQuery, setSearchQuery] = useState('');


  const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Searchbar
           placeholder="Search"
           onChangeText={onChangeSearch}
           value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    marginTop: StatusBar.currentHeight,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  searchBar: {
    // flex: 0.05,
    backgroundColor: 'green',
    padding: 16,
    // justifyContent: 'center',
  },
  list: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  }
});
