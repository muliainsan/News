import React from 'react';
import {Text,View,AppRegistry} from 'react-native';
import Header from './src/header';
import NewsList from './src/NewsList';


const App = () => (
  <View style= {{flex:1}}>
      <Header headerText = {'News'} />
         <NewsList/>   
  </View>
);

AppRegistry.registerComponent('News',()=>App);