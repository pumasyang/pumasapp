import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import ListViewItem from "../components/listViewItem";
import Base from '../base/base';

export default class NewMessage extends Component<{}> {
  static navigationOptions = {
    headerTitle: "添加我的方式",
    headerTintColor: "#FFF",
    headerStyle: {
      backgroundColor: "rgb(255,119,53)"
    }
  };

  constructor(props) {
    super(props);

    this.state = {
    };

    Base.getLocalStorage(this, 'addMe');

    this._onValueChange = this._onValueChange.bind(this);
    this._skip = this._skip.bind(this);
  }

  _onValueChange(state) {
    this.setState(state);
    Base.saveLocalStorage('addMe', Object.assign(this.state, state));
  }

  _skip(router) {
    this.props.navigation.navigate(router);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.remark}>可通过以下方式找到我:</Text>
        <ListViewItem
          title={"手机号"}
          isSwitch={true}
          marginTop={0}
          onValueChange={this._onValueChange}
          state={{byPhone: !this.state.byPhone}}
          value={this.state.byPhone}
        />

        <ListViewItem
          title={"微信号"}
          isSwitch={true}
          marginTop={0}
          onValueChange={this._onValueChange}
          state={{byWechatId: !this.state.byWechatId}}
          value={this.state.byWechatId}
        />

        <ListViewItem
          title={"QQ号"}
          isSwitch={true}
          marginTop={0}
          onValueChange={this._onValueChange}
          state={{byQQ: !this.state.byQQ}}
          value={this.state.byQQ}
        />
        <Text style={styles.remark}>关闭后，其他用户将不能通过上述信息找到你。</Text>

        <Text style={[styles.remark, {marginTop: 20, marginBottom: 0}]}>可通过以下方式添加我:</Text>
        <ListViewItem
          title={"群聊"}
          isSwitch={true}
          onValueChange={this._onValueChange}
          state={{byGroup: !this.state.byGroup}}
          value={this.state.byGroup}
        />

        <ListViewItem
          title={"我的二维码"}
          isSwitch={true}
          onValueChange={this._onValueChange}
          state={{byQrcode: !this.state.byQrcode}}
          value={this.state.byQrcode}
        />

        <ListViewItem
          title={"名片"}
          isSwitch={true}
          onValueChange={this._onValueChange}
          state={{byCard: !this.state.byCard}}
          value={this.state.byCard}
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
  remark: {
    paddingHorizontal: 10,
    marginVertical: 5,
    color: "gray",
    lineHeight: 20
  }
});
