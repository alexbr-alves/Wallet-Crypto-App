import React, { useCallback } from 'react';
import {useFonts} from 'expo-font';
import {SplashScreen} from 'expo-splash-screen'


<<<<<<< HEAD


import AppRotas from './src/rotas/appRotas';
import{ Montserrat_400Regular, Montserrat_500Medium, Montserrat_500Medium_Italic} from '@expo-google-fonts/montserrat'
import{ Epilogue_600SemiBold, Epilogue_500Medium} from '@expo-google-fonts/epilogue'

export default function App() {
  let [fontsLoaded, error] = useFonts({
   Montserrat_400Regular, 
   Epilogue_600SemiBold,
   Epilogue_500Medium,
   Montserrat_500Medium,
   Montserrat_500Medium_Italic
=======
import Intro from './src/telas/intro/index'
import Home from './src/telas/home';
import Login from './src/telas/login'

import AppRotas from './src/rotas/appRotas';
import{ SairaExtraCondensed_400Regular,
  SairaExtraCondensed_500Medium , SairaExtraCondensed_700Bold
} from '@expo-google-fonts/saira-extra-condensed'

export default function App() {
  let [fontsLoaded, error] = useFonts({
    SairaExtraCondensed_400Regular,
    SairaExtraCondensed_500Medium,
    SairaExtraCondensed_700Bold
>>>>>>> dc1398e9165fcbb60ef0ce39f15c1080bb0b7c68
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();}
  }, [fontsLoaded])

    if(!fontsLoaded){
      return null
    }
  return (
    <>
      <AppRotas/>
    </>
  );
}

