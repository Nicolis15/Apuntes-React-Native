import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import WelcomeScreen from './components/WelcomeScreen';
import Menu from './components/Menu';

const tab = createBottomTabNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            // Asigna un ícono según la ruta
            if (route.name === 'Welcome') {
              iconName = 'home';
            } else if (route.name === 'Menu') {
              iconName = 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato', // Color cuando está activo
          tabBarInactiveTintColor: 'gray', // Color cuando no está activo
        })}
      >
        <tab.Screen name= 'Welcome' component={WelcomeScreen} />
        <tab.Screen name = 'Menu' component={Menu}/>
      </tab.Navigator>
    </NavigationContainer>
  );
}

