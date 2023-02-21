import React from "react";
import {TouchableOpacity, Text} from 'react-native'

export default function Footer({styles}){
    return(
        <TouchableOpacity style={styles.footer}>
            <Text style={styles.footer_text}>BUY</Text>
        </TouchableOpacity>
    )
}