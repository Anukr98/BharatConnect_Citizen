import React , { useState , useEffect } from 'react'
import { View, Text, Image, Pressable , Dimensions, TextInput } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import colors from '../../Constants/colors'
import styles from './styles'
import { Icon } from 'native-base'

const Login = () => {

    const [dimensions, setDimensions] = useState({ height : Dimensions.get('window').height , width : Dimensions.get('window').width })
    const [mobileLengthFlag, setMobileLengthFlag] = useState(false)
    const [mobile, setMobile] = useState('')

    const onDimensionsChange = ({ window }) => {
        setDimensions({
            height : window.height,
            width : window.width
        })
    }

    const submitNumber = () => {
        if(mobile.length < 10)
            setMobileLengthFlag(true)
    }

    useEffect( () => {
        Dimensions.addEventListener('change' , onDimensionsChange)
        return () => {
            Dimensions.removeEventListener('change' , onDimensionsChange)
        }
    })

    return (
        <View style = {{ flex : 1 }}>
            <View style = {{ width : dimensions.width , alignItems : 'center' }}>
                <Image
                    source = {require('../../Assets/Logo/Logo2.png')}
                    // resizeMethod = 'resize'
                    resizeMode = 'contain'
                    style = {{ width : dimensions.width * 0.9 , height : dimensions.height * 0.1 }}
                />
                <View style = {[styles.pressableContainer , { transform : [{ translateY : -dimensions.height/60 }] }]}>
                    <Pressable
                        style = {[styles.pressable , { marginRight : '5%' }]}
                        android_ripple
                        hitSlop = {{
                            left : 20,
                            top : 20,
                            bottom : 20
                        }}
                        onPress = { () => console.log('change')}
                    >
                        <Text>Change Language</Text>
                    </Pressable>
                    <Pressable
                    style = {styles.pressable}
                        android_ripple
                        hitSlop = {{
                            top : 20,
                            right : 20,
                            bottom : 20
                        }}
                        onPress = { () => console.log('skip')}
                    >
                    <Text>Skip</Text>
                </Pressable>
                </View>
                <View>
                    
                </View>
            </View>

            <View style = {styles.formArea}>
                <View><Text style = {styles.formTitle}>Login or create a New Account</Text></View>
                <View><Text style = {styles.formSubtitle}>Pay securely through any means you wish</Text></View>
                <View style = {styles.mobileContainer}><Text style = {[styles.mobileText , { color : mobileLengthFlag ? 'red' : colors.GRAY }]}>Mobile Number</Text></View>
                <View style = {styles.textInputContainer}>
                    <TextInput
                        placeholder = '+91'
                        style = {[styles.textInput , { width : '10%' , borderBottomColor : mobileLengthFlag ? 'red' : colors.BASE_COLOR }]}
                        placeholderTextColor = {colors.BLACK}
                    />
                    <TextInput
                        onChangeText = { text => {
                            setMobileLengthFlag(false)
                            setMobile(text)
                        }}
                        style = {[styles.textInput , { width : '85%' , borderBottomColor : mobileLengthFlag ? 'red' : colors.BASE_COLOR }]}
                        value = {mobile}
                        keyboardType = 'number-pad'
                        maxLength = {10}
                        onSubmitEditing = {submitNumber}
                    />
                </View>
                <View style = {styles.submitButtonContainer}>
                    <TouchableRipple 
                        style = {[styles.submitButton , { backgroundColor : mobile.length < 10 ? colors.BASE_COLOR_DISABLED : colors.BASE_COLOR }]}
                        disabled = {mobile.length < 10 ? true : false}
                    >
                        <View style = {styles.submitButtonInnerContainer}>
                            <Icon
                                active
                                type = 'MaterialCommunityIcons'
                                name = 'lock-check'
                                style = {[styles.buttonContent , { fontSize : 30 , marginRight : '3%' }]}
                            />
                            <Text style = {styles.buttonContent}>Proceed</Text>
                        </View>
                    </TouchableRipple>
                </View>
            </View>

            <View style = {styles.miscTextContainer}>
                <Text style = {styles.miscText}>This is a secured panel. By proceeding, you agree to our Terms and Conditions.</Text>
            </View>
        </View>
    )
}

export default Login
