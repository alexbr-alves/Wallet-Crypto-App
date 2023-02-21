import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";

import Body from "./components/body";
import Chart from "../../components/chart";
import Footer from "./components/footer";
import Header from "./components/header";
import SplashScreen from "../../components/lottieView/index.js";

import styles from "./styles";


export default function Coins(){
    const [data, setData] = useState([])
    const [time, setTime] = useState(false);
    const route = useRoute();

    useEffect(() => {
        setData(route.params.item)
        setTimeout(() =>{
            setTime(true);
        }, 3000)
    },[])

    return(
        <View style={styles.container}>
       
            {time? (
                <>
                    <Header data={data} styles={styles} />
                    
                    <Chart 
                    styles={styles} 
                    grid={true} 
                    tamanho={styles.chart} 
                    svg={{stroke:  data.price_change_percentage_24h < 0? 'red' : 'green'}} item={data}/>

                    <Body data={data} styles={styles}/>

                    
                    <Footer styles={styles}/>
                </>
            ) : (
        
                    <SplashScreen/>
        
            )}
       
        </View>
)};