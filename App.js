import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import MyCard from './src/components/MyCard';
import MyList from './src/components/MyList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});
