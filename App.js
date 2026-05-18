import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import SettingsScreen from './screens/SettingsScreen';
import MainNavigator from './navigation/MainNavigator';

export default function App() {
  return (
   
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>ELEVATE HORIZON CONNECT</Text>
        <MainNavigator />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
});
