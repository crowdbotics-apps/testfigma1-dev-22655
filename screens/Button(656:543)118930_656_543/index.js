import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_656_544}>
        <Text style={styles.Text_656_544}>Button</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(63, 128, 255, 1)" },
  View_2: { height: hp("100%") },
  View_656_544: {
    width: wp("53.62318840579711%"),
    minWidth: wp("53.62318840579711%"),
    minHeight: hp("52.94117647058824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.18840579710145%"),
    top: hp("23.52941176470588%"),
    justifyContent: "center"
  },
  Text_656_544: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.101255416870117,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.05550627708435059,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
