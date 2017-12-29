import React, {Component} from 'react';
//import {QRScannerView} from '../components/ScanCode';
import
{
  View,
  Text,
} from 'react-native';

export default class CameraCheck extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>efretr</Text>
      </View>
    );
  }

  barcodeReceived(e) {
    alert(e);

  }
}