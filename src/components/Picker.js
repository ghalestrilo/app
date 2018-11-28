import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from "react-native";
import {
  List,
  ListItem
} from "react-native-elements";
import Modal from "react-native-modal";
import { colors } from "../styles";


const style = StyleSheet.create({
  picker: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "lightgray"
  },

  pickerTitle: {
    padding: 12,
    color: colors.darkgray,
    fontSize: 24
  }
});

export const Picker = ({ visible, options, pick, title }) =>
  <Modal style={style.picker} isVisible={visible}>
    <View style={{ flex: 1 }}>
      <Text style={style.pickerTitle}>{title}</Text>
      <List>
        {
          options.map((option, index) =>
            <ListItem
              key={`${option.name}_${index}`}
              title={option.name}
              onPress={() => pick(option.index)}
              avatar={option.avatar}
            />
          )
        }
      </List>
    </View>
  </Modal>;