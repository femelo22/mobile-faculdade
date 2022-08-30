import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { MyModal } from './MyModal';

export default function MyPlantaCard () {
  return <>
   <Card>
    <Card.Content>
      <Title>Jardim Online</Title>
      <Paragraph>Compra e venda de plantas online de forma rápida, comprou, chegou, plantou!</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <MyModal />
    </Card.Actions>
  </Card>
  </>
}
