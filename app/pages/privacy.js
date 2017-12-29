import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import ListViewItem from "../components/listViewItem";
import ActionSheet from 'react-native-actionsheet';
import Base from '../base/base';

const BUTTONS = [
  '最近三天',
  '最近半年',
  '全部',
  'Cancel',
];

export default class NewMessage extends Component<{}> {
  static navigationOptions = {
    headerTitle: "隐私",
    headerTintColor: "#FFF",
    headerStyle: {
      backgroundColor: "rgb(255,119,53)"
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      clicked: BUTTONS[2]
    };
    Base.getLocalStorage(this, 'privacy');

    this._onValueChange = this._onValueChange.bind(this);
    this._skip = this._skip.bind(this);
    this._lookCircle = this._lookCircle.bind(this);
  }

  _onValueChange(state) {
    this.setState(state);
    Base.saveLocalStorage('privacy', Object.assign(this.state, state));
  }

  _skip(router) {
    this.props.navigation.navigate(router);
  }

  _lookCircle() {
    this.ActionSheet.show();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ListViewItem
          title={"加我为朋友时需要验证"}
          isSwitch={true}
          onValueChange={this._onValueChange}
          state={{needValid: !this.state.needValid}}
          value={this.state.needValid}
        />

        <ListViewItem
          title={"添加我的方式"}
          skip={this._skip}
          router={"AddMe"}
        />

        <ListViewItem
          title={"向我推荐通讯录朋友"}
          isSwitch={true}
          marginTop={0}
          onValueChange={this._onValueChange}
          state={{recommend: !this.state.recommend}}
          value={this.state.recommend}
        />
        <Text style={styles.remark}>开启后，为你推荐已经开通微信的手机联系人。</Text>

        <ListViewItem title={"通讯录黑名单"}/>

        <Text style={[styles.remark, {marginTop: 20, marginBottom: 0}]}>朋友圈</Text>
        <ListViewItem
          title={"不让他(她)看我的朋友圈"}
        />
        <ListViewItem
          title={"不看他(她)的朋友圈"}
          marginTop={0}
        />
        <ListViewItem
          title={"允许朋友查看朋友圈的范围"}
          remark={this.state.clicked}
          marginTop={0}
          skip={this._lookCircle}
        />
        <ListViewItem
          title={"允许陌生人查看十条朋友圈"}
          isSwitch={true}
          marginTop={0}
          onValueChange={this._onValueChange}
          state={{topTen: !this.state.topTen}}
          value={this.state.topTen}
        />

        <ListViewItem
          title={"开启朋友圈入口"}
          isSwitch={true}
          onValueChange={this._onValueChange}
          state={{openCircle: !this.state.openCircle}}
          value={this.state.openCircle}
        />
        <Text style={styles.remark}>关闭后，将隐藏“发现”中的朋友圈入口，你发过的朋友圈不会清空，朋友仍可以看到。”</Text>

        <ListViewItem
          title={"朋友圈更新提醒"}
          isSwitch={true}
          onValueChange={this._onValueChange}
          state={{circleNotice: !this.state.circleNotice}}
          value={this.state.circleNotice}
        />
        <Text style={styles.remark}>关闭后，有朋友发表朋友圈时，界面下方的”发现”切换按钮上不会出现红点提示。</Text>

        <ListViewItem
          title={"授权管理"}
        />

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
  remark: {
    paddingHorizontal: 10,
    marginVertical: 5,
    color: "gray",
    lineHeight: 20
  }
});
