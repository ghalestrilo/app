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

export const PickerModal = ({
  visible, options, pick, title,
  disableItem, reindexed,
  badge
}) =>
  <Modal style={style.picker} isVisible={visible}>
    <Picker
      options={options}
      pick={pick}
      title={title}
      reindexed={reindexed}
      disableItem={disableItem}
      badge={badge}
    />
  </Modal>;

export const Picker = ({
  options, pick, title,
  disableItem, reindexed, badge
}) =>
  <View style={style.picker} style={{ flex: 1 }}>
    <Text style={style.pickerTitle}>{title}</Text>
    <List>
      {
        options.map((option, index) =>
          <ListItem
            key={`${option.name}_${index}`}
            title={option.name}
            disabled={disableItem && disableItem(option)}
            onPress={() => pick(reindexed === true ? option.index : index)}
            badge={badge}
            avatar={option.avatar}
          />
        )
      }
    </List>
  </View>;
