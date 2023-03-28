import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Tabs from './navigation/Tabs';

export default function App() {
  return (
        <NavigationContainer style={{position:'relative'}}>
            <Tabs style={{zIndex:2}} />
        </NavigationContainer>
  );
}