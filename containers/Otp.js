import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../assets/styles';

import OtpInputs from '../components/OtpInputs'
import { Container, Left, Header, Right, Icon,Toast } from 'native-base';
import { verify } from '../services/requests';

import AsyncStorage from '@react-native-community/async-storage';


const Otp = ({route, navigation }) => {

  const { number , requestid } = route.params
  const [otp, setOtp] = useState('')

  const getOtp = (value) => {
    
     setOtp(value)
   
  }

  const onSubmitClick = () => {
    
    if(otp.length != 4){
      Toast.show({ text: "Please Enter Otp", buttonText: 'okay', duration: 3000 })
      return
    }


      verify(otp,number,requestid).then((res) => {

        console.log("RES : " + JSON.stringify(res))
        if(res.status == 1){

          storeData(res.accessToken)
          Toast.show({ text: "You have logged in successfully.", buttonText: 'okay', duration: 3000 })
          navigation.navigate("BasicInfo")
        }

      }).catch((err) => console.log(err))
    }
      

  

  const storeData = async (token) => {
    try {
      console.log("STORED")
      await AsyncStorage.setItem('auth', token)
    } catch (e) {
      // saving error
    }
  }

  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <Header style={{ backgroundColor: '#fff' }}>
        <Left>
          <Icon onPress={() => navigation.goBack()} 
          style={{padding:10}}
          name="ios-arrow-back"
          >

          </Icon>
        </Left>
        <Text style={{ flex: 1, alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Otp</Text>
        <Right></Right>
      </Header>
      <Container style={{ paddingTop: 20 }} >

        <OtpInputs
          getOtp={(otp) => getOtp(otp)}
        />



        <TouchableOpacity
          onPress={() => onSubmitClick()}
          style={{ backgroundColor: '#7444C0', padding: 15, margin: 20, borderRadius: 5 }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>SUBMIT</Text>
        </TouchableOpacity>
      </Container>



    </ImageBackground>
  );
};

export default Otp;
