import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
<<<<<<< HEAD
       flex: 1,
       backgroundColor: '#ffffff',
    },
    topo: {
        marginTop: 45,
        marginLeft: 17,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    saudacao: {
        fontSize: 15,
        lineHeight: 19,
        color: '#222222',
        fontFamily: 'Montserrat_400Regular'
    },
    user_name: {
        fontSize: 28,
        lineHeight: 29,
        fontFamily: 'Epilogue_600SemiBold'
    },
    user_image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 19
    },
    body: {
        marginTop: 23,
        marginLeft: 17
    },
    body_balance: {
        fontSize: 15,
        lineHeight: 19,
        color: '#222222',
        fontFamily: 'Montserrat_400Regular'
    },
    body_balance_value: {
        fontFamily: 'Epilogue_600SemiBold',
        fontSize: 26,
    },
    body_balance_value_percent: {
        fontFamily: 'Epilogue_500Medium',
        alignSelf: 'center',
        marginLeft: 5
    },
    body_horizontal: {
        width: 200,
        height: 160,
        backgroundColor: '#ffffff',
        marginRight: 16,
        justifyContent: 'space-between',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    body_horizontal_titles:{
        flexDirection: 'row', 
        marginTop: 16,
    },
    body_horizontal_image:{
        width: 36,
        height: 36,
        marginLeft: 16,  
    },
    body_horizontal_prices: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginHorizontal: 17,
        marginBottom: 16
    },
    body_horizontal_titles_name:{
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Epilogue_600SemiBold',
        color: '#222222',
    },
    body_horizontal_titles_symbol: {
        fontSize: 12,
        lineHeight: 14,
        color: '#222222',
        fontFamily: 'Montserrat_400Regular',
        letterSpacing: 0.5
    },
    body_horizontal_prices_price:{
       fontSize: 14,
       lineHeight: 17,
       fontFamily: 'Epilogue_600SemiBold',
       color: '#222222',
    },
    body_horizontal_prices_percent: {
        fontSize: 14,
        lineHeight: 17,
        color: '#222222',
        fontFamily: 'Montserrat_500Medium',
    },
    body_vertical:{
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 0.5
        
    },
    body_vertical_image:{
        width: 48,
        height: 48,
        marginLeft: 16,  
    },
    body_vertical_titles:{
        marginLeft: 10
    },
    body_vertical_titles_symbol: {
        fontSize: 14,
        lineHeight: 19,
        color: '#222222',
        fontFamily: 'Montserrat_400Regular',
        letterSpacing: 0.5,
    },
    body_vertical_titles_name:{
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Epilogue_600SemiBold',
        color: '#222222',
    },
    body_vertical_prices_price:{
        fontSize: 14,
        lineHeight: 17,
        fontFamily: 'Epilogue_600SemiBold',
        color: '#222222',
        textAlign: 'left'
     },
     body_vertical_prices_percent: {
         fontSize: 14,
         lineHeight: 17,
         color: '#222222',
         fontFamily: 'Montserrat_500Medium',
         textAlign: 'left' 
     },
     body_vertical_header:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal: 17,
        borderBottomWidth: 0.5
     },
     body_vertical_header_title: {
        fontFamily: 'Epilogue_600SemiBold',
        color: '#222222',
        fontSize: 20,
        lineHeight: 29
     },
     body_vertical_header_all:{
        fontSize: 20,
        lineHeight: 29,
        color: '#222222',
        fontFamily: 'Montserrat_500Medium',
     },
     body_vertical_footer: {
        height: 60,
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 17
     },
     body_vertical_footer_item1:{
        height: 44,
        width: 160,
        backgroundColor: '#45B68D',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center'
     },
     body_vertical_footer_item2:{
        height: 44,
        width: 160,
        backgroundColor: '#e8403a',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center'
     },
     body_vertical_footer_item1_text: {
        fontFamily: 'Montserrat_500Medium',
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17,
        lineHeight: 21
     },
     body_vertical_footer_item2_text: {
        fontFamily: 'Montserrat_500Medium',
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17,
        lineHeight: 21
     }
    
    
=======
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
    volume: {
        color: 'gray',
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2  
    }
>>>>>>> dc1398e9165fcbb60ef0ce39f15c1080bb0b7c68
    
})