import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';

const LocalStorage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,//1000 * 3600 * 24,
  enableCache: true,
  sync: {
    privacy(params){

    },
    addMe(params){

    }
  }
});
global.storage = LocalStorage;
module.exports = {LocalStorage};
