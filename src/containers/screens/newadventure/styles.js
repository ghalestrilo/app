import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputbackground: {
    flex: 1,
    margin: "10%",
    borderRadius: 10,
    backgroundColor: colors.inputbackground
  },
  buttonLayout: {
    height: 50,
    width: 100,
    margin: 30,
    backgroundColor: colors.greenButton,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center"
  },
  images: {
    flex: 2,
    alignItems: "center",
    width: "90%"
  },
  image: {
    flex: 1,
    flexDirection: "row",
    width: "90%"
  }
});

export default styles;
