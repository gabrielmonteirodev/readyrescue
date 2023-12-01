import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Card } from 'react-native-elements';

const LojaPage = ({ navigation }) => {
  const [cartCounts, setCartCounts] = useState({
    Luva: 0,
    Curativo: 0,
    Atadura: 0,
    Gaze: 0,
    SoroFisiologico: 0,
    Esparadrapo: 0,
    LencoUmedecido: 0,
    MascaraRessuscitadora: 0,
    Tesoura: 0,
    pinca: 0,
    Torniquete: 0,
    Termometro: 0,
  });

  const productNamesMap = {
    Luva: 'Luva',
    Curativo: 'Curativo',
    Atadura: 'Atadura',
    Gaze: 'Gaze',
    SoroFisiologico: 'Soro Fisiológico',
    Esparadrapo: 'Esparadrapo',
    LencoUmedecido: 'Lenço Umedecido',
    MascaraRessuscitadora: 'Máscara Ressuscitadora',
    Tesoura: 'Tesoura',
    pinca: 'Pinça',
    Torniquete: 'Torniquete',
    Termometro: 'Termômetro',
  };


  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddToCart = (productName) => {
    setCartCounts((prevCounts) => ({
      ...prevCounts,
      [productName]: prevCounts[productName] + 1,
    }));
  };

  const handleRemoveFromCart = (productName) => {
    setCartCounts((prevCounts) => ({
      ...prevCounts,
      [productName]: prevCounts[productName] > 0 ? prevCounts[productName] - 1 : 0,
    }));
  };

  const handleGoToCart = () => {
    navigation.navigate('CarrinhoPage', { cartCounts });
  };

  const renderProduct = (productName, imageSource) => (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{productNamesMap[productName]}</Text>
      <Image source={imageSource} style={styles.productImage} />
      <Card containerStyle={styles.selectorContainer}>
        <View style={styles.selectorButtons}>
          <TouchableOpacity style={styles.circleButton} onPress={() => handleRemoveFromCart(productName)}>
            <FontAwesome name="minus" size={14} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{cartCounts[productName]}</Text>
          <TouchableOpacity style={styles.circleButton} onPress={() => handleAddToCart(productName)}>
            <FontAwesome name="plus" size={14} color="black" />
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );


  return (
    <LinearGradient
      colors={['rgba(255, 1.06, 1.06, 0.20)', 'rgba(208.25, 132.76, 132.76, 0)']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <View style={styles.container}>
        {/* Botão de retorno */}
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <FontAwesome name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>

        {/* Título e imagem */}
        <View style={styles.header}>
          <Image source={require('../../assets/iconsLoja/maleta.png')} style={styles.headerImage} />
          <Text style={styles.title}>Monte seu kit{'\n'}Ready Rescue</Text>
        </View>

        {/* Itens à venda */}
        <View style={styles.productGrid}>
          {renderProduct('Luva', require('../../assets/iconsLoja/luva.png'))}
          {renderProduct('Curativo', require('../../assets/iconsLoja/curativo.png'))}
          {renderProduct('Atadura', require('../../assets/iconsLoja/atadura.png'))}
          {renderProduct('Gaze', require('../../assets/iconsLoja/gaze.png'))}
          {renderProduct('SoroFisiologico', require('../../assets/iconsLoja/soroFisio.png'))}
          {renderProduct('Esparadrapo', require('../../assets/iconsLoja/esparadrapo.png'))}
          {renderProduct('LencoUmedecido', require('../../assets/iconsLoja/lencoUme.png'))}
          {renderProduct('MascaraRessuscitadora', require('../../assets/iconsLoja/mascaraRes.png'))}
          {renderProduct('Tesoura', require('../../assets/iconsLoja/tesoura.png'))}
          {renderProduct('pinca', require('../../assets/iconsLoja/pinca.png'))}
          {renderProduct('Torniquete', require('../../assets/iconsLoja/torniquete.png'))}
          {renderProduct('Termometro', require('../../assets/iconsLoja/termometro.png'))}
        </View>

        {/* Botão de compra e carrinho */}
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.buyButton} onPress={handleGoToCart}>
            <Text style={styles.buyButtonText}>Comprar</Text>
          </TouchableOpacity>
          <View style={styles.cartContainer}>
            <FontAwesome name="shopping-cart" size={40} color="#000" />
            <Text style={styles.cartCount}>{Object.values(cartCounts).reduce((a, b) => a + b, 0)}</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
    
  },
  headerImage: {
    width: 150,
    height: 120,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    color: '#000',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 20,
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 10,
  },
  productContainer: {
    width: '25%',
    marginBottom: 15,
    marginTop: 15,

  },
  productImage: {
    width: 70,
    height: 90,
    // marginVertical: 15,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,

  },
  productName: {
    fontSize: 12,
    textAlign: 'center',
    color: '#000',
    marginBottom: 5,

  },
  selectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  circleButton: {
    marginLeft: 3,
    marginRight: 3,
    width: 20,
    height: 20,
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectorButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 20,

  },
  buyButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    elevation: 5,
  },
  buyButtonText: {
    color: '#FF0000',
    fontWeight: 'bold',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartCount: {
    marginLeft: 5,
    bottom: 15,
    color: '#FF0000',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default LojaPage;
