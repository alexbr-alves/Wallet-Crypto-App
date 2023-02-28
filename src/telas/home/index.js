import React, { useEffect, useState } from "react";
import { View} from "react-native";

import styles from './styles';
import Api from '../../servicos/apiTotal';

import Body_balance from "./componentes/body_balance";
import Header from "./componentes/header";
import Body_horizontal from "./componentes/body_horizontal";
import Body_vertical from "./componentes/body_vertical";
import SplashScreen from "../../components/lottieView";


export default function Home() {
    const [data, setData] = useState([]);
    const [dataHorizontal, setDataHorizontal] = useState([]);
    const [time, setTime] = useState(false);

    useEffect(() => {
        Api.get().then((response) => {
          if (response?.data) { 
            setData(response.data.slice(0, 6));
            setDataHorizontal(response.data.slice(0, 4));
          }
        }).catch(error => console.log(error))
        setTimeout(() => {
          setTime(true)
        },4000)
      }, []);
    
     
    return( 
        <View style={styles.container}>

          { time?(
            <>
              <Header styles={styles}/>

              <Body_balance styles={styles}/>   

              <Body_horizontal styles={styles} dataHorizontal={dataHorizontal} />

              <Body_vertical styles={styles} data={data} />

            </>
            ): (
       
            <SplashScreen/>
        
          )}
      </View>
)};
