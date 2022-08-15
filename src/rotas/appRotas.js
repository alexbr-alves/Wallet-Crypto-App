import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Intro from '../telas/intro';
import Login from '../telas/login';
import Home from '../telas/home';
import Coins from '../telas/coins';


const Stack = createNativeStackNavigator();
export default function AppRotas(){

    return(
        <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen name="Intro" component={Intro} options={{
            title: '',
            headerShown: false
            }} />
       
          
            <Stack.Screen name="Login" component={Login} options={{
           title: '',
           headerShown: false
            }}/>

          <Stack.Screen name="Home" component={Home} options={{
           title: '',
           headerShown: false
            }}/>

          <Stack.Screen name="Coins" component={Coins} options={{
           title: '',
           headerTintColor: '#FFFFFF',
           headerBackVisible: true,
           headerStyle:{
            backgroundColor: '#000000',
           },

            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
          
}