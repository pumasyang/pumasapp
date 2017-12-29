import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Configs from "../base/base";
import NineGrid from "../components/nineGrid";
import ListViewItem from "../components/listViewItem";

const headImg = require('../icon/user_head.jpg');
const headImgSize = Configs.getImageSize(headImg);
const headImgHeight = headImgSize.autoHeight;
const portraitSize = headImgHeight * 2 / 3;
const portraitRadius = portraitSize / 2;

export default class Mine extends Component<{}> {
  static navigationOptions = ({navigation, screenProps}) => ({
    headerTitle: "我的",
    headerTintColor: "#FFF",
    headerStyle: {
      backgroundColor: "rgb(255,119,53)"
    },
    headerRight: <TouchableOpacity onPress={() => navigation.state.params.navigatePress(navigation, "Setting")}>
      <Image source={{uri: "setting"}} style={{width: 20, height: 20, marginRight: 10}}/>
    </TouchableOpacity>
  });

  constructor(props) {
    super(props);

    this._skip = this._skip.bind(this);
  }

  _skip(router) {
    this.props.navigation.navigate(router);
  }

  static goTo(navigation, router) {
    navigation.navigate(router);
  }

  componentDidMount() {
    this.props.navigation.setParams({navigatePress: Mine.goTo});
    setTimeout(() => {
      this.setState({
        swiperShow: true
      });
    }, 0)
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headWrap}>
            <Image source={headImg} style={styles.headBg}/>
            <Image source={require("../icon/head0.jpg")} style={styles.portrait}/>
          </View>

          <NineGrid num={3} data={[
            {
              text: 1,
              name: "收藏夹"
            },
            {
              text: 3,
              name: "关注店铺"
            },
            {
              text: 5,
              name: "足迹"
            }
          ]}/>

          <ListViewItem
            title={"我的订单"}
            remark={"查看更多订单"}
            skip={ this._skip }
            router={"OrderList"}
          />
          <NineGrid num={5} iconSize={30} data={[
            {
              url: require('../icon/daifukuan.png'),
              name: "代付款",
              event: this._skip,
              router: "OrderList"
            },
            {
              url: require('../icon/daifahuo.png'),
              name: "待发货",
              event: this._skip,
              router: "OrderList"
            },
            {
              url: require('../icon/daishouhuo.png'),
              name: "待收货",
              event: this._skip,
              router: "OrderList"
            },
            {
              url: require('../icon/daipingjia.png'),
              name: "待评价",
              event: this._skip,
              router: "OrderList"
            },
            {
              url: require('../icon/shouhou.png'),
              name: "退款/售后",
              event: this._skip,
              router: "OrderList"
            }
          ]}/>

          <ListViewItem title={"实用工具"} remark={"查看全部工具"}/>
          <NineGrid num={4} isRadius={false} iconSize={30} data={[
            {
              url: require('../icon/free.png'),
              name: "免税通道"
            }, {
              url: require('../icon/report.png'),
              name: "报表"
            },
            {
              url: require('../icon/quan.png'),
              name: "领券中心"
            },
            {
              url: require('../icon/coupons.png'),
              name: "卡券包"
            },
            {
              url: require('../icon/19jiesuan.png'),
              name: "结算"
            },
            {
              url: require('../icon/topic.png'),
              name: "我的话题"
            },
            {
              url: require('../icon/feedback.png'),
              name: "我的评价"
            },
            {
              url: require('../icon/more.png'),
              name: "更多"
            }
          ]}/>

          <ListViewItem
            center={true} title={"我的支付宝"} noArrow={true}
            source={require("../icon/quan.png")}
          />
          <NineGrid num={2} isRadius={false} iconSize={30}
            textStyle={{color:"#0AE",fontSize:30,marginBottom:5}}
            paddingVertical={20}
            data={[
              {
                text:"321.90元",
                name: "11月账单出炉啦",
                subName: "看我的钱都花哪去了"
              }, {
                text:"735",
                name: "芝麻分月度评估完成",
                subName: "去查看"
              }
            ]}/>

            <ListViewItem
              center={true} title={"我的淘气值"} noArrow={true}
              source={require("../icon/free.png")}
            />
            <NineGrid num={2} isRadius={false} iconSize={30}
              textStyle={{color:"rgb(255,119,53)",fontSize:30}}
              paddingVertical={20}
              data={[
                {
                  text:"634",
                  name: "差366分成为超级会员",
                  subName: "本期比上期-2",
                  titleColor:"rgb(255,119,53)"
                }, {
                  url: require('../icon/quan.png'),
                  name: "双旦礼遇季",
                  subName: "精彩权益每天不停"
                }
              ]}/>

          <View style={{marginTop: 10}}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e6e6",
    flex: 1
  },
  headWrap: {
    justifyContent: "center",
    alignItems: "center"
  },
  headBg: {
    width: Configs.width,
    height: headImgHeight
  },
  portrait: {
    width: portraitSize,
    height: portraitSize,
    position: "absolute",
    borderRadius: portraitRadius
  },
  collectWrap: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF"
  },
  collectItem: {
    justifyContent: "center",
    alignItems: "center"
  },
  collectText: {
    marginTop: 7,
  },
  collectText2: {
    marginTop: 7,
    marginBottom: 7,
  }
});
