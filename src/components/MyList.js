import { FlatList, StatusBar, StyleSheet } from "react-native";
import MyCard from "./MyCard";
import MyCardPlant from "./MyCardPlant";

export default function MyList({ lista }) {

  return <>
    <FlatList
      data={lista}
      renderItem={MyCardPlant}
      keyExtractor={lista => lista.id}
      ListHeaderComponent={() => {
        return <>
         <MyCardPlant {...lista}/>
        </>
      }}
    />
  </>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});