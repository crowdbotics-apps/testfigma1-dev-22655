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
      <ImageBackground style={styles.ImageBackground_656_494} />
      <View style={styles.View_656_495} />
      <View style={styles.View_656_496}>
        <View style={styles.View_656_497} />
        <ImageBackground style={styles.ImageBackground_656_498} />
        <ImageBackground style={styles.ImageBackground_656_499}>
          <View style={styles.View_656_500}>
            <Text style={styles.Text_656_500}>Go there</Text>
          </View>
        </ImageBackground>
        <View style={styles.View_656_501}>
          <View style={styles.View_656_502}>
            <View style={styles.View_656_503}>
              <Text style={styles.Text_656_503}>Fullscreen Cafe Minna</Text>
            </View>
            <View style={styles.View_656_504}>
              <Text style={styles.Text_656_504}>11am - 6pm, Open now</Text>
            </View>
          </View>
          <ImageBackground style={styles.ImageBackground_656_508}>
            <View style={styles.View_656_509}>
              <Text style={styles.Text_656_509}>Order Ahead</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1edf/6336/8e487c6f7a84d6a639effc3d1d89e6e8"
              }}
              style={styles.ImageBackground_656_511}
            />
          </ImageBackground>
        </View>
      </View>
      <View style={styles.View_656_514}>
        <View style={styles.View_656_515}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b5b/00cf/ca41435b10c136cdb4f10ed73b65e02e"
            }}
            style={styles.ImageBackground_656_516}
          />
          <View style={styles.View_656_521}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f655/f9bb/ceef6bf1ee362ba3f7a3c65fd160ccce"
              }}
              style={styles.ImageBackground_656_522}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97b1/2eab/fe8cb5180c796255049e9b79a6c51be3"
              }}
              style={styles.ImageBackground_656_526}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d65b/4662/a34abecb626e411c7ff11217f8e73f00"
              }}
              style={styles.ImageBackground_656_530}
            />
          </View>
          <View style={styles.View_656_537}>
            <View style={styles.View_656_538}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22b9/ce7d/45644e0e6bcff040780e1b7bbfcfd8ec"
                }}
                style={styles.ImageBackground_656_539}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_656_541}>
        <View style={styles.View_656_542} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_656_494: {
    width: wp("100.00000733072262%"),
    minWidth: wp("100.00000733072262%"),
    height: hp("94.33499294734014%"),
    minHeight: hp("94.33499294734014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2463225754992113%")
  },
  View_656_495: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.916256841405072%"),
    minHeight: hp("13.916256841405072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_656_496: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.23152400829418%"),
    minHeight: hp("51.23152400829418%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48.76847260621241%"),
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    overflow: "hidden"
  },
  View_656_497: {
    width: wp("12.800001576105362%"),
    height: hp("0.6157635381987929%"),
    minHeight: hp("0.6157635381987929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.73286260319825%"),
    top: hp("0.9852462905825803%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.15000000596046448,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_656_498: {
    width: wp("91.46667233575883%"),
    minWidth: wp("91.46667233575883%"),
    height: hp("22.167486317189855%"),
    minHeight: hp("22.167486317189855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266597855617019%"),
    top: hp("29.06408170251858%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_656_499: {
    width: wp("91.46667233575883%"),
    minWidth: wp("91.46667233575883%"),
    height: hp("7.88177311966988%"),
    minHeight: hp("7.88177311966988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266597855617019%"),
    top: hp("15.763534390112838%"),
    backgroundColor: "rgba(63, 128, 255, 1)",
    overflow: "hidden"
  },
  View_656_500: {
    width: wp("82.93334467151764%"),
    minWidth: wp("82.93334467151764%"),
    minHeight: hp("3.9936905236518694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.267067021864613%"),
    top: hp("1.7485667175122614%"),
    justifyContent: "center"
  },
  Text_656_500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.101255416870117,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.05550627708435059,
    textTransform: "none"
  },
  View_656_501: {
    width: wp("104.33460496935025%"),
    minWidth: wp("104.33460496935025%"),
    height: hp("7.9395660312050405%"),
    minHeight: hp("7.9395660312050405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1985687497159345%"),
    top: hp("3.9408531280875607%")
  },
  View_656_502: {
    width: wp("82.93365256186763%"),
    minWidth: wp("82.93365256186763%"),
    height: hp("7.71276759616968%"),
    minHeight: hp("7.71276759616968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.40101838398618%"),
    top: hp("0%")
  },
  View_656_503: {
    width: wp("82.93334467151764%"),
    minWidth: wp("82.93334467151764%"),
    minHeight: hp("3.9936905236518694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00046916624759774095%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_656_503: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.101255416870117,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.05550627708435059,
    textTransform: "none"
  },
  View_656_504: {
    width: wp("82.93334467151764%"),
    minWidth: wp("82.93334467151764%"),
    minHeight: hp("3.9936905236518694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.719076226144466%"),
    justifyContent: "center"
  },
  Text_656_504: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.881003379821777,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.04440501689910889,
    textTransform: "none"
  },
  ImageBackground_656_508: {
    width: wp("17.03575083460277%"),
    minWidth: wp("17.03575083460277%"),
    height: hp("7.867494801236329%"),
    minHeight: hp("7.867494801236329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0720703835953671%"),
    backgroundColor: "rgba(240, 159, 58, 1)",
    overflow: "hidden"
  },
  View_656_509: {
    width: wp("82.7831015114484%"),
    minWidth: wp("82.7831015114484%"),
    minHeight: hp("3.9337474006181643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.258622029407927%"),
    top: hp("1.9668531757553112%"),
    justifyContent: "center"
  },
  Text_656_509: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.081144332885742,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.05540572166442871,
    textTransform: "none"
  },
  ImageBackground_656_511: {
    width: wp("17.03575083460277%"),
    minWidth: wp("17.03575083460277%"),
    height: hp("7.867494801236329%"),
    minHeight: hp("7.867494801236329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.0000033854934073929144%")
  },
  View_656_514: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.418719178468045%"),
    minHeight: hp("5.418719178468045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_515: {
    width: wp("100%"),
    height: hp("5.418719178468045%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_656_516: {
    width: wp("100%"),
    height: hp("5.665045562647337%"),
    minHeight: hp("5.665045562647337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.2463225754992113%")
  },
  View_656_521: {
    width: wp("17.776897887432355%"),
    minWidth: wp("17.776897887432355%"),
    height: hp("2.545122533194086%"),
    minHeight: hp("2.545122533194086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31088421710082%"),
    top: hp("0.985278029583254%")
  },
  ImageBackground_656_522: {
    width: wp("6.487655154744224%"),
    minWidth: wp("6.487655154744224%"),
    height: hp("1.3957305948934842%"),
    minHeight: hp("1.3957305948934842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.28907824959937%"),
    top: hp("1.149396487557364%")
  },
  ImageBackground_656_526: {
    width: wp("4.072633349509794%"),
    minWidth: wp("4.072633349509794%"),
    height: hp("1.3504723668918786%"),
    minHeight: hp("1.3504723668918786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873961419872998%"),
    top: hp("1.1490805787040548%")
  },
  ImageBackground_656_530: {
    width: wp("4.533157133306259%"),
    minWidth: wp("4.533157133306259%"),
    height: hp("1.313661473917888%"),
    minHeight: hp("1.313661473917888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.1904629457408327%")
  },
  View_656_537: {
    width: wp("14.40000142949091%"),
    minWidth: wp("14.40000142949091%"),
    height: hp("2.5862069768112663%"),
    minHeight: hp("2.5862069768112663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.599499165030694%"),
    top: hp("1.4778220389662164%")
  },
  View_656_538: {
    width: wp("14.40000142949091%"),
    minWidth: wp("14.40000142949091%"),
    height: hp("2.5862069768112663%"),
    minHeight: hp("2.5862069768112663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_656_539: {
    width: wp("14.40000142949091%"),
    minWidth: wp("14.40000142949091%"),
    height: hp("2.5862069768112663%"),
    minHeight: hp("2.5862069768112663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_656_541: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.187191784680453%"),
    minHeight: hp("4.187191784680453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("95.81281498630636%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_542: {
    width: wp("35.73333983324073%"),
    height: hp("0.6157635381987929%"),
    minHeight: hp("0.6157635381987929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.26643951200845%"),
    top: hp("2.5861513277634174%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
