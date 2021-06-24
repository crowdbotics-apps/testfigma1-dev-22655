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
      <View style={styles.View_656_572}>
        <View style={styles.View_656_573} />
        <View style={styles.View_656_574} />
      </View>
      <View style={styles.View_656_575}>
        <View style={styles.View_656_576}>
          <View style={styles.View_656_577}>
            <View style={styles.View_656_580}>
              <View style={styles.View_656_581} />
            </View>
          </View>
          <View style={styles.View_656_582}>
            <View style={styles.View_656_584}>
              <View style={styles.View_656_585} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c2c/a3b5/4fad0c191e863034cf71b0e6876bc026"
                }}
                style={styles.ImageBackground_656_586}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ff/1d40/9919e7ff5840814ec0b8cadf7f62f142"
                }}
                style={styles.ImageBackground_656_587}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56d9/f488/890bd6847df3e313153aec987a5c92f3"
                }}
                style={styles.ImageBackground_656_588}
              />
            </View>
          </View>
          <View style={styles.View_656_589}>
            <View style={styles.View_656_590}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81f0/6be3/49f4a07bd94e0a5933f50f1df2439ab4"
                }}
                style={styles.ImageBackground_656_591}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb77/4e94/c7c94ea5421d85f0d276fedaee946b8e"
                }}
                style={styles.ImageBackground_656_594}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9f4/aef1/96445cac6acc9c367e76e2868c624b51"
                }}
                style={styles.ImageBackground_656_597}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_656_600}>
          <View style={styles.View_656_602}>
            <View style={styles.View_656_603} />
            <View style={styles.View_656_604} />
            <View style={styles.View_656_605} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15b6/4a7f/04dcedaccc5d568b64380942d86ce49a"
              }}
              style={styles.ImageBackground_656_606}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f28d/fc19/f9dd8baa3355a7dab74328c1910e69a2"
              }}
              style={styles.ImageBackground_656_607}
            />
            <View style={styles.View_656_608}>
              <View style={styles.View_656_609} />
              <View style={styles.View_656_610} />
            </View>
          </View>
        </View>
        <View style={styles.View_656_611}>
          <View style={styles.View_656_614}>
            <View style={styles.View_656_615} />
            <View style={styles.View_656_616} />
            <View style={styles.View_656_617} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8e2/fa84/dd13d2963914dc69ad9c59b8ac7f2353"
            }}
            style={styles.ImageBackground_656_618}
          />
        </View>
        <View style={styles.View_656_621}>
          <View style={styles.View_656_623}>
            <View style={styles.View_656_624} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa4d/45f2/12c712f27aa67a07fb9be2671d349e2e"
              }}
              style={styles.ImageBackground_656_625}
            />
          </View>
        </View>
        <View style={styles.View_656_630}>
          <View style={styles.View_656_632}>
            <View style={styles.View_656_633} />
            <View style={styles.View_656_634}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea97/7877/dd4fb1d03df676b6d2cf1c068414d669"
                }}
                style={styles.ImageBackground_656_635}
              />
              <View style={styles.View_656_636}>
                <View style={styles.View_656_637} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa18/4215/c43e2c5cff0da5f3a0453ef17080c305"
                  }}
                  style={styles.ImageBackground_656_638}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_656_639}>
          <View style={styles.View_656_640} />
        </View>
        <View style={styles.View_656_641}>
          <View style={styles.View_656_642}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7501/5c0b/c786f5df9127d36df91b70df438ba796"
              }}
              style={styles.ImageBackground_656_646}
            />
          </View>
          <View style={styles.View_656_652}>
            <View style={styles.View_656_653}>
              <View source={{ uri: "null" }} style={styles.View_656_654} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/831b/2452/0980f68b10067adfec5a240f06acc9c3"
                }}
                style={styles.ImageBackground_656_655}
              />
            </View>
          </View>
          <View style={styles.View_656_680} />
        </View>
        <View style={styles.View_656_681}>
          <View style={styles.View_656_683}>
            <View style={styles.View_656_684} />
            <View style={styles.View_656_685}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d4f/e033/ecd094103c4a6155a7e1c0c3ca8be278"
                }}
                style={styles.ImageBackground_656_686}
              />
              <View style={styles.View_656_687} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d9a/82db/fdfa07f39956eba6370d0d62f62de3ad"
                }}
                style={styles.ImageBackground_656_688}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_656_689}>
        <View style={styles.View_656_690}>
          <Text style={styles.Text_656_690}>
            Stickies are the fastest way to share your thoughts.
          </Text>
        </View>
      </View>
      <View style={styles.View_656_691}>
        <View style={styles.View_656_693}>
          <View style={styles.View_656_694}>
            <Text style={styles.Text_656_694}>
              While a sticky is selected, quickly create another with
            </Text>
          </View>
          <View style={styles.View_656_695}>
            <View style={styles.View_656_696}>
              <View style={styles.View_656_697}>
                <View style={styles.View_I656_697_3_191}>
                  <View style={styles.View_I656_697_3_191_3_137}>
                    <View style={styles.View_I656_697_3_191_3_138} />
                  </View>
                  <View style={styles.View_I656_697_3_191_3_139}>
                    <Text style={styles.Text_I656_697_3_191_3_139}>ctrl</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_656_698}>
                <View style={styles.View_I656_698_3_191}>
                  <View style={styles.View_I656_698_3_191_3_137}>
                    <View style={styles.View_I656_698_3_191_3_138} />
                  </View>
                  <View style={styles.View_I656_698_3_191_3_139}>
                    <Text style={styles.Text_I656_698_3_191_3_139}>enter</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_656_699}>
              <Text style={styles.Text_656_699}>Win</Text>
            </View>
          </View>
          <View style={styles.View_656_700}>
            <View style={styles.View_656_701}>
              <View style={styles.View_656_702}>
                <View style={styles.View_I656_702_3_191}>
                  <View style={styles.View_I656_702_3_191_3_137}>
                    <View style={styles.View_I656_702_3_191_3_138} />
                  </View>
                  <View style={styles.View_I656_702_3_191_3_139}>
                    <Text style={styles.Text_I656_702_3_191_3_139}>cmd</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_656_703}>
                <View style={styles.View_I656_703_3_191}>
                  <View style={styles.View_I656_703_3_191_3_137}>
                    <View style={styles.View_I656_703_3_191_3_138} />
                  </View>
                  <View style={styles.View_I656_703_3_191_3_139}>
                    <Text style={styles.Text_I656_703_3_191_3_139}>enter</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_656_704}>
              <Text style={styles.Text_656_704}>Mac</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_656_705}>
        <View style={styles.View_656_706}>
          <View style={styles.View_656_708} />
        </View>
        <View style={styles.View_656_709}>
          <View style={styles.View_656_710}>
            <Text style={styles.Text_656_710}>
              To quickly create a new sticky, just press
            </Text>
          </View>
          <View style={styles.View_656_711}>
            <View style={styles.View_I656_711_3_191}>
              <View style={styles.View_I656_711_3_191_3_137}>
                <View style={styles.View_I656_711_3_191_3_138} />
              </View>
              <View style={styles.View_I656_711_3_191_3_139}>
                <Text style={styles.Text_I656_711_3_191_3_139}>S</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_656_712}>
        <Text style={styles.Text_656_712}>Try it out</Text>
      </View>
      <View style={styles.View_656_713}>
        <Text style={styles.Text_656_713}>Name an iconic duo</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5389/d09f/99aabc35094f3238ceb505bdf227479c"
        }}
        style={styles.ImageBackground_656_714}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27c0/a2a0/70d93cd508d651280f72a47be3e76d7c"
        }}
        style={styles.ImageBackground_656_715}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1571/80d0/caf884e51bbce5186f999b32a90bac66"
        }}
        style={styles.ImageBackground_656_716}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_656_572: {
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
  View_656_573: {
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
  View_656_574: {
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
  View_656_575: {
    width: wp("41.759208552745164%"),
    minWidth: wp("41.759208552745164%"),
    height: hp("9.096491442943538%"),
    minHeight: hp("9.096491442943538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2190818154350826%"),
    top: hp("83.04714123643824%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_656_576: {
    width: wp("20.76781889351692%"),
    minWidth: wp("20.76781889351692%"),
    height: hp("12.764914311711795%"),
    minHeight: hp("12.764914311711795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.752196591203384%"),
    top: hp("-3.6385963507858747%")
  },
  View_656_577: {
    width: wp("7.621452689829453%"),
    minWidth: wp("7.621452689829453%"),
    height: hp("12.73508835970825%"),
    minHeight: hp("12.73508835970825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.657572540789019%"),
    top: hp("0.000004527830583356263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_580: {
    width: wp("7.621452689829453%"),
    minWidth: wp("7.621452689829453%"),
    height: hp("12.73508835970825%"),
    minHeight: hp("12.73508835970825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_656_581: {
    width: wp("5.927796653621105%"),
    minWidth: wp("5.927796653621105%"),
    height: hp("12.73508835970825%"),
    minHeight: hp("12.73508835970825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8468375021581505%"),
    top: hp("5.457901317924694%"),
    backgroundColor: "rgba(217, 155, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.38318970799446106,
    borderTopLeftRadius: 229.71533203125,
    borderTopRightRadius: 229.71533203125,
    borderBottomLeftRadius: 229.71533203125,
    borderBottomRightRadius: 229.71533203125
  },
  View_656_582: {
    width: wp("4.657554099572956%"),
    minWidth: wp("4.657554099572956%"),
    height: hp("12.73508835970825%"),
    minHeight: hp("12.73508835970825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_656_584: {
    width: wp("2.5404840543125218%"),
    minWidth: wp("2.5404840543125218%"),
    height: hp("13.644744239150594%"),
    minHeight: hp("13.644744239150594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0585384474274857%"),
    top: hp("5.457896790094111%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_585: {
    width: wp("0.6351210135781304%"),
    height: hp("11.711732994555012%"),
    top: hp("1.9330033208920696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9526879747928181%"),
    backgroundColor: "rgba(84, 84, 84, 1)"
  },
  ImageBackground_656_586: {
    width: wp("2.5404840543125218%"),
    height: hp("11.711739786300885%"),
    top: hp("1.9330033208920696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_587: {
    width: wp("2.5404840543125218%"),
    height: hp("11.711739786300885%"),
    top: hp("1.9330033208920696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_588: {
    width: wp("0.6880477647096412%"),
    height: hp("2.046710588811767%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9262337869043513%")
  },
  View_656_589: {
    width: wp("8.468280707933626%"),
    minWidth: wp("8.468280707933626%"),
    height: hp("12.507675804794719%"),
    minHeight: hp("12.507675804794719%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.29954503517783%"),
    top: hp("0.257239638874708%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_656_590: {
    width: wp("6.741530065378432%"),
    minWidth: wp("6.741530065378432%"),
    height: hp("18.5766010680609%"),
    minHeight: hp("18.5766010680609%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8263350850310793%"),
    top: hp("1.5918946761405834%")
  },
  ImageBackground_656_591: {
    width: wp("6.741530065378432%"),
    height: hp("14.483184135278538%"),
    minHeight: hp("14.483184135278538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.093416932782375%")
  },
  ImageBackground_656_594: {
    width: wp("6.175824686967206%"),
    height: hp("13.267819322535122%"),
    minHeight: hp("13.267819322535122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5292692237137402%"),
    top: hp("3.7522856488779723%")
  },
  ImageBackground_656_597: {
    width: wp("5.504449559838733%"),
    height: hp("11.825438140054132%"),
    minHeight: hp("11.825438140054132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2173141563794871%"),
    top: hp("0%")
  },
  View_656_600: {
    width: wp("3.387312335862639%"),
    minWidth: wp("3.387312335862639%"),
    height: hp("7.2771932675505955%"),
    minHeight: hp("7.2771932675505955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.399225224447513%"),
    top: hp("0.9096502196541252%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_602: {
    width: wp("2.328777049786478%"),
    minWidth: wp("2.328777049786478%"),
    height: hp("4.548245721471769%"),
    minHeight: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5292692237137473%"),
    top: hp("1.3644753294811807%")
  },
  View_656_603: {
    width: wp("2.1170701769834066%"),
    height: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10585047263466407%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.7663794159889221,
    borderTopLeftRadius: 6.131035327911377,
    borderTopRightRadius: 6.131035327911377,
    borderBottomLeftRadius: 6.131035327911377,
    borderBottomRightRadius: 6.131035327911377
  },
  View_656_604: {
    width: wp("0.21170702099141495%"),
    height: hp("0.4548245792219122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.046710730306458%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5327588319778442
  },
  View_656_605: {
    width: wp("0.21170702099141495%"),
    height: hp("0.4548245792219122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.117076894854968%"),
    top: hp("2.046710730306458%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5327588319778442
  },
  ImageBackground_656_606: {
    width: wp("2.0641433599904095%"),
    minWidth: wp("2.0641433599904095%"),
    height: hp("1.7624451781592665%"),
    minHeight: hp("1.7624451781592665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13232152106353112%"),
    top: hp("0.05685144079190252%")
  },
  ImageBackground_656_607: {
    width: wp("2.0641433599904095%"),
    minWidth: wp("2.0641433599904095%"),
    height: hp("1.7624451781592665%"),
    minHeight: hp("1.7624451781592665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13232152106353112%"),
    top: hp("2.7289461311317638%")
  },
  View_656_608: {
    width: wp("0.9526815862286816%"),
    minWidth: wp("0.9526815862286816%"),
    height: hp("2.5015349911652973%"),
    minHeight: hp("2.5015349911652973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6880449326657434%"),
    top: hp("1.0233531012379444%")
  },
  View_656_609: {
    width: wp("0.9526815862286816%"),
    height: hp("0.2274122896109561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_656_610: {
    width: wp("0.10585351049570747%"),
    height: hp("2.2741228607358845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4234018905386776%"),
    top: hp("0.22741481882881942%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_656_611: {
    width: wp("3.387312335862639%"),
    minWidth: wp("3.387312335862639%"),
    height: hp("7.2771932675505955%"),
    minHeight: hp("7.2771932675505955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.786541511999307%"),
    top: hp("0.9096502196541252%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_614: {
    width: wp("2.328777313232422%"),
    minWidth: wp("2.328777313232422%"),
    height: hp("4.548245721471769%"),
    minHeight: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5292523631733452%"),
    top: hp("1.3644753294811807%")
  },
  View_656_615: {
    width: wp("2.1170701769834066%"),
    minWidth: wp("2.1170701769834066%"),
    height: hp("4.548245721471769%"),
    minHeight: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10585047263467118%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.7663794159889221,
    borderTopLeftRadius: 6.131035327911377,
    borderTopRightRadius: 6.131035327911377,
    borderBottomLeftRadius: 6.131035327911377,
    borderBottomRightRadius: 6.131035327911377
  },
  View_656_616: {
    width: wp("0.21170702099141495%"),
    minWidth: wp("0.21170702099141495%"),
    height: hp("0.4548245792219122%"),
    minHeight: hp("0.4548245792219122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.117076894854975%"),
    top: hp("1.2507679200667638%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5327588319778442,
    borderTopLeftRadius: 6.131035327911377,
    borderTopRightRadius: 6.131035327911377,
    borderBottomLeftRadius: 6.131035327911377,
    borderBottomRightRadius: 6.131035327911377
  },
  View_656_617: {
    width: wp("0.21170702099141495%"),
    minWidth: wp("0.21170702099141495%"),
    height: hp("0.4548245792219122%"),
    minHeight: hp("0.4548245792219122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1837712409588192%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5327588319778442,
    borderTopLeftRadius: 6.131035327911377,
    borderTopRightRadius: 6.131035327911377,
    borderBottomLeftRadius: 6.131035327911377,
    borderBottomRightRadius: 6.131035327911377
  },
  ImageBackground_656_618: {
    width: wp("1.4257441568111187%"),
    minWidth: wp("1.4257441568111187%"),
    height: hp("2.722677349690514%"),
    minHeight: hp("2.722677349690514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9807776351001394%"),
    top: hp("2.0966028954933194%")
  },
  View_656_621: {
    width: wp("3.387312335862639%"),
    minWidth: wp("3.387312335862639%"),
    height: hp("7.2771932675505955%"),
    minHeight: hp("7.2771932675505955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.173857799551108%"),
    top: hp("0.9096502196541252%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_623: {
    width: wp("2.1170701769834066%"),
    minWidth: wp("2.1170701769834066%"),
    height: hp("4.548245721471769%"),
    minHeight: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6351196963484043%"),
    top: hp("1.3644708016505973%")
  },
  View_656_624: {
    width: wp("2.1170701769834066%"),
    height: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.7663794159889221,
    borderTopLeftRadius: 6.131035327911377,
    borderTopRightRadius: 6.131035327911377,
    borderBottomLeftRadius: 6.131035327911377,
    borderBottomRightRadius: 6.131035327911377
  },
  ImageBackground_656_625: {
    width: wp("1.587802665668298%"),
    height: hp("3.41118436185118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26462618158667794%"),
    top: hp("0.5685325192414581%")
  },
  View_656_630: {
    width: wp("3.387312335862639%"),
    minWidth: wp("3.387312335862639%"),
    height: hp("7.2771932675505955%"),
    minHeight: hp("7.2771932675505955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.948490374654696%"),
    top: hp("0.9096502196541252%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_632: {
    width: wp("2.1170701769834066%"),
    minWidth: wp("2.1170701769834066%"),
    height: hp("4.548245721471769%"),
    minHeight: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6351196963484114%"),
    top: hp("1.3644708016505973%")
  },
  View_656_633: {
    width: wp("2.1170701769834066%"),
    height: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.7663794159889221,
    borderTopLeftRadius: 6.131035327911377,
    borderTopRightRadius: 6.131035327911377,
    borderBottomLeftRadius: 6.131035327911377,
    borderBottomRightRadius: 6.131035327911377
  },
  View_656_634: {
    width: wp("1.587802665668298%"),
    minWidth: wp("1.587802665668298%"),
    height: hp("3.41118436185118%"),
    minHeight: hp("3.41118436185118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26464304212707646%"),
    top: hp("0.5685325192414581%")
  },
  ImageBackground_656_635: {
    width: wp("0.4763407931143408%"),
    height: hp("1.0233552944058835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8203664537292781%"),
    top: hp("0.5685325192414723%")
  },
  View_656_636: {
    width: wp("1.587802665668298%"),
    minWidth: wp("1.587802665668298%"),
    height: hp("3.41118436185118%"),
    minHeight: hp("3.41118436185118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_656_637: {
    width: wp("1.587802665668298%"),
    height: hp("3.41118436185118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.5327588319778442,
    borderTopLeftRadius: 3.0655176639556885,
    borderTopRightRadius: 3.0655176639556885,
    borderBottomLeftRadius: 3.0655176639556885,
    borderBottomRightRadius: 3.0655176639556885
  },
  ImageBackground_656_638: {
    width: wp("1.217315341886236%"),
    height: hp("1.8761513141213257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05292523631732848%"),
    top: hp("1.4213267702730974%")
  },
  View_656_639: {
    width: wp("0.8997548350971706%"),
    minWidth: wp("0.8997548350971706%"),
    height: hp("9.096491442943538%"),
    minHeight: hp("9.096491442943538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.49947934651243%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_640: {
    width: wp("0.052926755247853736%"),
    minWidth: wp("0.052926755247853736%"),
    height: hp("9.096491442943538%"),
    minHeight: hp("9.096491442943538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4234187510790761%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  View_656_641: {
    width: wp("2.328777049786478%"),
    minWidth: wp("2.328777049786478%"),
    height: hp("9.096491442943538%"),
    minHeight: hp("9.096491442943538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_642: {
    width: wp("2.328777049786478%"),
    minWidth: wp("2.328777049786478%"),
    height: hp("4.548245721471769%"),
    minHeight: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_656_646: {
    width: wp("2.328777049786478%"),
    minWidth: wp("2.328777049786478%"),
    height: hp("4.548245721471769%"),
    minHeight: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_656_652: {
    width: wp("2.328777049786478%"),
    minWidth: wp("2.328777049786478%"),
    height: hp("4.548245721471769%"),
    minHeight: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.548246570440014%")
  },
  View_656_653: {
    width: wp("2.328777049786478%"),
    minWidth: wp("2.328777049786478%"),
    height: hp("4.548245721471769%"),
    minHeight: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_656_654: {
    width: wp("2.328777049786478%"),
    minWidth: wp("2.328777049786478%"),
    height: hp("4.548245721471769%"),
    minHeight: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_656_655: {
    width: wp("0.8148004336910353%"),
    minWidth: wp("0.8148004336910353%"),
    height: hp("2.046710588811767%"),
    minHeight: hp("2.046710588811767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7409701689830803%"),
    top: hp("1.1370650384829304%")
  },
  View_656_680: {
    width: wp("0.052926755247853736%"),
    minWidth: wp("0.052926755247853736%"),
    height: hp("9.096491442943538%"),
    minHeight: hp("9.096491442943538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.275852603806975%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  View_656_681: {
    width: wp("3.387312335862639%"),
    minWidth: wp("3.387312335862639%"),
    height: hp("7.2771932675505955%"),
    minHeight: hp("7.2771932675505955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.561174087102906%"),
    top: hp("0.9096502196541252%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_683: {
    width: wp("2.1170701769834066%"),
    height: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6351196963484114%"),
    top: hp("1.3644708016505973%")
  },
  View_656_684: {
    width: wp("2.1170701769834066%"),
    height: hp("4.548245721471769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.7663794159889221,
    borderTopLeftRadius: 6.131035327911377,
    borderTopRightRadius: 6.131035327911377,
    borderBottomLeftRadius: 6.131035327911377,
    borderBottomRightRadius: 6.131035327911377
  },
  View_656_685: {
    width: wp("0.9526815862286816%"),
    minWidth: wp("0.9526815862286816%"),
    height: hp("3.1837720899270625%"),
    minHeight: hp("3.1837720899270625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5822281811118728%"),
    top: hp("0.6822399286558749%")
  },
  ImageBackground_656_686: {
    width: wp("0.8468280839656598%"),
    minWidth: wp("0.8468280839656598%"),
    height: hp("1.4213267702730898%"),
    minHeight: hp("1.4213267702730898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05292523631733559%"),
    top: hp("1.0802090698604445%")
  },
  View_656_687: {
    width: wp("0.8468280839656598%"),
    minWidth: wp("0.8468280839656598%"),
    height: hp("0.2274122896109561%"),
    minHeight: hp("0.2274122896109561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05292523631733559%"),
    top: hp("2.956360949960583%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  ImageBackground_656_688: {
    width: wp("0.6351210135781304%"),
    minWidth: wp("0.6351210135781304%"),
    height: hp("1.3440195813730844%"),
    minHeight: hp("1.3440195813730844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15877570895200677%"),
    top: hp("0%")
  },
  View_656_689: {
    width: wp("41.57458563535912%"),
    minWidth: wp("41.57458563535912%"),
    height: hp("3.857566765578635%"),
    minHeight: hp("3.857566765578635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.314917127071823%"),
    top: hp("7.121661721068249%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_690: {
    width: wp("41.57458563535912%"),
    minWidth: wp("41.57458563535912%"),
    minHeight: hp("3.857566765578635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_656_690: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_656_691: {
    width: wp("16.59084762657545%"),
    minWidth: wp("16.59084762657545%"),
    height: hp("56.51824226718982%"),
    minHeight: hp("56.51824226718982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.317010531767952%"),
    top: hp("14.614243323442135%")
  },
  View_656_693: {
    width: wp("16.59084762657545%"),
    minWidth: wp("16.59084762657545%"),
    height: hp("18.511846298987507%"),
    minHeight: hp("18.511846298987507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_656_694: {
    width: wp("16.59084762657545%"),
    minWidth: wp("16.59084762657545%"),
    minHeight: hp("7.566765578635016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_656_694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_656_695: {
    width: wp("5.539375642386589%"),
    minWidth: wp("5.539375642386589%"),
    height: hp("8.372374741189203%"),
    minHeight: hp("8.372374741189203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.385487256129142%"),
    top: hp("10.139470850324773%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_696: {
    width: wp("5.513293967062597%"),
    minWidth: wp("5.513293967062597%"),
    height: hp("4.7714284336531545%"),
    minHeight: hp("4.7714284336531545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.012712847462026389%"),
    top: hp("0.026418264258861512%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_697: {
    width: wp("2.2143587881688913%"),
    minWidth: wp("2.2143587881688913%"),
    height: hp("4.757257455888063%"),
    minHeight: hp("4.757257455888063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.014170624028327694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I656_697_3_191: {
    flexGrow: 1,
    width: wp("2.2143587881688913%"),
    height: hp("4.757257455888063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I656_697_3_191_3_137: {
    flexGrow: 1,
    width: wp("2.2143587881688913%"),
    height: hp("4.757257455888063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I656_697_3_191_3_138: {
    width: wp("2.2143587881688913%"),
    height: hp("4.757257455888063%"),
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
  View_I656_697_3_191_3_139: {
    flexGrow: 1,
    width: wp("2.2143587881688913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I656_697_3_191_3_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07200000286102295,
    textTransform: "none"
  },
  View_656_698: {
    width: wp("3.0271108637857176%"),
    minWidth: wp("3.0271108637857176%"),
    height: hp("4.760748979245873%"),
    minHeight: hp("4.760748979245873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.486187845303867%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I656_698_3_191: {
    flexGrow: 1,
    width: wp("3.0271108637857176%"),
    height: hp("4.760748979245873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I656_698_3_191_3_137: {
    flexGrow: 1,
    width: wp("3.0271108637857176%"),
    height: hp("4.760748979245873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I656_698_3_191_3_138: {
    width: wp("3.0271108637857176%"),
    height: hp("4.760748979245873%"),
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
  View_I656_698_3_191_3_139: {
    flexGrow: 1,
    width: wp("3.0271108637857176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I656_698_3_191_3_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07200000286102295,
    textTransform: "none"
  },
  View_656_699: {
    width: wp("1.5917085152304635%"),
    minWidth: wp("1.5917085152304635%"),
    minHeight: hp("3.56764666050761%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9738466041522855%"),
    top: hp("4.797847334638192%"),
    justifyContent: "center"
  },
  Text_656_699: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07200000286102295,
    textTransform: "none"
  },
  View_656_700: {
    width: wp("5.524861878453039%"),
    minWidth: wp("5.524861878453039%"),
    height: hp("8.618198021229368%"),
    minHeight: hp("8.618198021229368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5883977900552537%"),
    top: hp("9.866468842729969%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_701: {
    width: wp("5.513293967062597%"),
    minWidth: wp("5.513293967062597%"),
    height: hp("4.7714284336531545%"),
    minHeight: hp("4.7714284336531545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.14759765534443758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_702: {
    width: wp("2.2143587881688913%"),
    minWidth: wp("2.2143587881688913%"),
    height: hp("4.757257455888063%"),
    minHeight: hp("4.757257455888063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.014170624028327694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I656_702_3_191: {
    flexGrow: 1,
    width: wp("2.2143587881688913%"),
    height: hp("4.757257455888063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I656_702_3_191_3_137: {
    flexGrow: 1,
    width: wp("2.2143587881688913%"),
    height: hp("4.757257455888063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I656_702_3_191_3_138: {
    width: wp("2.2143587881688913%"),
    height: hp("4.757257455888063%"),
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
  View_I656_702_3_191_3_139: {
    flexGrow: 1,
    width: wp("2.2143587881688913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I656_702_3_191_3_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07200000286102295,
    textTransform: "none"
  },
  View_656_703: {
    width: wp("3.0271108637857176%"),
    minWidth: wp("3.0271108637857176%"),
    height: hp("4.760748979245873%"),
    minHeight: hp("4.760748979245873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.486187845303867%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I656_703_3_191: {
    flexGrow: 1,
    width: wp("3.0271108637857176%"),
    height: hp("4.760748979245873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I656_703_3_191_3_137: {
    flexGrow: 1,
    width: wp("3.0271108637857176%"),
    height: hp("4.760748979245873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I656_703_3_191_3_138: {
    width: wp("3.0271108637857176%"),
    height: hp("4.760748979245873%"),
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
  View_I656_703_3_191_3_139: {
    flexGrow: 1,
    width: wp("3.0271108637857176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I656_703_3_191_3_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07200000286102295,
    textTransform: "none"
  },
  View_656_704: {
    width: wp("1.7298297987458455%"),
    minWidth: wp("1.7298297987458455%"),
    minHeight: hp("3.568239806313897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8975189377589778%"),
    top: hp("5.0499584979048855%"),
    justifyContent: "center"
  },
  Text_656_704: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07200000286102295,
    textTransform: "none"
  },
  View_656_705: {
    width: wp("16.574585635359114%"),
    minWidth: wp("16.574585635359114%"),
    height: hp("56.51824226718982%"),
    minHeight: hp("56.51824226718982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.349579700448895%"),
    top: hp("14.614243323442135%")
  },
  View_656_706: {
    width: wp("16.574585635359114%"),
    minWidth: wp("16.574585635359114%"),
    height: hp("35.60830860534125%"),
    minHeight: hp("35.60830860534125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.909933661848573%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_708: {
    width: wp("2.209944751381215%"),
    minWidth: wp("2.209944751381215%"),
    height: hp("4.747774480712167%"),
    minHeight: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.182320441988952%"),
    top: hp("10.979228486646882%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_709: {
    width: wp("16.574585635359114%"),
    minWidth: wp("16.574585635359114%"),
    height: hp("14.788949666461887%"),
    minHeight: hp("14.788949666461887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_656_710: {
    width: wp("16.574585635359114%"),
    minWidth: wp("16.574585635359114%"),
    minHeight: hp("7.566765578635016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_656_710: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_656_711: {
    width: wp("2.2143587881688913%"),
    minWidth: wp("2.2143587881688913%"),
    height: hp("4.757257455888063%"),
    minHeight: hp("4.757257455888063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.180128571736879%"),
    top: hp("10.031691432352943%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I656_711_3_191: {
    flexGrow: 1,
    width: wp("2.2143587881688913%"),
    height: hp("4.757257455888063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I656_711_3_191_3_137: {
    flexGrow: 1,
    width: wp("2.2143587881688913%"),
    height: hp("4.757257455888063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I656_711_3_191_3_138: {
    width: wp("2.2143587881688913%"),
    height: hp("4.757257455888063%"),
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
  View_I656_711_3_191_3_139: {
    flexGrow: 1,
    width: wp("2.2143587881688913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I656_711_3_191_3_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07200000286102295,
    textTransform: "none"
  },
  View_656_712: {
    width: wp("5.870165745856354%"),
    minWidth: wp("5.870165745856354%"),
    minHeight: hp("2.8189910979228485%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.79281767955801%"),
    top: hp("10.534124629080118%"),
    justifyContent: "center"
  },
  Text_656_712: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4559999942779541,
    textTransform: "none"
  },
  View_656_713: {
    width: wp("10.497237569060774%"),
    minWidth: wp("10.497237569060774%"),
    minHeight: hp("2.8189910979228485%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.48650347462016%"),
    top: hp("19.362017804154302%"),
    justifyContent: "center"
  },
  Text_656_713: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4559999942779541,
    textTransform: "none"
  },
  ImageBackground_656_714: {
    width: wp("4.614384266553004%"),
    minWidth: wp("4.614384266553004%"),
    height: hp("9.913395278885385%"),
    minHeight: hp("9.913395278885385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.48652033516056%"),
    top: hp("23.529564644533377%"),
    resizeMode: "cover"
  },
  ImageBackground_656_715: {
    width: wp("4.614384266553004%"),
    minWidth: wp("4.614384266553004%"),
    height: hp("9.913395278885385%"),
    minHeight: hp("9.913395278885385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.92099285652624%"),
    top: hp("23.529564644533377%"),
    resizeMode: "cover"
  },
  ImageBackground_656_716: {
    width: wp("4.280464952163275%"),
    minWidth: wp("4.280464952163275%"),
    height: hp("9.196013725122288%"),
    minHeight: hp("9.196013725122288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.864543767265193%"),
    top: hp("75.5026163616237%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
