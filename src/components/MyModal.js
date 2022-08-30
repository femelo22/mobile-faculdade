import React, { useRef } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import MyCard from './MyCard';
import MyList from './MyList';

export const MyModal = () => {
  const modalLerMais = useRef(null);
  const modalContatos = useRef(null);

  const onOpenLerMais = () => {
    modalLerMais.current?.open();
  };

  const onCloseLerMais = () => {
    modalLerMais.current?.close();
  }

   const onOpenContatos = () => {
    modalContatos.current?.open();
  };
  
  const onCloseContatos = () => {
    modalContatos.current?.close();
  }

  return (
    <>
      <TouchableOpacity onPress={onOpenLerMais} style={styles.botaoModalLerMais}>
        <Text>Ler mais!</Text>
      </TouchableOpacity>

      <Modalize ref={modalLerMais}>
        <TouchableOpacity onPress={onCloseLerMais} style={styles.botaoModalFechar}>
          <Text>X</Text>
        </TouchableOpacity>
        <MyList />
      </Modalize>
      
      <TouchableOpacity onPress={onOpenContatos} style={styles.botaoModalContatos}>
        <Text>Contatos</Text>
      </TouchableOpacity>

      <Modalize ref={modalContatos}>
        <TouchableOpacity onPress={onCloseContatos} style={styles.botaoModalFechar}>
          <Text>X</Text>
        </TouchableOpacity>
        <MyCard />
      </Modalize>
    </>
  );
};


const styles = StyleSheet.create({
  botaoModalLerMais: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#3CB371',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 140
  },
  botaoModalContatos: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#3CB371',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20
  },
  botaoModalFechar: {
    backgroundColor: '#B22222',
    width: 40,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewLerMais: {
  }
});