/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  RefreshControl
} from 'react-native';
import Configs from "../config/config.default.js";
import Swiper from 'react-native-swiper';

import NineGrid from "../components/nineGrid";

const advertImg = require('../icon/20171130101923525.jpg');
let advertImgSize = Configs.getImageSize(advertImg);

const containerWidth = Configs.innerWidth;
const halfInnerWidth = halfInnerHeight = Configs.halfInnerWidth;

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});*/

const images = [
  'http://ac-c6scxa78.clouddn.com/91ead58b0bb213b6.jpg',
  'http://ac-c6scxa78.clouddn.com/d67316858f6c71f3.jpg',
  'http://ac-c6scxa78.clouddn.com/c81c5b7be1838a1e.jpg',
  'http://ac-c6scxa78.clouddn.com/54fe022399902788.jpg',
];

export default class Home extends Component<{}> {
  static navigationOptions = {
    headerTitle: "首页",
    headerTintColor: "#FFF",
    headerStyle:{
      backgroundColor:"rgb(255,119,53)"
    },
    headerRight: Platform.select({
      ios: <Button title={"返回"} color="red"/>,
      android: <Text style={{color:"#fff",marginRight:10}}>设置</Text>
    }),
  };

  constructor(props) {
    super(props);
    this.state = {
      swiperShow: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        swiperShow: true
      });
    }, 0)
  }

  render() {
    if (this.state.swiperShow) {
      return (<ScrollView>
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
                <Text style={styles.goodsTitle}>[为你推荐]高档欧式果盘套装 现代客厅茶几摆件 时尚高脚多层水果盘创意家用</Text>
                <Text style={styles.goodsPrice}>190.0</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods2.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>[为你推荐]折叠桌餐桌家用小户型简约小桌子便携式吃饭桌简易户外可摆摊方桌</Text>
                <Text style={styles.goodsPrice}>35.0</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods3.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>[为你推荐]包邮 韩国可爱交通卡夹 IC卡套 非真皮公交卡套 附长挂脖绳卡包</Text>
                <Text style={styles.goodsPrice}>18.9</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods4.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>[为你推荐]杰克丹尼 随身户外便携不锈钢酒壶俄罗斯酒具1 2 3 7斤送漏斗酒杯</Text>
                <Text style={styles.goodsPrice}>16.99</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods1.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods2.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods3.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods4.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods1.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods2.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods3.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods4.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods1.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods2.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods3.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods4.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods1.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods2.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods3.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
              </View>
              <View style={styles.goodsItem}>
                <Image source={require("../goods/goods4.jpg")} style={styles.goodsImage}/>
                <Text style={styles.goodsTitle}>safvsadfgsdagfdsg</Text>
                <Text style={styles.goodsPrice}>34.66</Text>
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
        <View></View>
      );
    }
  }

  static renderImg() {
    const imageViews = [];
    for (let i = 0; i < images.length; i++) {
      imageViews.push(
        <Image
          key={i}
          source={{uri: images[i]}}
          style={{flex: 1}}
        />
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
    backgroundColor: "#FFFFFF",
    paddingLeft: Configs.wrapMarginLeft,
    paddingRight: Configs.wrapMarginRight,
    marginTop: 10,
    marginBottom: 10
  },
  advert: {
    width: containerWidth,
    height: advertImgSize.autoHeight,
  },
  goods: {
    paddingLeft: Configs.wrapMarginLeft,
    paddingRight: Configs.wrapMarginRight,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingTop: 10,
  },
  goodsItem: {},
  goodsImage: {
    width: halfInnerWidth,
    height: halfInnerHeight,
    padding: 5
  },
  goodsTitle: {
    width: halfInnerWidth,
    height: 46,
    lineHeight: 23,
    overflow: "hidden",
    fontSize: 18,
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
