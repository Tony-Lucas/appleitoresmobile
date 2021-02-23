import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Keyboard } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Svg, { Path, Rect } from "react-native-svg"
import { useFocusEffect } from '@react-navigation/native';
import SyncStorage from 'sync-storage';

export default function Login({ navigation }) {

    const [showBook, setShowBook] = useState(true);
    const [email,setEmail] = useState("tonyjogos123@gmail.com");
    const [senha,setSenha] = useState("");

    const fazLogin = async () => {
        if(email && senha ){
            const result = await fetch("https://restapibookapp.herokuapp.com/login",{
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({ email: email,password:senha})
            })
            const json = await result.json();
            if(json.success){
                SyncStorage.set("token",json.token)
                SyncStorage.set("userId",json.id)
                navigation.navigate("LogedNavigation")
            }
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
            <View style={{ flexDirection: 'row', height: '25%', justifyContent: "flex-end" }}>
                <Text>
                    <Svg
                        width={182}
                        height={182}
                        viewBox="0 0 182 182"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M91.095-.58H182.27v182.544L0 22.274 21.226-.58h69.869z"
                            fill="#8962F8"
                        />
                        <Path
                            fill="#F7EB63"
                            d="M52.188 53.224l62.133-26.225 39.064 92.553-62.134 26.225z"
                        />
                        <Rect
                            x={65.254}
                            y={60.768}
                            width={46.868}
                            height={3.513}
                            rx={1.756}
                            transform="rotate(-22.88 65.254 60.768)"
                            fill="#DBCD32"
                        />
                        <Rect
                            x={69.048}
                            y={71.918}
                            width={46.868}
                            height={3.513}
                            rx={1.756}
                            transform="rotate(-22.88 69.048 71.918)"
                            fill="#DBCD32"
                        />
                        <Rect
                            x={73.965}
                            y={82.455}
                            width={28.2}
                            height={3.513}
                            rx={1.756}
                            transform="rotate(-22.88 73.965 82.455)"
                            fill="#DBCD32"
                        />
                        <Path
                            fill="#DBCD32"
                            d="M47 55.543l5.553-2.343 39.058 92.555-5.552 2.343z"
                        />
                    </Svg>
                </Text>


            </View>
            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ width: '60%' }}>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: 24 }}>Login</Text>
                    <View style={{ height: 48, borderWidth: 1, borderColor: "#D1D1D1", borderRadius: 5, marginTop: 45 }}>
                        <Text style={{ position: 'absolute', top: -11, left: 24, fontFamily: "VarelaRound-Regular", backgroundColor: "#fff", color: "#8962F8", paddingLeft: 10, paddingRight: 10 }}>Email</Text>
                        <TextInput value={email} style={{ paddingLeft: 15 }} onChangeText={text => setEmail(text)}/>
                    </View>
                    <View style={{ height: 48, borderWidth: 1, borderColor: "#D1D1D1", borderRadius: 5, marginTop: 32 }}>
                        <Text style={{ position: 'absolute', top: -11, left: 24, fontFamily: "VarelaRound-Regular", backgroundColor: "#fff", color: "#8962F8", paddingLeft: 10, paddingRight: 10 }}>Senha</Text>
                        <TextInput secureTextEntry={true} style={{ paddingLeft: 15 }} onChangeText={text => setSenha(text)}/>
                    </View>

                    <Text onPress={() => fazLogin()} style={{ fontFamily: "VarelaRound-Regular", textAlign: 'center', color: "#fff",backgroundColor:"#8962F8",marginTop:20,padding:12,borderRadius:7 }}>Entrar</Text>
                        
                    <View style={{ marginTop: 25 }}>
                        <Text style={{ fontFamily: "Roboto-Regular", color: "#AEAEAE", fontSize: 13 }}>Ainda não é cadastrado ? <Text style={{ color: "#8962F8" }} onPress={() => navigation.navigate("Cadastro")}>Clique Aqui!</Text></Text>
                        <Text style={{ fontFamily: "Roboto-Regular", color: "#8962F8", marginTop: 15, fontSize: 13 }}>Esqueceu a senha ?</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={[{ width: '77%', backgroundColor: "#8962F8", position: "absolute", height: '100%', top: 90, right: 200 }, { transform: [{ rotate: "30deg" }] }]} >
                    <Text></Text>
                </View>
            </View>
        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    posicaoLivro: {

    }
})