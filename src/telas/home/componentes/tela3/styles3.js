import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
       height:'100%'

    }, 
    
    areaCrypto: {
        marginTop: '3%',
        
    },
    area__titulo: {
        marginHorizontal: '5%',
        //paddingVertical: '1%' ,
        marginTop: '1%', 
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    area__icones: {
        flexDirection: "row",
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 2

    },
    area__iconesSeta: {
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
    },
    icones__tituloaAtivo:{
        paddingHorizontal: '3%',
        backgroundColor: '#000000',
        color: '#ffffff',
        paddingVertical: '2%',
        borderRadius: 10
    },
    icones__titulo:{
        paddingHorizontal: '3%',
        backgroundColor: '#FFFFFF',
        color: '#000000',
        paddingVertical: '2%'
    },
    seta: {
        backgroundColor: '#000000',
        borderRadius: 10
    },
    lista: {
       marginHorizontal: '5%',
       justifyContent: 'space-between',
       flexDirection: 'row',
       paddingTop: '1%'
    },
    area__logo:{
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center'
    },
    logo: {
        backgroundColor: '#000000',
        color:'#ffffff',
        fontSize: 20,
        padding: '2%',
        borderRadius: 30,
        paddingHorizontal: '4%',
        fontFamily: 'SairaExtraCondensed_700Bold',
    },
    symbol: {
      marginLeft: '5%',
      fontSize: 20,
      fontFamily: 'SairaExtraCondensed_700Bold',
    },
    nome: {
        marginLeft: '5%',
        color: 'gray',
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2
   },
    preco_volume: {
        alignItems: 'flex-end',
    },
    preco: {
        fontSize: 20,
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2
        
    },
    volumeVerde: {
        color: 'green',
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2  
    },
    volumeVermelho: {
        color: 'red',
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2  
    }
    
})