import { StyleSheet, Text, TextInput, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function News() {
  return (
    <View style={styles.container}>

     <View style={styles.head}>
      <Text style={styles.titulo}> WIMB </Text>
         <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>
      </View>
      <Image
        source={require('../../assets/dutraObras.jpg')}
        style={styles.image}
      />
      
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
        style={styles.gradient}
      />

    <View style={styles.a}>
        <Text style={styles.tituloNoticia}> OBRAS NA DUTRA: </Text>
        <Text style={styles.subtituloNoticia}> OBRAS NA DUTRA: </Text>
    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  head: {
    marginTop: 0,
  },
  titulo: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 0,
    fontWeight: 'bold',
    letterSpacing: 5,
  },

  subtitulo:{
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
    letterSpacing: 8,
    marginBottom: 40
  },

  image: {
    marginTop: 150,
    width: '110%',
    height: '30%',
    position: 'absolute',
  },
  gradient: {
    marginTop: 150,
    position: 'absolute', 
    width: '110%',
    height: '30%',
  },
  a: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%', 
  }, 
  tituloNoticia: {
    color:'white',
    fontWeight: '500',
    fontSize: 25,
    marginTop: '45%',
  },
  subtituloNoticia:{
    color:'white',
    fontWeight: '300',
    fontSize: 20,
    marginTop: '50%',
 }
});