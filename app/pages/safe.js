import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import ListViewItem from "../components/listViewItem";

export default class Safe extends Component<{}> {
  static navigationOptions = {
    headerTitle: "账号与安全",
    headerTintColor: "#FFF",
    headerStyle:{
      backgroundColor:"rgb(255,119,53)"
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
          <ListViewItem title={"微信号"} remark={"puams_2013"} noArrow={true}/>

          <ListViewItem title={"手机号"} marginTop={0} remark={"13027947935"}/>

          <ListViewItem title={"微信密码"}/>

          <ListViewItem title={"声音锁"} marginTop={0}/>

          <ListViewItem title={"应急联系人"}/>

          <ListViewItem title={"登录设备管理"} marginTop={0}/>

          <ListViewItem title={"更多安全设置"} marginTop={0}/>

          <ListViewItem title={"微信安全中心"}/>

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
