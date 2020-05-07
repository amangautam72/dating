import React, { useState, useEffect } from 'react';
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

const UploadImage = ({ navigation }) => {


    const [images, setImages] = useState([])


    const onLoginClick = () => {

    }


    return (
        // <View
        //     style={styles.bg}
        // >x
        <KeyboardAvoidingView
            behavior="padding"
        >
            <ScrollView style={{ backgroundColor: '#F2F3F4' }}>
                <ImageBackground style={{ height: SCREEN_HEIGHT * .4, backgroundColor: '#7444C0' }}
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
                        <Icon name="md-heart" style={{ color: 'white', fontSize: 20 }} />    Dating!
                        </Text>
                </View>



                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => onLoginClick()}
                        style={{flex:1,height:250,justifyContent:'center', backgroundColor: '#DDD', padding: 10, marginTop: 20,marginLeft:10, borderRadius: 5, }}>
                        <Icon name="md-add-circle" style={{color:'#505050',alignSelf:'center'}}></Icon>
                    </TouchableOpacity>

                    <View style={{flex:1}}>

                        <TouchableOpacity
                            onPress={() => onLoginClick()}
                            style={{height:120,justifyContent:'center', backgroundColor: '#DDD', padding: 10, marginTop: 20,marginLeft:10,marginRight:10, borderRadius: 5, }}>
                            <Icon name="md-add-circle" style={{color:'#505050',alignSelf:'center'}}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => onLoginClick()}
                            style={{height:120,justifyContent:'center', backgroundColor: '#DDD', padding: 10,marginLeft:10,marginTop:10,marginRight:10,  borderRadius: 5, }}>
                            <Icon name="md-add-circle" style={{color:'#505050',alignSelf:'center'}}></Icon>
                        </TouchableOpacity>


                    </View>


                </View>


                <View style={{flexDirection:'row'}}>

                        <TouchableOpacity
                            onPress={() => onLoginClick()}
                            style={{flex:1,height:120,justifyContent:'center', backgroundColor: '#DDD', padding: 10,margin:10,marginRight:5, borderRadius: 5, }}>
                            <Icon name="md-add-circle" style={{color:'#505050',alignSelf:'center'}}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => onLoginClick()}
                            style={{ flex:1,height:120,justifyContent:'center', backgroundColor: '#DDD', padding: 10,margin:10,marginLeft:5,  borderRadius: 5, }}>
                            <Icon name="md-add-circle" style={{color:'#505050', alignSelf:'center'}}></Icon>
                        </TouchableOpacity>


                    </View>



            </View>
        </KeyboardAvoidingView>
        // </View>
    );
};

export default UploadImage;
