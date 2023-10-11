import React, { useState } from 'react';
import {GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin'
import { Text, Button, Image, View, StyleSheet } from 'react-native';
import logo from '../../assets/logo_ready_rescue.png';
import {LinearGradient} from 'expo-linear-gradient'; // Importe o LinearGradient

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo , setUserInfo] = useState([]);
}


  const handleGoogleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const signIn = async()=>{
    try{
      await GoogleSignin.hasPlayServices();
      const {accesToken, idToken} = await GoogleSignin.signIn();
      setloggedIn(true);
    } catch (error){
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // usuário cancelou o fluxo de login
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operação (por exemplo, o login) já está em andamento
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // serviços de execução não disponível ou desatualizado
      } else {
        alert('Sign in failed');
    }
  }


  return (
    <LinearGradient
      colors={['#FF0101', 'transparent']} 
      locations={[0.2, 1]} 
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
