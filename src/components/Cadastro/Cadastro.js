import React, { useState } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { set } from 'react-native-reanimated'
import Svg, { Path, Ellipse } from "react-native-svg"
import Sombra from "../../../assets/img/Ellipse 1.png"
export default function Cadastro({ navigation }) {

    const [nomeV, setNome] = useState()
    const [emailV, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [confirmaSenha, setConfirmaSenha] = useState()
    const [isValid, setIsValid] = useState(true)
    const [showSeta, setShowSeta] = useState(true)
    const [hasEmail,setHasEmail] = useState(false)
    
    const cadastraUsuario = async () => {
        console.log(typeof emailV)
        if (nomeV && emailV && senha && confirmaSenha && isValid) {
            const result = await fetch("https://restapibookapp.herokuapp.com/user", {
                method: "post",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({ nome: nomeV, email: emailV, password: senha })
            })
            const json = await result.json();
            if (json.success) {
                navigation.navigate("CadastroSucesso")
            } else if(!json.success && json.message === "Usuario já cadastrado"){
                setHasEmail(true)
                setTimeout(() => {
                    setHasEmail(false)
                },3000)
            }
        }
    }

    const verificaSenha = (text) => {
        setSenha(text)
        if (text === confirmaSenha) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }

    const verificaConfirmaSenha = (text) => {
        setConfirmaSenha(text)
        if (text === senha) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: "space-between", backgroundColor: "#8962F8" }}>

            {showSeta && (

                <Text style={{ padding: 18, width: "100%" }} onPress={() => navigation.navigate("Login")}>
                    <Svg
                        width={35}
                        height={35}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"

                    >
                        <Path
                            d="M10.667 12l-4 4 4 4 .942-.943-2.39-2.39h16.114v-1.334H9.22l2.39-2.39-.942-.943z"
                            fill="#fff"
                        />
                    </Svg>
                </Text>

            )}



            <View style={{ backgroundColor: "#fff", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", width: "80%", paddingTop: 30, paddingBottom: 40, borderRadius: 5 }}>
                <Text style={{ position: "absolute", right: 25 }}>
                    <Svg
                        width={23}
                        height={71}
                        viewBox="0 0 23 71"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"

                    >
                        <Path d="M0 0h23v70.5l-11.5-12L0 70.5V0z" fill="#6B3FE9" />
                    </Svg>
                </Text>
                <Text style={{ fontFamily: "Roboto-Bold", width: "80%", fontSize: 23, marginBottom: 20 }}>Criar Conta</Text>
                <Text style={{ fontFamily: "Roboto-Regular", color: "#9A9A9A", width: "80%", marginBottom: 12, marginTop: 12 }}>Nome Completo</Text>
                <TextInput onChangeText={text => setNome(text)} style={{ paddingLeft: 15, borderColor: "#E5E5E5", borderWidth: 1, width: "80%", height: 45, borderRadius: 7, fontFamily: "Roboto-Regular" }} />
                <Text style={{ fontFamily: "Roboto-Regular", color: "#9A9A9A", width: "80%", marginBottom: 12, marginTop: 12 }}>Email</Text>
                <TextInput onChangeText={text => setEmail(text)} style={{ paddingLeft: 15, borderColor: "#E5E5E5", borderWidth: 1, width: "80%", height: 45, borderRadius: 7, fontFamily: "Roboto-Regular" }} />
                {hasEmail && (
                    <Text style={{ fontFamily: "Roboto-Regular", color: "#DF1125", width: "80%", marginBottom: 12, marginTop: 12,textAlign: "right"}}>Email já cadastrado</Text>
                )}
                <Text style={{ fontFamily: "Roboto-Regular", color: "#9A9A9A", width: "80%", marginBottom: 12, marginTop: 12 }}>Senha</Text>
                <TextInput secureTextEntry={true} onChangeText={text => verificaSenha(text)} style={{ paddingLeft: 15, borderColor: "#E5E5E5", borderWidth: 1, width: "80%", height: 45, borderRadius: 7, fontFamily: "Roboto-Regular" }} />
                <Text style={{ fontFamily: "Roboto-Regular", color: "#9A9A9A", width: "80%", marginBottom: 12, marginTop: 12 }}>Confirmar senha</Text>
                <TextInput secureTextEntry={true} onChangeText={text => verificaConfirmaSenha(text)} style={{ paddingLeft: 15, borderColor: "#E5E5E5", borderWidth: 1, width: "80%", height: 45, borderRadius: 7, fontFamily: "Roboto-Regular" }} />
                {!isValid && (
                    <Text style={{ fontFamily: "Roboto-Regular", color: "#DF1125", width: "80%", marginBottom: 12, marginTop: 8, textAlign: "right" }}>Senhas não são iguais</Text>
                )}
                <Text onPress={() => cadastraUsuario()} style={{ fontFamily: "Roboto-Regular", color: "#9A9A9A", width: "80%", marginTop: 22, backgroundColor: "#8962F8", color: "#fff", textAlign: "center", paddingTop: 13, paddingBottom: 13, borderRadius: 5 }}>Finalizar</Text>
            </View>
            <View style={{ width: "80%", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: 10 }}>
                <Text>
                    <Svg
                        width={313}
                        height={20}
                        viewBox="0 0 313 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Ellipse cx={156.5} cy={10} rx={156.5} ry={10} fill="#6B3FE9" />
                    </Svg>
                </Text>
            </View>
            <Text></Text>


        </SafeAreaView>
    )
}