import React,{ useState, useEffect } from 'react';
import styles from '../assets/styles';

import {
    ScrollView,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Dimensions, KeyboardAvoidingView
} from 'react-native';

//import Icon from '../components/Icon';

import { Icon, Toast } from 'native-base'

import AsyncStorage from '@react-native-community/async-storage';

import { sendOtp } from '../services/requests';

const SCREEN_HEIGHT = Dimensions.get('window').height

const Login = ({ navigation}) => {

  
    const [mobile, setMobile] = useState('')


    useEffect(() => {
        checkAppSession()
    });

    const onLoginClick = () => {

       if(mobile.length != 10){
        Toast.show({ text: "Please enter valid number.", buttonText: 'okay', duration: 3000 })
        return
       } 
    
       sendOtp(mobile).then((res) => {

        console.log("RES : " +  JSON.stringify(res))

        if(res.data.status == "0"){
            Toast.show({ text: "An otp has been sent to your number", buttonText: 'okay', duration: 3000 })
            navigation.navigate("Otp",{requestid: res.data.request_id, number:mobile})
        }

       }).catch((err) => console.log(err))
    
    }


    const checkAppSession = async() => {
        try {
            const token = await AsyncStorage.getItem('auth')
            if(token !== null) {
              navigation.navigate("BottomTabs")
            }
          } catch(e) {
            // error reading value
          }
    };

    return (
        // <View
        //     style={styles.bg}
        // >x
         <KeyboardAvoidingView
         behavior="padding"
            > 
            <ScrollView style={{backgroundColor:'#F2F3F4'}}>
                <ImageBackground style={{height:SCREEN_HEIGHT*.8, backgroundColor:'#7444C0'}}
                source={require('../assets/images/08.jpg')}>
                    <View style={styles.top}>
                        <TouchableOpacity>
                            <Text style={styles.topIconLeft}>
                                <Icon name="chevronLeft" />
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.topIconRight}>
                                <Icon name="optionsV" />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>


            </ScrollView>

            <View style={styles.containerProfileItem}>
                    <View style={styles.matchesProfileItem}>
                        <Text style={styles.matchesTextProfileItem}>
                            <Icon name="md-heart" style={{color:'white', fontSize:20}}/>    Dating!
                        </Text>
                    </View>


                    <View style={styles.info}>
                        <Text style={styles.iconProfile}>
                            <Icon name="ios-contact" />
                        </Text>

                        <TextInput
                            style={{ height: 40, borderColor: 'gray', flex: 1 }}
                            placeholder='Enter Mobile no.'
                            onChangeText={text => setMobile(text)}
                            value={mobile}
                            keyboardType='numeric'
                        />

                    </View>

                   
                    <TouchableOpacity 
                    onPress={() => onLoginClick()} 
                    style={{backgroundColor:'#7444C0',padding:10,marginTop:20, borderRadius:5}}>
                        <Text  style={{color:'#fff', textAlign:'center'}}>LOGIN</Text>
                    </TouchableOpacity>
                  

                </View>
            </KeyboardAvoidingView>
        // </View>
    );
};

export default Login;
