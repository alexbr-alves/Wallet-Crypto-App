import React, { useCallback } from 'react';
import {useFonts} from 'expo-font';
import {SplashScreen} from 'expo-splash-screen'




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

