import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MenuPage({ isLoggedIn, setIsLoggedIn }) {
    const navigation = useNavigation();
  
    const handleLogoutClick = () => {
      setIsLoggedIn(false);
      navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Página do Menu</Text>
      <Button title="Logout" onPress={handleLogoutClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
