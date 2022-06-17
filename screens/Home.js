import React, { Component } from "react";
import {Text, View, StyleSheet,
        SafeAreaView, StatusBar, Platform,
        TouchableOpacity, ImageBackground, Image} from "react-native";
import IssLocationScreen from "./IssLocationScreen";

export default class HomeScreen extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView style = {styles.starwars}/>
                <ImageBackground source={require("../assets/bg_image.png")}
                style = {styles.monstrosvs}>
                <View style = {styles.mib}>
                <Text style = {styles.perdidosnoespaco}>App Nasa</Text>
                </View>
                <TouchableOpacity style = {styles.chicken}
                onPress={()=>this.props.navigation.navigate("IssLocation")}>
                    <Text style = {styles.little}>Localização da EEI</Text>
                    <Text style = {styles.alienigenas}>{"Saiba Mais --->"}</Text>
                    <Text style = {styles.tenseiShitaraSlime}>1</Text>
                    <Image source={require("../assets/iss_icon.png")}
                    style = {styles.kyuubi}></Image>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.chicken}
                 onPress={()=>this.props.navigation.navigate("Meteors")}>
                    <Text style = {styles.little}>Meteoros</Text>
                    <Text style = {styles.alienigenas}>{"Saiba Mais --->"}</Text>
                    <Text style = {styles.tenseiShitaraSlime}>2</Text>
                    <Image source={require("../assets/meteor_icon.png")}
                    style = {styles.kyuubi}></Image>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    perdidosnoespaco: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white"
    },
    starwars: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    mib: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    chicken: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: "white"
    },
    little: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 15
    },
    monstrosvs: {
        flex: 1,
        resizeMode: "cover"
    },
    alienigenas: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    tenseiShitaraSlime: {
        position:"absolute",
        color: "rgba(183,183,183,0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    kyuubi: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -100
    }
})