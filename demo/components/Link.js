
import React from 'react';
import { Text, View, Linking, Button, StyleSheet } from 'react-native';
import Touchable from 'react-native-platform-touchable';

export class Link extends React.Component {
  render() {
    return (
        <View style={styles.button}>
            <Button
                key={this.props.link.name}
                background={Touchable.Ripple('#ccc', false)}
                title={this.props.link.name}
                onPress={this._handlePress}>
            </Button>
        </View>
    );
  }

    _handlePress = () => {
        Linking.canOpenURL(this.props.link.url).then(supported => {
            if (supported) {
                return Linking.openURL(this.props.link.url);
            } else {
                console.log("Don't know how to open URI: " + this.props.link.url);
            }
        });
    };
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingTop: 15,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  
});