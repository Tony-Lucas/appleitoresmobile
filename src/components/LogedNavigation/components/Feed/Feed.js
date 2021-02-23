import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Feed({ navigation }) {
    return (
        <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'center',height: '100%',backgroundColor: '#F5F5F5'}}>
            <View style={{ width: "80%" ,marginTop:30}}>
                <TextInput placeholder="Qual é a boa Tony ?" style={{backgroundColor:"#fff",color:"#B6B5B5",borderRadius:5,paddingLeft:15}}/>
            </View>
        </SafeAreaView>
    )
}