import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import RegistrarScreen from './Screens/RegistrarScreen';
import StackScreen from './Screens/StackScreen';
import Perfil from './Screens/Perfil';
import VideosScreen from './Screens/VideosScreen';
import FotosScreen from './Screens/FotosScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Registro" 
          component={RegistrarScreen} 
          options={{
            headerTintColor: "white", 
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'black' },
          }} 
        />
        <Stack.Screen 
          name="Stack" 
          component={StackScreen} 
          options={{
            headerTintColor: "white", 
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'black' },
          }} 
        />
        <Stack.Screen 
          name="Mi Perfil" 
          component={Perfil}
          options={{
            headerTintColor: "white", 
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'black' },
          }} 
        />
        <Stack.Screen 
          name="Videos" 
          component={VideosScreen} 
          options={{
            headerTintColor: "white", 
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'black' },
          }} 
        />
        <Stack.Screen 
          name="Fotos" 
          component={FotosScreen} 
          options={{
            headerTintColor: "white", 
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'black' },
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
