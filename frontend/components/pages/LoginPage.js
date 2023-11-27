import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo_ready_rescue.png';
import { LinearGradient } from 'expo-linear-gradient';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const navigation = useNavigation();

  const _signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { accessToken, idToken, user } = await GoogleSignin.signIn();
      setIsLoggedIn(true);
      setUserInfo(user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('Cancelado');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Login em andamento');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Google Play Services não está disponível');
      } else {
        alert(error.message);
      }
    }
  };

  const _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setIsLoggedIn(false);
      setUserInfo({});
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: '224957591212-r20dptrinmpcfigejajpv170snjnkiki.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

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
          <Button title="Sair" onPress={_signOut} />
        </View>
      ) : (
        <View>
          <Text>Faça login com sua conta do Google:</Text>
          <GoogleSigninButton style={styles.button} onPress={_signin} />
        </View>
      )}
    </LinearGradient>
  );
};

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
  button: {
    width: 192,
    height: 48,
  },
});

export default LoginPage;
