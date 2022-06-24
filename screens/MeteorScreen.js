import React, { Component } from "react";
import {Alert, Text, View} from "react-native";

export default class MeteorScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            meteors: {}
        }
    }

    componentDidMount(){
        this.getMeteors();
    }

    getMeteors = () => {
        axios
        .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=wACqgxhLeFhFHhzRqr0g3Avs6KldnNLwq6as6qVj")
        .then(response => {
            this.setState({meteors: response.data.near_earth_objects})
        })
        .catch(error => {
            Alert.alert(error.message);
        })
    }
    
    
    render(){
        if(Object.keys(this.state.meteors).length === 0){
            return(
                <View style = {{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text>Carregando...</Text>
                </View> 
            )
        } else {
            let meteor_matriz = Object.keys(this.state.meteors)
            .map(meteor_date => {
                return this.state.meteors[meteor_date]
            })
            let meteors = [].concat.apply([],meteor_matriz);

            meteors.forEach(function(element){
                let diameter = 
                (element.estimated_diameter.kilometers.estimated_diameter_min +
                    element.estimated_diameter.kilometers.estimated_diameter_max)/2;
                let pontAmeaca = 
                (diameter / 
                element.close_approach_data[0].miss_distance.kilometers) * 1000000000;
                element.pont_Ameaca = pontAmeaca;
            })

        return(
            <View style = {{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Tela dos meteoros!</Text>
            </View>
        )
    }
}
}