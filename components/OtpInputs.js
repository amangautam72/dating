import React from 'react';
import { StyleSheet, TextInput,View,Text } from 'react-native';
import { Content, Item, Input, Container } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

class OtpInputs extends React.Component {
    state = { otp: [] };
    otpTextInput = [];

    componentDidMount() {
        this.otpTextInput[0]._root.focus();
    }

    renderInputs() {
        const inputs = Array(4).fill(0);
        const txt = inputs.map(
            (i, j) => <Col key={j} style={styles.txtMargin}><Item regular>
                <Input
                    style={[styles.inputRadius, { borderRadius: 10, borderColor:"#7444C0" }]}
                    keyboardType="numeric"
                    onChangeText={v => this.focusNext(j, v)}
                    onKeyPress={e => this.focusPrevious(e.nativeEvent.key, j)}
                    ref={ref => this.otpTextInput[j] = ref}
                />



            </Item></Col>
        );
        return txt;
    }

    focusPrevious(key, index) {
        if (key === 'Backspace' && index !== 0)
            this.otpTextInput[index - 1]._root.focus();
    }

    focusNext(index, value) {
        if (index < this.otpTextInput.length - 1 && value) {
            this.otpTextInput[index + 1]._root.focus();
        }
        if (index === this.otpTextInput.length - 1) {
            this.otpTextInput[index]._root.blur();
        }
        const otp = this.state.otp;
        otp[index] = value;
        this.setState({ otp });
        this.props.getOtp(otp.join(''));
    }


    render() {
        return (
            <Content >
                <Grid style={styles.gridPad}>
                    {this.renderInputs()}

                </Grid>
            </Content>
        
        );
    }
}

const styles = StyleSheet.create({
    gridPad: { padding: 40 },
    txtMargin: { margin: 12},
    inputRadius: { textAlign: 'center' },
});

export default OtpInputs;