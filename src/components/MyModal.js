import React, { useRef } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
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
      <TouchableOpacity onPress={onOpenLerMais} style={styles.botaoModal}>
        <Text>Ler mais!</Text>
      </TouchableOpacity>

      <Modalize ref={modalLerMais}>
        <TouchableOpacity onPress={onCloseLerMais} style={styles.botaoModal}>
        <Text>FECHAR</Text>
      </TouchableOpacity>

        <MyList />
      </Modalize>

      <TouchableOpacity onPress={onOpenContatos} style={styles.botaoModal}>
        <Text>Contatos</Text>
      </TouchableOpacity>

       <Modalize ref={modalContatos}>
        <TouchableOpacity onPress={onCloseContatos} style={styles.botaoModal}>
        <Text>FECHAR</Text>
      </TouchableOpacity>
        <MyCard />
      </Modalize>
    </>
  );
};


const styles = StyleSheet.create({
  botaoModal: {
    border: 2,
    alignContent: 'center',
  }
});