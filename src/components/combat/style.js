import { StyleSheet } from "react-native";
import { colors } from "../../styles";

const style = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },


  // --------------------------------- EVENT

  eventbox: {
    padding: 8
  },

  event: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,

    margin: 4,
    borderRadius: 15,
    backgroundColor: colors.lightgray
  },

  eventAction: {
    fontSize: 24,
    color: "gray"
  },

  circle: {
    borderRadius: 30,
    width: 60,
    height: 60
  },

  arrow: {
    resizeMode: "stretch",
    width: "60%",
    height: 60
  },

  redText: { backgroundColor: colors.red },
  greenText: { backgroundColor: colors.green },

  // --------------------------------- HUD
  hud: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",

    marginTop: 16
  },

  actorlist: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 8,

    width: 80,
    backgroundColor: colors.lightgray
  },

  actorlistname: {
    color: "darkgray",
    fontSize: 20
  },

  portrait: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },

  tinyactor: {
    borderRadius: 5,
    width: 50,
    height: 60,
    margin: 2
  },

  playerhud: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    borderRadius: 10,
    padding: 8,
    backgroundColor: colors.lightgray
  },

  playername: {
    padding: 4,
    color: colors.darkgray,
    alignSelf: "center",
    fontSize: 18
  },

  roundedLeft: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    marginLeft: 20
  },
  roundedRight: {
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    marginRight: 20
  },

  picker: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: colors.lightgray
  },

  pickerTitle: {
    padding: 12,
    color: colors.darkgray,
    fontSize: 24
  },

  frozen: {
    opacity: 0.5
  },

  // --------------------------------- DRAWER
  actionDrawer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,

    maxHeight: 60,

    marginTop: 60,

    backgroundColor: colors.lightgray,
    borderColor: "black"
  },

  action: {
    padding: 8
  }
});

export default style;
