import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        backgroundColor: '#0d0d0d',
        height: 173,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
       
    },
    headerImage: {
        marginRight: 12
    },
    headerTextOne:{
        color:'#4EA8DE',
        fontSize: 25,
        fontWeight: "bold"
    },
    headerTextTwo:{
        color:'#5E60CE',
        fontSize: 25,
        fontWeight: "bold"
    },
    form: {
        flexDirection: "row",
        alignItems: "center",        
        marginLeft: 24 , 
        position: "absolute",
        top: 146,
        bottom: 612
    },
    input:{
        backgroundColor: '#262626',
        width: 271,
        height: 54,
        marginRight: 8,
        borderRadius: 6,
        fontWeight: "normal",
        fontSize: 16,
        padding: 16,
        lineHeight: 22.4
        
    },
    button:{
        width: 52,
        height: 52,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#1E6F9F'
    },
    buttonText: {
        color: 'white',
    },
    content:{
        backgroundColor: '#1A1A1A',   
        flex: 1,
        padding: 24
    },
    contentHeader:{
        flexDirection: "row",
        justifyContent: 'space-between',
        top: 55,
    },
    contentHeaderTextOne:{
        color: '#4EA8DE',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 16.94
    },

    contentHeaderTextTwo:{
        color: '#8284FA',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 16.94,
        marginBottom: 20
    },
    empityList: {
        marginTop: 68,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 48,
        paddingBottom: 48,
        paddingLeft:20,
        paddingRight: 20,
    },
    empityListTextOne:{
        marginTop: 16,
        fontSize: 16,
        fontWeight: "700",
        color: '#808080',
        lineHeight: 19.6
    },
    empityListTextTwo:{
        marginTop: 16,
        fontSize: 16,
        color: '#808080',
        fontWeight: "400",
        lineHeight: 19.6
    }
})