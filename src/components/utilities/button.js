import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = props => {
    const { title, onPress, styleButton, styleLabel } = props
    return (
        <TouchableOpacity onPress={onPress} style={styleButton}>
            <Text style={styleLabel}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;