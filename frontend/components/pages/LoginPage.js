import React, { useEffect, useState } from "react";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { Text, Button, Image, View, StyleSheet } from "react-native";
import logo from "../../assets/logo_ready_rescue.png";
import { LinearGradient } from "expo-linear-gradient"; // Importe o LinearGradient

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
}

const handleGoogleLoginClick = () => {
  setIsLoggedIn(true);
};

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const { accesToken, idToken } = await GoogleSignin.signIn();
    setloggedIn(true);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // usuário cancelou o fluxo de login
      alert("Cancel");
    } else if (error.code === statusCodes.IN_PROGRESS) {
      alert("Signin in progress");
      // operação (por exemplo, o login) já está em andamento
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      alert("PLAY_SERVICES_NOT_AVAILABLE");
      // serviços de execução não disponível ou desatualizado
    } else {
      alert("Sign in failed");

    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ["email"], // qual API você quer acessar em nome do usuário; o padrão é o email e o perfil
      webClientId:
        "418977770929-g9ou7r9eva1u78a3anassxxxxxxx.apps.googleusercontent.com", // o ID do client do tipo WEB para seu servidor (necessário para verificar o ID do usuário e o acesso off-line)
      offlineAccess: true, // se você deseja acessar a API do Google API em nome do usuário DE SEU SERVIDOR
    });
  }, []);

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Header />

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
              />
            </View>
            {/* <View style={styles.buttonContainer}>
              {!loggedIn && <Text>You are currently logged out</Text>}
              {loggedIn && (
                <Button
                  onPress={this.signOut}
                  title="LogOut"
                  color="red"
                ></Button>
              )}
            </View> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
});

export default LoginPage;
