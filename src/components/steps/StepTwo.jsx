import React from 'react';
import { View, Text } from 'react-native';

const StepTwo = ({customStyles,innerKey}) => {
    return (
        <View style={customStyles} key={innerKey}>
            <Text>Step Two</Text>
        </View>
    );
};

export default StepTwo;