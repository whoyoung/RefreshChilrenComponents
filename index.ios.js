/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';

import ChiledComponent from './Component';

export default class RefreshChilrenComponents extends Component {
  constructor(props){
    super(props);
    this.childs = [];
    this.components = [];
    this.components.push(<ChiledComponent componentId='child1' ref={(ref)=>{ this.childs.push(ref) }} />);
    this.components.push(<ChiledComponent componentId='child2' ref={(ref)=>{ this.childs.push(ref) }} />);        
  }

  _onRefresh() {
      this.childs.forEach((child,index)=>{
        child._refresh();
      })
  }

  render() { 
    return (
      <ScrollView contentContainerStyle={styles.container}
                  refreshControl = {
                    <RefreshControl refreshing={false}
                      colors = {['gray']} onRefresh={()=>this._onRefresh()} />
                  }
      >
        {this.components}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RefreshChilrenComponents', () => RefreshChilrenComponents);
