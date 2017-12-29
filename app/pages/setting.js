import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import ListViewItem from "../components/listViewItem";

export default class Setting extends Component<{}> {
  static navigationOptions = {
    headerTitle: "设置",
    headerTintColor: "#FFF",
    headerStyle:{
      backgroundColor:"rgb(255,119,53)"
    }
  };

  constructor(props) {
    super(props);

    this._skip = this._skip.bind(this);
  }

  _skip(router) {
    this.props.navigation.navigate(router);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <ListViewItem
            title={"账号与安全"}
            skip={ this._skip }
            router={"Safe"}
            />

          <ListViewItem
            title={"新消息通知"}
            skip={ this._skip }
            router={"NewMessage"}
            />

          <ListViewItem
            title={"隐私"}
            marginTop={0}
            skip={ this._skip }
            router={"Privacy"}
            />

          <ListViewItem
            title={"通用"}
            marginTop={0}
            skip={ this._skip }
            router={"Normal"}
            />

          <ListViewItem
            title={"帮助与反馈"}
          />

          <ListViewItem
            title={"关于微信"}
            marginTop={0}
          />

          <ListViewItem
            title={"插件"}
          />

          <ListViewItem title={"退出登录"} touchable={true} center={true} noArrow={true}/>

          <View style={{marginTop: 10}}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e6e6",
    flex: 1
  }
});
