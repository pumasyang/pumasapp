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
  ScrollView,
  ActionSheetIOS
} from 'react-native';
import ListViewItem from "../components/listViewItem";
const BUTTONS = [
  '最近三天',
  '最近半年',
  '全部',
  'Cancel',
];

export default class NewMessage extends Component<{}> {
  static navigationOptions = {
    headerTitle: "允许朋友查看朋友圈的范围",
    headerTintColor: "#FFF",
    headerStyle:{
      backgroundColor:"rgb(255,119,53)"
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      needValid: true,
      recommend: false,
      topTen: false,
      openCircle: true,
      circleNotice: true,
      clicked: BUTTONS[2]
    }

    this._onValueChange = this._onValueChange.bind(this);
    this._skip = this._skip.bind(this);
    this._lookCircle = this._lookCircle.bind(this);
  }

  _onValueChange(state) {
    this.setState(state);
  }

  _skip(router) {
    this.props.navigation.navigate(router);
  }

  _lookCircle(router) {
    Platform.select({
      ios: ActionSheetIOS.showActionSheetWithOptions({
        options: BUTTONS,
        cancelButtonIndex: 3,
      }, (buttonIndex) => {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      }),
      android: this._skip(router)
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ListViewItem
          title={"最近三天"}
        />

        <ListViewItem
          marginTop={0}
          title={"最近半年"}/>

        <ListViewItem
          marginTop={0}
          title={"全部"}
        />
        <Text style={styles.remark}>在选择的时间范围之前发布的朋友圈，将对朋友不可见。</Text>

        <View style={{marginTop: 10}}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e6e6",
    flex: 1
  },
  remark:{
    paddingHorizontal:10,
    marginVertical:5,
    color:"gray",
    lineHeight:20
  }
});
