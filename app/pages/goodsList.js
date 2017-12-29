import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {PullList} from 'react-native-pull';

export default class goodsList extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      list: this.props.data,
      noMore: true,
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
        />
      </View>
    );
  }

  renderRow(item, sectionID, rowID, highlightRow) {
    return (
      <View style={styles.goodsListItem}>
        <Image
          source={{uri: item.imgUrl}}
          style={styles.goodsListItemImage}
        />
        <View style={styles.goodsListItemRight}>
          <Text style={styles.goodsListTitle}>{item.title}</Text>
          <View style={styles.goodsPrices}>
            <Text style={styles.goodsPriceSymbol}>￥</Text>
            <Text style={styles.goodsSalePrice}>{item.price}</Text>
            <Text style={[styles.goodsPriceSymbol, {color: "#111", marginLeft: 5}]}>￥</Text>
            <Text style={styles.goodsOriginPrice}>{item.originPrice}</Text>
          </View>
          <View style={styles.goodsLabel}>
            <Text style={styles.goodsComment}>{item.comments}条评论</Text>
            <Text style={styles.goodsPrise}>好评率{item.prise}%</Text>
          </View>
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
  goodsListItem: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  goodsListItemImage: {
    width: 90,
    height: 90,
    marginRight: 5,
  },
  goodsListItemRight: {
    flex: 1,
    alignSelf: "flex-start",
    marginTop: 5
  },
  goodsListTitle: {
    height: 30,
    lineHeight: 15,
    fontSize: 12,
    fontWeight: "100",
    overflow: "hidden",
    color: "#111"
  },
  goodsPrices: {
    flexDirection: "row",
    marginTop: 15,
  },
  goodsLabel: {
    flexDirection: "row",
    marginTop: 3,
  },
  goodsPriceSymbol: {
    color: "red",
    fontSize: 12,
    alignSelf: "flex-end"
  },
  goodsSalePrice: {
    color: "red",
    fontSize: 16
  },
  goodsOriginPrice: {
    color: "#111",
    fontSize: 14,
    alignSelf: "flex-end"
  },
  goodsPrise: {
    fontWeight: "100",
    marginRight: 5
  },
  goodsComment: {
    fontWeight: "100",
    marginRight: 10
  }
});
