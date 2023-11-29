import React, { useState } from 'react';
import 'expo-dev-client'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './components/pages/LoginPage';
import MenuPage from './components/pages/MenuPage';
import AvcPage from './components/pages/AvcPage';
import AfogamentoPage from './components/pages/AfogamentoPage';
import InfartoPage from './components/pages/InfartoPage';
import ConvulsaoPage from './components/pages/ConvulsaoPage';
import TraumatismoPage from './components/pages/TraumatismoPage';
import QueimaduraPage from './components/pages/QueimaduraPage';
import LojaPage from './components/pages/LojaPage';
import CarrinhoPage from './components/pages/CarrinhoPage';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false, // Isso remove a barra de navegação
      }}>
        <Stack.Screen name="LoginPage">
          {props => <LoginPage {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>
        <Stack.Screen name="MenuPage">
          {props => <MenuPage {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>
        <Stack.Screen name="AvcPage" component={AvcPage} />
        <Stack.Screen name="AfogamentoPage" component={AfogamentoPage} />
        <Stack.Screen name="InfartoPage" component={InfartoPage} />
        <Stack.Screen name="ConvulsaoPage" component={ConvulsaoPage} />
        <Stack.Screen name="TraumatismoPage" component={TraumatismoPage} />
        <Stack.Screen name="QueimaduraPage" component={QueimaduraPage} />
        <Stack.Screen name="LojaPage" component={LojaPage} />
        <Stack.Screen name="CarrinhoPage" component={CarrinhoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
