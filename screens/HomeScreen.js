import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import RoundButton from '../Assets/Button';
import InfosScreen from '../screens/InfosScreen';
import { enableScreens } from 'react-native-screens';
import { Navigation } from 'react-native-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PresidentScreen from './PresidentScreen';
import ComiteScreen from './ComiteScreen';
import LiveScreen from './LiveScreen';
import SponsorsScreen from './SponsorsScreen';


enableScreens();


const Stack = createStackNavigator()



export default function HomeScreen() {

  return (
      <Stack.Navigator screenOptions={{ 
        headerTitleAlign: 'center',
        gestureEnabled: 'true'
       }}>
      <Stack.Screen  name='Home' component={RoundButton} />
      <Stack.Screen name='Mot du Président' component={PresidentScreen} />
      <Stack.Screen name="Comité de l'AMCAR" component={ComiteScreen} />
      <Stack.Screen name='Live' component={LiveScreen} />
      <Stack.Screen name='e-Stands' component={SponsorsScreen} />
    </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    header: {
      flex:1,
      marginTop: 150,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 270,
      height: 114,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
