import React, { useState } from 'react'
import { Text, SafeAreaView, View ,Image} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import SyncStorage from 'sync-storage';
import Svg, { G, Circle, Path, AnimateTransform } from "react-native-svg"


export default function NovoLivro({ navigation }) {

    const [nomeLivro, setNomeLivro] = useState()
    const [livrosBusca, setLivrosBusca] = useState([])
    

    const buscaLivro = async () => {
        if (nomeLivro) {
            const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${nomeLivro}&printType=books&key=AIzaSyAb1D-7pd4TnCNCZNnaaAxYAgjP3WY0Rks`)
            const json = await result.json()
            setLivrosBusca(json.items)
        }
    }

    const adicionaLivro = async (livro) => {
        const result = await fetch(`https://restapibookapp.herokuapp.com/livro`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome: livro.volumeInfo.title, categoria: livro.volumeInfo.categories[0], autor: livro.volumeInfo.authors[0], linkThumbnail: livro.volumeInfo.imageLinks.thumbnail, userId: SyncStorage.get("userId"), token: SyncStorage.get("token") })
        })
        const json = await result.json()
        if (json.success) {
            navigation.navigate("Livro")
        }
    }

    return (
        <ScrollView>
            <SafeAreaView style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', height: '100%', backgroundColor: '#F5F5F5' }}>
                
                <Text style={{ marginTop: 30, fontFamily: "Roboto-Bold", fontSize: 23, width: "80%" }}>Novo Livro</Text>
                
                <View style={{ width: "80%", marginTop: 25, flexDirection: 'row', backgroundColor: "#fff" }}>
                    <TextInput onChangeText={text => setNomeLivro(text)} placeholder="Digite o nome do livro" style={{ backgroundColor: "#fff", color: "#B6B5B5", borderRadius: 5, paddingLeft: 15, width: "85%" }} />
                    <View style={{ backgroundColor: "#8962F8", width: "15%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Text onPress={() => buscaLivro()}>
                            <Svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
                                    stroke="#fff"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>
                        </Text>
                    </View>
                </View>

                <View style={{ width: "80%", marginTop: 20, flexDirection: 'row', flexWrap: "wrap" }}>
                    {livrosBusca.length > 0 && (
                        <Text style={{ fontSize: 23, fontFamily: "Roboto-Bold", marginBottom: 20 }}>Resultados</Text>
                    )}
                    {livrosBusca.map((item, index) => {
                        return (

                            <View style={{ flexDirection: "row", marginBottom: 20 }} key={index}>
                                <View style={{ width: "40%" }}>
                                    {item.volumeInfo.imageLinks && (
                                        <Image source={{ uri: item.volumeInfo.imageLinks.thumbnail }} style={{ width: "100%", height: 200 }} />
                                    )}
                                </View>
                                <View style={{ width: "60%", flexDirection: 'row', flexWrap: "wrap", paddingLeft: 15, paddingTop: 14 }}>
                                    <Text style={{ width: "100%", height: "35%", fontFamily: "Roboto-Bold" }}>{item.volumeInfo.title}</Text>
                                    <Text style={{ width: "100%", height: "35%" }}>{item.volumeInfo.authors}</Text>
                                    <View style={{ height: "30%", width: "100%", flexDirection: 'row', alignItems: "flex-end", justifyContent: 'flex-end' }}>
                                        <Text style={{ padding: 8, backgroundColor: "#8962F8", color: "#fff" }} onPress={() => adicionaLivro(item)}>Adicionar</Text>
                                    </View>
                                </View>
                            </View>

                        )
                    })}
                </View>

            </SafeAreaView>
        </ScrollView>
    )
}