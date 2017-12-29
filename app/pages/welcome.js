import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class Welcome extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../goods/goods1.jpg")} style={{flex:1}}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6"
  }
});
