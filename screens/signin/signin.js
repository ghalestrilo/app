import React from 'react';
import {
    Text, View,ImageBackground,TouchableOpacity,TextInput,Image
  } from 'react-native';
import styles from './styles.js';

let criar = '../../images/buttons/signin-criar.png'
let igor = '../../images/logo/logo.png'
let background = '../../images/background/background.png'


const Inputs = ({children}) =>(
    <TextInput
    placeholder = {children}
    style= {styles.inputs}
    />  
);

export default class Signin extends React.Component {
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
                            <Inputs> E-mail</Inputs>
                            <Inputs> Senha</Inputs>
                            <Inputs> Nome do Usuario</Inputs>
                            <Inputs> Data de Nascimento</Inputs>
                            <Inputs> Sexo</Inputs>
                            <TouchableOpacity
                            style={{alignItems:'flex-end'}}>
                                <Image 
                                source = {require(criar)}
                                style = {styles.image}
                                resizeMode = 'contain'
                                />
                            </TouchableOpacity> 
                        </View>  
                    </View>
                </ImageBackground>
            </View>
        );  
    }
}


