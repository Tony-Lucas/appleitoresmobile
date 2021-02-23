import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Svg, { Circle, Path } from "react-native-svg"

export default function CadastroSucesso({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: "center", backgroundColor: "#8962F8" }}>
            <View style={{ backgroundColor: "#fff", flexDirection: "row", flexWrap: "wrap", width: "80%", paddingTop: 40, paddingBottom: 40, borderRadius: 10 }}>
                <View style={{ width: "100%",flexDirection: "row",justifyContent: "center"}}>
                    <Text>
                        <Svg
                            width={52}
                            height={52}
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Circle cx={22} cy={22} r={22} fill="#2ED573" />
                            <Path
                                d="M30 16L19 27l-5-5"
                                stroke="#fff"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </Svg>
                    </Text>
                </View>
                <View style={{ width: "100%",flexDirection: "row",justifyContent: "center"}}>
                    <Text style={{fontFamily:"Roboto-Bold",color:"black",marginTop:17,fontSize:19}}>Conta criada!</Text>
                </View>
                <View style={{ width: "100%",flexDirection: "row",justifyContent: "center"}}>
                <Text  style={{ fontFamily: "Roboto-Regular", color: "#9A9A9A", width: "80%", marginTop: 22, backgroundColor: "#8962F8", color: "#fff", textAlign: "center", paddingTop: 13, paddingBottom: 13, borderRadius: 5 }} onPress={() => navigation.navigate("Login")}>Logar</Text>
                </View>
                
            </View>
        </SafeAreaView>
    )
}