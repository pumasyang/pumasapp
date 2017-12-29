import React from 'react';
import {Image, StyleSheet, Platform} from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from "react-navigation";

import Home from "../pages/home";
import Mine from "../pages/mine";
import Goods from "../pages/goods";
import Surprise from "../pages/surprise";
import Setting from "../pages/setting";
import Normal from "../pages/normal";
import Safe from "../pages/safe";
import NewMessage from "../pages/newMessage";
import Privacy from "../pages/privacy";
import LookCircle from "../pages/lookCircle";
import AddMe from "../pages/addMe";
import OrderList from "../pages/orderList";
import Scan from "../pages/scan";
import OFOScreen from '../pages/ofo/OFOScreen';
import TwitterScreen from '../pages/twitter/TwitterScreen';
import QQBrowserScreen from "../pages/qqbrowser/QQBrowserScreen";
import WeChatScreen from "../pages/wechat/WeChatScreen";
import DefaultScreen from "../pages/default/DefaultScreen";

const styles = StyleSheet.create({
  bottomIcon: {
    width: 20, height: 20
  }
});

const TabNavigate = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={{uri: 'home'}}
          style={[styles.bottomIcon, {tintColor}]}
        />
      )
    }
  },
  Goods: {
    screen: Goods,
    navigationOptions: {
      tabBarLabel: '列表',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={{uri: 'manage'}}
          style={[styles.bottomIcon, {tintColor}]}
        />
      )
    }
  },
  Cart: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '购物车',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={{uri: 'cart'}}
          style={[styles.bottomIcon, {tintColor}]}
        />
      )
    }
  },
  Gift: {
    screen: Surprise,
    navigationOptions: {
      tabBarLabel: '惊喜',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={{uri: 'gift'}}
          style={[styles.bottomIcon, {tintColor}]}
        />
      )
    }
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={{uri: 'mine'}}
          style={[styles.bottomIcon, {tintColor}]}
        />
      )
    }
  }
}, {
  initialRouteName: "Home", // 默认显示界面
  lazy: true,
  animationEnabled: false, // 切换页面时是否有动画效果
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: false, // 是否可以左右滑动切换tab
  backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  tabBarOptions: {
    activeTintColor: '#ff8500', // 文字和图片选中颜色
    inactiveTintColor: '#333', // 文字和图片未选中颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: {
      height: 0,  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
    },
    style: Platform.OS==="ios" ? {
      backgroundColor: '#fff', // TabBar 背景色
      alignItems: "center",
      paddingTop: 12
    } : {
      backgroundColor: '#fff', // TabBar 背景色
    },
    labelStyle: {
      fontSize: 14, // 文字大小
    },
  },
});

const StackNavigate = StackNavigator({
  Main: {
    screen: TabNavigate
  },
  Setting: {
    screen: Setting
  },
  Normal: {
    screen: Normal
  },
  Safe: {
    screen: Safe
  },
  NewMessage: {
    screen: NewMessage
  },
  Privacy: {
    screen: Privacy
  },
  LookCircle: {
    screen: LookCircle
  },
  AddMe: {
    screen: AddMe
  },
  OrderList: {
    screen: OrderList
  },
  WeChatScreen: {
    screen: WeChatScreen
  }
});
module.exports = StackNavigate;
