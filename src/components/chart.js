import React from "react";
import { View, Text } from "react-native";
import { LineChart, Grid } from 'react-native-svg-charts'

export default function Chart({svg, item, tamanho, grid = false, styles}){
 
    return(
       <View>
         <LineChart
        style={tamanho}
        data={[    
            item.current_price - item.price_change_percentage_24h,
            (item.current_price - item.price_change_percentage_24h + ((item.price_change_percentage_24h/item.market_cap_rank))),
            (item.current_price - item.price_change_percentage_24h + ((item.price_change_percentage_24h/3))),
            (item.current_price - item.price_change_percentage_24h + ((item.price_change_percentage_24h/2))),
            (item.current_price - item.price_change_percentage_24h + ((item.price_change_percentage_24h/1))),
            (item.current_price - item.price_change_percentage_24h + ((item.price_change_percentage_24h/6))),
            (item.current_price - item.price_change_percentage_24h + ((item.price_change_percentage_24h/item.market_cap_rank))),
            (item.current_price - item.price_change_percentage_24h + ((item.price_change_percentage_24h/2))),
            (item.current_price - item.price_change_percentage_24h + ((item.price_change_percentage_24h/3))),
            (item.current_price - item.price_change_percentage_24h + ((item.price_change_percentage_24h/7))),
            (item.current_price - item.price_change_percentage_24h + ((item.price_change_percentage_24h/item.market_cap_rank))),
            (item.current_price - item.price_change_percentage_24h + ((item.price_change_percentage_24h/6))),
            (item.current_price - item.price_change_percentage_24h + ((item.price_change_percentage_24h/5))),
            item.current_price
        ]}
        svg={svg} 
        
    >  
    {grid == true? 
    <Grid />
    : null    
}
    </LineChart>
    {grid == true?
        <View style={styles.chartLine}>
            <Text style={styles.chartLine_text}>15S</Text>
            <Text style={styles.chartLine_text}>1H</Text>
            <Text style={[styles.chartLine_text, {backgroundColor: '#c5c5c5'}]}>1D</Text>
            <Text style={styles.chartLine_text}>1W</Text>
            <Text style={styles.chartLine_text}>1M</Text>
        <Text style={styles.chartLine_text}>1Y</Text>
        </View>
    : null    
}
       </View>
    )
}