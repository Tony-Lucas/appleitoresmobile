import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import Svg, { Path } from "react-native-svg"
import { useFocusEffect } from '@react-navigation/native';
import SyncStorage from 'sync-storage';
import { ScrollView } from 'react-native-gesture-handler';

export default function Livro({ navigation }) {

    const [livros, setLivros] = useState([])

    useFocusEffect(
        React.useCallback(() => {
            const id = SyncStorage.get("item");
            const token = SyncStorage.get("token")
            fetch(`https://restapibookapp.herokuapp.com/livro/${SyncStorage.get("userId")}/${SyncStorage.get("token")}`).then((result) => {
                return result.json()
            }).then((result) => {
                setLivros(result.livros)
            })

            return () => {
                setLivros([])
            };
        }, [])
    );

    return (
        <React.Fragment>
            <ScrollView>
                <SafeAreaView style={{ flexDirection: "row", justifyContent: "center" }}>

                    <View style={{ width: "80%", marginTop: 30, flexDirection: 'row', flexWrap: "wrap" }}>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 24,marginBottom:25 }}>Meus Livros</Text>
                        {livros.map((item, index) => {
                            return (

                                <View style={{ flexDirection: "row",flexWrap:"wrap", marginBottom: 20 }} key={index}>
                                    <View style={{ width: "40%" }}>
                                        {item.linkThumbnail && (
                                            <Image source={{ uri: item.linkThumbnail }} style={{ width: "100%", height: 200 }} />
                                        )}
                                    </View>
                                    <View style={{ width: "60%", flexDirection: 'row', flexWrap: "wrap", paddingLeft: 15, paddingTop: 14 }}>
                                        <Text style={{  fontFamily: "Roboto-Bold",width:"100%" }}>{item.nome}</Text>
                                        <Text style={{marginTop:12}}>{item.autor}</Text>
                                    </View>
                                </View>

                            )
                        })}
                    </View>
                </SafeAreaView>
            </ScrollView>
            <SafeAreaView style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end", position: "absolute", width: "100%", height: "100%" }}>
                <Text style={{ padding: 10, backgroundColor: "#8962F8", borderRadius: 10, marginBottom: 22, marginRight: 22 }} onPress={() => navigation.navigate("NovoLivro")}>
                    <Svg
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M12 5v14M5 12h14"
                            stroke="#fff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </Svg>
                </Text>

            </SafeAreaView>

        </React.Fragment>
    )
}