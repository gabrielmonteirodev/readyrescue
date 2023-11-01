import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import avcImage from "../../assets/avc-img.png";
import { LinearGradient } from "expo-linear-gradient";

export default function Menu() {
  const navigation = useNavigation();

  const navigationToAvc = () => {
    navigation.navigate("Avc");
  };

  return (
    <LinearGradient colors={["#FF0101", "transparent"]}
    locations={[0.002, 1]}
    style={styles.linear}>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput style={styles.input} placeholder="Pesquisar..." />
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={navigationToAvc}>
            <Image source={avcImage} style={styles.button} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    display:  "flex",
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 16,
  },
  linear:{
    flex: 1,
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    marginBottom: 16,
    backgroundColor:'#fff',
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
  },
});
