import React from "react";
import { View, Text, Image } from "react-native";

import image_user from "../../../../assets/jimmy.png"

export default function Header({styles}){
    return (
        <View style={styles.topo}>
            <View>
                <Text style={styles.saudacao}>Good Morning</Text>
                <Text style={styles.user_name}>Jimmy</Text>
            </View>
            <Image style={styles.user_image} source={image_user}/>
        </View>
)};