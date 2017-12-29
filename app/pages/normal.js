import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import ListViewItem from "../components/listViewItem";

export default class Normal extends Component<{}> {
  static navigationOptions = {
    headerTitle: "通用",
    headerTintColor: "#FFF",
    headerStyle:{
      backgroundColor:"rgb(255,119,53)"
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
          <ListViewItem title={"多语言"}/>

          <ListViewItem title={"字体大小"}/>

          <ListViewItem title={"聊天背景"} marginTop={0}/>

          <ListViewItem title={"我的表情"} marginTop={0}/>

          <ListViewItem title={"照片、视频和文件"} marginTop={0}/>

          <ListViewItem title={"听筒模式"} isSwitch={true}/>

          <ListViewItem title={"功能"}/>

          <ListViewItem title={"聊天记录迁移"}/>

          <ListViewItem title={"存储空间"}/>

          <ListViewItem title={"清空聊天记录"} touchable={true} center={true} noArrow={true}/>

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
