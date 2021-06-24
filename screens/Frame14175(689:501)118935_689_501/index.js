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
      <View style={styles.View_689_502}>
        <View style={styles.View_689_503} />
        <View style={styles.View_689_504} />
      </View>
      <View style={styles.View_689_505}>
        <View style={styles.View_689_506}>
          <View style={styles.View_689_507}>
            <Text style={styles.Text_689_507}>
              Jamming with someone else? Quickly share your thoughts directly in
              FigJam with cursor chat (/).
            </Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d68/fb2d/c9274aa4f0c098ad999d8a1497399803"
        }}
        style={styles.ImageBackground_689_508}
      />
      <View style={styles.View_689_518}>
        <Text style={styles.Text_689_518}>Try it out</Text>
      </View>
      <View style={styles.View_689_519}>
        <View style={styles.View_689_520} />
      </View>
      <View style={styles.View_689_521}>
        <View style={styles.View_689_522}>
          <View style={styles.View_689_523}>
            <View style={styles.View_689_524} />
            <View style={styles.View_689_525}>
              <View style={styles.View_I689_525_3_137}>
                <View style={styles.View_I689_525_3_138} />
              </View>
              <View style={styles.View_I689_525_3_139}>
                <Text style={styles.Text_I689_525_3_139}>/</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_689_526}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1957/1a8a/b627ef219f2b307ddd260d7e009d84f0"
              }}
              style={styles.ImageBackground_689_527}
            />
            <View style={styles.View_689_528}>
              <View style={styles.View_689_529}>
                <View style={styles.View_689_530} />
                <View style={styles.View_689_531}>
                  <Text style={styles.Text_689_531}>Say something...</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_689_532}>
            <Text style={styles.Text_689_532}>Activate cursor chat with </Text>
          </View>
        </View>
        <View style={styles.View_689_533}>
          <View style={styles.View_689_534}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1957/1a8a/b627ef219f2b307ddd260d7e009d84f0"
              }}
              style={styles.ImageBackground_689_535}
            />
            <View style={styles.View_689_536}>
              <View style={styles.View_689_537}>
                <View style={styles.View_689_538}>
                  <Text style={styles.Text_689_538}>100% yesss</Text>
                </View>
                <View style={styles.View_689_539} />
              </View>
            </View>
          </View>
          <View style={styles.View_689_540}>
            <Text style={styles.Text_689_540}>
              Others can see your message as you type
            </Text>
          </View>
        </View>
        <View style={styles.View_689_541}>
          <View style={styles.View_689_542}>
            <Text style={styles.Text_689_542}>Hit</Text>
          </View>
          <View style={styles.View_689_543}>
            <View style={styles.View_I689_543_3_137}>
              <View style={styles.View_I689_543_3_138} />
            </View>
            <View style={styles.View_I689_543_3_139}>
              <Text style={styles.Text_I689_543_3_139}>enter</Text>
            </View>
          </View>
          <View style={styles.View_689_544}>
            <Text style={styles.Text_689_544}>
              and type to start a new message
            </Text>
          </View>
        </View>
        <View style={styles.View_689_545}>
          <View style={styles.View_689_546}>
            <Text style={styles.Text_689_546}>
              To exit cursor chat, just press
            </Text>
          </View>
          <View style={styles.View_689_547}>
            <View style={styles.View_I689_547_3_137}>
              <View style={styles.View_I689_547_3_138} />
            </View>
            <View style={styles.View_I689_547_3_139}>
              <Text style={styles.Text_I689_547_3_139}>esc</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_689_548}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d625/997f/9b9f1158ca655fbcb3b13ec757ef16d8"
          }}
          style={styles.ImageBackground_689_549}
        />
        <View style={styles.View_689_550}>
          <View style={styles.View_689_551}>
            <Text style={styles.Text_689_551}>Flippy</Text>
          </View>
          <View style={styles.View_689_552}>
            <View style={styles.View_689_553}>
              <Text style={styles.Text_689_553}>Welcome to FigJam!</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_689_502: {
    width: wp("99.97916880233511%"),
    minWidth: wp("99.97916880233511%"),
    height: hp("99.99073605862853%"),
    minHeight: hp("99.99073605862853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03453038674033149%"),
    top: hp("0%")
  },
  View_689_503: {
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
  View_689_504: {
    width: wp("48.34254143646409%"),
    minWidth: wp("48.34254143646409%"),
    height: hp("85.82212182110071%"),
    minHeight: hp("85.82212182110071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.27348066298343%"),
    top: hp("6.961345955596833%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_689_505: {
    width: wp("40.97665186086412%"),
    minWidth: wp("40.97665186086412%"),
    height: hp("7.566765578635016%"),
    minHeight: hp("7.566765578635016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.253612202175414%"),
    top: hp("7.185920692692878%")
  },
  View_689_506: {
    width: wp("40.97665186086412%"),
    minWidth: wp("40.97665186086412%"),
    height: hp("7.566765578635016%"),
    minHeight: hp("7.566765578635016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_689_507: {
    width: wp("40.97665186086412%"),
    minWidth: wp("40.97665186086412%"),
    minHeight: hp("7.566765578635016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_689_507: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  ImageBackground_689_508: {
    width: wp("12.300788500032372%"),
    minWidth: wp("12.300788500032372%"),
    height: hp("46.70539652204655%"),
    minHeight: hp("46.70539652204655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.69475138121547%"),
    top: hp("28.83561584291543%")
  },
  View_689_518: {
    width: wp("5.870165745856354%"),
    minWidth: wp("5.870165745856354%"),
    minHeight: hp("2.8189910979228485%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.82734806629834%"),
    top: hp("10.534124629080118%"),
    justifyContent: "center"
  },
  Text_689_518: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4559999942779541,
    textTransform: "none"
  },
  View_689_519: {
    width: wp("2.31353591160221%"),
    minWidth: wp("2.31353591160221%"),
    height: hp("4.747774480712167%"),
    minHeight: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.471107777969614%"),
    top: hp("22.022715944918396%")
  },
  View_689_520: {
    width: wp("2.31353591160221%"),
    minWidth: wp("2.31353591160221%"),
    height: hp("4.747774480712167%"),
    minHeight: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_689_521: {
    width: wp("23.895027624309392%"),
    minWidth: wp("23.895027624309392%"),
    height: hp("58.46182712815282%"),
    minHeight: hp("58.46182712815282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.06353591160221%"),
    top: hp("25.96439169139466%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_689_522: {
    width: wp("16.574889125086326%"),
    minWidth: wp("16.574889125086326%"),
    height: hp("16.028592706787833%"),
    minHeight: hp("16.028592706787833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_689_523: {
    width: wp("2.31353591160221%"),
    minWidth: wp("2.31353591160221%"),
    height: hp("4.747774480712167%"),
    minHeight: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.26135321348412%"),
    top: hp("0%")
  },
  View_689_524: {
    width: wp("2.209944751381215%"),
    minWidth: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    minHeight: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_689_525: {
    width: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10359116022098647%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I689_525_3_137: {
    flexGrow: 1,
    width: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I689_525_3_138: {
    width: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I689_525_3_139: {
    flexGrow: 1,
    width: wp("2.209944751381215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I689_525_3_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07200000286102295,
    textTransform: "none"
  },
  View_689_526: {
    width: wp("10.980662983425415%"),
    minWidth: wp("10.980662983425415%"),
    height: hp("11.275964391691394%"),
    minHeight: hp("11.275964391691394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09880276674724087%"),
    top: hp("4.7526283150964375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_689_527: {
    width: wp("2.209944751381215%"),
    minWidth: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    minHeight: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1001839822168513%"),
    top: hp("-0.004853834384270783%")
  },
  View_689_528: {
    width: wp("10.220994475138122%"),
    minWidth: wp("10.220994475138122%"),
    height: hp("6.528189910979229%"),
    minHeight: hp("6.528189910979229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7644569017610472%"),
    top: hp("4.742920646327889%"),
    backgroundColor: "rgba(242, 78, 30, 1)",
    overflow: "hidden"
  },
  View_689_529: {
    width: wp("7.596685082872928%"),
    minWidth: wp("7.596685082872928%"),
    height: hp("3.5608308605341246%"),
    minHeight: hp("3.5608308605341246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9668508287292816%"),
    top: hp("1.4836795252225556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_689_530: {
    width: wp("0.06906077348066297%"),
    minWidth: wp("0.06906077348066297%"),
    height: hp("3.5608308605341246%"),
    minHeight: hp("3.5608308605341246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_689_531: {
    width: wp("7.527624309392265%"),
    minWidth: wp("7.527624309392265%"),
    minHeight: hp("3.5608308605341246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0690607734806612%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_689_531: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_689_532: {
    width: wp("13.950276243093922%"),
    minWidth: wp("13.950276243093922%"),
    minHeight: hp("3.857566765578635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8902077151335313%"),
    justifyContent: "center"
  },
  Text_689_532: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_689_533: {
    width: wp("23.895027624309392%"),
    minWidth: wp("23.895027624309392%"),
    height: hp("15.133531157270031%"),
    minHeight: hp("15.133531157270031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.96331080767804%")
  },
  View_689_534: {
    width: wp("8.977900552486188%"),
    minWidth: wp("8.977900552486188%"),
    height: hp("11.275964391691394%"),
    minHeight: hp("11.275964391691394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09880276674724087%"),
    top: hp("3.857566765578632%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_689_535: {
    width: wp("2.209944751381215%"),
    minWidth: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    minHeight: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0656535954765225%"),
    top: hp("0.04487985673219441%")
  },
  View_689_536: {
    width: wp("7.38950276243094%"),
    minWidth: wp("7.38950276243094%"),
    height: hp("6.528189910979229%"),
    minHeight: hp("6.528189910979229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7989872885013796%"),
    top: hp("4.792654337444361%"),
    backgroundColor: "rgba(242, 78, 30, 1)",
    overflow: "hidden"
  },
  View_689_537: {
    width: wp("5.455801104972376%"),
    minWidth: wp("5.455801104972376%"),
    height: hp("3.5608308605341246%"),
    minHeight: hp("3.5608308605341246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9668508287292816%"),
    top: hp("1.4836795252225556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_689_538: {
    width: wp("5.386740331491713%"),
    minWidth: wp("5.386740331491713%"),
    minHeight: hp("3.5608308605341246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_689_538: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_689_539: {
    width: wp("0.06906077348066297%"),
    minWidth: wp("0.06906077348066297%"),
    height: hp("3.5608308605341246%"),
    minHeight: hp("3.5608308605341246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3867403314917155%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_689_540: {
    width: wp("23.895027624309392%"),
    minWidth: wp("23.895027624309392%"),
    minHeight: hp("3.857566765578635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_689_540: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_689_541: {
    width: wp("23.895027624309392%"),
    minWidth: wp("23.895027624309392%"),
    height: hp("4.747774480712167%"),
    minHeight: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.031560065838285%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_689_542: {
    width: wp("1.7265193370165748%"),
    minWidth: wp("1.7265193370165748%"),
    minHeight: hp("3.857566765578635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.44510385756676385%"),
    justifyContent: "center"
  },
  Text_689_542: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_689_543: {
    width: wp("3.1077348066298343%"),
    height: hp("4.747774480712167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.27900552486188%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I689_543_3_137: {
    flexGrow: 1,
    width: wp("3.1077348066298343%"),
    height: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I689_543_3_138: {
    width: wp("3.1077348066298343%"),
    height: hp("4.747774480712167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I689_543_3_139: {
    flexGrow: 1,
    width: wp("3.1077348066298343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I689_543_3_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07200000286102295,
    textTransform: "none"
  },
  View_689_544: {
    width: wp("17.955801104972377%"),
    minWidth: wp("17.955801104972377%"),
    minHeight: hp("3.857566765578635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.939226519337016%"),
    top: hp("0.44510385756676385%"),
    justifyContent: "center"
  },
  Text_689_544: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_689_545: {
    width: wp("18.922651933701655%"),
    minWidth: wp("18.922651933701655%"),
    height: hp("4.747774480712167%"),
    minHeight: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.714052647440646%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_689_546: {
    width: wp("16.16022099447514%"),
    minWidth: wp("16.16022099447514%"),
    minHeight: hp("3.857566765578635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.44510385756676385%"),
    justifyContent: "center"
  },
  Text_689_546: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_689_547: {
    width: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.712707182320443%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I689_547_3_137: {
    flexGrow: 1,
    width: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I689_547_3_138: {
    width: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I689_547_3_139: {
    flexGrow: 1,
    width: wp("2.209944751381215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I689_547_3_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07200000286102295,
    textTransform: "none"
  },
  View_689_548: {
    width: wp("11.464088397790055%"),
    minWidth: wp("11.464088397790055%"),
    height: hp("12.759643916913946%"),
    minHeight: hp("12.759643916913946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.65113923299378%"),
    top: hp("28.18991097922849%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_689_549: {
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
  View_689_550: {
    width: wp("10.6353591160221%"),
    minWidth: wp("10.6353591160221%"),
    height: hp("7.71513353115727%"),
    minHeight: hp("7.71513353115727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8646408839779127%"),
    top: hp("4.451038575667656%"),
    backgroundColor: "rgba(24, 160, 251, 1)",
    overflow: "hidden"
  },
  View_689_551: {
    flexGrow: 1,
    width: wp("2.2790055248618786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8287292817679415%"),
    top: hp("1.1869436201780417%"),
    justifyContent: "center"
  },
  Text_689_551: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11,
    textTransform: "none"
  },
  View_689_552: {
    width: wp("8.701657458563536%"),
    minWidth: wp("8.701657458563536%"),
    height: hp("2.967359050445104%"),
    minHeight: hp("2.967359050445104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8287292817679415%"),
    top: hp("3.560830860534125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_689_553: {
    width: wp("8.701657458563536%"),
    minWidth: wp("8.701657458563536%"),
    minHeight: hp("2.967359050445104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_689_553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.0325,
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
