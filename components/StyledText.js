import React from "react";
import { Text } from "react-native";

const StyledText = (props) => (
  <Text {...props} style={[ props.style, { fontFamily: "space-mono" } ]} />
);
export default StyledText;
