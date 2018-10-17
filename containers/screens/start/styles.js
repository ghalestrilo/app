import {
  StyleSheet
} from "react-native";
import {
  colors,
  fonts
} from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  background: {
    width: "100%",
    height: "100%"
  },
  buttonLayout: {
    height: 50,
    width: 175,
    margin: 30,
    backgroundColor: colors.greenButton,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: fonts.bigger,
    color: colors.buttonText
  },
  igorText: {
    fontSize: fonts.biggest,
    color: colors.yellow
  },
  igorLayout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonsContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 125
  }
});

export default styles;
