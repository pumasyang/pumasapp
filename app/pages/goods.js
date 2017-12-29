import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Image,
  ActivityIndicator
} from 'react-native';
import Base from "../base/base";

import NineGrid from "../components/nineGrid";
import GoodsList from "./goodsList";
import GoodsGrid from "./goodsGrid";

export default class Goods extends Component<{}> {
  static navigationOptions = ({navigation, screenProps}) => ({
    headerTitle: "商品列表",
    headerTintColor: "#FFF",
    headerStyle: {
      backgroundColor: "rgb(255,119,53)"
    },
    headerRight: <TouchableOpacity onPress={() => navigation.state.params.navigatePress(navigation)}>
      <Image source={{uri: "grid"}} style={{width: 20, height: 20, marginRight: 10}}/>
    </TouchableOpacity>
  });

  componentDidMount() {
    this.props.navigation.setParams({
      navigatePress: this._changemodle
    });
  }

  constructor(props) {
    super(props);

    this.dataSource = [];
    this.state = {
      list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
      goodsModel: "list",  //grid
      noMore: false,
    };
    this.renderFooter = this.renderFooter.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.topIndicatorRender = this.topIndicatorRender.bind(this);
    this._changemodle = this._changemodle.bind(this);
  }

  topIndicatorRender(pulling, pullok, pullrelease) {
    const hide = {position: 'absolute', left: -10000};
    const show = {position: 'relative', left: 0};
    setTimeout(() => {
      if (pulling) {
        this.txtPulling && this.txtPulling.setNativeProps({style: show});
        this.txtPullok && this.txtPullok.setNativeProps({style: hide});
        this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
      } else if (pullok) {
        this.txtPulling && this.txtPulling.setNativeProps({style: hide});
        this.txtPullok && this.txtPullok.setNativeProps({style: show});
        this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
      } else if (pullrelease) {
        this.txtPulling && this.txtPulling.setNativeProps({style: hide});
        this.txtPullok && this.txtPullok.setNativeProps({style: hide});
        this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
      }
    }, 0);
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', height: 80}}>
        <ActivityIndicator/>
        <Text ref={(c) => {
          this.txtPulling = c;
        }}>下拉刷新</Text>
        <Text ref={(c) => {
          this.txtPullok = c;
        }}>松开刷新</Text>
        <Text ref={(c) => {
          this.txtPullrelease = c;
        }}>加载中</Text>
      </View>);
  }

  render() {
    return (
      <View style={styles.container}>
        {this._getGoodsList()}
      </View>
    );

  }

  _getGoodsList() {
    if (this.state.goodsModel === 'list') {
      return (<GoodsList
        data={this.state.list}
        onPullRelease={this.onPullRelease}
        topIndicatorRender={this.topIndicatorRender}
        renderFooter={this.renderFooter}
        renderHeader={this.renderHeader}
        loadMore={this.loadMore}
      />);
    } else {
      return (<GoodsGrid
        data={this.state.list}
        dataSource={this.state.list}
        onPullRelease={this.onPullRelease}
        topIndicatorRender={this.topIndicatorRender}
        renderFooter={this.renderFooter}
        renderHeader={this.renderHeader}
        loadMore={this.loadMore}
      />);
    }
  }

  onPullRelease(resolve) {
    setTimeout(() => {
      resolve();
    }, 3000);
  }

  renderFooter() {
    if (this.state.noMore) {
      return null;
    }
    return (
      <View style={{width: Base.innerWidth, height: 50, alignItems: "center", alignSelf: "center"}}>
        <ActivityIndicator/>
        <Text>加载中...</Text>
      </View>
    );
  }

  renderHeader() {
    return (
      <NineGrid
        num={5} iconSize={15}
        data={[
          {
            name: "综合"
          },
          {
            name: "销量"
          },
          {
            name: "价格"
          },
          {
            name: "筛选"
          },
          {
            url: this.state.goodsModel === "grid" ? {uri: 'list'} : {uri: 'grid'},
            event: this._changemodle
          }
        ]}/>
    );
  }

  loadMore() {
    if (!this.state.noMore) {
      for (let i = 0; i < 6; i++) {
        this.dataSource.push({
          imgUrl: "https://img10.360buyimg.com/n2/jfs/t3049/338/1070769990/457429/a4764c06/57c538c0N304d4828.jpg",
          price: 1889.99,
          originPrice: 3889.99,
          title: "华纳斯（HUANASI） 华纳斯 电视柜 伸缩电视柜茶几组合套装 木皮色 单个电视柜.",
          comments: 2324,
          prise: 79
        });
      }
      this.setState({
        list: this.state.list.cloneWithRows(this.dataSource),
        noMore: false
      });
    }
  }

  _changemodle = () => {
    if (this.state.goodsModel === "list") {
      this.setState({
        goodsModel: "grid"
      });
    } else {
      this.setState({
        goodsModel: "list"
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  goodsList: {
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF"
  }
});
