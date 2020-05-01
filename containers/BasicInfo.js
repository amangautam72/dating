import React,{ useState, useEffect } from 'react';
import styles from '../assets/styles';

import {
    ScrollView,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    TextInput,Platform,
    Dimensions, KeyboardAvoidingView
} from 'react-native';

import { Icon, Toast } from 'native-base'


const SCREEN_HEIGHT = Dimensions.get('window').height

const BasicInfo = ({ navigation}) => {

  
    const [mobile, setMobile] = useState('')

    const onLoginClick = () => {

       if(mobile.length != 10){
        Toast.show({ text: "Please enter valid number.", buttonText: 'okay', duration: 3000 })
        return
       } 
    
       
    }

    return (
        // <View
        //     style={styles.bg}
        // >x
         <KeyboardAvoidingView
         behavior="padding"
            > 
            
                <ImageBackground style={{height:SCREEN_HEIGHT*.5, backgroundColor:'#7444C0'}}
                source={require('../assets/images/08.jpg')}>
                   
                </ImageBackground>


           

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


                    <View style={{flexDirection:'row', justifyContent:'center'}}>

                        <TouchableOpacity style={{backgroundColor:'#7444C0', padding:10,paddingLeft:25, borderBottomLeftRadius:20, borderTopLeftRadius:20, borderWidth:1, borderColor:'#ddd'}}>
                            <Text style={{color:'#fff', fontSize:16}}>Male</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor:'#fff', padding:10,paddingRight:20,  borderBottomRightRadius:20, borderTopRightRadius:20, borderWidth:1, borderColor:'#ddd'}}>
                            <Text style={{color:'#000', fontSize:16}}>Female</Text>
                        </TouchableOpacity>
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

export default BasicInfo;
