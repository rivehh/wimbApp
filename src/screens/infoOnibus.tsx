import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
    login: undefined;
    cadastro: undefined;
    home: undefined;
    senha: undefined;
    infoOnibus: undefined;
  };

  const Stack = createStackNavigator<RootStackParamList>();
  type Props = StackScreenProps<RootStackParamList, 'infoOnibus'>;


export default function infoOnibus({ navigation }:Props) {
  return (
    <View style={styles.container}>

     <View style={styles.head}>
      <Text style={styles.titulo}> WIMB </Text>
         <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>
      </View>

      <TouchableOpacity style={styles.onibus}>
          <Text style={styles.onibusTexto}>351 - Shopping Internacional</Text>
          <View style={styles.horario}>
            <Text style={styles.horarioTexto}>12 minutos</Text>
          </View>
      </TouchableOpacity>
      <View style={styles.conteudo}>
        <Text style={styles.tituloConteudo}>Próximos</Text>

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
    marginTop: 50,
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

 conteudo: {
  width: '90%',
  height: '55%',
  marginTop: 30,
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: 20
 },

 line: {
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  marginVertical: 17,
  marginBottom: 20
 },

 onibus:{
  width: '90%',
  backgroundColor: '#EBCB4A',
  height: 55,
  borderRadius: 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  marginBottom: 20,
  elevation: 5
 },

 onibusTexto: {
  fontWeight: '700',
  marginLeft: 7,
  flex: 1,
  fontSize: 12
 },
 horario:{
  backgroundColor: '#545454',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
  borderRadius: 20,
  width: '40%',
  marginRight: -25
 },
horarioTexto: {
  color: '#fff',
  fontWeight: '800',
  fontSize: 12
},
tituloConteudo: {
    fontSize: 35,
    textAlign: 'left',
    fontWeight: 'bold',
}
});