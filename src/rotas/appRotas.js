import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Intro from '../telas/intro';
import Login from '../telas/login';
import Home from '../telas/home';
import Explorer from '../telas/explorer/index';
import Coins from '../telas/Coins';
import SplashScreen from '../components/lottieView';


const Stack = createNativeStackNavigator();
export default function AppRotas(){

    return(
        <NavigationContainer >
        <Stack.Navigator >
        <Stack.Screen name="Intro" component={Intro} options={{
            title: '',
            headerShown: false
            }} />
        <Stack.Screen name="Home" component={Home} options={{
           title: '',
           headerShown: false
            }}/>
           
           <Stack.Screen name="Explorer" component={Explorer} options={{
           title: '',
           headerShown: false
            }}/>

          <Stack.Screen name="Coins" component={Coins} options={{
           title: '',
           headerShown: false
            }}/>
             <Stack.Screen name="Splash" component={SplashScreen} options={{
           title: '',
           headerShown: false
            }}/>

        
         
            <Stack.Screen name="Login" component={Login} options={{
           title: '',
           headerShown: false
            }}/>

        </Stack.Navigator>
      </NavigationContainer>
    )
          
}