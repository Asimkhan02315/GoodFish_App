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
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: AppStyles.color.title,
        marginBottom: 5,
        marginTop: 5
    },
    card: {
        marginVertical: 12,
        backgroundColor: '#fff',
    },
    cardContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 2,
        marginBottom: Platform.OS === 'android' ? 0 : 15,
    },
    imageRow: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',

    },

    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
});

export default globalStyles;
