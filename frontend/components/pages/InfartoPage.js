import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import api from '../../services/notification.js'


export default function InfartoPage({ navigation }) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['rgba(255, 1.06, 1.06, 0.20)', 'rgba(208.25, 132.76, 132.76, 0)']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      {/* Botão de retorno no canto superior esquerdo */}
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <FontAwesome name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      {/* Imagem e título no topo do conteúdo */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/iconsMenu/iconeInfarto.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Infarto</Text>
      </View>

      {/* Card com as informações */}
      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Chamar Ajuda</Text>
        <Text style={styles.cardText}>
          <Text>Ligue imediatamente para o serviço de emergência (192 ou 193) ou peça a alguém próximo que o faça.</Text>
        </Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Administrar Aspirina</Text>
        <Text style={styles.cardText}>
          <Text>Se a vítima estiver consciente e não for alérgica à aspirina, pode mastigar ou engolir uma aspirina de baixa dose (desde que não haja contraindicações médicas).</Text>
        </Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Monitorar os sinais vitais</Text>
        <Text style={styles.cardText}>
          <Text>Fique atento à respiração e ao pulso da vítima e esteja preparado para iniciar a RCP (ressuscitação cardiopulmonar) se necessário.</Text>
        </Text>
      </Card>

      <View style={styles.emergencyButtonContainer}>
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={() => {
            Alert.alert('EMERGÊNCIA', 'LIGANDO');
          }}
        >
          <FontAwesome name="bell" size={24} color="red" />
          <Text style={styles.emergencyButtonText}>EMERGÊNCIA</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1, // Adicione um índice de pilha para garantir que o botão fique sobreposto ao conteúdo
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 150,
    height: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  card: {
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
  emergencyButtonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    marginTop: 20,
  },
  emergencyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 10, // Adicione esta linha para a sombra
  },
  emergencyButtonText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});