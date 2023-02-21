import React from "react";
import { View, TextInput } from "react-native";


export default function Search({search, styles, setSearch, setFilterData, data}){

    const searchFilterFunction = (text) => {
        if(text){
            const newDataName = data.filter((item) => {
                const itemNome = item.name ? item.name.toUpperCase() : "".toLowerCase();
                const textData = text.toUpperCase();
                return itemNome.indexOf(textData) > -1 
            })
           
            setFilterData(newDataName);
            setSearch(text);
        }else{
        setFilterData(data)
        setSearch(text)
}};

    return (
        <View style={styles.search}>
            <TextInput
                style={styles.search_input}
                placeholder="Search"
                placeholderTextColor={'#222222'}
                value={search}
                onChangeText={(text) => searchFilterFunction(text)}
            
            />
       
        </View>
)};