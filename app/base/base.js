import {Dimensions} from "react-native";
import resolveAssetSource from 'resolveAssetSource';

const {width, height} = Dimensions.get("window");
const windowWidth = width;
const margin = 10;
const padding = 10;
const innerWidth = width - 2 * padding;

module.exports = {
  width,
  height,
  margin,
  padding,
  innerWidth,
  getImageWidth: function (source) {
    return resolveAssetSource(source).width;
  },
  getImageHeight: function (source) {
    return resolveAssetSource(source).height;
  },
  getImageSize: function (source) {
    let {width, height} = resolveAssetSource(source);
    return {
      width: width, //图片实际宽度
      height: height, //图片实际高度
      autoHeight: height * (windowWidth - 20) / width //图片自适应高度
    }
  },
  getIconWidthByNumber: function (number, space = 0, isRadius = true) {
    let size = innerWidth / number - (number * space);
    return {
      width: size,
      height: size,
      radius: isRadius === true ? size / 2 : 0
    }
  },
  getWidthByNumber: function (number, space = 0) {
    return innerWidth / number - (number * space)
  },
  saveLocalStorage: function (key, data, expires) {
    storage.save({
      key,
      data,
      expires: (!!expires) ? expires : 1000 * 3600
    });
  },
  getLocalStorage: async function (obj, key, autoSync = true, syncInBackground = true) {
    await storage.load({
      key,
      autoSync,
      syncInBackground,
      syncParams: {
        extraFetchOptions: {},
        someFlag: true,
      }
    }).then(ret => {
      obj.setState(ret);
    }).catch(err => {
    });
  }
};
