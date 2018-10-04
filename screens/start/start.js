import React from 'react';
import {
    Text, View,ImageBackground,TouchableOpacity,Image
  } from 'react-native';
import styles from './styles.js';

let background = '../../images/background/background.png'
let igor = '../../images/logo/logo.png'

export default class Start extends React.Component {
    static navigationOptions = {
        header:null
    }

    render(){
        return(
            <View> 
                <ImageBackground
                source = {require(background)}
                style = {{width: '100%', height: '100%'}}
                resizeMethod="resize"
                >
                    <View style = {styles.container}>
                        <View style = {styles.igorLayout}>
                            <Image
                                source = {require(igor)}
                                resizeMode = 'contain'
                                style = {styles.logo}
                            />
                        </View>
                        <View style = {styles.buttonsContainer}>
                            <TouchableOpacity
                                onPress= {() => this.props.navigation.navigate('Login')}
                                style = {styles.buttonLayout}    
                            >
                                <Text style = {styles.buttonText}>         Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress= {() => this.props.navigation.navigate('Signin')}
                                style = {styles.buttonLayout}    
                            >
                                <Text style = {styles.buttonText}>        Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );  
    }
}


