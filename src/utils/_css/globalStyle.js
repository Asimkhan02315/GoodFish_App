/* eslint-disable prettier/prettier */
import { Platform, StyleSheet } from 'react-native';
import { AppStyles, AppIcon } from '../AppStyles';
const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    centerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20
    },
    containerText: {
        marginBottom: 50,
        textAlign: 'left',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%'
    },
    fillButton: {
        width: '100%',
        paddingVertical: 8,
        borderRadius: 8,
        fontSize: 18,
        backgroundColor: '#ee502c'
    },
    cardContainer: {
        width: '100%',
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 1,
            height: 1
        },
        elevation: 30,
        shadowOpacity: 0.19,
        shadowRadius: 10,
        borderRadius: 15,
        flexDirection: "column",
        padding: 10,
        alignItems: 'center',
        gap: 10,
        marginVertical: 10,
    }
});

export default globalStyles;
