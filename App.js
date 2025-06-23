import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/AppNavigator/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // <-- Asegúrate de tener esto

export default function App() {
  return (
    <SafeAreaProvider> {/* <-- Envuelve con SafeAreaProvider */}
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}