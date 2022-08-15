import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
       height:'100%'

    }, 
    topo: {
        marginTop: '5%',
        marginLeft: '10%',
        flexDirection: 'row',
        height: '8%'
        
    } ,
    imagem__usuario: {
        width: 40,
        height: 40,
        borderRadius: 25
    },
    topo__conta: {
        marginLeft: '10%',
        color: '#696969',
        fontFamily: 'SairaExtraCondensed_500Medium',
        letterSpacing: 2
    },
    topo__usuario: {
        marginLeft: '10%',
        fontSize: 20,
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2
    },
    barraH:{
        flexDirection: 'row',
        backgroundColor: '#000000',
        marginHorizontal: '4%',
        paddingHorizontal: '6%',
        height: '6.3%',
        borderRadius: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },  
    barraItensAtivo: {
        backgroundColor: '#FFFFFF',
        padding: '2%',
        borderRadius: 5,
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 1,
        fontSize: 15
    },
    barraItens: {
       color: '#FFFFFF',
        padding: '2%',
        borderRadius: 5,
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2,
        fontSize: 20
    },
    balanco: {
        borderWidth: 2,
        marginTop: '3%',
        height: '12%',
        marginHorizontal: '5%',
        borderRadius: 10,
        justifyContent: 'space-between'
    },
    balanco__totalSigla: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },  
    balanco__titulo: {
        marginTop: '2%',
        marginLeft: '3%',
        fontSize: 20,
        fontFamily: 'SairaExtraCondensed_500Medium',
        letterSpacing: 1
    },
    balanco__total: {
        marginBottom: '3%',
        marginLeft: '3%',
        fontSize: 30,
        fontFamily: 'SairaExtraCondensed_700Bold',
    },
    balanco__sigla: {
        marginRight: '6%',
        fontSize: 20,
        backgroundColor: '#000000',
        marginBottom: '4%',
        color: '#ffffff',
        borderRadius: 10,
        padding: '2%',
        paddingHorizontal: '2%',
        fontFamily: 'SairaExtraCondensed_700Bold',
    },
    servicos: {
        backgroundColor: '#000000',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: '5%',
        marginTop: '3%',
        height: '15%',
        borderRadius: 10,
        borderWidth: 2,
    },
    servicos__listaL:{
        marginVertical: '5%',
        justifyContent: "space-between",
        marginLeft: '5%',
        width: '47.5%',
       
    },
    servicos__listaR:{
        marginVertical: '5%',
        justifyContent: 'space-between',
        marginRight: '5%',
        width: '47.5%',
       
    },
    servicos__titulo:{
        fontSize: 20,
        fontFamily: 'SairaExtraCondensed_700Bold',
        color: '#ffffff',
        marginHorizontal: '5%',
        letterSpacing: 1.5,
    },
    servicos__icones: {
        marginTop: '3%'
    },

    transfers:{ 
        marginTop: '3%',
        flexDirection: 'row',
        marginHorizontal: '5%',
        height: '13%'
    },
    transfers__deposit: {
        width: '47.5%',
        textAlign: 'left',
        backgroundColor: '#000000',
        borderRadius: 10,
    },
    transfers__withdrow: {
        width: '47.5%',
        textAlign: 'left',
        backgroundColor: 'red',
        marginLeft: '5%',
        backgroundColor: '#82ffac',
        borderRadius: 10,
        borderWidth: 1
    },
    transfers__icone: {
        marginTop: '2%',
        marginLeft: '2%'
    },
    transfers__deposit__texto: {
        marginLeft: '5%',
        color: '#82ffac',
        marginTop: '2%',
        fontSize: 22,
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2
    },
    transfers__withdrow__texto: {
        marginLeft: '4%',
        marginTop: '2%',
        fontSize: 22,
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2
    },
    areaCrypto: {
        marginTop: '3%',
        
    },
    area__titulo: {
        marginHorizontal: '7.5%',
        paddingVertical: '1%' ,
        borderBottomWidth: 1,
    },
    titulo:{
        fontSize: 22,
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2
    },

    lista: {
       marginHorizontal: '7.5%',
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
        marginRight: '5%',
        alignItems: 'flex-end'
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