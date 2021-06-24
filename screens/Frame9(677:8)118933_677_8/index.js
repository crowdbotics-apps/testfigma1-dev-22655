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
      <View style={styles.View_677_9}>
        <View style={styles.View_677_10} />
        <View style={styles.View_677_11} />
      </View>
      <View style={styles.View_677_12}>
        <View style={styles.View_677_13}>
          <Text style={styles.Text_677_13}>
            Tip: Hold down your mouse while stamping for extra big stamps.
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b91/15f6/60fa83ac044106d0b2ee57ea0899085d"
        }}
        style={styles.ImageBackground_677_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a2/73a9/18619a9e049cd843199136848d811c8a"
        }}
        style={styles.ImageBackground_677_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/226e/cb45/f54457a2c59a42e3bd84d5f3ef0d8de1"
        }}
        style={styles.ImageBackground_677_16}
      />
      <View style={styles.View_677_17}>
        <Text style={styles.Text_677_17}>Try it out</Text>
      </View>
      <View style={styles.View_677_18}>
        <View style={styles.View_677_19}>
          <View style={styles.View_677_20}>
            <Text style={styles.Text_677_20}>
              A picture is worth a thousand words. Quickly react with
              disappearing emotes or leave some more permanent stamps.{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_677_21}>
        <View style={styles.View_677_22}>
          <View style={styles.View_677_23}>
            <View style={styles.View_677_24}>
              <View style={styles.View_677_25}>
                <View style={styles.View_677_26}>
                  <Text style={styles.Text_677_26}>Emotes</Text>
                </View>
              </View>
              <View style={styles.View_677_623}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e001/7db0/e5ac0b137c51a3cec620ee15e00efba4"
                  }}
                  style={styles.ImageBackground_677_624}
                />
                <View style={styles.View_677_625} />
                <View style={styles.View_677_626} />
                <View style={styles.View_677_627} />
                <View style={styles.View_677_628} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99a9/3617/78975316d6af441477892deaaabc5c1e"
                  }}
                  style={styles.ImageBackground_677_630}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e7f/d8e3/e1e738e3175b55ed733c53983ca82e0b"
                  }}
                  style={styles.ImageBackground_677_631}
                />
                <View style={styles.View_677_632}>
                  <View style={styles.View_677_662}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e28a/a15b/b6964515e2cea66457d45d32a6aeb762"
                      }}
                      style={styles.ImageBackground_677_663}
                    />
                    <View style={styles.View_677_664}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01f5/e10d/adc7bae5a63bd84a3ae53faae784be01"
                        }}
                        style={styles.ImageBackground_677_665}
                      />
                      <View style={styles.View_677_666} />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                      }}
                      style={styles.ImageBackground_677_667}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                      }}
                      style={styles.ImageBackground_677_668}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83fd/cb1e/d5e38e867752cd59b3a08a3212dbed87"
                    }}
                    style={styles.ImageBackground_677_669}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7aad/12e3/dae3e6071bd4904c3814a449948cce9b"
                    }}
                    style={styles.ImageBackground_677_670}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e75/9516/a4f16c747ef3ab02e74521eb47a8d311"
                    }}
                    style={styles.ImageBackground_677_671}
                  />
                </View>
                <View style={styles.View_677_672}>
                  <View style={styles.View_I677_672_7324_286} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fa4/6e87/20068a1c9a3aad6557ba5f15b1fb072c"
                    }}
                    style={styles.ImageBackground_I677_672_7324_287}
                  />
                </View>
                <View style={styles.View_677_673}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b027/7280/a25cdccab0f51317e844f5ae2a476d29"
                    }}
                    style={styles.ImageBackground_677_674}
                  />
                </View>
                <View style={styles.View_677_679}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2ab/3cdb/665e18bb12442eb6e39972d6b33e0ba4"
                    }}
                    style={styles.ImageBackground_677_680}
                  />
                </View>
                <View style={styles.View_677_685}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e499/8ce3/1c438707a423ece67a8873d291100169"
                    }}
                    style={styles.ImageBackground_677_686}
                  />
                </View>
                <View style={styles.View_677_691}>
                  <View style={styles.View_677_692}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0542/4644/e832df4a7e0c6230c762ce77106224ac"
                      }}
                      style={styles.ImageBackground_677_693}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9d1/e102/15d83102603a62956621c9585db0a957"
                      }}
                      style={styles.ImageBackground_677_694}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8d0/4a21/277b76f1b8ecf781fbe5836c7a124912"
                      }}
                      style={styles.ImageBackground_677_695}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a49f/53d0/d9ec2c7a1816c447dd1026af75d1e938"
                      }}
                      style={styles.ImageBackground_677_696}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5e0/a5da/d0d6d435f4747c3f607d60a92d229de5"
                      }}
                      style={styles.ImageBackground_677_697}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a140/7842/c593fcbbbc0ec26aba696feacc93d4e0"
                      }}
                      style={styles.ImageBackground_677_698}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f3c/df25/5c9bd5fffc7b18f7097f6035e0693bb5"
                      }}
                      style={styles.ImageBackground_677_699}
                    />
                  </View>
                </View>
                <View style={styles.View_677_700}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43b3/405b/30b0669e0607cfc521703e01718ab9c2"
                    }}
                    style={styles.ImageBackground_677_701}
                  />
                </View>
                <View style={styles.View_677_706}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
                    }}
                    style={styles.ImageBackground_677_707}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
                    }}
                    style={styles.ImageBackground_677_708}
                  />
                  <View style={styles.View_677_710}>
                    <View style={styles.View_677_711}>
                      <View style={styles.View_677_712}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4873/df99/aa6b397ddb8be1de67e90b14bdbf8bb9"
                          }}
                          style={styles.ImageBackground_677_713}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e963/1b55/5e24b23dbe2d8fc2d674dc72269c5989"
                          }}
                          style={styles.ImageBackground_677_714}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/577a/4c48/f56caf72fef9c3b9736eced781b6f013"
                          }}
                          style={styles.ImageBackground_677_715}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
                          }}
                          style={styles.ImageBackground_677_716}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15c5/3f41/2c227d42df9fa3347ed4f71404c73347"
                          }}
                          style={styles.ImageBackground_677_717}
                        />
                      </View>
                      <View style={styles.View_677_718}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4873/df99/aa6b397ddb8be1de67e90b14bdbf8bb9"
                          }}
                          style={styles.ImageBackground_677_719}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e963/1b55/5e24b23dbe2d8fc2d674dc72269c5989"
                          }}
                          style={styles.ImageBackground_677_720}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d107/989c/235e12d2a55e8bcd2bdcd44da79342a3"
                          }}
                          style={styles.ImageBackground_677_721}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
                          }}
                          style={styles.ImageBackground_677_722}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15c5/3f41/2c227d42df9fa3347ed4f71404c73347"
                          }}
                          style={styles.ImageBackground_677_723}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd9/bbaa/ed9d93063e8418675d8125a3342d0b4d"
                  }}
                  style={styles.ImageBackground_677_724}
                />
                <View style={styles.View_677_729}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a6f/c732/33c365c685d52db254828d73b99f4f6e"
                    }}
                    style={styles.ImageBackground_677_730}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4184/7bc4/6a90ab6eda019a696478abf4b9aebf45"
                    }}
                    style={styles.ImageBackground_677_732}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_677_138}>
            <View style={styles.View_677_139}>
              <View style={styles.View_677_140}>
                <Text style={styles.Text_677_140}>Stamps</Text>
              </View>
            </View>
            <View style={styles.View_677_511}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e71e/cf2a/9b8ccd4bc6ff1dec34c3a13a8a4caf8c"
                }}
                style={styles.ImageBackground_677_512}
              />
              <View style={styles.View_677_514} />
              <View style={styles.View_677_515} />
              <View style={styles.View_677_516} />
              <View style={styles.View_677_517} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c112/f01d/328d0c20ac51b9f2f423c099269c4a0a"
                }}
                style={styles.ImageBackground_677_518}
              />
              <View style={styles.View_677_519}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4019/10ba/9a46e39b1a1ca5b8b627edc09255ae85"
                  }}
                  style={styles.ImageBackground_677_520}
                />
              </View>
              <View style={styles.View_677_523}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb88/73fe/5d07987d3bb1a81957c5b06604936dd7"
                  }}
                  style={styles.ImageBackground_677_524}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d595/b09c/f8c106c085b495100f16cc39516e055a"
                }}
                style={styles.ImageBackground_677_527}
              />
              <View style={styles.View_677_529}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8b8/5715/1d6e55ffdd74a36182e6ea0b5d44b2a0"
                  }}
                  style={styles.ImageBackground_677_530}
                />
              </View>
              <View style={styles.View_677_532}>
                <View style={styles.View_677_533}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84ee/46bc/ba27918fbf4c44755df9a8cfbe872de1"
                    }}
                    style={styles.ImageBackground_677_534}
                  />
                </View>
              </View>
              <View style={styles.View_677_537}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbf9/c20f/ed24cfa6ac596605292b62b07f310995"
                  }}
                  style={styles.ImageBackground_677_538}
                />
              </View>
              <View style={styles.View_677_540}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f8b/9e91/c3b9a82f63d11f8543e502626347cfb5"
                  }}
                  style={styles.ImageBackground_677_541}
                />
              </View>
              <View style={styles.View_677_543}>
                <View style={styles.View_677_544}>
                  <View style={styles.View_677_545}>
                    <View style={styles.View_I677_545_1007_156}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30aa/996a/0afd7adaf365c0e1b066c3f9e674d2be"
                        }}
                        style={styles.ImageBackground_I677_545_1007_156_657_147}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67d1/42f4/9d6c9049195bfb0319ba85d124f9de71"
                        }}
                        style={styles.ImageBackground_I677_545_1007_156_657_148}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b766/7f50/cea54e7688e66a4b41fa1225f056da16"
                }}
                style={styles.ImageBackground_677_546}
              />
              <View style={styles.View_677_547}>
                <View style={styles.View_I677_547_7324_286} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba45/5473/dad06d036df493d6ebe0c82bf3856157"
                  }}
                  style={styles.ImageBackground_I677_547_7324_287}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9ff/353f/f05b562cc36cad6ccf9ddb33283e9aff"
                }}
                style={styles.ImageBackground_677_548}
              />
              <View style={styles.View_677_549}>
                <View style={styles.View_677_579}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e28a/a15b/b6964515e2cea66457d45d32a6aeb762"
                    }}
                    style={styles.ImageBackground_677_580}
                  />
                  <View style={styles.View_677_581}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01f5/e10d/adc7bae5a63bd84a3ae53faae784be01"
                      }}
                      style={styles.ImageBackground_677_582}
                    />
                    <View style={styles.View_677_583} />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                    }}
                    style={styles.ImageBackground_677_584}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                    }}
                    style={styles.ImageBackground_677_585}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/babe/f9ab/7be6530928c47aba7c1956f7f9ab6ac7"
                  }}
                  style={styles.ImageBackground_677_586}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/872b/060d/408b13e51b6b376b52bd5dd1e2765743"
                  }}
                  style={styles.ImageBackground_677_587}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/456c/11b4/eec0520d514b713329b2f3d6292b8dd7"
                  }}
                  style={styles.ImageBackground_677_588}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_677_220}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b91/15f6/60fa83ac044106d0b2ee57ea0899085d"
            }}
            style={styles.ImageBackground_677_221}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a2/73a9/18619a9e049cd843199136848d811c8a"
            }}
            style={styles.ImageBackground_677_222}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/226e/cb45/f54457a2c59a42e3bd84d5f3ef0d8de1"
            }}
            style={styles.ImageBackground_677_223}
          />
          <View style={styles.View_677_224}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d53b/6feb/7419b6cf177f1dcae83718d8654c4744"
              }}
              style={styles.ImageBackground_677_225}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64ae/715f/3fb70ae29d690fc1aa6df81ae6acbfd2"
              }}
              style={styles.ImageBackground_677_226}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ca/e0bc/cf6e2412996814289e419fe652e8b465"
              }}
              style={styles.ImageBackground_677_227}
            />
            <View style={styles.View_677_478}>
              <View style={styles.View_677_479}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/223c/bff5/f99e3d890443d8d2bfd7976253ff1e8f"
                  }}
                  style={styles.ImageBackground_677_480}
                />
              </View>
            </View>
            <View style={styles.View_677_471}>
              <View style={styles.View_677_472}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/223c/bff5/f99e3d890443d8d2bfd7976253ff1e8f"
                  }}
                  style={styles.ImageBackground_677_473}
                />
              </View>
            </View>
            <View style={styles.View_677_464}>
              <View style={styles.View_677_465}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/223c/bff5/f99e3d890443d8d2bfd7976253ff1e8f"
                  }}
                  style={styles.ImageBackground_677_466}
                />
              </View>
            </View>
            <View style={styles.View_677_457}>
              <View style={styles.View_677_458}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/223c/bff5/f99e3d890443d8d2bfd7976253ff1e8f"
                  }}
                  style={styles.ImageBackground_677_459}
                />
              </View>
            </View>
            <View style={styles.View_677_239} />
          </View>
          <View style={styles.View_677_240}>
            <View style={styles.View_677_241}>
              <View style={styles.View_677_453}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c287/719d/7795ce15677a16790e66162a0619ce14"
                  }}
                  style={styles.ImageBackground_677_454}
                />
              </View>
              <View style={styles.View_677_243}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1ee/a2f0/f32666b082cdb686d5d7cb85dd7f32a5"
                  }}
                  style={styles.ImageBackground_677_244}
                />
                <View style={styles.View_677_245}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0d0/dd4e/a38d49c4a757b10d18d7fffe48870fdc"
                    }}
                    style={styles.ImageBackground_677_246}
                  />
                  <View style={styles.View_677_247} />
                </View>
              </View>
            </View>
            <View style={styles.View_677_449}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f4b/c059/5b7e4aa07c00bffc6c82dee3c2c6dad0"
                }}
                style={styles.ImageBackground_677_450}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_677_249}>
        <View style={styles.View_677_250}>
          <Text style={styles.Text_677_250}>Just press</Text>
        </View>
        <View style={styles.View_677_251}>
          <View style={styles.View_677_252} />
          <View style={styles.View_677_253}>
            <View style={styles.View_I677_253_3_137}>
              <View style={styles.View_I677_253_3_138} />
            </View>
            <View style={styles.View_I677_253_3_139}>
              <Text style={styles.Text_I677_253_3_139}>E</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_677_254}>
          <Text style={styles.Text_677_254}>
            and select either emotes or stamps with the center toggle.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_677_9: {
    width: wp("99.91017006610163%"),
    minWidth: wp("99.91017006610163%"),
    height: hp("99.84296332465277%"),
    minHeight: hp("99.84296332465277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03450655624568668%"),
    top: hp("0.12919560185185183%")
  },
  View_677_10: {
    width: wp("99.91017006610163%"),
    minWidth: wp("99.91017006610163%"),
    height: hp("99.84296332465277%"),
    minHeight: hp("99.84296332465277%"),
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
  View_677_11: {
    width: wp("48.309178743961354%"),
    minWidth: wp("48.309178743961354%"),
    height: hp("85.31681315104167%"),
    minHeight: hp("85.31681315104167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.24016563146998%"),
    top: hp("7.403319182219328%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_677_12: {
    width: wp("41.476880607315394%"),
    minWidth: wp("41.476880607315394%"),
    height: hp("6.814814814814815%"),
    minHeight: hp("6.814814814814815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.347135955831608%"),
    top: hp("86.06410951967592%"),
    backgroundColor: "rgba(245, 234, 193, 1)"
  },
  View_677_13: {
    width: wp("35.40372670807454%"),
    minWidth: wp("35.40372670807454%"),
    minHeight: hp("3.851851851851852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1042097998619735%"),
    top: hp("1.7777777777777715%"),
    justifyContent: "center"
  },
  Text_677_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  ImageBackground_677_14: {
    width: wp("7.276296780140667%"),
    minWidth: wp("7.276296780140667%"),
    height: hp("22.313976146556712%"),
    minHeight: hp("22.313976146556712%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.9458327941684%"),
    top: hp("26.67353877314815%")
  },
  ImageBackground_677_15: {
    width: wp("7.0535532106935275%"),
    minWidth: wp("7.0535532106935275%"),
    height: hp("22.712440773292826%"),
    minHeight: hp("22.712440773292826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.37251984126983%"),
    top: hp("34.803982204861114%"),
    resizeMode: "cover"
  },
  ImageBackground_677_16: {
    width: wp("7.536164277828998%"),
    minWidth: wp("7.536164277828998%"),
    height: hp("22.55305537471065%"),
    minHeight: hp("22.55305537471065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.0501800810904%"),
    top: hp("50.26258680555556%")
  },
  View_677_17: {
    width: wp("5.866114561766736%"),
    minWidth: wp("5.866114561766736%"),
    minHeight: hp("2.814814814814815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.79296066252588%"),
    top: hp("10.64771412037037%"),
    justifyContent: "center"
  },
  Text_677_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4559999942779541,
    textTransform: "none"
  },
  View_677_18: {
    width: wp("40.948372598020185%"),
    minWidth: wp("40.948372598020185%"),
    height: hp("7.555555555555555%"),
    minHeight: hp("7.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.347135955831608%"),
    top: hp("7.2683738425925934%")
  },
  View_677_19: {
    width: wp("40.948372598020185%"),
    minWidth: wp("40.948372598020185%"),
    height: hp("7.555555555555555%"),
    minHeight: hp("7.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_677_20: {
    width: wp("40.948372598020185%"),
    minWidth: wp("40.948372598020185%"),
    minHeight: hp("7.555555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_677_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_677_21: {
    width: wp("41.61490683229814%"),
    minWidth: wp("41.61490683229814%"),
    height: hp("54.962962962962955%"),
    minHeight: hp("54.962962962962955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.347135955831608%"),
    top: hp("26.814814814814813%")
  },
  View_677_22: {
    width: wp("41.61490683229814%"),
    minWidth: wp("41.61490683229814%"),
    height: hp("54.962962962962955%"),
    minHeight: hp("54.962962962962955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_677_23: {
    width: wp("11.456176673567978%"),
    minWidth: wp("11.456176673567978%"),
    height: hp("36.44444444444444%"),
    minHeight: hp("36.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.20703933747411973%"),
    top: hp("8.952835648148149%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_677_24: {
    width: wp("11.215702791391692%"),
    minWidth: wp("11.215702791391692%"),
    height: hp("30.298597547743057%"),
    minHeight: hp("30.298597547743057%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20703933747411973%"),
    top: hp("0.010127314814809552%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_677_25: {
    width: wp("4.278812974465148%"),
    minWidth: wp("4.278812974465148%"),
    height: hp("3.851851851851852%"),
    minHeight: hp("3.851851851851852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4684480676328495%"),
    top: hp("0%")
  },
  View_677_26: {
    width: wp("4.278812974465148%"),
    minWidth: wp("4.278812974465148%"),
    minHeight: hp("3.851851851851852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_677_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_677_623: {
    width: wp("11.215702791391692%"),
    minWidth: wp("11.215702791391692%"),
    height: hp("24.076375325520832%"),
    minHeight: hp("24.076375325520832%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.2222222222222285%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_677_624: {
    width: wp("11.204533020819854%"),
    height: hp("24.052397551359952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.034506556245686326%"),
    top: hp("-0.07407407407406907%")
  },
  View_677_625: {
    width: wp("11.204533020819854%"),
    minWidth: wp("11.204533020819854%"),
    height: hp("0.10367412037319607%"),
    minHeight: hp("0.10367412037319607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.034506556245686326%"),
    top: hp("11.952125831886576%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  View_677_626: {
    width: wp("0.04829539768937705%"),
    minWidth: wp("0.04829539768937705%"),
    height: hp("24.052397551359952%"),
    minHeight: hp("24.052397551359952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.519465202294686%"),
    top: hp("-0.07407181351273096%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  View_677_627: {
    width: wp("7.9569509228481925%"),
    minWidth: wp("7.9569509228481925%"),
    height: hp("17.080921314380788%"),
    minHeight: hp("17.080921314380788%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6217070501207727%"),
    top: hp("3.4508463541666714%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  View_677_628: {
    width: wp("7.9569509228481925%"),
    minWidth: wp("7.9569509228481925%"),
    height: hp("17.080921314380788%"),
    minHeight: hp("17.080921314380788%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.607520272601795%"),
    top: hp("3.4457917390046333%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  ImageBackground_677_630: {
    width: wp("4.6363583098122625%"),
    height: hp("9.95271583839699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.249580799258109%"),
    top: hp("6.975766782407412%")
  },
  ImageBackground_677_631: {
    width: wp("4.6363583098122625%"),
    height: hp("9.95271583839699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.249580799258109%"),
    top: hp("6.975766782407412%")
  },
  View_677_632: {
    width: wp("1.9318160062991314%"),
    minWidth: wp("1.9318160062991314%"),
    height: hp("4.146965026855469%"),
    minHeight: hp("4.146965026855469%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.60184016994479%"),
    top: hp("7.597809968171298%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_677_662: {
    width: wp("0.9659080031495657%"),
    minWidth: wp("0.9659080031495657%"),
    height: hp("2.0734825134277344%"),
    minHeight: hp("2.0734825134277344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4829569962042797%"),
    top: hp("1.0367341218171333%")
  },
  ImageBackground_677_663: {
    width: wp("0.9659080031495657%"),
    minWidth: wp("0.9659080031495657%"),
    height: hp("2.0734825134277344%"),
    minHeight: hp("2.0734825134277344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_677_664: {
    width: wp("0.4732931293727119%"),
    minWidth: wp("0.4732931293727119%"),
    height: hp("0.41469648149278426%"),
    minHeight: hp("0.41469648149278426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24629728476535462%"),
    top: hp("1.140419288917819%")
  },
  ImageBackground_677_665: {
    width: wp("0.48295400157478285%"),
    minWidth: wp("0.48295400157478285%"),
    height: hp("1.0367412567138672%"),
    minHeight: hp("1.0367412567138672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00481878666321478%"),
    top: hp("-0.6220522280092524%")
  },
  View_677_666: {
    width: wp("0.6761356087862993%"),
    minWidth: wp("0.6761356087862993%"),
    height: hp("0.933067109849718%"),
    minHeight: hp("0.933067109849718%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10143040458937236%"),
    top: hp("-0.9330738208912095%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_677_667: {
    width: wp("0.08451695109828741%"),
    minWidth: wp("0.08451695109828741%"),
    height: hp("0.1814297216909903%"),
    minHeight: hp("0.1814297216909903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.615760060817804%"),
    top: hp("0.6998042353877238%")
  },
  ImageBackground_677_668: {
    width: wp("0.08451695109828741%"),
    minWidth: wp("0.08451695109828741%"),
    height: hp("0.1814297216909903%"),
    minHeight: hp("0.1814297216909903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.25354231366459423%"),
    top: hp("0.6998042353877238%")
  },
  ImageBackground_677_669: {
    width: wp("0.17075002234585948%"),
    minWidth: wp("0.17075002234585948%"),
    height: hp("0.366543381302445%"),
    minHeight: hp("0.366543381302445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.400582028554176%"),
    top: hp("0.8597434714988452%")
  },
  ImageBackground_677_670: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.31102236994990595%"),
    minHeight: hp("0.31102236994990595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2073924905106974%"),
    top: hp("0.6220364040798572%")
  },
  ImageBackground_677_671: {
    width: wp("0.1448861971816332%"),
    minWidth: wp("0.1448861971816332%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4971599486714968%"),
    top: hp("1.555103443287038%")
  },
  View_677_672: {
    width: wp("1.9318158746670657%"),
    minWidth: wp("1.9318158746670657%"),
    height: hp("4.146964744285301%"),
    minHeight: hp("4.146964744285301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.60184016994479%"),
    top: hp("12.159473560474538%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I677_672_7324_286: {
    flexGrow: 1,
    width: wp("0.48295396866676643%"),
    height: hp("0.10367412037319607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7244354943064195%"),
    top: hp("2.9028749819155166%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  ImageBackground_I677_672_7324_287: {
    flexGrow: 1,
    width: wp("0.6761355429702665%"),
    height: hp("1.4514376322428384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.627857574189095%"),
    top: hp("1.1404125072337976%")
  },
  View_677_673: {
    width: wp("1.1590877346041453%"),
    minWidth: wp("1.1590877346041453%"),
    height: hp("2.4881750036168984%"),
    minHeight: hp("2.4881750036168984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.755263597739821%"),
    top: hp("7.286788375289355%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_677_674: {
    width: wp("1.148636938375469%"),
    height: hp("2.332664207175926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.007346122325742499%"),
    top: hp("0.07776104962383812%")
  },
  View_677_679: {
    width: wp("1.1590877346041453%"),
    minWidth: wp("1.1590877346041453%"),
    height: hp("2.4881750036168984%"),
    minHeight: hp("2.4881750036168984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4427703373015874%"),
    top: hp("18.69094283492477%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_677_680: {
    width: wp("1.086644817007419%"),
    height: hp("2.332664207175926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03622514449620429%"),
    top: hp("0.07777461299189525%")
  },
  View_677_685: {
    width: wp("1.1590895774530656%"),
    minWidth: wp("1.1590895774530656%"),
    height: hp("2.4881789595992476%"),
    minHeight: hp("2.4881789595992476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5819571148205664%"),
    top: hp("18.69094283492477%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_677_686: {
    width: wp("0.9659080031495657%"),
    minWidth: wp("0.9659080031495657%"),
    height: hp("1.658785925971137%"),
    minHeight: hp("1.658785925971137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09657792011732269%"),
    top: hp("0.4147022388599524%")
  },
  View_677_691: {
    width: wp("1.1590877346041453%"),
    minWidth: wp("1.1590877346041453%"),
    height: hp("2.4881750036168984%"),
    minHeight: hp("2.4881750036168984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4427703373015874%"),
    top: hp("2.6214531792534714%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_677_692: {
    width: wp("1.1590877346041453%"),
    minWidth: wp("1.1590877346041453%"),
    height: hp("2.332664207175926%"),
    minHeight: hp("2.332664207175926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.07775426793980955%")
  },
  ImageBackground_677_693: {
    width: wp("1.086644817007419%"),
    height: hp("2.332664207175926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03622514449620429%"),
    top: hp("0.00000904224538089693%")
  },
  ImageBackground_677_694: {
    width: wp("0.6374983066851061%"),
    height: hp("0.9330656263563368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2607873425638365%"),
    top: hp("1.2129900896990833%")
  },
  ImageBackground_677_695: {
    width: wp("0.6374983066851061%"),
    height: hp("0.2488175144901982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2607873425638365%"),
    top: hp("1.2129900896990833%")
  },
  ImageBackground_677_696: {
    width: wp("0.24630616992979398%"),
    height: hp("0.5287372447826244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9127725478778466%"),
    top: hp("1.0730319552951428%")
  },
  ImageBackground_677_697: {
    width: wp("0.2463061863838022%"),
    height: hp("0.5287371034975406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0730319552951428%")
  },
  ImageBackground_677_698: {
    width: wp("0.14850811928695773%"),
    minWidth: wp("0.14850811928695773%"),
    height: hp("0.4509817405983254%"),
    minHeight: hp("0.4509817405983254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2897674581608003%"),
    top: hp("0.5909446433738523%")
  },
  ImageBackground_677_699: {
    width: wp("0.14850811928695773%"),
    minWidth: wp("0.14850811928695773%"),
    height: hp("0.4509817405983254%"),
    minHeight: hp("0.4509817405983254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7171904654071772%"),
    top: hp("0.5909446433738523%")
  },
  View_677_700: {
    width: wp("1.1590877346041453%"),
    minWidth: wp("1.1590877346041453%"),
    height: hp("2.4881750036168984%"),
    minHeight: hp("2.4881750036168984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5819571148205664%"),
    top: hp("2.6214531792534714%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_677_701: {
    width: wp("1.1223427750802681%"),
    minWidth: wp("1.1223427750802681%"),
    height: hp("2.476192898220486%"),
    minHeight: hp("2.476192898220486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.028980115596963785%"),
    top: hp("0.015550401475692865%")
  },
  View_677_706: {
    width: wp("1.1590877346041453%"),
    minWidth: wp("1.1590877346041453%"),
    height: hp("2.4881750036168984%"),
    minHeight: hp("2.4881750036168984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.221174894323671%"),
    top: hp("14.025607638888886%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_677_707: {
    width: wp("0.07244298341275908%"),
    minWidth: wp("0.07244298341275908%"),
    height: hp("0.15551093772605615%"),
    minHeight: hp("0.15551093772605615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3187475737577641%"),
    top: hp("1.2440886320891238%")
  },
  ImageBackground_677_708: {
    width: wp("0.07244298341275908%"),
    minWidth: wp("0.07244298341275908%"),
    height: hp("0.15551093772605615%"),
    minHeight: hp("0.15551093772605615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7606606388026238%"),
    top: hp("1.2440886320891238%")
  },
  View_677_710: {
    width: wp("1.0866434348707286%"),
    minWidth: wp("1.0866434348707286%"),
    height: hp("2.1460513362178095%"),
    minHeight: hp("2.1460513362178095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.036225144496205175%"),
    top: hp("0.17106345847801663%")
  },
  View_677_711: {
    width: wp("1.0866434348707286%"),
    minWidth: wp("1.0866434348707286%"),
    height: hp("2.1460513362178095%"),
    minHeight: hp("2.1460513362178095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_677_712: {
    width: wp("0.5578110183494679%"),
    minWidth: wp("0.5578110183494679%"),
    height: hp("2.1460513362178095%"),
    minHeight: hp("2.1460513362178095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_677_713: {
    width: wp("0.5578110183494679%"),
    height: hp("2.1460513362178095%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_677_714: {
    width: wp("0.28990132797167495%"),
    minWidth: wp("0.28990132797167495%"),
    height: hp("0.6223215173791956%"),
    minHeight: hp("0.6223215173791956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0362588423050374%"),
    top: hp("0.8557694046585596%")
  },
  ImageBackground_677_715: {
    width: wp("0.5578110183494679%"),
    height: hp("2.1460513362178095%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_677_716: {
    width: wp("0.10740883684388682%"),
    height: hp("0.22972864574856228%"),
    top: hp("0.9564819335937429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17950822765700458%")
  },
  ImageBackground_677_717: {
    width: wp("0.47087939218293395%"),
    height: hp("0.6997992197672526%"),
    top: hp("0.0466512044270857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04347017339544479%")
  },
  View_677_718: {
    width: wp("0.5578110183494679%"),
    minWidth: wp("0.5578110183494679%"),
    height: hp("2.1460513362178095%"),
    minHeight: hp("2.1460513362178095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5288197140269153%"),
    top: hp("0.000002260561338118805%")
  },
  ImageBackground_677_719: {
    width: wp("0.5578110183494679%"),
    height: hp("2.1460513362178095%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_677_720: {
    width: wp("0.28990132797167495%"),
    minWidth: wp("0.28990132797167495%"),
    height: hp("0.6223215173791956%"),
    minHeight: hp("0.6223215173791956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0362588423050374%"),
    top: hp("0.8557694046585667%")
  },
  ImageBackground_677_721: {
    width: wp("0.5578110183494679%"),
    height: hp("2.1460513362178095%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_677_722: {
    width: wp("0.10740883684388682%"),
    height: hp("0.22972864574856228%"),
    top: hp("0.9564819335937571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17950822765700458%")
  },
  ImageBackground_677_723: {
    width: wp("0.47087939218293395%"),
    height: hp("0.6997992197672526%"),
    top: hp("0.0466512044270857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04347017339544479%")
  },
  ImageBackground_677_724: {
    width: wp("1.1590877346041453%"),
    height: hp("2.4881750036168984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.221174894323671%"),
    top: hp("7.286788375289355%")
  },
  View_677_729: {
    width: wp("1.1590877346041453%"),
    minWidth: wp("1.1590877346041453%"),
    height: hp("2.4881750036168984%"),
    minHeight: hp("2.4881750036168984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.755263597739821%"),
    top: hp("14.025607638888886%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_677_730: {
    width: wp("0.8838044766149001%"),
    height: hp("2.45707278781467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14490057798481715%"),
    top: hp("0.015552662037045195%")
  },
  ImageBackground_677_732: {
    width: wp("0.3622149499718118%"),
    minWidth: wp("0.3622149499718118%"),
    height: hp("0.9486168048999927%"),
    minHeight: hp("0.9486168048999927%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.39844289164941316%"),
    top: hp("1.4462483723958428%")
  },
  View_677_138: {
    width: wp("11.173921720664035%"),
    minWidth: wp("11.173921720664035%"),
    height: hp("30.20890751591435%"),
    minHeight: hp("30.20890751591435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.575369867149764%"),
    top: hp("8.952835648148149%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_677_139: {
    width: wp("4.278812974465148%"),
    minWidth: wp("4.278812974465148%"),
    height: hp("3.851851851851852%"),
    minHeight: hp("3.851851851851852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.447555426155965%"),
    top: hp("0%")
  },
  View_677_140: {
    width: wp("4.278812974465148%"),
    minWidth: wp("4.278812974465148%"),
    minHeight: hp("3.851851851851852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_677_140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_677_511: {
    width: wp("11.173921720664035%"),
    minWidth: wp("11.173921720664035%"),
    height: hp("23.98668529369213%"),
    minHeight: hp("23.98668529369213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.222222222222221%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_677_512: {
    width: wp("11.188931988386388%"),
    height: hp("24.018907335069446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.031945522774321944%"),
    top: hp("-0.06394675925925242%")
  },
  View_677_514: {
    width: wp("11.188931988386388%"),
    minWidth: wp("11.188931988386388%"),
    height: hp("0.1035297711690267%"),
    minHeight: hp("0.1035297711690267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.031945522774321944%"),
    top: hp("11.945506908275469%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  View_677_515: {
    width: wp("0.048228154271285725%"),
    minWidth: wp("0.048228154271285725%"),
    height: hp("24.018907335069446%"),
    minHeight: hp("24.018907335069446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.578166785282946%"),
    top: hp("-0.06394675925925242%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  View_677_516: {
    width: wp("7.945872241665858%"),
    minWidth: wp("7.945872241665858%"),
    height: hp("17.057139078776043%"),
    minHeight: hp("17.057139078776043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6858002825224219%"),
    top: hp("3.456065990306712%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  View_677_517: {
    width: wp("7.945872241665858%"),
    minWidth: wp("7.945872241665858%"),
    height: hp("17.057139078776043%"),
    minHeight: hp("17.057139078776043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6716809006211122%"),
    top: hp("3.4510181568287024%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  ImageBackground_677_518: {
    width: wp("4.629902546779299%"),
    height: hp("9.938857467086226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.311449976276741%"),
    top: hp("6.976078739872683%")
  },
  View_677_519: {
    width: wp("1.9291259734033304%"),
    minWidth: wp("1.9291259734033304%"),
    height: hp("4.141190422905816%"),
    minHeight: hp("4.141190422905816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.118530020703929%"),
    top: hp("1.7995899341724524%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_677_520: {
    width: wp("1.3503999361258032%"),
    height: hp("2.505417435257523%"),
    top: hp("0.8282402886284785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2893630844547985%")
  },
  View_677_523: {
    width: wp("1.9291259734033304%"),
    minWidth: wp("1.9291259734033304%"),
    height: hp("4.141190422905816%"),
    minHeight: hp("4.141190422905816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2051482164423675%"),
    top: hp("1.7995899341724524%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_677_524: {
    width: wp("1.2057053623238954%"),
    height: hp("2.58824383770978%"),
    top: hp("0.77647569444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3617122800207042%")
  },
  ImageBackground_677_527: {
    width: wp("1.9291259734033304%"),
    minWidth: wp("1.9291259734033304%"),
    height: hp("4.141190422905816%"),
    minHeight: hp("4.141190422905816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.423643461007586%"),
    top: hp("6.561957465277786%")
  },
  View_677_529: {
    width: wp("1.9291259734033304%"),
    minWidth: wp("1.9291259734033304%"),
    height: hp("4.141190422905816%"),
    minHeight: hp("4.141190422905816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.423643461007586%"),
    top: hp("13.187863950376162%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_677_530: {
    width: wp("1.3503880892398852%"),
    height: hp("2.8988330982349537%"),
    top: hp("0.621179651331019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2893630844547985%")
  },
  View_677_532: {
    width: wp("1.9291259734033304%"),
    minWidth: wp("1.9291259734033304%"),
    height: hp("4.141190422905816%"),
    minHeight: hp("4.141190422905816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2051482164423675%"),
    top: hp("17.95023148148148%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_677_533: {
    width: wp("1.2057040460032376%"),
    minWidth: wp("1.2057040460032376%"),
    height: hp("2.3829371134440103%"),
    minHeight: hp("2.3829371134440103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30762729684265366%"),
    top: hp("0.8282402886284785%")
  },
  ImageBackground_677_534: {
    width: wp("1.2057040460032376%"),
    height: hp("2.3829371134440103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_677_537: {
    width: wp("1.9291259734033304%"),
    minWidth: wp("1.9291259734033304%"),
    height: hp("4.141190422905816%"),
    minHeight: hp("4.141190422905816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9000347761387104%"),
    top: hp("13.187863950376162%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_677_538: {
    width: wp("1.109247490650543%"),
    height: hp("2.6658912941261574%"),
    top: hp("0.77647569444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4099675422705289%")
  },
  View_677_540: {
    width: wp("1.9291259734033304%"),
    minWidth: wp("1.9291259734033304%"),
    height: hp("4.141190422905816%"),
    minHeight: hp("4.141190422905816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9000347761387104%"),
    top: hp("6.561957465277786%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_677_541: {
    width: wp("1.109247490650543%"),
    height: hp("2.6658912941261574%"),
    top: hp("0.6988276728877238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4099675422705289%")
  },
  View_677_543: {
    width: wp("1.44684464459258%"),
    minWidth: wp("1.44684464459258%"),
    height: hp("3.105893170392072%"),
    minHeight: hp("3.105893170392072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.359671540717734%"),
    top: hp("18.46788194444445%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_677_544: {
    width: wp("1.2057037827391062%"),
    minWidth: wp("1.2057037827391062%"),
    height: hp("2.5882441202799478%"),
    minHeight: hp("2.5882441202799478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09644312888197959%"),
    top: hp("0.3105898256655095%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_677_545: {
    width: wp("1.725327812284334%"),
    height: hp("3.7037037037037033%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I677_545_1007_156: {
    flexGrow: 1,
    width: wp("1.725327812284334%"),
    height: hp("3.7037037037037033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I677_545_1007_156_657_147: {
    flexGrow: 1,
    width: wp("1.725327812284334%"),
    height: hp("3.7037037037037033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I677_545_1007_156_657_148: {
    flexGrow: 1,
    width: wp("1.725327812284334%"),
    height: hp("3.7037037037037033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2
  },
  ImageBackground_677_546: {
    width: wp("4.629902546779299%"),
    height: hp("9.938857467086226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.311449976276741%"),
    top: hp("6.976078739872683%")
  },
  View_677_547: {
    width: wp("1.929126105035396%"),
    minWidth: wp("1.929126105035396%"),
    height: hp("4.141190705475984%"),
    minHeight: hp("4.141190705475984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.661822269668733%"),
    top: hp("12.152565285011569%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I677_547_7324_286: {
    flexGrow: 1,
    width: wp("0.482281526258849%"),
    height: hp("0.1035297711690267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7234245600414084%"),
    top: hp("2.8988330982349595%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I677_547_7324_287: {
    flexGrow: 1,
    width: wp("0.6751941762520084%"),
    height: hp("1.4494168316876448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6269477333505904%"),
    top: hp("1.138830114293988%")
  },
  ImageBackground_677_548: {
    width: wp("11.188931988386388%"),
    height: hp("24.018907335069446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.031945522774321944%"),
    top: hp("-0.06394675925925242%")
  },
  View_677_549: {
    width: wp("1.929126105035396%"),
    minWidth: wp("1.929126105035396%"),
    height: hp("4.141190705475984%"),
    minHeight: hp("4.141190705475984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.661822269668733%"),
    top: hp("7.597256130642364%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_677_579: {
    width: wp("0.964563052517698%"),
    minWidth: wp("0.964563052517698%"),
    height: hp("2.070595352737992%"),
    minHeight: hp("2.070595352737992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48228304002760325%"),
    top: hp("1.0352964048032405%")
  },
  ImageBackground_677_580: {
    width: wp("0.964563052517698%"),
    minWidth: wp("0.964563052517698%"),
    height: hp("2.070595352737992%"),
    minHeight: hp("2.070595352737992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_677_581: {
    width: wp("0.4726341134355017%"),
    minWidth: wp("0.4726341134355017%"),
    height: hp("0.4141190846761068%"),
    minHeight: hp("0.4141190846761068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24596030667701996%"),
    top: hp("1.1388210720486072%")
  },
  ImageBackground_677_582: {
    width: wp("0.482281526258849%"),
    minWidth: wp("0.482281526258849%"),
    height: hp("1.035297676368996%"),
    minHeight: hp("1.035297676368996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00481878666321478%"),
    top: hp("-0.6211728696469905%")
  },
  View_677_583: {
    width: wp("0.6751941762520084%"),
    minWidth: wp("0.6751941762520084%"),
    height: hp("0.9317679228606048%"),
    minHeight: hp("0.9317679228606048%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10129561335403281%"),
    top: hp("-0.9317626953125%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_677_584: {
    width: wp("0.08439927203150105%"),
    minWidth: wp("0.08439927203150105%"),
    height: hp("0.1811771039609556%"),
    minHeight: hp("0.1811771039609556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6149176155969656%"),
    top: hp("0.6988208912037095%")
  },
  ImageBackground_677_585: {
    width: wp("0.08439927203150105%"),
    minWidth: wp("0.08439927203150105%"),
    height: hp("0.1811771039609556%"),
    minHeight: hp("0.1811771039609556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.25320533557626135%"),
    top: hp("0.6988208912037095%")
  },
  ImageBackground_677_586: {
    width: wp("0.1705122619270867%"),
    minWidth: wp("0.1705122619270867%"),
    height: hp("0.36603298893681274%"),
    minHeight: hp("0.36603298893681274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3986275556418164%"),
    top: hp("0.8585544162326428%")
  },
  ImageBackground_677_587: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.31058929584644457%"),
    minHeight: hp("0.31058929584644457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2057076000690117%"),
    top: hp("0.6211773907696738%")
  },
  ImageBackground_677_588: {
    width: wp("0.14468445458685308%"),
    minWidth: wp("0.14468445458685308%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4950706845238102%"),
    top: hp("1.5529446072048572%")
  },
  View_677_220: {
    width: wp("14.84959235760654%"),
    minWidth: wp("14.84959235760654%"),
    height: hp("46.14210340711806%"),
    minHeight: hp("46.14210340711806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.049375377415458%"),
    top: hp("6.133246527777782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_677_221: {
    width: wp("7.276296780140667%"),
    minWidth: wp("7.276296780140667%"),
    height: hp("22.313976146556712%"),
    minHeight: hp("22.313976146556712%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.573279255089719%"),
    top: hp("0%")
  },
  ImageBackground_677_222: {
    width: wp("7.0535532106935275%"),
    minWidth: wp("7.0535532106935275%"),
    height: hp("22.712440773292826%"),
    minHeight: hp("22.712440773292826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.130425347222221%"),
    resizeMode: "cover"
  },
  ImageBackground_677_223: {
    width: wp("7.536164277828998%"),
    minWidth: wp("7.536164277828998%"),
    height: hp("22.55305537471065%"),
    minHeight: hp("22.55305537471065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.677626542011733%"),
    top: hp("23.589048032407412%")
  },
  View_677_224: {
    width: wp("2.7605244996549345%"),
    minWidth: wp("2.7605244996549345%"),
    height: hp("20.88888888888889%"),
    minHeight: hp("20.88888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1827593922532778%"),
    top: hp("-3.0782696759259274%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_677_225: {
    width: wp("1.6563146997929608%"),
    minWidth: wp("1.6563146997929608%"),
    height: hp("3.5555555555555554%"),
    minHeight: hp("3.5555555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27605244996549416%"),
    top: hp("15.160517939814813%")
  },
  ImageBackground_677_226: {
    width: wp("2.7605244996549345%"),
    minWidth: wp("2.7605244996549345%"),
    height: hp("5.9259259259259265%"),
    minHeight: hp("5.9259259259259265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.27605244996549416%"),
    top: hp("13.97533275462963%")
  },
  ImageBackground_677_227: {
    width: wp("1.448829524512123%"),
    minWidth: wp("1.448829524512123%"),
    height: hp("3.675636574074074%"),
    minHeight: hp("3.675636574074074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1042097998619766%"),
    top: hp("16.59259259259259%")
  },
  View_677_478: {
    width: wp("2.226181504148874%"),
    height: hp("4.77886962890625%"),
    top: hp("-0.028067129629633314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07265247584541257%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_677_479: {
    width: wp("2.206946373644%"),
    minWidth: wp("2.206946373644%"),
    height: hp("4.737578215422453%"),
    minHeight: hp("4.737578215422453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.034506556245686326%"),
    top: hp("0.08420138888889284%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_677_480: {
    width: wp("2.1870475542635814%"),
    height: hp("4.441479435673466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.013984590665977237%"),
    top: hp("0.14804924858941249%")
  },
  View_677_471: {
    width: wp("2.226181504148874%"),
    height: hp("4.77886962890625%"),
    top: hp("4.712673611111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07265247584541257%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_677_472: {
    width: wp("2.206946373644%"),
    minWidth: wp("2.206946373644%"),
    height: hp("4.737578215422453%"),
    minHeight: hp("4.737578215422453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.034506556245686326%"),
    top: hp("0.08420138888889284%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_677_473: {
    width: wp("2.1870475542635814%"),
    height: hp("4.441479435673466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.013984590665977237%"),
    top: hp("0.14804981372974169%")
  },
  View_677_464: {
    width: wp("2.226181504148874%"),
    height: hp("4.77886962890625%"),
    top: hp("7.231192129629623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5557442632850247%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_677_465: {
    width: wp("2.206946373644%"),
    minWidth: wp("2.206946373644%"),
    height: hp("4.737578215422453%"),
    minHeight: hp("4.737578215422453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.034506556245686326%"),
    top: hp("0.08420138888889994%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_677_466: {
    width: wp("2.1870475542635814%"),
    height: hp("4.441479435673466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.013984590665977237%"),
    top: hp("0.14804981372974169%")
  },
  View_677_457: {
    width: wp("2.226181504148874%"),
    height: hp("4.77886962890625%"),
    top: hp("10.934895833333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.003639363354039915%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_677_458: {
    width: wp("2.206946373644%"),
    minWidth: wp("2.206946373644%"),
    height: hp("4.737578215422453%"),
    minHeight: hp("4.737578215422453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.034506556245686326%"),
    top: hp("0.08420138888889284%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_677_459: {
    width: wp("2.1870475542635814%"),
    height: hp("4.441479435673466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.013984590665973684%"),
    top: hp("0.14804981372974169%")
  },
  View_677_239: {
    width: wp("1.1042097998619738%"),
    height: hp("2.3703703703703702%"),
    top: hp("18.518518518518515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6563146997929614%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_677_240: {
    width: wp("4.940747457837301%"),
    minWidth: wp("4.940747457837301%"),
    height: hp("10.66257165979456%"),
    minHeight: hp("10.66257165979456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.778294028209114%"),
    top: hp("15.440239800347221%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_677_241: {
    width: wp("2.6438205632116976%"),
    height: hp("5.675401475694445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2969100457211837%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_677_453: {
    width: wp("4.200244163792243%"),
    height: hp("9.016524138274017%"),
    top: hp("-0.5364470305266238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.8313074210662528%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_677_454: {
    width: wp("2.8558669212030656%"),
    height: hp("5.636017975983796%"),
    top: hp("1.7080349392361072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6744279459972411%")
  },
  View_677_243: {
    width: wp("2.1267197887349574%"),
    height: hp("4.5652618408203125%"),
    top: hp("-0.000009042245366686075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41353951000689904%")
  },
  ImageBackground_677_244: {
    width: wp("1.3706516610745152%"),
    height: hp("2.454321967230903%"),
    top: hp("1.5785816333911953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24798217520703858%")
  },
  View_677_245: {
    width: wp("0.9571311719011159%"),
    height: hp("2.3207441259313515%"),
    top: hp("0.2661946614583286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7975934372843376%")
  },
  ImageBackground_677_246: {
    width: wp("0.8153415203423563%"),
    height: hp("1.75026688752351%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14180037957211766%")
  },
  View_677_247: {
    width: wp("0.4608941456628224%"),
    height: hp("1.3443027072482638%"),
    top: hp("0.773412633825231%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17718307884748086%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_677_449: {
    width: wp("2.2918645886407383%"),
    minWidth: wp("2.2918645886407383%"),
    height: hp("4.919869316948785%"),
    minHeight: hp("4.919869316948785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.742702907986107%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_677_450: {
    width: wp("1.6043191123946605%"),
    height: hp("2.9765172887731484%"),
    top: hp("0.983983922887731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.34378504572118374%")
  },
  View_677_249: {
    width: wp("42.949453792216616%"),
    minWidth: wp("42.949453792216616%"),
    height: hp("4.7407407407407405%"),
    minHeight: hp("4.7407407407407405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.347135955831608%"),
    top: hp("18.51851851851852%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_677_250: {
    width: wp("5.728088336783989%"),
    minWidth: wp("5.728088336783989%"),
    minHeight: hp("4.7407407407407405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_677_250: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
    textTransform: "none"
  },
  View_677_251: {
    width: wp("2.3119392684610074%"),
    minWidth: wp("2.3119392684610074%"),
    height: hp("4.7407407407407405%"),
    minHeight: hp("4.7407407407407405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714977%"),
    top: hp("0%")
  },
  View_677_252: {
    width: wp("2.2084195997239475%"),
    minWidth: wp("2.2084195997239475%"),
    height: hp("4.7407407407407405%"),
    minHeight: hp("4.7407407407407405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_677_253: {
    width: wp("2.2084195997239475%"),
    height: hp("4.7407407407407405%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10351966873705898%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I677_253_3_137: {
    flexGrow: 1,
    width: wp("2.2084195997239475%"),
    height: hp("4.7407407407407405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I677_253_3_138: {
    width: wp("2.2084195997239475%"),
    height: hp("4.7407407407407405%"),
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
  View_I677_253_3_139: {
    flexGrow: 1,
    width: wp("2.2084195997239475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I677_253_3_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07200000286102295,
    textTransform: "none"
  },
  View_677_254: {
    width: wp("33.805216387109645%"),
    minWidth: wp("33.805216387109645%"),
    minHeight: hp("4.7407407407407405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.14423740510697%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_677_254: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3419999957084656,
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
