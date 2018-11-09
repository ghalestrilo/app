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
  igorLayout: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  inputs: {
    fontSize: fonts.bigbig,
    margin: 5,
    color: colors.yellow
  },
  buttonsContainer: {
    flex: 4,
    marginBottom: "10%",
    marginLeft: "10%",
    marginRight: "10%"
  },
  image: {
    width: 120,
    height: 100
  },
  logo: {
    width: 200,
    height: 125
  }
});

export default styles;
