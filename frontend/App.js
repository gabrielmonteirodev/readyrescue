import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginTela from './components/telas/telaLogin';
import MenuTela from './components/telas/telaMenu';
import AvcTela from './components/telas/avcTelaUnder18';


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

