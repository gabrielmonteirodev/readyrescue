import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import imagemKit from "../../assets/iconsMenu/imagemKit.png"

export default function MenuPage({ isLoggedIn, setIsLoggedIn }) {
  const navigation = useNavigation();

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    navigation.navigate("LoginPage");
  };

  const handlePageClick = (pageName) => {
    navigation.navigate(pageName);
  };

  const buttonData = [
    {
      pageName: "AvcPage",
      title: "AVC",
      icon: require("../../assets/iconsMenu/iconeAVC.png"),
    },
    {
      pageName: "AfogamentoPage",
      title: "Afogamento",
      icon: require("../../assets/iconsMenu/iconeAfogamento.png"),
    },
    {
      pageName: "InfartoPage",
      title: "Infarto",
      icon: require("../../assets/iconsMenu/iconeInfarto.png"),
    },
    {
      pageName: "ConvulsaoPage",
      title: "Convulsão",
      icon: require("../../assets/iconsMenu/iconeConvulsao.png"),
    },
    {
      pageName: "TraumatismoPage",
      title: "Traumatismo",
      icon: require("../../assets/iconsMenu/iconeTraumatismo.png"),
    },
    {
      pageName: "QueimaduraPage",
      title: "Queimadura",
      icon: require("../../assets/iconsMenu/iconeQueimadura.png"),
    },
  ];

  const buttonsPerRow = 3;

  const rows = [];
  for (let i = 0; i < buttonData.length; i += buttonsPerRow) {
    const row = buttonData.slice(i, i + buttonsPerRow);
    rows.push(row);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <LinearGradient
          colors={[
            "rgba(255, 1.06, 1.06, 0.20)",
            "rgba(208.25, 132.76, 132.76, 0)",
          ]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.searchBar}>
            <TextInput style={styles.searchInput} placeholder="Pesquisar..." />
          </View>
          <View style={styles.buttonContainer}>
            {rows.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.buttonRow}>
                {row.map((button, buttonIndex) => (
                  <TouchableOpacity
                    key={buttonIndex}
                    style={styles.button}
                    onPress={() => handlePageClick(button.pageName)}
                  >
                    <Image source={button.icon} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>{button.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
          <View>
            <Image source = {imagemKit} style = {styles.kitImg} />
            <Text style = {styles.kitText}>Monte já o seu kit de primeiros socorros para deixar em sua casa!</Text>
          </View>
          <TouchableOpacity
            style={styles.shopButton}
            onPress={() => handlePageClick("LojaPage")}
          >
            <Text style={styles.shopButtonText}>Monte aqui o seu kit</Text>
          </TouchableOpacity>
          <View style={styles.logoutButton}>
            {renderButtonIcon("power-off", 24, handleLogoutClick)}
          </View>
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const renderButtonIcon = (iconName, size = 92, onPress = null) => {
  if (iconName === 'power-off') {
    return (
      <FontAwesome
        name={iconName}
        size={size}
        onPress={onPress}
      />
    );
  } else {
    return (
      <AntDesign
        name={iconName}
        size={size}
      />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
  },
  searchBar: {
    width: "100%",
    padding: 10,
    top: 50,
  },
  searchInput: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 40,
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
    gap: 40,
  },
  button: {
    alignItems: "center",
  },
  buttonIcon: {
    width: 92,
    height: 85,
  },
  buttonText: {
    fontSize: 16,
  },
  kitImg:{
    width: 380,
    height: 150,
    borderRadius:10,
    marginBottom: 10
  },
  kitText:{
    backgroundColor:"white"
  },
  shopButton: {
    display:"flex",
    alignItems:"center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    elevation: 5,
    height: 40,
    width: 380
  },
  shopButtonText: {
    display:"flex",
    alignItems:"center",
    color: "#FF0000",
    fontWeight: "bold",
  },
  shopButtonImage:{
    width: 100,
    height: 100,
  },
  logoutButton: {
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
  },
});
