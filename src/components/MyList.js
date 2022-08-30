import { FlatList, StatusBar, StyleSheet } from "react-native";
import MyCard from "./MyCard";
import MyCardPlant from "./MyCardPlant";

import colarCoracoes from '../../assets/colar_de_coracoes.jpg';
import lagrimasBebe from '../../assets/lagrimas_de_bebe.jpg';
import LerMaisList from "./lermais/LerMaisList";

export default function MyList() {

  const DATA = [
    {
        id: 'bfb25ac6-fc9c-4c9e-ae3e-7ef140261e3f',
        nome: "Lágrimas de bebe",
        imagem: lagrimasBebe,
      },
      {
        id: '25fb92d5-3814-4f1e-8117-d5486d5fb1e8',
        nome: "Colar de corações",
        imagem: colarCoracoes,
      }
  ]

  return <>
    <FlatList
      data={DATA}
      renderItem={LerMaisList}
      keyExtractor={DATA => DATA.id}
      ListHeaderComponent={() => {
        return <>
         <MyCard />
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