/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Base from "../base/base";

class NineGrid extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.nineGrid, {
        marginTop: this.props.marginTop ? this.props.marginTop : 0,
        backgroundColor: this.props.bgColor ? this.props.bgColor : "#FFF",
        height: this.props.height,
        paddingVertical: this.props.paddingVertical,
        borderBottomWidth: 1,
        borderBottomColor: "#e6e6e6"
      }]}>
        {this._getData()}
      </View>
    );
  }

  _onPress(data) {
    if (!!data.event) {
      data.event(data.router ? data.router : "");
    }
  }

  _getData = () => {
    const grids = [];
    const data = this.props.data;
    for (let i in data) {
      grids.push(
        <TouchableOpacity
          key={i}
          opacity={0.8}
          onPress={() => this._onPress(data[i])}
        >
          <View
            style={[styles.nineGridItem, {width: Base.getWidthByNumber(this.props.num ? this.props.num : 5)}]}>
            {this._renderItem(data[i])}
          </View>
        </TouchableOpacity>
      )
    }
    return grids;
  };

  _renderItem = (data) => {
    const Item = [];
    if (!!data.url) {
      const iconSize = Base.getIconWidthByNumber(this.props.num, this.props.space, this.props.isRadius);
      Item.push(<Image
        key={"icon"}
        source={data.url}
        style={
          {
            width: this.props.iconSize ? this.props.iconSize : iconSize.width,
            height: this.props.iconSize ? this.props.iconSize : iconSize.height,
            borderRadius: (this.props.isRadius === false) ? 0 : (this.props.iconSize ? this.props.iconSize / 2 : iconSize.radius)
          }
        }/>)
    }

    if (!!data.text) {
      Item.push(<Text
        key={"text"}
        style={[this.props.textStyle ? this.props.textStyle : styles.nineGridText, data.textColor ? {color: data.textColor} : {}]}>{data.text}</Text>);
    }

    if (!!data.name) {
      Item.push(<Text
        key={"name"}
        style={[this.props.titleStyle ? this.props.titleStyle : styles.nineGridTitle, data.titleColor ? {color: data.titleColor} : {}]}>{data.name}</Text>);
    }

    if (!!data.subName) {
      Item.push(<Text
        key={"subName"}
        style={[this.props.subTitleStyle ? this.props.subTitleStyle : styles.nineGridSubTitle, data.subTitleColor ? {color: data.subTitleColor} : {}]}>{data.subName}</Text>);
    }

    return Item;
  };
}

const styles = StyleSheet.create({
  nineGrid: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
  },
  nineGridItem: {
    alignItems: "center",
    marginVertical: 10,
  },
  nineGridText: {
    fontSize: 12
  },
  nineGridTitle: {
    marginTop: 8,
    fontSize: 12
  },
  nineGridSubTitle: {
    marginTop: 8,
    fontSize: 12,
    color: "gray"
  }
});

module.exports = NineGrid;
