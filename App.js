import React, { useCallback } from 'react';
import {useFonts} from 'expo-font';
import {SplashScreen} from 'expo-splash-screen'


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

