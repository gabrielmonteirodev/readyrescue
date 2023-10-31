import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginTela from './components/pages/telaLogin';
import MenuTela from './components/pages/telaMenu';
import AvcTela from './components/pages/avcTelaUnder18';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginTela} />
        <Stack.Screen name="Menu" component={MenuTela} />
        <Stack.Screen name="Avc" component={AvcTela} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

