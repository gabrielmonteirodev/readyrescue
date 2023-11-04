import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';


export default function AvcPage({ navigation }) {
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
        <FontAwesome name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Imagem e título no topo do conteúdo */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/iconsMenu/iconeAVC.png')}
          style={styles.image}
        />
        <Text style={styles.title}>AVC</Text>
      </View>

      {/* Card com as informações */}
      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Evite Alimentar a Pessoa</Text>
        <Text style={styles.cardText}>
          <Text style={styles.boldText}>Não dê comida, água ou medicamentos à pessoa:</Text> Evite dar qualquer coisa para a pessoa comer ou beber, pois isso pode aumentar o risco de aspiração se a deglutição estiver comprometida.
        </Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Mantenha a Criança Calma</Text>
        <Text style={styles.cardText}>
          <Text>Ajude a criança a deitar-se de lado (posição de recuperação) com a cabeça apoiada, a menos que haja dificuldade em respirar ou engolir. Mantenha-a aquecida, se necessário.</Text>
        </Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Evite Movimentar a Criança</Text>
        <Text style={styles.cardText}>
          <Text style={styles.boldText}>Evite mover a criança:</Text> a menos que seja absolutamente necessário para garantir sua segurança. Se for necessário movê-la, faça-o com muito cuidado para não piorar a situação.
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
