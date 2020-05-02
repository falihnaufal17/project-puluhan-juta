import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = props => {
    const { title, onPress, style } = props
    return (
        <TouchableOpacity onPress={onPress} style={style.btnPrimary}>
            <Text style={style.txtWhite}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;