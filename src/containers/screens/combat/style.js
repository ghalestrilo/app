import { StyleSheet } from "react-native";
import { colors } from "../../../styles";

const style = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#060606"
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
    backgroundColor: "lightgray"
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

  // --------------------------------- HUD
  hud: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",

    marginTop: 16
  },

  actorstack: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 8,

    width: 80,
    backgroundColor: "lightgray"
  },

  actorstackname: {
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
    borderRadius: 10,
    padding: 16,
    backgroundColor: "lightgray",
    margin: "auto"
  },

  playername: {
    color: "darkgray"
  },

  roundedLeft: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10
  },
  roundedRight: {
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },




  // --------------------------------- DRAWER
  actionDrawer: {
    flex: 1,
    flexDirection: "row",
    height: 60,
    backgroundColor: "lightgray",
    borderColor: "black"
  }
});

export default style;
