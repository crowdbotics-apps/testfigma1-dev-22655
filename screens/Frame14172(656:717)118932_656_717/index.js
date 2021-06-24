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
      <View style={styles.View_656_718}>
        <View style={styles.View_656_719} />
        <View style={styles.View_656_720} />
      </View>
      <View style={styles.View_656_721}>
        <Text style={styles.Text_656_721}>
          Open the team library panel and drop some stickers below
        </Text>
      </View>
      <View style={styles.View_656_722}>
        <Text style={styles.Text_656_722}>Try it out</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80c8/adad/a62c7349edf5bb096de39fda08175548"
        }}
        style={styles.ImageBackground_656_723}
      />
      <View style={styles.View_656_724}>
        <View style={styles.View_I656_724_216_131}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecab/c689/d23586d1967dc73eefd74109691bc220"
            }}
            style={styles.ImageBackground_I656_724_216_132}
          />
        </View>
      </View>
      <View style={styles.View_656_725}>
        <View style={styles.View_656_726}>
          <View style={styles.View_656_727}>
            <View style={styles.View_656_730}>
              <View style={styles.View_656_731} />
            </View>
          </View>
          <View style={styles.View_656_732}>
            <View style={styles.View_656_734}>
              <View style={styles.View_656_735} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcac/ae56/d055c0c3780b9e90fa02033ac5325a67"
                }}
                style={styles.ImageBackground_656_736}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cb2/7926/08f8a4a7d84480b251065a33df1807ba"
                }}
                style={styles.ImageBackground_656_737}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56d9/f488/890bd6847df3e313153aec987a5c92f3"
                }}
                style={styles.ImageBackground_656_738}
              />
            </View>
          </View>
          <View style={styles.View_656_739}>
            <View style={styles.View_656_742}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1c7/6247/cb3193b84687ec20c2a8d7f0c513cefd"
                }}
                style={styles.ImageBackground_656_743}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0716/7edd/892ed34d06850ee61935f2bce0a5fafb"
                }}
                style={styles.ImageBackground_656_746}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26aa/b707/cfa2d4dfabd2d9edb6c6a0576b80dc94"
                }}
                style={styles.ImageBackground_656_749}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_656_752}>
          <View style={styles.View_656_754}>
            <View style={styles.View_656_755} />
            <View style={styles.View_656_756} />
            <View style={styles.View_656_757} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15b6/4a7f/04dcedaccc5d568b64380942d86ce49a"
              }}
              style={styles.ImageBackground_656_758}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f28d/fc19/f9dd8baa3355a7dab74328c1910e69a2"
              }}
              style={styles.ImageBackground_656_759}
            />
            <View style={styles.View_656_760}>
              <View style={styles.View_656_761} />
              <View style={styles.View_656_762} />
            </View>
          </View>
        </View>
        <View style={styles.View_656_763}>
          <View style={styles.View_656_764}>
            <View style={styles.View_656_765} />
            <View style={styles.View_656_766} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/186f/c958/f9ca43f4067d826dc7d80f92442f4ae1"
              }}
              style={styles.ImageBackground_656_767}
            />
            <View style={styles.View_656_775} />
          </View>
        </View>
        <View style={styles.View_656_776}>
          <View style={styles.View_656_779}>
            <View style={styles.View_656_780} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bd/461c/df00c976b9452a2bbb0315fe3ddbfe43"
              }}
              style={styles.ImageBackground_656_781}
            />
          </View>
        </View>
        <View style={styles.View_656_786}>
          <View style={styles.View_656_788}>
            <View style={styles.View_656_789} />
            <View style={styles.View_656_790}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea97/7877/dd4fb1d03df676b6d2cf1c068414d669"
                }}
                style={styles.ImageBackground_656_791}
              />
              <View style={styles.View_656_792}>
                <View style={styles.View_656_793} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa18/4215/c43e2c5cff0da5f3a0453ef17080c305"
                  }}
                  style={styles.ImageBackground_656_794}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_656_795}>
          <View style={styles.View_656_796} />
        </View>
        <View style={styles.View_656_797}>
          <View style={styles.View_656_798}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7501/5c0b/c786f5df9127d36df91b70df438ba796"
              }}
              style={styles.ImageBackground_656_802}
            />
          </View>
          <View style={styles.View_656_808}>
            <View style={styles.View_656_809}>
              <View source={{ uri: "null" }} style={styles.View_656_810} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/831b/2452/0980f68b10067adfec5a240f06acc9c3"
                }}
                style={styles.ImageBackground_656_811}
              />
            </View>
          </View>
          <View style={styles.View_656_836} />
        </View>
        <View style={styles.View_656_837}>
          <View style={styles.View_656_839}>
            <View style={styles.View_656_840} />
            <View style={styles.View_656_841}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d4f/e033/ecd094103c4a6155a7e1c0c3ca8be278"
                }}
                style={styles.ImageBackground_656_842}
              />
              <View style={styles.View_656_843} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d9a/82db/fdfa07f39956eba6370d0d62f62de3ad"
                }}
                style={styles.ImageBackground_656_844}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_656_845}>
        <View style={styles.View_656_846}>
          <Text style={styles.Text_656_846}>
            Tip: You can use custom components with team libraries. See how
            -&gt;
          </Text>
        </View>
      </View>
      <View style={styles.View_656_847}>
        <View style={styles.View_656_848}>
          <View style={styles.View_656_849}>
            <Text style={styles.Text_656_849}>
              FigJam also comes pre-loaded with a bunch of stylish stickers in
              your team library. Just drag and drop them onto your canvas.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_656_850}>
        <View style={styles.View_656_851} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9194/d372/51eb056e1228c69b2834b338498ee2e6"
          }}
          style={styles.ImageBackground_656_852}
        />
        <View style={styles.View_656_853}>
          <View style={styles.View_656_854}>
            <View style={styles.View_656_855}>
              <View style={styles.View_656_856}>
                <View style={styles.View_I656_856_216_63}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c53b/7669/05882aaed29ec0b13005af394c6493bd"
                    }}
                    style={styles.ImageBackground_I656_856_216_64}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_656_857}>
              <View style={styles.View_656_858}>
                <View style={styles.View_I656_858_216_55}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d5b/3106/3f71bf4e5ee9bb06b6e47dc17f6ede64"
                    }}
                    style={styles.ImageBackground_I656_858_216_56}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_656_859}>
              <View style={styles.View_656_860}>
                <View style={styles.View_I656_860_216_14}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a03/892f/80b55429aaca2c01360f8fd6216e2ef7"
                    }}
                    style={styles.ImageBackground_I656_860_216_15}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_656_861}>
            <View style={styles.View_656_862}>
              <View style={styles.View_656_863}>
                <View style={styles.View_656_864}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7edc/9013/6d33d5d0faa1a86125c965d2ba6b8881"
                    }}
                    style={styles.ImageBackground_656_865}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_656_881}>
              <View style={styles.View_656_882}>
                <View style={styles.View_656_883}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5f0/c8de/87b765271f088f07425912e2390a9d27"
                    }}
                    style={styles.ImageBackground_656_884}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_656_910}>
              <View style={styles.View_656_911}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2944/9a63/ba4a55f4c3990e9fafb62d4eab413ef0"
                  }}
                  style={styles.ImageBackground_656_912}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_656_923}>
            <View style={styles.View_656_924}>
              <View style={styles.View_656_925}>
                <View style={styles.View_656_926}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40fb/002d/076e6c6356ac9c4b0f4e9fe2fb8b488b"
                    }}
                    style={styles.ImageBackground_656_927}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_656_932}>
              <View style={styles.View_656_933}>
                <View style={styles.View_656_934}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a9b/3bd1/a6739b21354f4305f1f257f8f573c5dc"
                    }}
                    style={styles.ImageBackground_656_935}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_656_943}>
              <View style={styles.View_656_944}>
                <View style={styles.View_656_945}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/667e/8b43/61f7d1c4c5877b79ccc48c6d31b0cfdc"
                    }}
                    style={styles.ImageBackground_656_946}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_656_961}>
            <View style={styles.View_656_962}>
              <View style={styles.View_656_963}>
                <View style={styles.View_656_964}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93af/f08b/e21d971a32d5fef75ffbbf8d85c90462"
                    }}
                    style={styles.ImageBackground_656_965}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_656_969}>
              <View style={styles.View_656_970}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e98f/aaa6/c08fe4584f8f878f078242655cce707c"
                  }}
                  style={styles.ImageBackground_656_971}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55e1/9a37/13af0590af428acfe612149a072991bd"
                  }}
                  style={styles.ImageBackground_656_973}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcaa/6fe6/f53afe3321d18e53966133db4ef5cfb6"
                  }}
                  style={styles.ImageBackground_656_974}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b11/654f/2e423ee5b3fb1463e2794d67108b4282"
                  }}
                  style={styles.ImageBackground_656_976}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02e7/16b9/4d5ad5c68f8f4c92366b304c61ff1038"
                  }}
                  style={styles.ImageBackground_656_978}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc45/44cf/7a1c07d4601231fe451f435650baf580"
                  }}
                  style={styles.ImageBackground_656_980}
                />
              </View>
            </View>
            <View style={styles.View_656_982}>
              <View style={styles.View_656_983}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8e9/1e46/3051af1f1edc7522bb0398b1179e3823"
                  }}
                  style={styles.ImageBackground_656_984}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_656_988}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fed/72f2/5d9684eeaaf486a1cd8044ccc0a6a848"
          }}
          style={styles.ImageBackground_656_989}
        />
      </View>
      <View style={styles.View_656_1000}>
        <View style={styles.View_656_1001} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_656_718: {
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
  View_656_719: {
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
  View_656_720: {
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
  View_656_721: {
    width: wp("18.30256551668789%"),
    minWidth: wp("18.30256551668789%"),
    minHeight: hp("5.489614243323442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.31288037379144%"),
    top: hp("14.65249443620178%"),
    justifyContent: "center"
  },
  Text_656_721: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4559999942779541,
    textTransform: "none"
  },
  View_656_722: {
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
  Text_656_722: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4559999942779541,
    textTransform: "none"
  },
  ImageBackground_656_723: {
    width: wp("3.5800918031134%"),
    minWidth: wp("3.5800918031134%"),
    height: hp("7.315973570509551%"),
    minHeight: hp("7.315973570509551%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.67412487051105%"),
    top: hp("22.264307401300538%"),
    resizeMode: "cover"
  },
  View_656_724: {
    width: wp("7.121178853577671%"),
    minWidth: wp("7.121178853577671%"),
    height: hp("15.300612633589115%"),
    minHeight: hp("15.300612633589115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.475014027969612%"),
    top: hp("46.003514864324465%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I656_724_216_131: {
    flexGrow: 1,
    width: wp("7.121970245192723%"),
    height: hp("15.300612633589115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I656_724_216_132: {
    width: wp("7.121970245192723%"),
    height: hp("15.300612633589115%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_656_725: {
    width: wp("41.663373241108424%"),
    height: hp("9.075615314064818%"),
    minHeight: hp("9.075615314064818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0992370942679557%"),
    top: hp("70.88766126321401%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_656_726: {
    width: wp("20.699672804352986%"),
    minWidth: wp("20.699672804352986%"),
    height: hp("12.705861213299215%"),
    minHeight: hp("12.705861213299215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7459076096339787%"),
    top: hp("-3.6302470311920416%")
  },
  View_656_727: {
    width: wp("7.603961459839542%"),
    minWidth: wp("7.603961459839542%"),
    height: hp("12.705861213299215%"),
    minHeight: hp("12.705861213299215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.646899818715469%"),
    top: hp("0.000004527830583356263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_730: {
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
  View_656_731: {
    width: wp("5.914192305085409%"),
    minWidth: wp("5.914192305085409%"),
    height: hp("12.705861213299215%"),
    minHeight: hp("12.705861213299215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8449154005524857%"),
    top: hp("5.445372810703361%"),
    backgroundColor: "rgba(217, 155, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.38231027126312256,
    borderTopLeftRadius: 229.18812561035156,
    borderTopRightRadius: 229.18812561035156,
    borderBottomLeftRadius: 229.18812561035156,
    borderBottomRightRadius: 229.18812561035156
  },
  View_656_732: {
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
  View_656_734: {
    width: wp("2.534653995577143%"),
    minWidth: wp("2.534653995577143%"),
    height: hp("13.613429762843102%"),
    minHeight: hp("13.613429762843102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0560768085290055%"),
    top: hp("5.445372810703361%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_735: {
    width: wp("0.6336634988942857%"),
    height: hp("11.684854660260571%"),
    top: hp("1.9285751025825277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9504623834599446%"),
    backgroundColor: "rgba(84, 84, 84, 1)"
  },
  ImageBackground_656_736: {
    width: wp("2.534653995577143%"),
    height: hp("11.684861452006444%"),
    top: hp("1.9285751025825277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_737: {
    width: wp("2.534653995577143%"),
    height: hp("11.684861452006444%"),
    top: hp("1.9285751025825277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_738: {
    width: wp("0.6864687355842379%"),
    height: hp("2.042013389066702%"),
    top: hp("0.000004527830583356263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9240924982734811%")
  },
  View_656_739: {
    width: wp("8.448846300662552%"),
    minWidth: wp("8.448846300662552%"),
    height: hp("12.705861213299215%"),
    minHeight: hp("12.705861213299215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.250801212879836%"),
    top: hp("0.000004527830583356263%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_656_742: {
    width: wp("6.726057885101487%"),
    minWidth: wp("6.726057885101487%"),
    height: hp("14.90372337997844%"),
    minHeight: hp("14.90372337997844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8448479583908828%"),
    top: hp("5.445372810703361%")
  },
  ImageBackground_656_743: {
    width: wp("6.726057885101487%"),
    height: hp("14.449946462931193%"),
    minHeight: hp("14.449946462931193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4537837087931109%")
  },
  ImageBackground_656_746: {
    width: wp("6.16165182208488%"),
    height: hp("13.237370793826504%"),
    minHeight: hp("13.237370793826504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5280721253453038%"),
    top: hp("0.11343121174888893%")
  },
  ImageBackground_656_749: {
    width: wp("5.491817326835506%"),
    height: hp("11.798299455501207%"),
    minHeight: hp("11.798299455501207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2144984461325983%"),
    top: hp("0.000004527830583356263%")
  },
  View_656_752: {
    width: wp("3.3795385729542096%"),
    minWidth: wp("3.3795385729542096%"),
    height: hp("7.26049236444762%"),
    minHeight: hp("7.26049236444762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.34324823031768%"),
    top: hp("0.9075628897556527%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_754: {
    width: wp("2.3234327853713905%"),
    minWidth: wp("2.3234327853713905%"),
    height: hp("4.537807657032409%"),
    minHeight: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5280721253453038%"),
    top: hp("1.361346598548792%")
  },
  View_656_755: {
    width: wp("2.112211575165638%"),
    height: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10561442506906005%"),
    top: hp("0.000009055661166712525%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.7646205425262451,
    borderTopLeftRadius: 6.116964340209961,
    borderTopRightRadius: 6.116964340209961,
    borderBottomLeftRadius: 6.116964340209961,
    borderBottomRightRadius: 6.116964340209961
  },
  View_656_756: {
    width: wp("0.2112211608096381%"),
    height: hp("0.45378077277797624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0420198978231525%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5292410850524902
  },
  View_656_757: {
    width: wp("0.2112211608096381%"),
    height: hp("0.45378077277797624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.112221059219614%"),
    top: hp("2.0420198978231525%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5292410850524902
  },
  ImageBackground_656_758: {
    width: wp("2.0594063384756858%"),
    minWidth: wp("2.0594063384756858%"),
    height: hp("1.7584004105021762%"),
    minHeight: hp("1.7584004105021762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13198431025552182%"),
    top: hp("0.05672918936619453%")
  },
  ImageBackground_656_759: {
    width: wp("2.0594063384756858%"),
    minWidth: wp("2.0594063384756858%"),
    height: hp("1.7584004105021762%"),
    minHeight: hp("1.7584004105021762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13198431025552182%"),
    top: hp("2.7226931970975414%")
  },
  View_656_760: {
    width: wp("0.9504951824799428%"),
    minWidth: wp("0.9504951824799428%"),
    height: hp("2.4957942679657075%"),
    minHeight: hp("2.4957942679657075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6864937629488956%"),
    top: hp("1.0210167406574584%")
  },
  View_656_761: {
    width: wp("0.9504951824799428%"),
    height: hp("0.22689038638898812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_656_762: {
    width: wp("0.10561058040481905%"),
    height: hp("2.2689038285162044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4224577002762402%"),
    top: hp("0.22689864614241628%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_656_763: {
    width: wp("3.3454241673590728%"),
    minWidth: wp("3.3454241673590728%"),
    height: hp("7.187202068747682%"),
    minHeight: hp("7.187202068747682%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.701867878107738%"),
    top: hp("0.9224277575575002%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_764: {
    width: wp("2.299978983336391%"),
    minWidth: wp("2.299978983336391%"),
    height: hp("4.492001292967301%"),
    minHeight: hp("4.492001292967301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.522676752417123%"),
    top: hp("1.3476001049007778%")
  },
  View_656_765: {
    width: wp("2.0908901045994206%"),
    height: hp("4.492001292967301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10453535048342388%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.7569022178649902,
    borderTopLeftRadius: 6.055217742919922,
    borderTopRightRadius: 6.055217742919922,
    borderBottomLeftRadius: 6.055217742919922,
    borderBottomRightRadius: 6.055217742919922
  },
  View_656_766: {
    width: wp("0.20908901045994205%"),
    height: hp("0.44920012929673014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0909093361533166%"),
    top: hp("1.235300850797472%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5138044357299805,
    borderTopLeftRadius: 6.055217742919922,
    borderTopRightRadius: 6.055217742919922,
    borderBottomLeftRadius: 6.055217742919922,
    borderBottomRightRadius: 6.055217742919922
  },
  ImageBackground_656_767: {
    width: wp("1.515895358765323%"),
    height: hp("2.91980069893404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3659411688535954%"),
    top: hp("0.5615053261776808%")
  },
  View_656_775: {
    width: wp("0.20908901045994205%"),
    height: hp("0.44920012929673014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1444017540453473%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5138044357299805,
    borderTopLeftRadius: 6.055217742919922,
    borderTopRightRadius: 6.055217742919922,
    borderBottomLeftRadius: 6.055217742919922,
    borderBottomRightRadius: 6.055217742919922
  },
  View_656_776: {
    width: wp("3.371984787408818%"),
    minWidth: wp("3.371984787408818%"),
    height: hp("7.244264053661675%"),
    minHeight: hp("7.244264053661675%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.10884355576657%"),
    top: hp("0.9224277575575002%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_779: {
    width: wp("2.1074904921305113%"),
    minWidth: wp("2.1074904921305113%"),
    height: hp("4.527665033538546%"),
    minHeight: hp("4.527665033538546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6322702650207219%"),
    top: hp("1.358299368566847%")
  },
  View_656_780: {
    width: wp("2.1074904921305113%"),
    height: hp("4.527665033538546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(151, 71, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.7629115581512451,
    borderTopLeftRadius: 6.103292465209961,
    borderTopRightRadius: 6.103292465209961,
    borderBottomLeftRadius: 6.103292465209961,
    borderBottomRightRadius: 6.103292465209961
  },
  ImageBackground_656_781: {
    width: wp("1.5806178361671406%"),
    height: hp("3.3957487044065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26342908321823444%"),
    top: hp("0.5659561836401252%")
  },
  View_656_786: {
    width: wp("3.3795385729542096%"),
    minWidth: wp("3.3795385729542096%"),
    height: hp("7.26049236444762%"),
    minHeight: hp("7.26049236444762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86142254402625%"),
    top: hp("0.9075628897556527%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_788: {
    width: wp("2.112211575165638%"),
    minWidth: wp("2.112211575165638%"),
    height: hp("4.537807657032409%"),
    minHeight: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6336865504143603%"),
    top: hp("1.361346598548792%")
  },
  View_656_789: {
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
  View_656_790: {
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
  ImageBackground_656_791: {
    width: wp("0.4752475912399714%"),
    height: hp("1.021006694533351%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8184780732044175%"),
    top: hp("0.5672330318643333%")
  },
  View_656_792: {
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
  View_656_793: {
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
  ImageBackground_656_794: {
    width: wp("1.2145216293756473%"),
    height: hp("1.8718456302269277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0528072125345318%"),
    top: hp("1.418071260084389%")
  },
  View_656_795: {
    width: wp("0.8976899457899905%"),
    minWidth: wp("0.8976899457899905%"),
    height: hp("9.075615314064818%"),
    minHeight: hp("9.075615314064818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.445525617230665%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_796: {
    width: wp("0.052805290202409524%"),
    minWidth: wp("0.052805290202409524%"),
    height: hp("9.075615314064818%"),
    minHeight: hp("9.075615314064818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4224577002762402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  View_656_797: {
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
  View_656_798: {
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
  ImageBackground_656_802: {
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
  View_656_808: {
    width: wp("2.3234327853713905%"),
    minWidth: wp("2.3234327853713905%"),
    height: hp("4.537807657032409%"),
    minHeight: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.5378099209477085%")
  },
  View_656_809: {
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
  View_656_810: {
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
  ImageBackground_656_811: {
    width: wp("0.8129305602437225%"),
    minWidth: wp("0.8129305602437225%"),
    height: hp("2.0420135305614076%"),
    minHeight: hp("2.0420135305614076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7393009754834257%"),
    top: hp("1.1344434245757498%")
  },
  View_656_836: {
    width: wp("0.052805290202409524%"),
    minWidth: wp("0.052805290202409524%"),
    height: hp("9.075615314064818%"),
    minHeight: hp("9.075615314064818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.270642696823205%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  View_656_837: {
    width: wp("3.3795385729542096%"),
    minWidth: wp("3.3795385729542096%"),
    height: hp("7.26049236444762%"),
    minHeight: hp("7.26049236444762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4818283839779%"),
    top: hp("0.9075628897556527%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_839: {
    width: wp("2.112211575165638%"),
    height: hp("4.537807657032409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6336865504143674%"),
    top: hp("1.361346598548792%")
  },
  View_656_840: {
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
  View_656_841: {
    width: wp("0.9504951824799428%"),
    minWidth: wp("0.9504951824799428%"),
    height: hp("3.176465303324804%"),
    minHeight: hp("3.176465303324804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5808793378798356%"),
    top: hp("0.6806823549355414%")
  },
  ImageBackground_656_842: {
    width: wp("0.8448846432385524%"),
    minWidth: wp("0.8448846432385524%"),
    height: hp("1.4180648928226278%"),
    minHeight: hp("1.4180648928226278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052807212534524695%"),
    top: hp("1.0777278187013337%")
  },
  View_656_843: {
    width: wp("0.8448846432385524%"),
    minWidth: wp("0.8448846432385524%"),
    height: hp("0.22689038638898812%"),
    minHeight: hp("0.22689038638898812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052807212534524695%"),
    top: hp("2.9495737319176527%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  ImageBackground_656_844: {
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
  View_656_845: {
    width: wp("41.50552486187845%"),
    minWidth: wp("41.50552486187845%"),
    height: hp("6.824925816023739%"),
    minHeight: hp("6.824925816023739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.314917127071823%"),
    top: hp("85.90504451038575%"),
    backgroundColor: "rgba(245, 234, 193, 1)"
  },
  View_656_846: {
    width: wp("37.84530386740331%"),
    minWidth: wp("37.84530386740331%"),
    minHeight: hp("3.857566765578635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1049723756906071%"),
    top: hp("1.7804154302670696%"),
    justifyContent: "center"
  },
  Text_656_846: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_656_847: {
    width: wp("40.97665186086412%"),
    minWidth: wp("40.97665186086412%"),
    height: hp("7.566765578635016%"),
    minHeight: hp("7.566765578635016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.314917127071823%"),
    top: hp("7.085728857566766%")
  },
  View_656_848: {
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
  View_656_849: {
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
  Text_656_849: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_656_850: {
    width: wp("14.295580110497239%"),
    minWidth: wp("14.295580110497239%"),
    height: hp("40.35608308605341%"),
    minHeight: hp("40.35608308605341%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.867403314917127%"),
    top: hp("28.18991097922849%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_656_851: {
    width: wp("0.08940904179989304%"),
    minWidth: wp("0.08940904179989304%"),
    height: hp("2.401044036231338%"),
    minHeight: hp("2.401044036231338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.134544414709943%"),
    top: hp("16.807030923996198%"),
    backgroundColor: "rgba(151, 71, 255, 1)"
  },
  ImageBackground_656_852: {
    width: wp("2.503453038674033%"),
    minWidth: wp("2.503453038674033%"),
    height: hp("3.4575032197403273%"),
    minHeight: hp("3.4575032197403273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.728634323204425%"),
    top: hp("50.22954289920253%")
  },
  View_656_853: {
    width: wp("12.789198311652928%"),
    minWidth: wp("12.789198311652928%"),
    height: hp("37.04391615327105%"),
    minHeight: hp("37.04391615327105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.73444513984807%"),
    top: hp("1.6320474777448055%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_854: {
    width: wp("12.635678876170797%"),
    minWidth: wp("12.635678876170797%"),
    height: hp("8.011870002180602%"),
    minHeight: hp("8.011870002180602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_855: {
    width: wp("3.7292817679558015%"),
    minWidth: wp("3.7292817679558015%"),
    height: hp("7.019287471601447%"),
    minHeight: hp("7.019287471601447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_856: {
    width: wp("3.7292820314017447%"),
    minWidth: wp("3.7292820314017447%"),
    height: hp("7.019288037580269%"),
    minHeight: hp("7.019288037580269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I656_856_216_63: {
    flexGrow: 1,
    width: wp("3.7292604288343565%"),
    height: hp("7.019758365982011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.00047032840173955037%")
  },
  ImageBackground_I656_856_216_64: {
    width: wp("3.7292604288343565%"),
    height: hp("7.019758365982011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_656_857: {
    width: wp("3.7292820314017447%"),
    minWidth: wp("3.7292820314017447%"),
    height: hp("8.011425142825889%"),
    minHeight: hp("8.011425142825889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.453205930593924%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_858: {
    width: wp("3.7292820314017447%"),
    minWidth: wp("3.7292820314017447%"),
    height: hp("8.011425142825889%"),
    minHeight: hp("8.011425142825889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I656_858_216_55: {
    flexGrow: 1,
    width: wp("3.7294416796436627%"),
    height: hp("8.01195489900402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.0018762197975625838%")
  },
  ImageBackground_I656_858_216_56: {
    width: wp("3.7294416796436627%"),
    height: hp("8.01195489900402%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_656_859: {
    width: wp("3.7292817679558015%"),
    minWidth: wp("3.7292817679558015%"),
    height: hp("8.011870002180602%"),
    minHeight: hp("8.011870002180602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.906411861187841%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_860: {
    width: wp("2.887707388862062%"),
    minWidth: wp("2.887707388862062%"),
    height: hp("8.011870002180602%"),
    minHeight: hp("8.011870002180602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4207716462361901%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I656_860_216_14: {
    flexGrow: 1,
    width: wp("2.8870877640023416%"),
    height: hp("8.011870002180602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I656_860_216_15: {
    width: wp("2.8870877640023416%"),
    height: hp("8.011870002180602%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_656_861: {
    width: wp("12.789198311652928%"),
    minWidth: wp("12.789198311652928%"),
    height: hp("8.121807992635212%"),
    minHeight: hp("8.121807992635212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.567110191820635%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_862: {
    width: wp("3.7804548253011965%"),
    minWidth: wp("3.7804548253011965%"),
    height: hp("8.121807992635212%"),
    minHeight: hp("8.121807992635212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_863: {
    width: wp("3.7804548253011965%"),
    minWidth: wp("3.7804548253011965%"),
    height: hp("6.021340027761035%"),
    minHeight: hp("6.021340027761035%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0504804662144167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_656_864: {
    width: wp("3.7804556156390277%"),
    height: hp("6.020663117088974%"),
    top: hp("0.0006893622061596716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_865: {
    width: wp("3.7804556156390277%"),
    height: hp("6.020663117088974%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_656_881: {
    width: wp("3.7804548253011965%"),
    minWidth: wp("3.7804548253011965%"),
    height: hp("8.121807992635212%"),
    minHeight: hp("8.121807992635212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.50439453125%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_882: {
    width: wp("3.7804548253011965%"),
    minWidth: wp("3.7804548253011965%"),
    height: hp("5.46823326133479%"),
    minHeight: hp("5.46823326133479%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.32702677469225%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_656_883: {
    width: wp("3.7804548253011965%"),
    height: hp("5.46823326133479%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_884: {
    width: wp("3.7804548253011965%"),
    height: hp("5.46823326133479%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_656_910: {
    width: wp("3.7804548253011965%"),
    minWidth: wp("3.7804548253011965%"),
    height: hp("8.121807992635212%"),
    minHeight: hp("8.121807992635212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.008721620338392%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_911: {
    width: wp("3.7804566694228026%"),
    height: hp("8.121757054541161%"),
    top: hp("-0.00021733586795136262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_912: {
    width: wp("3.7804566694228026%"),
    height: hp("8.121757054541161%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_656_923: {
    width: wp("12.789198311652928%"),
    minWidth: wp("12.789198311652928%"),
    height: hp("8.122710728857568%"),
    minHeight: hp("8.122710728857568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.244158374095885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_924: {
    width: wp("3.7804548253011965%"),
    minWidth: wp("3.7804548253011965%"),
    height: hp("8.122710728857568%"),
    minHeight: hp("8.122710728857568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_925: {
    width: wp("3.7804548253011965%"),
    minWidth: wp("3.7804548253011965%"),
    height: hp("8.122710728857568%"),
    minHeight: hp("8.122710728857568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_656_926: {
    width: wp("3.780877129149042%"),
    height: hp("8.122728274201073%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_927: {
    width: wp("3.780877129149042%"),
    height: hp("8.122728274201073%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_656_932: {
    width: wp("3.7804548253011965%"),
    minWidth: wp("3.7804548253011965%"),
    height: hp("8.121807992635212%"),
    minHeight: hp("8.121807992635212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.50439453125%"),
    top: hp("0.000006791745867928967%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_933: {
    width: wp("3.7804548253011965%"),
    minWidth: wp("3.7804548253011965%"),
    height: hp("4.55589351031476%"),
    minHeight: hp("4.55589351031476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.78298271020725%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_934: {
    width: wp("3.7804548253011965%"),
    height: hp("4.55589351031476%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_935: {
    width: wp("3.7804548253011965%"),
    height: hp("4.55589351031476%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_656_943: {
    width: wp("3.7804548253011965%"),
    minWidth: wp("3.7804548253011965%"),
    height: hp("8.121807992635212%"),
    minHeight: hp("8.121807992635212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.008721620338392%"),
    top: hp("0.000006791745867928967%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_944: {
    width: wp("3.7804548253011965%"),
    minWidth: wp("3.7804548253011965%"),
    height: hp("6.905792870224406%"),
    minHeight: hp("6.905792870224406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6080287854112569%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_656_945: {
    width: wp("3.7804548253011965%"),
    height: hp("6.905792870224406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_946: {
    width: wp("3.7804548253011965%"),
    height: hp("6.905792870224406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_656_961: {
    width: wp("12.789198311652928%"),
    minWidth: wp("12.789198311652928%"),
    height: hp("8.121807992635212%"),
    minHeight: hp("8.121807992635212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.922108726614663%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_962: {
    width: wp("3.7804548253011965%"),
    minWidth: wp("3.7804548253011965%"),
    height: hp("8.121807992635212%"),
    minHeight: hp("8.121807992635212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_963: {
    width: wp("2.7641425475231194%"),
    minWidth: wp("2.7641425475231194%"),
    height: hp("8.121807992635212%"),
    minHeight: hp("8.121807992635212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5081766876726483%"),
    top: hp("0.00001131957645128523%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_656_964: {
    width: wp("2.7639871144163015%"),
    height: hp("8.121826669936363%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_965: {
    width: wp("2.7639871144163015%"),
    height: hp("8.121826669936363%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_656_969: {
    width: wp("3.7804548253011965%"),
    minWidth: wp("3.7804548253011965%"),
    height: hp("8.121807992635212%"),
    minHeight: hp("8.121807992635212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.50439453125%"),
    top: hp("0.00001131957645128523%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_970: {
    width: wp("3.7804548253011965%"),
    height: hp("8.121807992635212%"),
    top: hp("0.00001584740704174692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_971: {
    width: wp("3.51005627964083%"),
    height: hp("6.746812814774781%"),
    top: hp("0.9222964504706042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03412573377071482%")
  },
  ImageBackground_656_973: {
    width: wp("3.7804548253011965%"),
    height: hp("7.264524397581197%"),
    top: hp("0.8572835950540139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_656_974: {
    width: wp("1.0246414505974364%"),
    height: hp("1.5045064139436897%"),
    top: hp("0.4074685297663194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.200435406595304%")
  },
  ImageBackground_656_976: {
    width: wp("0.93121403488665%"),
    height: hp("1.3249043541067786%"),
    top: hp("0.00001131957645128523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.412473562672652%")
  },
  ImageBackground_656_978: {
    width: wp("0.9140348566171214%"),
    height: hp("1.7522496356454729%"),
    top: hp("5.3849194806831875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22174982734806292%")
  },
  ImageBackground_656_980: {
    width: wp("0.8078996647787359%"),
    height: hp("1.600625465460984%"),
    top: hp("5.846083553325521%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04194902451657612%")
  },
  View_656_982: {
    width: wp("3.7804548253011965%"),
    minWidth: wp("3.7804548253011965%"),
    height: hp("8.121807992635212%"),
    minHeight: hp("8.121807992635212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.008721620338392%"),
    top: hp("0.00001131957645128523%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_656_983: {
    width: wp("3.1582982500613728%"),
    height: hp("8.121837423533997%"),
    top: hp("0.00001131957645128523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.31111069147099357%")
  },
  ImageBackground_656_984: {
    width: wp("3.1582982500613728%"),
    height: hp("8.121837423533997%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_656_988: {
    width: wp("10.38545429377266%"),
    height: hp("22.311600591733125%"),
    top: hp("21.768893827670404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.789607432665746%")
  },
  ImageBackground_656_989: {
    width: wp("10.38545429377266%"),
    height: hp("22.311600591733125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_656_1000: {
    width: wp("2.31353591160221%"),
    minWidth: wp("2.31353591160221%"),
    height: hp("4.747774480712167%"),
    minHeight: hp("4.747774480712167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.436577391229285%"),
    top: hp("22.02269783359607%")
  },
  View_656_1001: {
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
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
