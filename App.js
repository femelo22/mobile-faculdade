import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import MyCardPlant from './src/components/MyCardPlant';
import mock from './src/mocks/plantas-mock';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyCardPlant {...mock}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});
