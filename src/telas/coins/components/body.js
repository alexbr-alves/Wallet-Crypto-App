import React from "react";
import { View, Text } from "react-native";

export default function Body({styles, data}){
    return(
        <View style={styles.body}>
                <View style={styles.body_list1}>
                        <View style={styles.body_column}>
                                <Text style={styles.body_column_key}>TOTAL VOLUME</Text>
                                <Text  style={styles.body_column_value}>{data.total_volume}</Text>
                        </View>

                        <View style={styles.body_column}>
                                <Text style={styles.body_column_key}>MARKET CAP</Text>
                                <Text style={styles.body_column_value}>{data.market_cap}</Text>
                        </View>
                </View>

                <View style={styles.body_list1}>
                        <View style={styles.body_column}>
                                <Text style={styles.body_column_key}>RANK</Text>
                                <Text style={styles.body_column_value}>{data.market_cap_rank}</Text>
                        </View>
                        <View style={styles.body_column}>
                                <Text style={styles.body_column_key}>HIGH 24H</Text>
                                <Text  style={styles.body_column_value}>{data.high_24h}</Text>
                        </View>
                </View>

                <View style={styles.body_list1}>
                        <View style={styles.body_column}>
                                <Text style={styles.body_column_key}>LOW 24H</Text>
                                <Text style={styles.body_column_value}>{data.low_24h}</Text>
                        </View>

                        <View style={styles.body_column}>
                                <Text style={styles.body_column_key}>TOTAL SUPPLY</Text>
                                <Text style={styles.body_column_value}>{data.total_supply}</Text>
                        </View>
                </View>


        </View>
    )
}