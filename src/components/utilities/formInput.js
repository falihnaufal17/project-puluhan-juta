import React, { Component } from 'react';
import { View, TextInput, Animated, Text } from 'react-native';

class FormInput extends Component {
    state = {
        isFocused: false
    }

    UNSAFE_componentWillMount() {
        this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
    }

    handleFocus = () => {
        this.setState({ isFocused: true });
    }

    handleBlur = () => {
        this.setState({ isFocused: false });
    }

    componentDidUpdate() {
        Animated.timing(
            this._animatedIsFocused,
            {
                toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
                duration: 200,
                useNativeDriver: false
            }).start()
    }

    render() {
        const { style, label, value, returnKeyType, onChangeText, type, name } = this.props;
        const labelStyle = {
            position: 'absolute',
            left: '10%',
            top: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [15, -9]
            }),
            fontSize: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [14, 12]
            }),
            color: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: ['#aaa', 'blue']
            }),
            backgroundColor: '#f2f2f2',
            zIndex: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
            }),
        }

        style.formInput = {
            ...style.formInput,
            borderColor: this.state.isFocused ? 'blue' : '#aaa'
        }

        return (
            <View style={style.formGroup}>
                <Animated.Text style={labelStyle}>{label}</Animated.Text>
                <TextInput
                    style={style.formInput}
                    value={value}
                    returnKeyType={returnKeyType || 'done'}
                    onChangeText={onChangeText}
                    secureTextEntry={type == 'password' ? true : false}
                    keyboardType={type == 'number' ? 'phone-pad' : 'default'}
                    autoCapitalize={type == 'password' || type == 'username' ? 'none' : 'words'}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
            </View>
        )
    }
}

export default FormInput;