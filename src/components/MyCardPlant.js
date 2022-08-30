import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { MyModal } from './MyModal';

import { StyleSheet, View } from 'react-native';


export default function MyPlantaCard ({ id, nome, imagem }) {
  console.log(id)
  console.log(nome)
  console.log(imagem)

  return <>
   <Card style={styles.cardSuculenta}>
    <Card.Content>
      <Title>{ item.nome }</Title>
      <Paragraph>Compra e venda de plantas online de forma rápida, comprou, chegou, plantou!</Paragraph>
    </Card.Content>
    <Card.Cover source={item.imagem} />
    <Card.Actions>
      <MyModal />
    </Card.Actions>
  </Card>
  <View style={styles.separador}></View>
  </>
}

const styles = StyleSheet.create({
  cardSuculenta: {
    paddingHorizontal: 30,
    paddingBottom: 20
  },
  separador: {
    borderBottomWidth: 1,
    borderBottomColor: '#373737',
  }
});