
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';
import CadastroSucesso from './components/Cadastro/CadastroSucesso';
import LogedNavigation from './components/LogedNavigation/LogedNavigation';
import NovoLivro from './components/LogedNavigation/components/Livro/components/NovoLivro';
import AdicionaAmigo from './components/LogedNavigation/components/Amigo/components/AdicionaAmigo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CadastroSucesso" component={CadastroSucesso} />
        <Stack.Screen name="LogedNavigation" component={LogedNavigation} />
        <Stack.Screen name="NovoLivro" component={NovoLivro} />
        <Stack.Screen name="AdicionaAmigo" component={AdicionaAmigo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
