import React, { useEffect, useState } from "react";;
import { View} from "react-native";

import styles from './styles';


import Api from '../../servicos/apiTotal';

import Body from "./components/body";
import Search from "./components/search";
import Header from "./components/header";
import SplashScreen from "../../components/lottieView";



export default function Explorer(){
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filterData, setFilterData] = useState([]);
    const [time, setTime] = useState(false);
    useEffect(() => {
        Api.get().then((response) => {
          if (response?.data) {
            setData(response.data);
            setFilterData(response.data)
           
          }
        }).catch(error => console.log(error))
        setTimeout(() =>{
          setTime(true);
      }, 2000)
      }, []);

      
      

    return (
       <View style={styles.container}>
          { time?(
  
            <>
              <Header/>
              
              <Search 
              search={search} 
              styles={styles} 
              setSearch={setSearch} 
              setFilterData={setFilterData} 
              data={data} />

              <Body 
              styles={styles} 
              filterData={filterData}/>

            </>
        ) : (
       
            <SplashScreen/>
       
        )}
      </View>
)}