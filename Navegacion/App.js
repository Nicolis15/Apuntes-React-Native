import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './componets/WelcomeScreen';
import Menu from './componets/Menu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name= 'Welcome' component={WelcomeScreen}/>
        <Stack.Screen name= 'Menu' component={Menu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

