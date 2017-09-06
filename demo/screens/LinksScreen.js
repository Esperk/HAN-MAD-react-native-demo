import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { LinkList } from '../components/LinkList'

const links = [
    {name:"han", url:"http://www.han.nl"},
    {name:"ica", url:"http://www.ica.nl"},
    {name:"codeschool", url:"http://www.codeschool.com"},
    {name:"pluralsight", url:"http://www.pluralsight.com"},
    {name:"han", url:"http://www.han.nl"},
    {name:"ica", url:"http://www.ica.nl"},
    {name:"codeschool", url:"http://www.codeschool.com"},
    {name:"pluralsight", url:"http://www.pluralsight.com"},
    {name:"han", url:"http://www.han.nl"},
    {name:"ica", url:"http://www.ica.nl"},
    {name:"codeschool", url:"http://www.codeschool.com"},
    {name:"pluralsight", url:"http://www.pluralsight.com"},
  ]

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };
  
  render() {
    return (
      <ScrollView style={styles.container}>
           <LinkList links={links}></LinkList>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
