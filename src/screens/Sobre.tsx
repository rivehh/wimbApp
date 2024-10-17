import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Fundo com efeito neon */}
      <LinearGradient colors={['#000', '#141414', '#282828']} style={styles.background}>
        <View style={styles.content}>
          
          {/* Cabeçalho com botão de voltar */}
          <View style={styles.header}>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={28} color="#FFD700" />
            </TouchableOpacity>
            <Text style={styles.title}>Sobre o App</Text>
          </View>

          {/* Elementos futuristas */}
          <View style={styles.neonCircleLarge} />
          <View style={styles.neonCircleSmall} />

          {/* Seção da logo minimalista */}
         

          {/* Descrição animada */}
          <Text style={styles.sectionTitle}>O que é o WIMB?</Text>
          <Text style={styles.text}>
            O <Text style={styles.highlight}>WIMB</Text> é o seu parceiro digital que revoluciona a mobilidade urbana. Com tecnologia de ponta, o app oferece informações em tempo real sobre ônibus, rotas e horários!
          </Text>

          {/* Seções interativas com ícones neon */}
          <Text style={styles.sectionTitle}>Nossa Missão</Text>
          <View style={styles.row}>
            <Feather name="target" size={28} color="#FFD700" />
            <Text style={styles.text}>Revolucionar o transporte público com soluções inteligentes e acessíveis.</Text>
          </View>

          <Text style={styles.sectionTitle}>Nossos Valores</Text>
          <View style={styles.row}>
            <Ionicons name="speedometer" size={28} color="#FFD700" />
            <Text style={styles.text}>Eficiência e velocidade.</Text>
          </View>
          <View style={styles.row}>
            
            <Text style={styles.text}>Segurança em primeiro lugar.</Text>
          </View>
          <View style={styles.row}>
            <Feather name="users" size={28} color="#FFD700" />
            <Text style={styles.text}>Foco total no usuário.</Text>
          </View>

          {/* Botão de contato interativo */}
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Entre em contato</Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>

          {/* Rodapé */}
          <Text style={styles.footer}>© 2024 WIMB. Todos os direitos reservados.</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#FFD700',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  neonCircleLarge: {
    position: 'absolute',
    top: -200,
    left: -200,
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: 'rgba(255, 215, 0, 0.15)',
    zIndex: -1,
  },
  neonCircleSmall: {
    position: 'absolute',
    bottom: -150,
    right: -150,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(255, 215, 0, 0.3)',
    zIndex: -1,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#FFD700',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#e0e0e0',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 20,
    flex: 1,
  },
  highlight: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 30,
    elevation: 10,
  },
  contactButtonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 10,
  },
  footer: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 40,
  },
});
