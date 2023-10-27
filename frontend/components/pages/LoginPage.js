import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import logo from '../../assets/logo_ready_rescue.png';
import {LinearGradient} from 'expo-linear-gradient';

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigation();

  const handleGoogleLoginClick = () => {
    setIsLoggedIn(true);
  };

  return (
    <LinearGradient
      colors={['#FF0101', 'transparent']} // Defina as cores do degradê com códigos hexadecimais
      locations={[0.002, 1]} // Defina a posição do degradê (20% vermelho e 80% transparente)
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
          <Button title="Login com o Google" onPress={() => navigation.navigate('Menu')} />
          <Text>Faça login com sua conta do Google:</Text>
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
