import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import SyncStorage from 'sync-storage';
import Svg, { Path } from "react-native-svg"
import AdicionaAmigo from './components/AdicionaAmigo';
import { TextInput } from 'react-native-gesture-handler';

export default function Amigo({ navigation }) {

    const [amigos, setAmigos] = useState([])
    const [showSearch, setShowSearch] = useState(false);
    const [showDefault, setShowDefault] = useState(true);

    const abreBuscaAmigo = () => {
        setShowDefault(false)
        setShowSearch(true)
    }

    useFocusEffect(
        React.useCallback(() => {
            fetch(`https://restapibookapp.herokuapp.com/amigo/${SyncStorage.get("userId")}/${SyncStorage.get("token")}`).then((result) => {
                return result.json()
            }).then((result) => {
                setAmigos(result.amigos)
            })

            return () => {
                setAmigos([])
            };
        }, [])
    );

    const procuraAmigo = async (text) => {
        if(text.length > 2){
            const result = await fetch(`https://restapibookapp.herokuapp.com/user/busca/${text}/${SyncStorage.get("token")}`);
            const json = await result.json();
            console.log(json)
        }
    }

    return (
        <SafeAreaView style={{ padding: 15 }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", paddingTop: 10 }}>

                <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 15 }}>
                    <Text style={{ marginLeft: 15, fontFamily: "Roboto-Bold", fontSize: 18 }}>Amigos</Text>
                    <Text style={{ marginLeft: 15, fontFamily: "Roboto-Bold", fontSize: 18, color: "#BBBBBB" }}>Pendentes</Text>
                    <Text style={{ marginLeft: 7, fontSize: 18, fontFamily: "Roboto-Bold", color: "#fff", backgroundColor: "#8962F8", paddingLeft: 5, paddingRight: 5, borderRadius: 5 }}>0</Text>
                </View>

            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", padding: 10 }}>
                <View style={{ width: "100%", height: 1, backgroundColor: "#BBBBBB" }}>

                </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <TextInput placeholder="Buscar leitores" style={{ backgroundColor: "#fff", borderRadius: 5, paddingLeft: 15, width: "100%" }} onChangeText={text => procuraAmigo(text)} />
            </View>
            {amigos > 0 && (
                <View style={{ flexDirection: "row", padding: 10 }}>
                    <Text>asdasdad</Text>
                </View>
            )}


        </SafeAreaView>
    )
}