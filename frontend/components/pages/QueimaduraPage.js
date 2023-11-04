import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';


export default function QueimaduraPage({ navigation }) {
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
          source={require('../../assets/iconsMenu/iconeQueimadura.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Queimadura</Text>
      </View>

      {/* Card com as informações */}
      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Resfriamento</Text>
        <Text style={styles.cardText}>
          <Text>Resfrie a área queimada com água fria corrente por pelo menos 10 minutos, ou até que a dor diminua. Evite o uso de gelo ou água muito fria.</Text>
        </Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Proteja a área queimada</Text>
        <Text style={styles.cardText}>
          <Text>Cubra a queimadura com um pano limpo e seco ou com um curativo estéril.</Text>
        </Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Não estoure bolhas</Text>
        <Text style={styles.cardText}>
          <Text>Não estoure bolhas que se formem na queimadura.</Text>
        </Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Evite aplicar produtos</Text>
        <Text style={styles.cardText}>
          <Text>Não aplique pomadas, cremes, manteiga ou produtos caseiros na queimadura.</Text>
        </Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Elevação</Text>
        <Text style={styles.cardText}>
          <Text>Se possível, eleve a área queimada acima do nível do coração para reduzir o inchaço.</Text>
        </Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardHeader}>Busque ajuda médica</Text>
        <Text style={styles.cardText}>
          <Text>Dependendo da gravidade da queimadura, procure atendimento médico imediato.</Text>
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