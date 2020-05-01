

import Server from '../services/server'


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


