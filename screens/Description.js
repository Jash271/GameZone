import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card'
export default function Description({navigation}){
    const onPressHandler=()=>{
        navigation.push('Demo');

    }
    return(


        <View>
            <TouchableOpacity onPress={onPressHandler}>
            <Card>
            <Text>Awesome</Text>
            </Card>
            </TouchableOpacity>
        </View>
    );
}