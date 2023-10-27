import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import avcImage from '../../assets/avc-img.png';

export default function App() {
  const [onPress, setOnPress] = useState(false);0

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar..."/>
      </View>
      <View style={styles.button}>
        <Image source = {avcImage} style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 16,
  },
  button: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
});