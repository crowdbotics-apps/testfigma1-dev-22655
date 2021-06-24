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
      <View style={styles.View_656_219}>
        <View style={styles.View_656_220} />
        <View style={styles.View_656_221} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d27/6070/06ea975bc234d8fe9801b970ff881a4d"
        }}
        style={styles.ImageBackground_656_222}
      />
      <View style={styles.View_656_223}>
        <Text style={styles.Text_656_223}>
          Connectors are perfect for linking together related stuff. These
          magical arrows will stay connected even when you move the objects
          around.
        </Text>
      </View>
      <View style={styles.View_656_224}>
        <Text style={styles.Text_656_224}>
          Press and drag to draw a connector
        </Text>
      </View>
      <View style={styles.View_656_225}>
        <View style={styles.View_656_226}>
          <View style={styles.View_656_227} />
        </View>
        <View style={styles.View_656_228}>
          <Text style={styles.Text_656_228}>shift</Text>
        </View>
      </View>
      <View style={styles.View_656_229}>
        <View style={styles.View_I656_229_3_137}>
          <View style={styles.View_I656_229_3_138} />
        </View>
        <View style={styles.View_I656_229_3_139}>
          <Text style={styles.Text_I656_229_3_139}>C</Text>
        </View>
      </View>
      <View style={styles.View_656_230}>
        <Text style={styles.Text_656_230}>
          Double click a connector to add text
        </Text>
      </View>
      <View style={styles.View_656_231}>
        <Text style={styles.Text_656_231}>Try it out</Text>
      </View>
      <View style={styles.View_656_237}>
        <View style={styles.View_656_238}>
          <View style={styles.View_656_239}>
            <View style={styles.View_656_242}>
              <View style={styles.View_656_243} />
            </View>
          </View>
          <View style={styles.View_656_244}>
            <View style={styles.View_656_246}>
              <View style={styles.View_656_247} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcac/ae56/d055c0c3780b9e90fa02033ac5325a67"
                }}
                style={styles.ImageBackground_656_248}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f432/c8fa/0f67fa3bb35c3debf913f4d0567f5259"
                }}
                style={styles.ImageBackground_656_249}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56d9/f488/890bd6847df3e313153aec987a5c92f3"
                }}
                style={styles.ImageBackground_656_250}
              />
            </View>
          </View>
          <View style={styles.View_656_251}>
            <View style={styles.View_656_254}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fb1/fcaa/c6654de994613c1831230a218a7c214c"
                }}
                style={styles.ImageBackground_656_255}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb77/4e94/c7c94ea5421d85f0d276fedaee946b8e"
                }}
                style={styles.ImageBackground_656_258}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26aa/b707/cfa2d4dfabd2d9edb6c6a0576b80dc94"
                }}
                style={styles.ImageBackground_656_261}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_656_264}>
          <View style={styles.View_656_266}>
            <View style={styles.View_656_267} />
            <View style={styles.View_656_268} />
            <View style={styles.View_656_269} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15b6/4a7f/04dcedaccc5d568b64380942d86ce49a"
              }}
              style={styles.ImageBackground_656_270}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f28d/fc19/f9dd8baa3355a7dab74328c1910e69a2"
              }}
              style={styles.ImageBackground_656_271}
            />
            <View style={styles.View_656_272}>
              <View style={styles.View_656_273} />
              <View style={styles.View_656_274} />
            </View>
          </View>
        </View>
        <View style={styles.View_656_275}>
          <View style={styles.View_656_278}>
            <View style={styles.View_656_279} />
            <View style={styles.View_656_280} />
            <View style={styles.View_656_281}>
              <View style={styles.View_656_282} />
              <View style={styles.View_656_283} />
              <View style={styles.View_656_284} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c61/128b/8285c1a229bba48c70f3c3b396587fc1"
              }}
              style={styles.ImageBackground_656_285}
            />
          </View>
        </View>
        <View style={styles.View_656_288}>
          <View style={styles.View_656_290}>
            <View style={styles.View_656_291} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa4d/45f2/12c712f27aa67a07fb9be2671d349e2e"
              }}
              style={styles.ImageBackground_656_292}
            />
          </View>
        </View>
        <View style={styles.View_656_297}>
          <View style={styles.View_656_299}>
            <View style={styles.View_656_300} />
            <View style={styles.View_656_301}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea97/7877/dd4fb1d03df676b6d2cf1c068414d669"
                }}
                style={styles.ImageBackground_656_302}
              />
              <View style={styles.View_656_303}>
                <View style={styles.View_656_304} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa18/4215/c43e2c5cff0da5f3a0453ef17080c305"
                  }}
                  style={styles.ImageBackground_656_305}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_656_306}>
          <View style={styles.View_656_307} />
        </View>
        <View style={styles.View_656_308}>
          <View style={styles.View_656_309}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7501/5c0b/c786f5df9127d36df91b70df438ba796"
              }}
              style={styles.ImageBackground_656_313}
            />
          </View>
          <View style={styles.View_656_319}>
            <View style={styles.View_656_320}>
              <View source={{ uri: "null" }} style={styles.View_656_321} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/831b/2452/0980f68b10067adfec5a240f06acc9c3"
                }}
                style={styles.ImageBackground_656_322}
              />
            </View>
          </View>
          <View style={styles.View_656_347} />
        </View>
        <View style={styles.View_656_348}>
          <View style={styles.View_656_350}>
            <View style={styles.View_656_351} />
            <View style={styles.View_656_352}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d4f/e033/ecd094103c4a6155a7e1c0c3ca8be278"
                }}
                style={styles.ImageBackground_656_353}
              />
              <View style={styles.View_656_354} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d9a/82db/fdfa07f39956eba6370d0d62f62de3ad"
                }}
                style={styles.ImageBackground_656_355}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_656_356}>
        <View style={styles.View_656_357} />
        <View style={styles.View_656_358} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17a8/55b9/19a0886c082dcad713e22ab8c181c532"
        }}
        style={styles.ImageBackground_656_359}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_656_219: {
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
  View_656_220: {
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
  View_656_221: {
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
  ImageBackground_656_222: {
    width: wp("4.412367594176234%"),
    minWidth: wp("4.412367594176234%"),
    height: hp("9.479389134075946%"),
    minHeight: hp("9.479389134075946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.5462100202866%"),
    top: hp("74.4819980700575%"),
    resizeMode: "cover"
  },
  View_656_223: {
    width: wp("40.97665186086412%"),
    minWidth: wp("40.97665186086412%"),
    minHeight: hp("7.566765578635016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.253612202175414%"),
    top: hp("7.185920692692878%"),
    justifyContent: "center"
  },
  Text_656_223: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_656_224: {
    width: wp("11.44848923656822%"),
    minWidth: wp("11.44848923656822%"),
    minHeight: hp("12.314540059347182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.253612202175414%"),
    top: hp("33.38278931750742%"),
    justifyContent: "center"
  },
  Text_656_224: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_656_225: {
    width: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    top: hp("32.80654137495363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.604440931457182%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_226: {
    width: wp("3.5450619228637024%"),
    minWidth: wp("3.5450619228637024%"),
    height: hp("4.747774480712167%"),
    minHeight: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5984817420580102%"),
    top: hp("0%")
  },
  View_656_227: {
    width: wp("3.5450619228637024%"),
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
  View_656_228: {
    width: wp("1.7955801104972375%"),
    top: hp("0.5934718100890208%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2071823204419898%"),
    justifyContent: "center"
  },
  Text_656_228: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07200000286102295,
    textTransform: "none"
  },
  View_656_229: {
    width: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    top: hp("32.80654137495363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.827232065780388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I656_229_3_137: {
    flexGrow: 1,
    width: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I656_229_3_138: {
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
  View_I656_229_3_139: {
    flexGrow: 1,
    width: wp("2.209944751381215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I656_229_3_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07200000286102295,
    textTransform: "none"
  },
  View_656_230: {
    width: wp("10.071336103407717%"),
    minWidth: wp("10.071336103407717%"),
    minHeight: hp("12.314540059347182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.78363205714779%"),
    top: hp("33.345950887889465%"),
    justifyContent: "center"
  },
  Text_656_230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_656_231: {
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
  Text_656_231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4559999942779541,
    textTransform: "none"
  },
  View_656_237: {
    width: wp("41.663373241108424%"),
    height: hp("9.075615314064818%"),
    minHeight: hp("9.075615314064818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2718890279696136%"),
    top: hp("83.05383337003894%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_656_238: {
    width: wp("20.699672804352986%"),
    minWidth: wp("20.699672804352986%"),
    height: hp("12.705861213299215%"),
    minHeight: hp("12.705861213299215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.745873888553176%"),
    top: hp("-3.6302470311920416%")
  },
  View_656_239: {
    width: wp("7.603961459839542%"),
    minWidth: wp("7.603961459839542%"),
    height: hp("12.705861213299215%"),
    minHeight: hp("12.705861213299215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.646866097634669%"),
    top: hp("0.000004527830583356263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_242: {
    width: wp("7.603961459839542%"),
    minWidth: wp("7.603961459839542%"),
    height: hp("12.705861213299215%"),
    minHeight: hp("12.705861213299215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_656_243: {
    width: wp("5.914192305085409%"),
    minWidth: wp("5.914192305085409%"),
    height: hp("12.705861213299215%"),
    minHeight: hp("12.705861213299215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8448816794716851%"),
    top: hp("5.445372810703347%"),
    backgroundColor: "rgba(217, 155, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.38231027126312256,
    borderTopLeftRadius: 229.18812561035156,
    borderTopRightRadius: 229.18812561035156,
    borderBottomLeftRadius: 229.18812561035156,
    borderBottomRightRadius: 229.18812561035156
  },
  View_656_244: {
    width: wp("4.646865570742781%"),
    minWidth: wp("4.646865570742781%"),
    height: hp("12.705861213299215%"),
    minHeight: hp("12.705861213299215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_656_246: {
    width: wp("2.534653995577143%"),
    minWidth: wp("2.534653995577143%"),
    height: hp("13.613429762843102%"),
    minHeight: hp("13.613429762843102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.056110529609807%"),
    top: hp("5.445372810703361%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_247: {
    width: wp("0.6336634988942857%"),
    height: hp("11.684854660260571%"),
    top: hp("1.9285751025825277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9504961045407452%"),
    backgroundColor: "rgba(84, 84, 84, 1)"
  },
  ImageBackground_656_248: {
    width: wp("2.534653995577143%"),
    height: hp("11.684861452006444%"),
    top: hp("1.9285751025825277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_249: {
    width: wp("2.534653995577143%"),
    height: hp("11.684861452006444%"),
    top: hp("1.9285751025825277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_250: {
    width: wp("0.6864687355842379%"),
    height: hp("2.042013389066702%"),
    top: hp("0.000004527830569145408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9240924982734802%")
  },
  View_656_251: {
    width: wp("8.448846300662552%"),
    minWidth: wp("8.448846300662552%"),
    height: hp("12.705861213299215%"),
    minHeight: hp("12.705861213299215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.250834933960634%"),
    top: hp("0.000004527830583356263%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_656_254: {
    width: wp("6.726057885101487%"),
    minWidth: wp("6.726057885101487%"),
    height: hp("14.90372337997844%"),
    minHeight: hp("14.90372337997844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8448816794716869%"),
    top: hp("5.445372810703347%")
  },
  ImageBackground_656_255: {
    width: wp("6.726057885101487%"),
    height: hp("14.449946462931193%"),
    minHeight: hp("14.449946462931193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.45378370879312513%")
  },
  ImageBackground_656_258: {
    width: wp("6.16165182208488%"),
    height: hp("13.237370793826504%"),
    minHeight: hp("13.237370793826504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5280384042645032%"),
    top: hp("0.11343121174890314%")
  },
  ImageBackground_656_261: {
    width: wp("5.491817326835506%"),
    height: hp("11.798299455501207%"),
    minHeight: hp("11.798299455501207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2145321672133953%"),
    top: hp("0.000004527830597567117%")
  },
  View_656_264: {
    width: wp("3.3795385729542096%"),
    minWidth: wp("3.3795385729542096%"),
    height: hp("7.26049236444762%"),
    minHeight: hp("7.26049236444762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.343248230317677%"),
    top: hp("0.9075628897556669%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_266: {
    width: wp("2.3234327853713905%"),
    minWidth: wp("2.3234327853713905%"),
    height: hp("4.537807657032409%"),
    minHeight: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5280384042645032%"),
    top: hp("1.3613465985487636%")
  },
  View_656_267: {
    width: wp("2.112211575165638%"),
    height: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1056144250690636%"),
    top: hp("0.000009055661166712525%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.7646205425262451,
    borderTopLeftRadius: 6.116964340209961,
    borderTopRightRadius: 6.116964340209961,
    borderBottomLeftRadius: 6.116964340209961,
    borderBottomRightRadius: 6.116964340209961
  },
  View_656_268: {
    width: wp("0.2112211608096381%"),
    height: hp("0.45378077277797624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0420198978231667%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5292410850524902
  },
  View_656_269: {
    width: wp("0.2112211608096381%"),
    height: hp("0.45378077277797624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1122210592196176%"),
    top: hp("2.0420198978231667%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5292410850524902
  },
  ImageBackground_656_270: {
    width: wp("2.0594063384756858%"),
    minWidth: wp("2.0594063384756858%"),
    height: hp("1.7584004105021762%"),
    minHeight: hp("1.7584004105021762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1320180313363295%"),
    top: hp("0.05672918936619453%")
  },
  ImageBackground_656_271: {
    width: wp("2.0594063384756858%"),
    minWidth: wp("2.0594063384756858%"),
    height: hp("1.7584004105021762%"),
    minHeight: hp("1.7584004105021762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1320180313363295%"),
    top: hp("2.7226931970975556%")
  },
  View_656_272: {
    width: wp("0.9504951824799428%"),
    minWidth: wp("0.9504951824799428%"),
    height: hp("2.4957942679657075%"),
    minHeight: hp("2.4957942679657075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6864600418680915%"),
    top: hp("1.0210167406574584%")
  },
  View_656_273: {
    width: wp("0.9504951824799428%"),
    height: hp("0.22689038638898812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_656_274: {
    width: wp("0.10561058040481905%"),
    height: hp("2.2689038285162044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4224577002762473%"),
    top: hp("0.2268986461424447%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_656_275: {
    width: wp("3.3795385729542096%"),
    minWidth: wp("3.3795385729542096%"),
    height: hp("7.26049236444762%"),
    minHeight: hp("7.26049236444762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.722774948204417%"),
    top: hp("0.9075628897556669%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_278: {
    width: wp("2.3234327853713905%"),
    minWidth: wp("2.3234327853713905%"),
    height: hp("4.537807657032409%"),
    minHeight: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5280721253453073%"),
    top: hp("1.361351126379347%")
  },
  View_656_279: {
    width: wp("0.2112211608096381%"),
    minWidth: wp("0.2112211608096381%"),
    height: hp("0.45378077277797624%"),
    minHeight: hp("0.45378077277797624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1122210592196105%"),
    top: hp("1.2478972754775555%"),
    backgroundColor: "rgba(151, 71, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5292410850524902,
    borderTopLeftRadius: 6.116964340209961,
    borderTopRightRadius: 6.116964340209961,
    borderBottomLeftRadius: 6.116964340209961,
    borderBottomRightRadius: 6.116964340209961
  },
  View_656_280: {
    width: wp("0.2112211608096381%"),
    minWidth: wp("0.2112211608096381%"),
    height: hp("0.45378077277797624%"),
    minHeight: hp("0.45378077277797624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1764633223989307%"),
    backgroundColor: "rgba(151, 71, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5292410850524902,
    borderTopLeftRadius: 6.116964340209961,
    borderTopRightRadius: 6.116964340209961,
    borderBottomLeftRadius: 6.116964340209961,
    borderBottomRightRadius: 6.116964340209961
  },
  View_656_281: {
    width: wp("2.112211575165638%"),
    minWidth: wp("2.112211575165638%"),
    height: hp("4.537807657032409%"),
    minHeight: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10561442506906005%"),
    top: hp("0%")
  },
  View_656_282: {
    width: wp("2.112211575165638%"),
    minWidth: wp("2.112211575165638%"),
    height: hp("4.537807657032409%"),
    minHeight: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(151, 71, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.7646205425262451,
    borderTopLeftRadius: 6.116964340209961,
    borderTopRightRadius: 6.116964340209961,
    borderBottomLeftRadius: 6.116964340209961,
    borderBottomRightRadius: 6.116964340209961
  },
  View_656_283: {
    width: wp("0.4224423216192762%"),
    minWidth: wp("0.4224423216192762%"),
    height: hp("0.9075615455559525%"),
    minHeight: hp("0.9075615455559525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9009922090814868%"),
    top: hp("1.0210167406574584%"),
    backgroundColor: "rgba(151, 71, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5292410850524902,
    borderTopLeftRadius: 6.116964340209961,
    borderTopRightRadius: 6.116964340209961,
    borderBottomLeftRadius: 6.116964340209961,
    borderBottomRightRadius: 6.116964340209961
  },
  View_656_284: {
    width: wp("0.4224423216192762%"),
    minWidth: wp("0.4224423216192762%"),
    height: hp("0.9075615455559525%"),
    minHeight: hp("0.9075615455559525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.21119512905732307%"),
    top: hp("2.9495827875788194%"),
    backgroundColor: "rgba(151, 71, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5292410850524902,
    borderTopLeftRadius: 6.116964340209961,
    borderTopRightRadius: 6.116964340209961,
    borderBottomLeftRadius: 6.116964340209961,
    borderBottomRightRadius: 6.116964340209961
  },
  ImageBackground_656_285: {
    width: wp("1.5313534446842763%"),
    minWidth: wp("1.5313534446842763%"),
    height: hp("2.9495748638753017%"),
    minHeight: hp("2.9495748638753017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.36965048774171194%"),
    top: hp("0.5672239762031808%")
  },
  View_656_288: {
    width: wp("3.3795385729542096%"),
    minWidth: wp("3.3795385729542096%"),
    height: hp("7.26049236444762%"),
    minHeight: hp("7.26049236444762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.102301666091158%"),
    top: hp("0.9075628897556669%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_290: {
    width: wp("2.112211575165638%"),
    minWidth: wp("2.112211575165638%"),
    height: hp("4.537807657032409%"),
    minHeight: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6336865504143674%"),
    top: hp("1.3613465985487636%")
  },
  View_656_291: {
    width: wp("2.112211575165638%"),
    height: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.7646205425262451,
    borderTopLeftRadius: 6.116964340209961,
    borderTopRightRadius: 6.116964340209961,
    borderBottomLeftRadius: 6.116964340209961,
    borderBottomRightRadius: 6.116964340209961
  },
  ImageBackground_656_292: {
    width: wp("1.5841586813742283%"),
    height: hp("3.403355742774307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2640360626726519%"),
    top: hp("0.5672375596949166%")
  },
  View_656_297: {
    width: wp("3.3795385729542096%"),
    minWidth: wp("3.3795385729542096%"),
    height: hp("7.26049236444762%"),
    minHeight: hp("7.26049236444762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86138882294544%"),
    top: hp("0.9075628897556669%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_299: {
    width: wp("2.112211575165638%"),
    minWidth: wp("2.112211575165638%"),
    height: hp("4.537807657032409%"),
    minHeight: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6336528293335633%"),
    top: hp("1.3613465985487636%")
  },
  View_656_300: {
    width: wp("2.112211575165638%"),
    height: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.7646205425262451,
    borderTopLeftRadius: 6.116964340209961,
    borderTopRightRadius: 6.116964340209961,
    borderBottomLeftRadius: 6.116964340209961,
    borderBottomRightRadius: 6.116964340209961
  },
  View_656_301: {
    width: wp("1.5841586813742283%"),
    minWidth: wp("1.5841586813742283%"),
    height: hp("3.403355742774307%"),
    minHeight: hp("3.403355742774307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2640360626726519%"),
    top: hp("0.5672330318643333%")
  },
  ImageBackground_656_302: {
    width: wp("0.4752475912399714%"),
    height: hp("1.021006694533351%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8184780732044175%"),
    top: hp("0.5672330318643475%")
  },
  View_656_303: {
    width: wp("1.5841586813742283%"),
    minWidth: wp("1.5841586813742283%"),
    height: hp("3.403355742774307%"),
    minHeight: hp("3.403355742774307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_656_304: {
    width: wp("1.5841586813742283%"),
    height: hp("3.403355742774307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5292410850524902,
    borderTopLeftRadius: 3.0584821701049805,
    borderTopRightRadius: 3.0584821701049805,
    borderBottomLeftRadius: 3.0584821701049805,
    borderBottomRightRadius: 3.0584821701049805
  },
  ImageBackground_656_305: {
    width: wp("1.2145216293756473%"),
    height: hp("1.8718456302269277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052807212534524695%"),
    top: hp("1.418071260084389%")
  },
  View_656_306: {
    width: wp("0.8976899457899905%"),
    minWidth: wp("0.8976899457899905%"),
    height: hp("9.075615314064818%"),
    minHeight: hp("9.075615314064818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.44555933831146%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_307: {
    width: wp("0.052805290202409524%"),
    minWidth: wp("0.052805290202409524%"),
    height: hp("9.075615314064818%"),
    minHeight: hp("9.075615314064818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.42242397919544317%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  View_656_308: {
    width: wp("2.3234327853713905%"),
    minWidth: wp("2.3234327853713905%"),
    height: hp("9.075615314064818%"),
    minHeight: hp("9.075615314064818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_309: {
    width: wp("2.3234327853713905%"),
    minWidth: wp("2.3234327853713905%"),
    height: hp("4.537807657032409%"),
    minHeight: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_656_313: {
    width: wp("2.3234327853713905%"),
    minWidth: wp("2.3234327853713905%"),
    height: hp("4.537807657032409%"),
    minHeight: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_656_319: {
    width: wp("2.3234327853713905%"),
    minWidth: wp("2.3234327853713905%"),
    height: hp("4.537807657032409%"),
    minHeight: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.537809920947694%")
  },
  View_656_320: {
    width: wp("2.3234327853713905%"),
    minWidth: wp("2.3234327853713905%"),
    height: hp("4.537807657032409%"),
    minHeight: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_656_321: {
    width: wp("2.3234327853713905%"),
    minWidth: wp("2.3234327853713905%"),
    height: hp("4.537807657032409%"),
    minHeight: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_656_322: {
    width: wp("0.8129305602437225%"),
    minWidth: wp("0.8129305602437225%"),
    height: hp("2.0420135305614076%"),
    minHeight: hp("2.0420135305614076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7393009754834252%"),
    top: hp("1.134443424575764%")
  },
  View_656_347: {
    width: wp("0.052805290202409524%"),
    minWidth: wp("0.052805290202409524%"),
    height: hp("9.075615314064818%"),
    minHeight: hp("9.075615314064818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2706426968232045%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  View_656_348: {
    width: wp("3.3795385729542096%"),
    minWidth: wp("3.3795385729542096%"),
    height: hp("7.26049236444762%"),
    minHeight: hp("7.26049236444762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.481862105058696%"),
    top: hp("0.9075628897556669%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_350: {
    width: wp("2.112211575165638%"),
    height: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6336528293335704%"),
    top: hp("1.3613465985487636%")
  },
  View_656_351: {
    width: wp("2.112211575165638%"),
    height: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.7646205425262451,
    borderTopLeftRadius: 6.116964340209961,
    borderTopRightRadius: 6.116964340209961,
    borderBottomLeftRadius: 6.116964340209961,
    borderBottomRightRadius: 6.116964340209961
  },
  View_656_352: {
    width: wp("0.9504951824799428%"),
    minWidth: wp("0.9504951824799428%"),
    height: hp("3.176465303324804%"),
    minHeight: hp("3.176465303324804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5808793378798356%"),
    top: hp("0.6806823549355556%")
  },
  ImageBackground_656_353: {
    width: wp("0.8448846432385524%"),
    minWidth: wp("0.8448846432385524%"),
    height: hp("1.4180648928226278%"),
    minHeight: hp("1.4180648928226278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052807212534524695%"),
    top: hp("1.0777278187013195%")
  },
  View_656_354: {
    width: wp("0.8448846432385524%"),
    minWidth: wp("0.8448846432385524%"),
    height: hp("0.22689038638898812%"),
    minHeight: hp("0.22689038638898812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052807212534524695%"),
    top: hp("2.949573731917667%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  ImageBackground_656_355: {
    width: wp("0.6336634988942857%"),
    minWidth: wp("0.6336634988942857%"),
    height: hp("1.3409351382835684%"),
    minHeight: hp("1.3409351382835684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1584216376035883%"),
    top: hp("0%")
  },
  View_656_356: {
    width: wp("1.1049723756906076%"),
    height: hp("2.3738872403560833%"),
    minHeight: hp("2.3738872403560833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.97249169112569%"),
    top: hp("35.25265656875927%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_357: {
    width: wp("1.1049723756906076%"),
    minWidth: wp("1.1049723756906076%"),
    height: hp("2.3738872403560833%"),
    minHeight: hp("2.3738872403560833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(54, 159, 244, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_656_358: {
    width: wp("0.5205531805259747%"),
    minWidth: wp("0.5205531805259747%"),
    height: hp("1.118339770625536%"),
    minHeight: hp("1.118339770625536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2922268862223767%"),
    top: hp("0.6277735226232153%"),
    backgroundColor: "rgba(54, 159, 244, 1)",
    borderColor: "rgba(54, 159, 244, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_656_359: {
    width: wp("2.0027624309392267%"),
    minWidth: wp("2.0027624309392267%"),
    height: hp("9.347181008902076%"),
    minHeight: hp("9.347181008902076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.715469613259668%"),
    top: hp("36.35014836795252%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
