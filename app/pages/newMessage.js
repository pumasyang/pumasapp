import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import ListViewItem from "../components/listViewItem";
import ActionSheet from 'react-native-actionsheet'
import Base from '../base/base';

const BUTTONS = [
  '开启',
  '只在夜间开启',
  '关闭',
  'Cancel',
];

export default class NewMessage extends Component<{}> {
  static navigationOptions = {
    headerTitle: "新消息通知",
    headerTintColor: "#FFF",
    headerStyle:{
      backgroundColor:"rgb(255,119,53)"
    }
  };

  constructor(props) {
    super(props);

    this.state = {
    };
    Base.getLocalStorage(this, 'newMessage');

    this._onValueChange = this._onValueChange.bind(this);
    this._skip = this._skip.bind(this);
    this._setNoDisturbe = this._setNoDisturbe.bind(this);
  }

  _onValueChange(state) {
    this.setState(state);
    Base.saveLocalStorage('newMessage', Object.assign(this.state, state));
  }

  _skip(router) {
    this.props.navigation.navigate(router);
  }

  _setNoDisturbe() {
    this.ActionSheet.show();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <ListViewItem
            title={"接收新消息通知"}
            isSwitch={true}
            onValueChange={this._onValueChange}
            state={{access: !this.state.access}}
            value={this.state.access}
          />

          <ListViewItem
            title={"接收语音和视频聊天邀请通知"}
            isSwitch={true}
            marginTop={0}
            onValueChange={this._onValueChange}
            state={{accessNotice: !this.state.accessNotice}}
            value={this.state.accessNotice}
          />

          <ListViewItem
            title={"语音和视频聊天邀请提示音"}
            isSwitch={true}
            marginTop={0}
            onValueChange={this._onValueChange}
            state={{accessSound: !this.state.accessSound}}
            value={this.state.accessSound}
          />

          <ListViewItem
            title={"通知显示消息详情"}
            isSwitch={true}
            onValueChange={this._onValueChange}
            state={{showDetail: !this.state.showDetail}}
            value={this.state.showDetail}
          />
          <Text style={styles.remark}>关闭后，当收到微信消息时，通知提示将不显示发信人和内容摘要。</Text>

          <ListViewItem
            title={"功能消息免打扰"}
            skip={this._setNoDisturbe}
          />
          <Text style={styles.remark}>设置系统功能消息提示声音和振动的时段。</Text>

          <ListViewItem
            title={"声音"}
            isSwitch={true}
            onValueChange={this._onValueChange}
            state={{sound: !this.state.sound}}
            value={this.state.sound}
          />

          <ListViewItem
            title={"振动"}
            isSwitch={true}
            onValueChange={this._onValueChange}
            state={{shake: !this.state.shake}}
            value={this.state.shake}
          />
          <Text style={styles.remark}>当微信在运行时，你可以设置是否需要声音或者振动。</Text>

          <ActionSheet
            ref={o => this.ActionSheet = o}
            //title={title}
            options={BUTTONS}
            cancelButtonIndex={3}
            //destructiveButtonIndex={DESTRUCTIVE_INDEX}
            onPress={(buttonIndex) => {
              if (buttonIndex !== 3) {
                this.setState({clicked: BUTTONS[buttonIndex]});
              }
            }}
          />

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
    marginTop:5,
    color:"gray",
    lineHeight:20
  }
});
