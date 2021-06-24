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
      <View style={styles.View_689_413}>
        <View style={styles.View_689_414} />
        <View style={styles.View_689_415} />
      </View>
      <View style={styles.View_689_416}>
        <ImageBackground style={styles.ImageBackground_689_417} />
        <View style={styles.View_689_418} />
        <View style={styles.View_689_419}>
          <View style={styles.View_689_420} />
          <ImageBackground style={styles.ImageBackground_689_421} />
          <ImageBackground style={styles.ImageBackground_689_422}>
            <View style={styles.View_689_423}>
              <Text style={styles.Text_689_423}>Go there</Text>
            </View>
          </ImageBackground>
          <View style={styles.View_689_424}>
            <View style={styles.View_689_425}>
              <View style={styles.View_689_426}>
                <Text style={styles.Text_689_426}>Fullscreen Cafe Minna</Text>
              </View>
              <View style={styles.View_689_427}>
                <Text style={styles.Text_689_427}>11am - 6pm, Open now</Text>
              </View>
            </View>
            <ImageBackground style={styles.ImageBackground_689_431}>
              <View style={styles.View_689_432}>
                <Text style={styles.Text_689_432}>Order Ahead</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1edf/6336/8e487c6f7a84d6a639effc3d1d89e6e8"
                }}
                style={styles.ImageBackground_689_434}
              />
            </ImageBackground>
          </View>
        </View>
        <View style={styles.View_689_437}>
          <View style={styles.View_689_438}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b5b/00cf/ca41435b10c136cdb4f10ed73b65e02e"
              }}
              style={styles.ImageBackground_689_439}
            />
            <View style={styles.View_689_444}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f655/f9bb/ceef6bf1ee362ba3f7a3c65fd160ccce"
                }}
                style={styles.ImageBackground_689_445}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97b1/2eab/fe8cb5180c796255049e9b79a6c51be3"
                }}
                style={styles.ImageBackground_689_449}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d65b/4662/a34abecb626e411c7ff11217f8e73f00"
                }}
                style={styles.ImageBackground_689_453}
              />
            </View>
            <View style={styles.View_689_460}>
              <View style={styles.View_689_461}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22b9/ce7d/45644e0e6bcff040780e1b7bbfcfd8ec"
                  }}
                  style={styles.ImageBackground_689_462}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_689_464}>
          <View style={styles.View_689_465} />
        </View>
      </View>
      <View style={styles.View_689_466}>
        <Text style={styles.Text_689_466}>
          Are you a designer working in Figma? Copy and paste from Figma design
          files to get quick feedback and edit text.
        </Text>
      </View>
      <View style={styles.View_689_467}>
        <View style={styles.View_689_468}>
          <Text style={styles.Text_689_468}>
            Here’s the new asset from the photographer!
          </Text>
        </View>
        <View style={styles.View_689_469}>
          <View style={styles.View_I689_469_0_21632}>
            <View style={styles.View_I689_469_0_21635}>
              <Text style={styles.Text_I689_469_0_21635}>Mindy</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f4c/dd4e/455902a3798243a549655f279faab0c5"
            }}
            style={styles.ImageBackground_I689_469_0_21657}
          />
        </View>
        <View style={styles.View_689_470}>
          <Text style={styles.Text_689_470}>Mindy</Text>
        </View>
      </View>
      <View style={styles.View_689_471}>
        <View style={styles.View_I689_471_216_146}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c714/8914/55ef3aca1a3628addb16ce4b4c1d8ea3"
            }}
            style={styles.ImageBackground_I689_471_216_147}
          />
        </View>
      </View>
      <View style={styles.View_689_472}>
        <Text style={styles.Text_689_472}>
          Double click the text to edit designs from Figma
        </Text>
      </View>
      <View style={styles.View_689_473}>
        <Text style={styles.Text_689_473}>
          Change the text to see auto layout in action
        </Text>
      </View>
      <View style={styles.View_689_474}>
        <Text style={styles.Text_689_474}>Try it out</Text>
      </View>
      <View style={styles.View_689_475}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28e7/03f9/b5d3b362f47ad1243e252d3080648de7"
          }}
          style={styles.ImageBackground_689_476}
        />
        <View style={styles.View_689_477}>
          <View style={styles.View_689_478}>
            <Text style={styles.Text_689_478}>Chris</Text>
          </View>
          <View style={styles.View_689_479}>
            <View style={styles.View_689_480}>
              <Text style={styles.Text_689_480}>Trying a different copy</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3af/6cb3/1035736857dfeeee5209c9870df93950"
        }}
        style={styles.ImageBackground_689_481}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_689_413: {
    width: wp("99.97916880233511%"),
    minWidth: wp("99.97916880233511%"),
    height: hp("99.99073605862853%"),
    minHeight: hp("99.99073605862853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_689_414: {
    width: wp("99.97916880233511%"),
    minWidth: wp("99.97916880233511%"),
    height: hp("99.99073605862853%"),
    minHeight: hp("99.99073605862853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_689_415: {
    width: wp("48.34254143646409%"),
    minWidth: wp("48.34254143646409%"),
    height: hp("85.82212182110071%"),
    minHeight: hp("85.82212182110071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.273480662983424%"),
    top: hp("6.961345955596833%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_689_416: {
    width: wp("14.374896307676538%"),
    minWidth: wp("14.374896307676538%"),
    height: hp("66.87105897626114%"),
    minHeight: hp("66.87105897626114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.91988950276243%"),
    top: hp("22.255192878338278%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_689_417: {
    width: wp("14.374897361460311%"),
    minWidth: wp("14.374897361460311%"),
    height: hp("63.0828087690676%"),
    minHeight: hp("63.0828087690676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.16471851473392007%")
  },
  View_689_418: {
    width: wp("14.374896307676538%"),
    minWidth: wp("14.374896307676538%"),
    height: hp("9.305948319703958%"),
    minHeight: hp("9.305948319703958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_689_419: {
    width: wp("14.374896307676538%"),
    minWidth: wp("14.374896307676538%"),
    height: hp("34.259062634023785%"),
    minHeight: hp("34.259062634023785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.611994078322056%"),
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    overflow: "hidden"
  },
  View_689_420: {
    width: wp("1.8399869539461082%"),
    height: hp("0.41176759878322705%"),
    minHeight: hp("0.41176759878322705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.286553651588399%"),
    top: hp("0.6588446280369027%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.15000000596046448,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_689_421: {
    width: wp("13.148239304347593%"),
    minWidth: wp("13.148239304347593%"),
    height: hp("14.823632848722646%"),
    minHeight: hp("14.823632848722646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6133190176104968%"),
    top: hp("19.435459216199916%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_689_422: {
    width: wp("13.148239304347593%"),
    minWidth: wp("13.148239304347593%"),
    height: hp("5.270625151229542%"),
    minHeight: hp("5.270625151229542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6133190176104968%"),
    top: hp("10.541246906586139%"),
    backgroundColor: "rgba(63, 128, 255, 1)",
    overflow: "hidden"
  },
  View_689_423: {
    width: wp("11.921582301018645%"),
    minWidth: wp("11.921582301018645%"),
    minHeight: hp("2.635312575614771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6133864597721015%"),
    top: hp("1.3176530334291527%"),
    justifyContent: "center"
  },
  Text_689_423: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.101255416870117,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.05550627708435059,
    textTransform: "none"
  },
  View_689_424: {
    width: wp("14.997991277368028%"),
    minWidth: wp("14.997991277368028%"),
    height: hp("5.309271883186318%"),
    minHeight: hp("5.309271883186318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6035399041781773%"),
    top: hp("2.6352902194512637%")
  },
  View_689_425: {
    width: wp("11.921626559937199%"),
    minWidth: wp("11.921626559937199%"),
    height: hp("5.270666467683605%"),
    minHeight: hp("5.270666467683605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.076374201484807%"),
    top: hp("0%")
  },
  View_689_426: {
    width: wp("11.921582301018645%"),
    minWidth: wp("11.921582301018645%"),
    minHeight: hp("2.635312575614771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006744216160115002%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_689_426: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.101255416870117,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.05550627708435059,
    textTransform: "none"
  },
  View_689_427: {
    width: wp("11.921582301018645%"),
    minWidth: wp("11.921582301018645%"),
    minHeight: hp("2.635312575614771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.6353536090794307%"),
    justifyContent: "center"
  },
  Text_689_427: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.881003379821777,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.04440501689910889,
    textTransform: "none"
  },
  ImageBackground_689_431: {
    width: wp("2.4488715177082883%"),
    minWidth: wp("2.4488715177082883%"),
    height: hp("5.2610770884890234%"),
    minHeight: hp("5.2610770884890234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04819422871847223%"),
    backgroundColor: "rgba(240, 159, 58, 1)",
    overflow: "hidden"
  },
  View_689_432: {
    width: wp("11.899985002549315%"),
    minWidth: wp("11.899985002549315%"),
    minHeight: hp("2.6305385442445117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6121725008632595%"),
    top: hp("1.3152555471358056%"),
    justifyContent: "center"
  },
  Text_689_432: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.081144332885742,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.05540572166442871,
    textTransform: "none"
  },
  ImageBackground_689_434: {
    width: wp("2.4488715177082883%"),
    minWidth: wp("2.4488715177082883%"),
    height: hp("5.2610770884890234%"),
    minHeight: hp("5.2610770884890234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.0000022639152916781313%")
  },
  View_689_437: {
    flexGrow: 1,
    width: wp("14.374896307676538%"),
    height: hp("3.623554897591339%"),
    minHeight: hp("3.623554897591339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_689_438: {
    width: wp("14.374896307676538%"),
    height: hp("3.623554897591339%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_689_439: {
    width: wp("14.374896307676538%"),
    height: hp("3.7882759592299644%"),
    minHeight: hp("3.7882759592299644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.16471851473392007%")
  },
  View_689_444: {
    width: wp("2.555410638039942%"),
    minWidth: wp("2.555410638039942%"),
    height: hp("1.7019503901903283%"),
    minHeight: hp("1.7019503901903283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.257108403832873%"),
    top: hp("0.6588657814954111%")
  },
  ImageBackground_689_445: {
    width: wp("0.9325937012941139%"),
    minWidth: wp("0.9325937012941139%"),
    height: hp("0.933339829260942%"),
    minHeight: hp("0.933339829260942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6227932924723802%"),
    top: hp("0.7686136030655568%")
  },
  ImageBackground_689_449: {
    width: wp("0.5854368209838867%"),
    minWidth: wp("0.5854368209838867%"),
    height: hp("0.9030751729223777%"),
    minHeight: hp("0.9030751729223777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8443758632596712%"),
    top: hp("0.7684023514699483%")
  },
  ImageBackground_689_453: {
    width: wp("0.6516366373768169%"),
    minWidth: wp("0.6516366373768169%"),
    height: hp("0.878459338972052%"),
    minHeight: hp("0.878459338972052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7960751785368885%")
  },
  View_689_460: {
    width: wp("2.0699852737932574%"),
    minWidth: wp("2.0699852737932574%"),
    height: hp("1.7294239927116417%"),
    minHeight: hp("1.7294239927116417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8049221987223767%"),
    top: hp("0.9882353179886358%")
  },
  View_689_461: {
    width: wp("2.0699852737932574%"),
    minWidth: wp("2.0699852737932574%"),
    height: hp("1.7294239927116417%"),
    minHeight: hp("1.7294239927116417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_689_462: {
    width: wp("2.0699852737932574%"),
    minWidth: wp("2.0699852737932574%"),
    height: hp("1.7294239927116417%"),
    minHeight: hp("1.7294239927116417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_689_464: {
    flexGrow: 1,
    width: wp("14.374896307676538%"),
    height: hp("2.8000194877828264%"),
    minHeight: hp("2.8000194877828264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64.07104401630887%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_689_465: {
    width: wp("5.1366305482980295%"),
    height: hp("0.41176759878322705%"),
    minHeight: hp("0.41176759878322705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.638267222030386%"),
    top: hp("1.7293867796040558%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_689_466: {
    width: wp("40.97665186086412%"),
    minWidth: wp("40.97665186086412%"),
    minHeight: hp("7.566765578635016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.243563320096685%"),
    top: hp("7.121661721068249%"),
    justifyContent: "center"
  },
  Text_689_466: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_689_467: {
    width: wp("9.737569060773481%"),
    minWidth: wp("9.737569060773481%"),
    height: hp("20.919881305637983%"),
    minHeight: hp("20.919881305637983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.31767955801105%"),
    top: hp("54.154302670623146%"),
    backgroundColor: "rgba(255, 234, 121, 1)",
    overflow: "hidden"
  },
  View_689_468: {
    width: wp("8.1146408839779%"),
    minWidth: wp("8.1146408839779%"),
    minHeight: hp("4.183976374323361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8114640883977895%"),
    top: hp("1.7433189143059096%"),
    justifyContent: "center"
  },
  Text_689_468: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 7.40000057220459,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10340000853538527,
    textTransform: "none"
  },
  View_689_469: {
    width: wp("2.209944751381215%"),
    minWidth: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    minHeight: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8114640883977895%"),
    top: hp("9.480711260605986%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I689_469_0_21632: {
    flexGrow: 1,
    width: wp("2.8314917127071824%"),
    height: hp("2.6706231454005933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8646408839779003%"),
    top: hp("4.74777448071216%"),
    backgroundColor: "rgba(0, 181, 206, 1)"
  },
  View_I689_469_0_21635: {
    flexGrow: 1,
    width: wp("2.2790055248618786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2762430939226528%"),
    top: hp("0.1483679525222641%"),
    justifyContent: "center"
  },
  Text_I689_469_0_21635: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11,
    textTransform: "none"
  },
  ImageBackground_I689_469_0_21657: {
    flexGrow: 1,
    width: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_689_470: {
    width: wp("1.4200621546961325%"),
    minWidth: wp("1.4200621546961325%"),
    minHeight: hp("1.3946586971113166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8114640883977895%"),
    top: hp("17.78188643186666%"),
    justifyContent: "center"
  },
  Text_689_470: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6.050000190734863,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07755000377893452,
    textTransform: "none"
  },
  View_689_471: {
    width: wp("5.179558011049724%"),
    minWidth: wp("5.179558011049724%"),
    height: hp("6.2456725259209245%"),
    minHeight: hp("6.2456725259209245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.32596685082873%"),
    top: hp("61.94459818944733%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I689_471_216_146: {
    flexGrow: 1,
    width: wp("5.180996425902646%"),
    height: hp("6.243710843321123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0001086679339721286%")
  },
  ImageBackground_I689_471_216_147: {
    width: wp("5.180996425902646%"),
    height: hp("6.243710843321123%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_689_472: {
    width: wp("14.374896307676538%"),
    minWidth: wp("14.374896307676538%"),
    minHeight: hp("5.489614243323442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.114268603245854%"),
    top: hp("11.777285793768547%"),
    justifyContent: "center"
  },
  Text_689_472: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4559999942779541,
    textTransform: "none"
  },
  View_689_473: {
    width: wp("18.30256551668789%"),
    minWidth: wp("18.30256551668789%"),
    minHeight: hp("5.489614243323442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.03591160220995%"),
    top: hp("31.899109792284868%"),
    justifyContent: "center"
  },
  Text_689_473: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4559999942779541,
    textTransform: "none"
  },
  View_689_474: {
    width: wp("5.870165745856354%"),
    minWidth: wp("5.870165745856354%"),
    minHeight: hp("2.8189910979228485%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.79281767955801%"),
    top: hp("10.44197422106825%"),
    justifyContent: "center"
  },
  Text_689_474: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4559999942779541,
    textTransform: "none"
  },
  View_689_475: {
    width: wp("11.464088397790055%"),
    minWidth: wp("11.464088397790055%"),
    height: hp("12.759643916913946%"),
    minHeight: hp("12.759643916913946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.284530386740332%"),
    top: hp("45.25222551928783%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_689_476: {
    width: wp("2.209944751381215%"),
    minWidth: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    minHeight: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_689_477: {
    width: wp("11.740331491712707%"),
    minWidth: wp("11.740331491712707%"),
    height: hp("7.71513353115727%"),
    minHeight: hp("7.71513353115727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.864640883977895%"),
    top: hp("4.45103857566766%"),
    backgroundColor: "rgba(24, 160, 251, 1)",
    overflow: "hidden"
  },
  View_689_478: {
    flexGrow: 1,
    width: wp("2.0027624309392267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8287292817679628%"),
    top: hp("1.1869436201780346%"),
    justifyContent: "center"
  },
  Text_689_478: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11,
    textTransform: "none"
  },
  View_689_479: {
    width: wp("9.806629834254144%"),
    minWidth: wp("9.806629834254144%"),
    height: hp("2.967359050445104%"),
    minHeight: hp("2.967359050445104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8287292817679628%"),
    top: hp("3.560830860534125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_689_480: {
    width: wp("9.806629834254144%"),
    minWidth: wp("9.806629834254144%"),
    minHeight: hp("2.967359050445104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_689_480: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.0325,
    textTransform: "none"
  },
  ImageBackground_689_481: {
    width: wp("5.976910354024139%"),
    minWidth: wp("5.976910354024139%"),
    height: hp("8.671079686558212%"),
    minHeight: hp("8.671079686558212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.2817679558011%"),
    top: hp("60.23738872403561%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
