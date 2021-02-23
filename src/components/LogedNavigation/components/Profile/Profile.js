import React, { useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import SyncStorage from 'sync-storage';
import Svg, { Path } from "react-native-svg"
import { ScrollView } from 'react-native-gesture-handler';

export default function Profile({ navigation }) {

    const [user, setUser] = useState({})
    const [livros, setLivros] = useState([])

    useFocusEffect(
        React.useCallback(() => {
            fetch(`https://restapibookapp.herokuapp.com/user/${SyncStorage.get("userId")}/${SyncStorage.get("token")}`).then((result) => {
                return result.json()
            }).then((result) => {
                setUser(result.user)
            })
            fetch(`https://restapibookapp.herokuapp.com/livro/${SyncStorage.get("userId")}/${SyncStorage.get("token")}`).then((result) => {
                return result.json()
            }).then((result) => {
                setLivros(result.livros)
            })

            return () => {

            };
        }, [])
    );

    return (
        <SafeAreaView style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", paddingTop: 25, paddingBottom: 30, paddingLeft: 20, paddingRight: 20, justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
                    <View>
                        {!user.nomeFoto && (
                            <Text style={{ backgroundColor: "#C4C4C4", padding: 13, borderRadius: 50 }}>
                                <Svg
                                    width={48}
                                    height={48}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.294 7.291A5.274 5.274 0 0112 12.583a5.275 5.275 0 01-5.294-5.292A5.274 5.274 0 0112 2a5.273 5.273 0 015.294 5.291zM12 22c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401 4.339 0 8 .705 8 3.425C20 21.32 16.315 22 12 22z"
                                        fill="#fff"
                                    />
                                </Svg>
                            </Text>
                        )}
                    </View>
                    <View>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 17, marginLeft: 15 }}>{user.nome}</Text>
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 13, marginLeft: 15, marginTop: 5, color: "#A3A3A3" }}>Editar Perfil</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text>
                    <Svg
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M12 20a1 1 0 100-2 1 1 0 000 2zM12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2 1 1 0 000 2z"
                            stroke="#5D6062"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </Svg>
                </Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 50, padding: 10 }}>
                <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontFamily: "Roboto-Medium", color: "#5D6062" }}>Leituras</Text>
                    <Text style={{ fontSize: 19, fontFamily: "Roboto-Bold", color: "#8962F8", marginTop: 5 }}>10</Text>
                </View>
                <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontFamily: "Roboto-Medium", color: "#5D6062" }}>Seguidores</Text>
                    <Text style={{ fontSize: 19, fontFamily: "Roboto-Bold", color: "#8962F8", marginTop: 5 }}>1K</Text>
                </View>
                <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontFamily: "Roboto-Medium", color: "#5D6062" }}>Seguindo</Text>
                    <Text style={{ fontSize: 19, fontFamily: "Roboto-Bold", color: "#8962F8", marginTop: 5 }}>158</Text>
                </View>
            </View>
            <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end", paddingRight: 10, paddingLeft: 10 }}>
                <Text style={{ fontFamily: "Roboto-Bold", color: "#5D6062" }}>Ver Todos</Text>
            </View>
            
                <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}>

                    {livros.map(item => {
                        return (
                            <Image source={{ uri: item.linkThumbnail }} style={{ width: "37%", height: 200 }} />
                        )
                    })}

                </View>
           

        </SafeAreaView>
    )
}