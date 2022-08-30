import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Card, Title, Paragraph } from 'react-native-paper';

export default function Contatos() {

  return <View>
    <Card style={styles.card}>
      <Card.Content>
        <Title>Contatos</Title>
        <Paragraph>Email: jardimonline@gmail.com.br</Paragraph>
        <Paragraph>Telefone: (32) 99995-6145</Paragraph>
        <Paragraph>Facebook: https://pt-br.facebook.com/JardimOnline/</Paragraph>
      </Card.Content>
    </Card>
    <View style={styles.separador}></View>
  </View>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 20
  },
  card: {
    marginBottom: 30
  },
  separador: {
    borderBottomWidth: 1,
    borderBottomColor: '#373737',
  },
  map: {
    width: 200,
    height: 200,
  },
});