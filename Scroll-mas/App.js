import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LitlleLemonHeader';
import MenuItems from './components/MenuItems';
import LazyScroll from './components/LazyScroll';
import ListaSecciones from './components/ListaSecciones';

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader/>
      <ListaSecciones/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57'
  },
});
