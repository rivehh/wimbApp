import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';

export default function EsqueciSenha(){
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Recuperar senha </Text>
      <Text style={styles.subtitulo}> Digite o e-mail cadastrado 
        para redefinir a senha.</Text>

        <TextInput style={styles.campo}
        placeholder={isFocused ? '' : 'Email'}
        value={text}
        onChangeText={setText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}/>

        <TouchableOpacity style={styles.enviar}>
        <Text style={styles.textoenviar}> Enviar </Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#EBCB4A',
    padding: 15,
  },

  titulo: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    letterSpacing: 5,
  },

  subtitulo:{
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    letterSpacing: 2,
    marginBottom: 20
  },

  campo:{
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 15,
    color: 'black',
    margin: 20,
    padding: 8,
    width: '90%',
    alignSelf: 'center',
    elevation: 5
  },

  enviar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
  },

  textoenviar:{
    fontSize: 15,
    color: '#000000',
  },
   cadastrar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 3,
    padding: 12,
    borderWidth: 0,
    width: '90%',
    backgroundColor:'#545454',
    marginBottom: 40,
    elevation: 5
  },

  textocadastrar:{
    fontSize: 15,
    color: 'white',
  },
   textoinferior: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  campoTitulo:{
    marginRight: 10, // Espaçamento entre o texto e o TextInput
    textAlign: 'left'
  }
});
