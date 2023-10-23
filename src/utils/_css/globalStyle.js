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
    }
});

export default globalStyles;
