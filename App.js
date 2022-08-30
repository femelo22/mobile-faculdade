import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import MyCard from './src/components/MyCard';
import MyPlantaCard from './src/components/MyCardPlant';
import MyList from './src/components/MyList';
import { MyModal } from './src/components/MyModal';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <MyList /> */}
      {/* <MyModal /> */}
      <MyPlantaCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});
