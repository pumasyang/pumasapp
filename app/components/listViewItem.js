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
  Switch,
  TouchableHighlight
} from 'react-native';

class ListViewItem extends Component<{}> {
  constructor(props) {
    super(props);
  }

  _renderTitle=()=>{
    const Titles = [];
    Titles.push(<Text key={"title"} style={styles.listViewItemTitle}>{this.props.title}</Text>);
    if(!!this.props.subTitle) {
      Titles.push(<Text key={"subTitle"} style={styles.subTitle}>{this.props.subTitle}</Text>);
    }
    return Titles;
  };

  _renderContent = ()=>{
    const SubView = [];
    if(!!this.props.source === true) {
      SubView.push(<Image key={'icon'} source={this.props.source} style={this.props.iconStyle ? this.props.iconStyle : styles.listViewItemImg}/>);
    }
    SubView.push(<View key={"titleView"} style={{flex: this.props.center ? 0 : 1,justifyContent:"center"}}>{this._renderTitle()}</View>);
    if(!!this.props.remark) {
      SubView.push(<Text key={"remark"} style={styles.remark}>{this.props.remark}</Text>);
    }
    if(this.props.isSwitch === true) {
      SubView.push(<Switch key={"switch"} onValueChange={() => this._switch()} value={this.props.value}/>);
    } else {
      if(this.props.noArrow !== true) {
        SubView.push(<Image key={"arrow"} source={require("../icon/arrow.png")} style={styles.listViewItemArrow}/>);
      }
    }
    return SubView;
  };

  _onPress() {
    if (this.props.router && this.props.skip){
      this.props.skip(this.props.router);
    } else if(this.props.skip) {
      this.props.skip();
    }
  }

  _switch() {
    if(!!this.props.onValueChange){
      this.props.onValueChange(this.props.state);
    }
  }

  render() {
    if(this.props.isSwitch === true || (this.props.noArrow === true && this.props.touchable !== true)) {
      return (
        <View
          style={[styles.listViewItem, {
            marginTop: this.props.marginTop || this.props.marginTop === 0 ? this.props.marginTop : 10,
            height: this.props.height ? this.props.height : 40,
            justifyContent: this.props.center ? "center" : "flex-start",
          }]}>
          {this._renderContent()}
        </View>
      );
    } else {
      return (
        <View
          style={{
            marginTop: this.props.marginTop || this.props.marginTop === 0 ? this.props.marginTop : 10
          }}>
        <TouchableHighlight onPress={() => this._onPress()}>
          <View
            style={[styles.listViewItem, {
              height: this.props.height ? this.props.height : 40,
              justifyContent: this.props.center ? "center" : "flex-start",
            }]}>
            {this._renderContent()}
          </View>
        </TouchableHighlight>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  listViewItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    paddingLeft: 10,
    paddingRight: 10
  },
  listViewItemImg: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 10
  },
  listViewItemTitle: {
    fontSize: 16,
    color: "#333"
  },
  subTitle: {
    fontSize: 10,
    marginTop:5
  },
  remark: {
    fontSize: 12,
    color: "gray"
  },
  listViewItemArrow: {
    width: 10,
    height: 10
  }
});

module.exports = ListViewItem;
