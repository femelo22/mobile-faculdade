import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { MyModal } from './MyModal';

import { StyleSheet, View } from 'react-native';

import imgSuculenta from '../../assets/suculentas.jpg';


export default function MyPlantaCard ({ topo, lista }) {

  return <>
   <Card style={styles.cardSuculenta}>
    <Card.Content>
      <Title>{ topo.titulo }</Title>
      <Paragraph>{ topo.subtitulo }</Paragraph>
    </Card.Content>
    <Card.Cover source={imgSuculenta} />
    <Card.Actions>
      <MyModal />
    </Card.Actions>
  </Card>
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