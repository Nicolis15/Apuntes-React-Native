import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FeedbackForm from './components/FeedbackFrom';
import LittleLemonHeader from './components/LitlleLemonHeader';

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader/>
      <FeedbackForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
