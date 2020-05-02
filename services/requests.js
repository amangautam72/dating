

import Server from '../services/server'

import AsyncStorage from '@react-native-community/async-storage';


const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('auth')
      if(token !== null) {
        // value previously stored
        console.log(token)
        return token
      }
    } catch(e) {
      // error reading value
    }
}


export const sendOtp = async (mobile) => {

    var params = {
        number: mobile,
    }


    console.log("PARAMS  : " + JSON.stringify(params))

    return fetch(Server.LOGIN, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)

    }).then((response) => response.json())
    
        .catch((error) => {
            console.error(error);
        });
}


export const verify = async (otp,mobile,requestId) => {

    var params = {
        pin:otp,
        number: mobile,
        requestid: requestId
    }


    console.log("PARAMS  : " + JSON.stringify(params))

    return fetch(Server.VERIFY, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)

    }).then((response) => response.json())
    
        .catch((error) => {
            console.error(error);
        });
}


export const updateUser = async (firstName,lastName,emailId,gender,dob) => {

    var params = {
        firstname:firstName,
        lastname: lastName,
        email: emailId,
        gender: gender,
        birthdate:dob
    }


    console.log("PARAMS  : " + JSON.stringify(params))

    return fetch(Server.UPDATE_USER, {
        method: "POST",
        headers: {
            'Authorization': await getToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)

    }).then((response) => response.json())
    
        .catch((error) => {
            console.error(error);
        });
}


