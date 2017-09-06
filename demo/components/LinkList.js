import React from 'react';
import { Text, View, Linking, StyleSheet } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {Link} from './Link'

export class LinkList extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            {this.props.links.map((link, index) =>
                <Link key={"link-" + index} link={link} />
            )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 40
    }
})