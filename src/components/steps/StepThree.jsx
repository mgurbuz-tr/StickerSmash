import React from 'react';
import { View, Text } from 'react-native';

const StepThree = ({customStyles,innerKey}) => {
    return (
        <View style={customStyles} key={innerKey}>
            <Text>Step Three</Text>
        </View>
    );
};

export default StepThree;