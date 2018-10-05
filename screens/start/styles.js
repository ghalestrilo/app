import {
  StyleSheet
} from "react-native";
import {
  colors,
  fonts
} from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  buttonLayout: {
    height: 50,
    width: 175,
    margin: 30,
    backgroundColor: colors.greenButton,
    borderColor: colors.blackBorder,
    borderWidth: 2
  },
  buttonText: {
    textAlign: "center",
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
