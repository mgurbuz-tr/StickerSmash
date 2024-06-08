import React from 'react';
import { View, Text } from 'react-native';

const StepOne = ({customStyles,innerKey}) => {
    return (
        <View style={customStyles}  key={innerKey}>
            <Text>Step One</Text>
        </View>
    );
};

export default StepOne;