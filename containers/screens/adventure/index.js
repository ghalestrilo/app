import React from "react";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-view";
import { Text } from "react";

class Adventure extends React.Component {
  render = () => (
    <SafeAreaView>
      <Text>
        ADVENTURE
      </Text>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => ({
  adventures: state.adventures
});

export default connect(mapStateToProps)(Adventure);
