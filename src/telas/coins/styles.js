import { StyleSheet,  } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    }, 
    image: {
        width: '100%',
        height: 350,
    },
    titulo: {
        fontSize: 17,
        paddingTop: '1%',
        marginLeft: '2%',
        fontFamily: 'SairaExtraCondensed_500Medium',
        letterSpacing: 1,
        color: '#212121'
    },
    symbol:{
        fontSize: 20,
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2
    },
    area__tituloSymbol: {
        flexDirection: 'row',
        paddingHorizontal: '5%',
        marginTop:'2%',
    },
    informacoesLeft: {
        marginHorizontal: '5%',
        borderWidth: 2,
        width: '40%',
        borderRadius: 10,
    },
    itensComuns: {
        color: '#000000',
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2  ,
        fontSize: 20,
        marginBottom: -8,
        marginLeft: '3%'
    },
    descricao: {
        fontFamily: 'SairaExtraCondensed_500Medium',
        letterSpacing: 1,
        marginBottom: -10,
        color: '#212121',
        fontSize: 17,
        marginLeft: '3%'
    },
    percentVerde: {
        color: 'green',
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2  ,
        fontSize: 20,
        marginBottom: -8,
        marginLeft: '3%'
    },
    percentVermelho: {
        color: 'red',
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2 ,
        fontSize: 20 ,
        marginBottom: -8,
        marginLeft: '3%'
    },
    informacoesRight: {
        marginHorizontal: '5%',
        borderWidth: 2,
        width: '40%',
        textAlign: 'left',
        paddingBottom: '2%',
        borderRadius: 10
    },
    areaBotao: {
        backgroundColor: '#000000',
        textAlign: 'center',
        marginHorizontal: '20%',
        marginTop: '5%',
        paddingVertical: '3%',
        borderRadius: 15
    },
    botao: {
        color: '#FFFFFF',
        textAlign: "center",
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 3,
        fontSize: 20
    },
    itemRed: {
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2  ,
        fontSize: 20,
        marginBottom: -8,
        marginLeft: '3%',
        color: 'red',
    },
    itemVerde: {
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 2  ,
        fontSize: 20,
        marginBottom: -8,
        marginLeft: '3%',
        color: 'green',
    },
    areaCompra: {
        marginHorizontal: '5%',
        justifyContent: "space-between",
        flexDirection: 'row',
        marginTop: '3%',
        marginRight: '10%'
    },
    count: {
        borderWidth: 1, 
        padding: '2%', 
        fontSize: 20,
        marginHorizontal: '10%'
    },
    soma: {
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '2%',
        fontSize: 20,
        paddingHorizontal: '10%'   
    },
   total:{
    borderWidth: 1, 
    padding: '2%', 
    fontSize: 20,
   },
   areaSoma: {
    flexDirection: 'row',
   }
})