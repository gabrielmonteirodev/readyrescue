import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './components/pages/LoginPage';
import MenuPage from './components/pages/MenuPage';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Menu" component={MenuPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

