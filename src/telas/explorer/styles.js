import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 30
    },
    body_vertical:{
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: '#222222'
        
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
     search: {
        height: 48,
        marginHorizontal: 20,
        marginTop: 40,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        width: windowWidth - 40
    },
    search_input: {
        paddingRight: 230,
        paddingLeft: 16,
        color: '#9E9E9E',
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Montserrat_400Regular'
    },
    search_filter:{
       alignSelf: 'flex-end',
        marginBottom: 10,
        marginRight: 10,
        padding: 10,
        backgroundColor: '#222222',
        borderRadius: 10
    },
    search_filter_text:{
        color: '#fff',
         fontFamily: 'Epilogue_600SemiBold',
    }

})