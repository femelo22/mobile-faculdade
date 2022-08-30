import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import MyList from './src/components/MyList';

import mock from './src/mocks/plantas-mock';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyList {...mock} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});
