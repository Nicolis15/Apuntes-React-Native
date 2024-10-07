import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LitlleLemonHeader';
import { LoginScreen } from './components/LoginScreen';

export default function App() {
  return (
    <View >
      <LittleLemonHeader/>
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
