import { StyleSheet } from "react-native";
import { colors } from "../../styles";

const style = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },

  screenHeader: {
    backgroundColor: colors.lightgray,
    color: colors.darkgray,
    fontSize: 40
  },

  actionDrawer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,

    maxHeight: 60,

    marginTop: 60,

    backgroundColor: colors.lightgray,
    borderColor: colors.black
  },

  action: {
    padding: 8
  },

  // ---------------------------------------- Events

  eventbox: {
    padding: 8
  },

  event: {
    flex: 1,
    padding: 16,

    margin: 4,
    borderRadius: 15,
    backgroundColor: colors.lightgray
  },


  // ---------------------------------------- Combat Editor

  combatEditor: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: colors.lightgray,
    marginBottom: 80
  },
  combatEditorHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxHeight: 60,
    padding: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: colors.white
  },
  combatEditorHeaderText: {
    fontSize: 24,
    color: colors.darkgray
  },
  combatEditorHeaderIcon: {
    color: colors.darkgray
  },
  combatEditorScroll: {
    flex: 1
  },
  combatEditorSectionTitle: {
    fontSize: 20,
    margin: 8,
    color: colors.darkgray
  },

  combatEditorStartButton: {
    flex: 1,
    flexDirection: "row",

    maxHeight: 60,
    margin: 8,

    borderRadius: 10
  },


  test: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "lightgray"
  }
});

export default style;
