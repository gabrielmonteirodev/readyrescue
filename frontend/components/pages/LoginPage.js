import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook de navegação
import logo from '../../assets/logo_ready_rescue.png';
import { LinearGradient } from 'expo-linear-gradient';

function LoginPage({ isLoggedIn, setIsLoggedIn }) {
  const navigation = useNavigation();

  const handleGoogleLoginClick = () => {
    setIsLoggedIn(true);

    // Agora, redirecione para a página MenuPage
    navigation.navigate('MenuPage');
  };

  return (
    <LinearGradient
      colors={['rgba(255, 1.06, 1.06, 0.20)', 'rgba(208.25, 132.76, 132.76, 0)']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.pageContainer}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>Página de Login</Text>
      {isLoggedIn ? (
        <View>
          <Text>Você está logado com sucesso!</Text>
        </View>
      ) : (
        <View>
          <Text>Faça login com sua conta do Google:</Text>
          <Button title="Login com o Google" onPress={handleGoogleLoginClick} />
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LoginPage;
