import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Base from "../base/base";

import {PullList} from 'react-native-pull';

export default class goodsGrid extends Component<{}> {
  constructor(props) {
    super(props);

    this.dataSource = [{}];
    this.state = {
      list: this.props.data,
      noMore: false,
    };
    this.renderRow = this.renderRow.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <PullList
          style={{flex: 1}}
          onPullRelease={this.props.onPullRelease}
          topIndicatorRender={this.props.topIndicatorRender}
          topIndicatorHeight={80}
          enableEmptySections={true}
          renderHeader={this.props.renderHeader}
          dataSource={this.state.list}
          pageSize={5}
          initialListSize={5}
          renderRow={this.renderRow}
          onEndReached={this.loadMore}
          onEndReachedThreshold={30}
          renderFooter={this.props.renderFooter}
          contentContainerStyle={styles.pullListViewCont}
        />
      </View>
    );
  }

  renderRow(item, sectionID, rowID, highlightRow) {
    return (
      <View style={styles.goodsListGridItem}>
        <Image
          source={{uri: item.imgUrl}}
          style={styles.goodsListGridItemImage}
        />
        <Text style={styles.goodsListGridTitle}>{item.title}</Text>
        <View style={styles.goodsGridPrices}>
          <Text style={styles.goodsGridPriceSymbol}>￥</Text>
          <Text style={styles.goodsGridSalePrice}>{item.price}</Text>
          <Text style={[styles.goodsGridPriceSymbol, {color: "#111", marginLeft: 5}]}>￥</Text>
          <Text style={styles.goodsGridOriginPrice}>{item.originPrice}</Text>
        </View>
        <View style={styles.goodsGridLabel}>
          <Text style={styles.goodsGridComment}>{item.comments}条评论</Text>
          <Text style={styles.goodsGridPrise}>好评率{item.prise}%</Text>
        </View>
      </View>
    );
  }

  async loadMore() {
    await this.props.loadMore();
    this.setState({
      list: this.props.data
    });
  }
}

const styles = StyleSheet.create({
  pullListViewCont: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  goodsListGridItem: {
    width: Base.getWidthByNumber(2, 2.5),
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  goodsListGridItemImage: {
    width: Base.getWidthByNumber(2, 2.5),
    height: Base.getWidthByNumber(2, 2.5),
    marginRight: 5,
  },

  goodsListGridTitle: {
    height: 30,
    lineHeight: 15,
    fontSize: 12,
    fontWeight: "100",
    overflow: "hidden",
    color: "#111"
  },
  goodsGridPrices: {
    flexDirection: "row",
    marginTop: 5,
  },
  goodsGridLabel: {
    flexDirection: "row",
    marginTop: 3,
  },
  goodsGridPriceSymbol: {
    color: "red",
    fontSize: 12,
    alignSelf: "flex-end"
  },
  goodsGridSalePrice: {
    color: "red",
    fontSize: 16
  },
  goodsGridOriginPrice: {
    color: "#111",
    fontSize: 14,
    alignSelf: "flex-end"
  },
  goodsGridPrise: {
    fontWeight: "100",
    marginRight: 5
  },
  goodsGridComment: {
    fontWeight: "100",
    marginRight: 5
  }
});
