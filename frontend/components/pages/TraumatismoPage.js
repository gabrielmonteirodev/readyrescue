import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';


export default function TraumatismoPage({ navigation }) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
    <LinearGradient
      colors={['rgba(255, 1.06, 1.06, 0.20)', 'rgba(208.25, 132.76, 132.76, 0)']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradient}
    >
      {/* Botão de retorno no canto superior esquerdo */}
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <FontAwesome name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Imagem e título no topo do conteúdo */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/iconsMenu/iconeTraumatismo.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Traumatismo</Text>
      </View>

      {/* Card com as informações */}
      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Chamar ajuda</Text>
        <Text style={styles.cardText}>
          <Text>Ligue imediatamente para o serviço de emergência (192 ou 193) ou peça a alguém próximo que o faça.</Text>
        </Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Manter a vítima quieta</Text>
        <Text style={styles.cardText}>
          <Text>Evite movimentar a pessoa, especialmente a cabeça e o pescoço, para prevenir danos adicionais à coluna vertebral.</Text>
        </Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Controle o sangramento</Text>
        <Text style={styles.cardText}>
          <Text>Se houver ferimentos na cabeça, aplique pressão suave com um pano limpo para controlar o sangramento.</Text>
        </Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Monitore os sinais vitais</Text>
        <Text style={styles.cardText}>
          <Text>Fique atento à respiração, ao pulso e à consciência da vítima enquanto aguarda a ajuda médica.</Text>
        </Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Mantenha a vitima aquecida</Text>
        <Text style={styles.cardText}>
          <Text>Se estiver frio, cubra a pessoa com um cobertor para evitar a hipotermia.</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradient: {
    flex: 1,
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