import React, { useState, useEffect } from 'react';
import styles from '../assets/styles';

import {
    ScrollView, StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    TextInput, Platform,
    Dimensions, KeyboardAvoidingView
} from 'react-native';

import { Icon, Toast } from 'native-base'

import DateTimePicker from '@react-native-community/datetimepicker';
import { updateUser } from '../services/requests';


const SCREEN_HEIGHT = Dimensions.get('window').height

const BasicInfo = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(new Date());
    const [dob, setdob] = useState('Date of Birth');
    const [gender, setGender] = useState();
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {

        const currentDate = selectedDate || date;

        //console.log(dob)
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        if (selectedDate != undefined) {
            const month = selectedDate.getMonth() + 1 < 10 ? "0" + (selectedDate.getMonth() + 1) : selectedDate.getMonth() + 1
            const day = selectedDate.getDate() < 10 ? "0" + selectedDate.getDate() : selectedDate.getDate()
            console.log(month)
            const formattedDate = selectedDate.getFullYear() + "-" + month + "-" + day
            setdob(formattedDate)
        }

    };

    const showDatepicker = () => {
        setShow(true);
    };

    const onGenderSelect = (gender) => {
        setGender(gender)
    };

    const onContinue = () => {

        // if(firstName == "" || lastName == "", email == "", dob == "Date of Birth"){
        //     Toast.show({ text: "Please fill all the details", buttonText: 'okay', duration: 3000 })
        //     return;
        // }
        updateUser(firstName,lastName,email,gender,dob).then((res) => {

            console.log("RES : " + JSON.stringify(res))

            if(res.status == 1){
              //Toast.show({ text: "You have logged in successfully.", buttonText: 'okay', duration: 3000 })
              navigation.navigate("BottomTabs")
            }
    
          }).catch((err) => console.log(err))
    };

    return (
        // <View
        //     style={styles.bg}
        // >x
        <KeyboardAvoidingView
            behavior="padding"
        >

            <ImageBackground style={{ height: SCREEN_HEIGHT * .4, backgroundColor: '#7444C0' }}
                source={require('../assets/images/08.jpg')}>

            </ImageBackground>




            <View style={styles.containerProfileItem}>
                <View style={styles.matchesProfileItem}>
                    <Text style={styles.matchesTextProfileItem}>
                        <Icon name="md-heart" style={{ color: 'white', fontSize: 20 }} />    Dating!
                        </Text>
                </View>


                <View style={styles.info}>
                    <Text style={styles.iconProfile}>
                        <Icon name="ios-contact" />
                    </Text>

                    <TextInput
                        style={{ height: 40, borderColor: 'gray', flex: 1 }}
                        placeholder='First Name'
                        onChangeText={text => setFirstName(text)}
                        value={firstName}
                    />

                </View>

                <View style={styles.info}>
                    <Text style={styles.iconProfile}>
                        <Icon name="ios-contact" />
                    </Text>

                    <TextInput
                        style={{ height: 40, borderColor: 'gray', flex: 1 }}
                        placeholder='Last Name'
                        onChangeText={text => setLastName(text)}
                        value={lastName}
                    />

                </View>

                <View style={styles.info}>
                    <Text style={styles.iconProfile}>
                        <Icon name="ios-contact" />
                    </Text>

                    <TextInput
                        style={{ height: 40, borderColor: 'gray', flex: 1 }}
                        placeholder='Email'
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />

                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>

                    <TouchableOpacity style={[styles.male, { backgroundColor: gender == "Male" ? "#7444C0" : "#fff" }]}
                        onPress={() => onGenderSelect("Male")}>
                        <Text style={{ color: gender == "Male" ? '#fff' : "#000", fontSize: 16 }}>Male</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.female, { backgroundColor: gender == "Female" ? "#7444C0" : "#fff" }]}
                        onPress={() => onGenderSelect("Female")}>
                        <Text style={{ color: gender == "Female" ? '#fff' : "#000", fontSize: 16 }}>Female</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={{ marginTop: 20 }}
                    onPress={showDatepicker}>
                    <Text style={{ borderWidth: 1, padding: 10, borderColor: '#ddd', borderRadius: 5 }}>{dob}</Text>
                </TouchableOpacity>

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={"date"}
                        display="spinner"
                        onChange={onChange}
                    />
                )}


                <View style={{ flexDirection: 'row', marginTop: 20 }}>

                    <TouchableOpacity style={{ padding: 10,paddingLeft:20,paddingRight:20 }}>
                        <Icon
                            name="ios-arrow-back"
                        >
                        </Icon>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=> onContinue()}
                    style={{ padding: 10,paddingLeft:20,paddingRight:20, position: 'absolute', right: 0 }}>
                        <Icon
                            name="ios-arrow-forward"
                        >

                        </Icon>
                    </TouchableOpacity>

                </View>
                {/* <TouchableOpacity
                    onPress={() => onLoginClick()}
                    style={{ backgroundColor: '#7444C0', padding: 10, marginTop: 20, borderRadius: 5 }}>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>LOGIN</Text>
                </TouchableOpacity> */}


            </View>
        </KeyboardAvoidingView>
        // </View>
    );
};


export default BasicInfo;
