import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function AvcTelaUnder18() {
  return (
    <LinearGradient colors={["#FF0101", "transparent"]}
    locations={[0.002, 1]}
    style={styles.linear}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>0-18 anos</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 16,
  },
  linear:{
    flex: 1,
  },
  button: {
    display: "flex",
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    marginLeft: 50,
  },
  text: {
    display: "flex",
    color: "#000000",
    fontSize: 16,
    marginLeft: 18,
    marginTop: 13,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AvcTelaUnder18;
