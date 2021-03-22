import { StyleSheet } from 'react-native'
import colors from '../../Constants/colors'

const blueColor = '#6d5766'

const styles = StyleSheet.create({


    pressableContainer : {
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'flex-end',
        alignItems : 'center',
        paddingRight : '5%'
    },

    pressable : {
        paddingVertical : '2%',
        paddingHorizontal : '3%',
        borderRadius : 999,
        borderColor : colors.BORDER_COLOR,
        borderWidth : 2
    },

    formArea : {
        paddingLeft : '5%',
        paddingRight : '5%',
        marginTop : '2%'
    },

    formTitle : {
        fontFamily : 'Lato-Bold',
        fontSize : 20,
        marginBottom : '1%'
    },

    formSubtitle : {
        fontFamily : 'Lato-Regular',
        fontSize : 16,
        color : blueColor
    },

    mobileContainer : {
        marginTop : '10%',
    },

    mobileText : {
        fontSize : 18,
        fontFamily : 'Lato-Regular'
    },

    textInputContainer : {
        flexDirection : 'row'
    },

    textInput : {
        borderBottomWidth : 2,
        color : colors.BLACK,
        fontSize : 16,
        fontFamily : 'Lato-Regular',
    },

    submitButtonContainer : {
        marginTop : '15%',
    },

    submitButton : {
        width : '90%',
        alignSelf : 'center',
        paddingVertical : '2.5%',
        borderRadius : 4
    },

    submitButtonInnerContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    },

    buttonContent : {
        color : colors.WHITE,
        fontSize : 18,
        fontFamily : 'Lato-Regular'
    },

    miscTextContainer : {
        marginTop : '7%',
        paddingRight : '5%',
        paddingLeft : '5%'
    },

    miscText : {
        color : blueColor,
        fontSize : 14,
        fontFamily : 'Lato-Regular'
    }
})

export default styles