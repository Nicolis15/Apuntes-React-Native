import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaSecciones from './components/ListaSecciones';
import LittleLemonHeader from './components/LitlleLemonHeader';

export default function App() {
  return (
    <View >
      <LittleLemonHeader/>
      <ListaSecciones/>
    </View>
  );
}

const styles = StyleSheet.create({
});
