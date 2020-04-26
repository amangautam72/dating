import React from 'react';
import styles from '../assets/styles';

import {
    ScrollView,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';

const SCREEN_HEIGHT = Dimensions.get('window').height

const Login = () => {
    const {
        age,
        image,
        info1,
        info2,
        info3,
        info4,
        location,
        match,
        name
    } = Demo[7];

    return (
        <ImageBackground
            style={styles.bg}
        >
            <ScrollView style={{backgroundColor:'#F2F3F4'}}>
                <ImageBackground style={{height:SCREEN_HEIGHT*.8, backgroundColor:'#7444C0'}}>
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


                <View style={styles.containerProfileItem}>
                    <View style={styles.matchesProfileItem}>
                        <Text style={styles.matchesTextProfileItem}>
                            <Icon name="heart" />    Dating!
                        </Text>
                    </View>


                    <View style={styles.info}>
                        <Text style={styles.iconProfile}>
                            <Icon name="user" />
                        </Text>

                        <TextInput
                            style={{ height: 40, borderColor: 'gray', flex: 1 }}
                            placeholder='Enter Mobile no.'
                        //   onChangeText={text => onChangeText(text)}
                        //   value={value}
                        />

                    </View>


                    <TouchableOpacity style={{backgroundColor:'#7444C0',flex:1,padding:10,marginTop:20, borderRadius:5}}>
                        <Text style={{color:'#fff', textAlign:'center'}}>SUBMIT</Text>
                    </TouchableOpacity>



                    

                </View>


               



            </ScrollView>
        </ImageBackground>
    );
};

export default Login;
