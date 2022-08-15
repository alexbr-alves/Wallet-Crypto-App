import { StyleSheet,  } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }, 
    fundo :{
        flex: 1,
    },
    topo: {
        flexDirection: 'row',
        marginTop: '8%',
        justifyContent: 'flex-start',
        marginBottom: '75%'
    },
    IconRocket: {
        marginHorizontal: '3%', 
        marginTop: '3%'  
    },
    topo__texto: {
        marginTop: '4%',
        fontFamily: "SairaExtraCondensed_700Bold",
        fontSize: 20,
        alignSelf: 'flex-start',
        letterSpacing: 2
    },
    topo__Skip:{
        marginTop: '2%',
        fontSize: 25,
        textDecorationLine: 'underline',
       fontFamily: 'SairaExtraCondensed_700Bold',
        marginLeft: '60%',
        letterSpacing: 2
    },


    input: {
        marginLeft: 5,
        fontSize: 20,
        fontFamily: 'SairaExtraCondensed_700Bold',
        letterSpacing: 1
   },
    areaInput: {
        width: '50%',
        borderWidth: 2,
        marginHorizontal: '25%',
        height: 30,
        marginVertical: 10,
    },
    area__botao: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    botao__texto:{
        backgroundColor: '#000000',
        paddingHorizontal: '25%',
        paddingVertical: '4%',
        borderRadius: 8,
        color: '#FFFFFF',
        fontSize: 20
    }

    
})