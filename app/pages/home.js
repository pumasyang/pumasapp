import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import NineGrid from "../components/nineGrid";

import Base, {width} from "../base/base";

const advertImg = require('../icon/20171130101923525.jpg');
let advertImgSize = Base.getImageSize(advertImg);
const halfInnerWidth = halfInnerHeight = Base.getWidthByNumber(2, 2.5);

const images = [
  'http://ac-c6scxa78.clouddn.com/91ead58b0bb213b6.jpg',
  'http://ac-c6scxa78.clouddn.com/d67316858f6c71f3.jpg',
  'http://ac-c6scxa78.clouddn.com/c81c5b7be1838a1e.jpg',
  'http://ac-c6scxa78.clouddn.com/54fe022399902788.jpg',
];

export default class Home extends Component<{}> {
  static navigationOptions = ({navigation, screenProps}) => ({
    headerTitle: "首页",
    headerTintColor: "#FFF",
    headerStyle: {
      backgroundColor: "rgb(255,119,53)"
    },
    headerRight: <TouchableOpacity onPress={() => navigation.state.params.navigatePress(navigation)}>
      <Image source={{uri: "scan"}} style={{width: 20, height: 20, marginRight: 10}}/>
    </TouchableOpacity>
  });

  constructor(props) {
    super(props);

    this.state = {
      swiperShow: false
    };
  }

  static openCamera(navigation) {
    //alert(navigation.state.params);
    navigation.navigate("WeChatScreen");
  }

  componentDidMount() {
    this.props.navigation.setParams({navigatePress: Home.openCamera});
    setTimeout(() => {
      this.setState({
        swiperShow: true
      });
    }, 0)
  }

  render() {
    if (this.state.swiperShow) {
      return (
        <ScrollView>
          <View style={styles.container}>
            <NineGrid num={5} iconSize={30} data={[
              {
                url: require('../icon/lions.jpg'),
                name: "天猫"
              },
              {
                url: require('../icon/cqhuixiang.jpg'),
                name: "聚划算"
              },
              {
                url: require('../icon/gouda.jpg'),
                name: "天猫国际"
              },
              {
                url: require('../icon/kongge.jpg'),
                name: "外卖"
              },
              {
                url: require('../icon/yunlinggou.jpg'),
                name: "天猫超市"
              }
            ]}/>

            <Swiper height={200} style={{marginTop: 10, marginBottom: 10, backgroundColor: "#FFF"}} autoplay={false}>
              {Home.renderImg()}
            </Swiper>

            <View style={styles.categoryTitle}>
              <Text>精选商品</Text>
            </View>
            <View style={styles.goods}>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods1.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>华纳斯（HUANASI） 华纳斯 电视柜 伸缩电视柜茶几组合套装 木皮色 单个电视柜.</Text>
                <Text style={styles.goodsPrice}>18.9</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods2.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>华纳斯（HUANASI） 华纳斯 电视柜 伸缩电视柜茶几组合套装 木皮色 单个电视柜.</Text>
                <Text style={styles.goodsPrice}>18.9</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods3.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>华纳斯（HUANASI） 华纳斯 电视柜 伸缩电视柜茶几组合套装 木皮色 单个电视柜.</Text>
                <Text style={styles.goodsPrice}>18.9</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods4.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>华纳斯（HUANASI） 华纳斯 电视柜 伸缩电视柜茶几组合套装 木皮色 单个电视柜.</Text>
                <Text style={styles.goodsPrice}>18.9</Text>
              </View>
            </View>

            <View style={styles.advertise}>
              <Image source={advertImg} style={styles.advert}/>
            </View>
          </View>
        </ScrollView>
      );
    } else {
      return (
        <View>

        </View>
      );
    }
  }

  static renderImg() {
    const imageViews = [];
    for (let i = 0; i < images.length; i++) {
      imageViews.push(
        <Image key={i} source={{uri: images[i]}} style={{flex: 1}}/>
      );
    }
    return imageViews;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6"
  },
  advertise: {
    marginVertical: 10
  },
  advert: {
    width,
    height: advertImgSize.autoHeight,
  },
  goods: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingTop: 10,
    paddingHorizontal: 10
  },
  goodsItem: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: halfInnerWidth,
  },
  goodsImage: {
    width: halfInnerWidth,
    height: halfInnerHeight,
    padding: 5
  },
  goodsTitle: {
    width: halfInnerWidth,
    height: 33,
    lineHeight: 17,
    overflow: "hidden",
    fontSize: 14,
    marginTop: 3,
    color: "#000000"
  },
  goodsPrice: {
    width: halfInnerWidth,
    color: "#FF0036",
    fontSize: 20,
    marginBottom: 15
  },
  categoryTitle: {
    borderLeftWidth: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "rgb(255, 155, 67)",
    borderBottomColor: "rgb(255, 155, 67)",
    borderLeftColor: "rgb(255, 155, 67)",
    height: 50,
    paddingLeft: 15,
    backgroundColor: "#FFF",
    justifyContent: "center"
  }
});
