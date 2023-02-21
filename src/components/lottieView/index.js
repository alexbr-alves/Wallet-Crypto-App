import React, { useEffect, useState } from "react";
import { View } from "react-native";

import Lottie from 'lottie-react-native'




export default function SplashScreen(){
    const [time, settime] = useState(3000);

    useEffect(() => {
        setTimeout(()=>{
            settime(5000)
        },200)
    }, [])

   
    return(
        <View style={{flex: 1}}>
             <Lottie  
                source={require("../../../assets/splash.json")}
                duration={time}
                autoPlay={true}
                loop={true}
            />
        </View>
     
    )
}