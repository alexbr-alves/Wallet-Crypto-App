import React from "react"; 
import { View, Text } from "react-native";


export default function Body_balance({styles}){
    return(
        <View style={styles.body}>
                <Text style={styles.body_balance}>Balance</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.body_balance_value}>USD 13220.40</Text>
                    <Text style={styles.body_balance_value_percent}>+7.65%</Text>
                </View>
            </View> 
    )
}