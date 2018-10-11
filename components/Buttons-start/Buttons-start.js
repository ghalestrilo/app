import React from 'react';
import {
    TouchableOpacity,
    Text,
  } from "react-native";
import styles from "./styles";

const Buttons = (props) => (
    <TouchableOpacity
        style={styles.buttonLayout}
        onPress={props.navigate}
    >
        <Text style = {styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
);

export default Buttons