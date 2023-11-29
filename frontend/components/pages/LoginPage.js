import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo_ready_rescue.png';
import { LinearGradient } from 'expo-linear-gradient';
import { GoogleSignIn} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'

const LoginPage = () => {
  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState();
  const navigation = useNavigation();

  GoogleSignIn.configure({
    webClientId: '224957591212-r20dptrinmpcfigejajpv170snjnkiki.apps.googleusercontent.com'
  });

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(true);
    }
  }

  useEffect(()=>{
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  })
  if (initializing) return null;

  async function onGoogleButtonPress(){
    const {idToken} = await GoogleSignIn.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user_sign_in = auth.signInWithCredential(googleCredential);
    user_sign_in.signIn.then((user)=>{
      navigation.navigate('Home')
    })
  }

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
          <Button title="Sair" onPress={handleNavigation} />
        </View>
      ) : (
        <View>
          <Text>Faça login com sua conta do Google:</Text>
          <Button title="Login com o Google" />
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
