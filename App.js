import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './src/components/pages/Homepage';
import Photo from './src/components/pages/Photo';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} options={{ title: '', headerShown: false }} />
        <Stack.Screen name="Photo" component={Photo} options={{ title: 'Photo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;