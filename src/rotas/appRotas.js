import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Intro from '../telas/intro';
import Login from '../telas/login';
import Home from '../telas/home';
<<<<<<< HEAD
import Explorer from '../telas/explorer/index';
import Coins from '../telas/Coins';
import SplashScreen from '../components/lottieView';
=======
import Coins from '../telas/coins';
>>>>>>> dc1398e9165fcbb60ef0ce39f15c1080bb0b7c68


const Stack = createNativeStackNavigator();
export default function AppRotas(){

    return(
        <NavigationContainer >
        <Stack.Navigator >
<<<<<<< HEAD
        <Stack.Screen name="Intro" component={Intro} options={{
            title: '',
            headerShown: false
            }} />
        <Stack.Screen name="Home" component={Home} options={{
           title: '',
           headerShown: false
            }}/>
           
           <Stack.Screen name="Explorer" component={Explorer} options={{
=======
          <Stack.Screen name="Intro" component={Intro} options={{
            title: '',
            headerShown: false
            }} />
       
          
            <Stack.Screen name="Login" component={Login} options={{
           title: '',
           headerShown: false
            }}/>

          <Stack.Screen name="Home" component={Home} options={{
>>>>>>> dc1398e9165fcbb60ef0ce39f15c1080bb0b7c68
           title: '',
           headerShown: false
            }}/>

          <Stack.Screen name="Coins" component={Coins} options={{
           title: '',
<<<<<<< HEAD
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

=======
           headerTintColor: '#FFFFFF',
           headerBackVisible: true,
           headerStyle:{
            backgroundColor: '#000000',
           },

            }}/>
>>>>>>> dc1398e9165fcbb60ef0ce39f15c1080bb0b7c68
        </Stack.Navigator>
      </NavigationContainer>
    )
          
}