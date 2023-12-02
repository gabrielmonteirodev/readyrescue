import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/logo_ready_rescue.png";
import { LinearGradient } from "expo-linear-gradient";
import { GoogleSigninButton, GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const LoginPage = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  GoogleSignin.configure({
    webClientId:
      "224957591212-6i9213qi53se11kvf7sld1lut0pvah2u.apps.googleusercontent.com",
    offlineAccess: true})

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  async function onGoogleButtonPress() {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.navigate("MenuPage");
    } catch (error) {
      console.error(error);
    }
  }

  async function onSignOutPress() {
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <LinearGradient
      colors={[
        "rgba(255, 1.06, 1.06, 0.20)",
        "rgba(208.25, 132.76, 132.76, 0)",
      ]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.pageContainer}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>Página de Login</Text>
      {user ? (
        <View>
          <Button title="Sair" onPress={onSignOutPress} />
        </View>
      ) : (
        <View>
          <Text>Faça login com sua conta do Google:</Text>
          <GoogleSigninButton
            style={styles.googleButton}
            onPress={onGoogleButtonPress}
          />
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  googleButton: {
    width: 192,
    height: 48,
    marginTop: 20,
  },
});

export default LoginPage;
