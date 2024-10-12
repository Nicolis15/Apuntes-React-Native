import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WelcomeScreen from './components/WelcomeScreen'
import Menu from './components/Menu'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome">
        <Drawer.Screen name= 'Welcome' component={WelcomeScreen}/>
        <Drawer.Screen name= 'Menu' component={Menu}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


