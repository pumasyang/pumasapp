import React, {Component} from 'react';
import {Platform} from 'react-native';
import {TabNavigator} from "react-navigation";

import NoPay from "../pages/noPay";
import All from "../pages/all";
import NoConsignee from "../pages/noConsignee";
import Done from "../pages/done";
import Cancel from "../pages/cancel";

const TabNavigators = TabNavigator({
  All: {
    screen: All,
    navigationOptions: {
      tabBarLabel: '全部',
    }
  },
  NoPay: {
    screen: NoPay,
    navigationOptions: {
      tabBarLabel: '待付款',
    }
  },
  NoConsignee: {
    screen: NoConsignee,
    navigationOptions: {
      tabBarLabel: '待收货',
    }
  },
  Done: {
    screen: Done,
    navigationOptions: {
      tabBarLabel: '已完成',
    }
  },
  Cancel: {
    screen: Cancel,
    navigationOptions: {
      tabBarLabel: '已取消',
    }
  }
}, {
  initialRouteName: "All",
  animationEnabled: false,
  tabBarPosition: 'top',
  swipeEnabled: false,
  backBehavior: 'none',
  tabBarOptions: {
    activeTintColor: '#0Ae',
    inactiveTintColor: '#333',
    showIcon: false,
    indicatorStyle: {
      height: 0,
    },
    style: Platform.OS === "ios" ? {
      backgroundColor: '#fff',
      height: 50,
      alignItems:"center",
    } : {
      backgroundColor: '#fff',
      height:50
    },
    labelStyle: {
      fontSize: 12,
    }
  },
});

export default class OrderList extends Component<{}> {
  static navigationOptions = {
    headerTitle: "订单列表",
    headerTintColor: "#FFF",
    headerStyle: {
      backgroundColor: "rgb(255,119,53)"
    }
  };

  render() {
    return (
      <TabNavigators/>
    );
  }
}

