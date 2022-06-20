import axios from "axios";
import React, {Component} from "react";
import {Text, View, ImageBackground, SafeAreaView, StyleSheet, StatusBar, Alert, Image} from "react-native";
import MapView, {Marker} from "react-native-maps";

export default class IssLocationScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            location: {},
        }
    }

    componentDidMount(){
        this.getIssLocation();
    }

    getIssLocation = () => {
        axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response => {
            this.setState({location: response.data})
        })
        .catch(error => {
            Alert.alert(error.message)
        })
    }

    render(){
        //this.getIssLocation();
        if(Object.keys(this.state.location).length === 0){
            return(
                <View style = {styles.carregando}>
                    <Text> Carregando...</Text>
                </View>
            )
        } else{
        return(
            <View style ={styles.configBase}>
                <SafeAreaView style = {styles.semBarraStatus}/>
                    <ImageBackground source={require("../assets/iss_bg.jpg")}
                        style = {styles.imagemFundo}>
                            <View style = {styles.estiloTitulo}>
                        <Text style = {styles.titulo}> Tela de localização da EEI </Text>
                            </View>
                            <View style = {styles.configMapa}>
                                <MapView style = {styles.mapa} region = {{
                                    latitude: this.state.location.latitude,
                                    longitude: this.state.location.longitude,
                                    latitudeDelta: 100,
                                    longitudeDelta: 100
                                }}>
                                   <Marker coordinate={{
                                        latitude: this.state.location.latitude,
                                        longitude: this.state.location.longitude
                                   }}>
                                        <Image source={require("../assets/iss_icon.png")}
                                        style = {styles.icone}/>
                                   </Marker>

                                </MapView>
                            </View>
                            <View style = {styles.infoIss}>
                                <Text style = {styles.textIss}>Latitude: {this.state.location.latitude}</Text>
                                <Text style = {styles.textIss}>longitude: {this.state.location.longitude}</Text>
                                <Text style = {styles.textIss}>Altitude (km): {this.state.location.altitude}</Text>
                                <Text style = {styles.textIss}>Velocidade (km/h): {this.state.location.velocity}</Text>
                            </View>
                </ImageBackground>
            </View>
        )}

    }
}

const styles = StyleSheet.create({
    configBase: {
        flex: 1
    },
    semBarraStatus: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    imagemFundo: {
        flex: 1,
        resizeMode: "cover"
    },
    estiloTitulo: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    configMapa: {
        flex: 0.6,
    },
    mapa: {
        width: "100%",
        height: "100%"
    },
    icone: {
        width: 50,
        height: 50
    },
    carregando: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    infoIss: {
        flex: 0.2,
        backgroundColor: "white",
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    textIss: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    }
}) 