import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        marginTop: 50,
        alignItems: 'center'
    },
    header_icons:{
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    header_image:{
        height: 50,
        width: 50, 
    },
    header_name: {
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Montserrat_400Regular',
        color: '#222222',
    },
    header_price:{
        fontSize: 24,
        lineHeight: 28,
        fontFamily: 'Epilogue_600SemiBold',
        color: '#222222',
    },
    header_percent:{
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'Montserrat_400Regular',
        color: '#222222',
    },
    chart: {
        height: 250,
        borderWidth: 0.5,
        borderColor: 'gree',
        paddingVertical: 20,
        marginTop: 50,
        marginHorizontal: 5,   
    },
    body_list1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 30,
        
    },
    body_column:{
        textAlign: 'left',
        width: '47%',
        marginLeft: 30
    },
    body_column_key:{
        fontFamily: 'Epilogue_600SemiBold',
        color: 'gray',
        fontSize: 18,
    },
    body_column_value:{
        fontFamily: 'Epilogue_600SemiBold',
        color: '#222222',
    },
    chartLine: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginTop: 5
    },
    chartLine_text:{
        fontFamily: 'Epilogue_600SemiBold',
        color: '#222222',
        fontSize: 18
    },
    footer:{
        position: 'absolute',
        width: '70%',
        backgroundColor: '#45B68D',
        alignSelf: 'center',
        borderRadius: 20,
        height: 50,
        bottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer_text: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Epilogue_600SemiBold',
        letterSpacing: 1.5
    }

})