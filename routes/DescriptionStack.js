import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import Description from '../screens/Description'
import React from 'react';
import Demo from '../screens/Demo';
const screens = {
 Description: {
    screen: Description,
    navigationOptions:({navigation})=>{
      return{
        headerTitle: ()=>
          <Header navigation={navigation} title='Description' />
        
      }
    }
  },
  Demo:{
    screen:Demo,

  }
}
  




const DescriptionStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 100 },
  }
});

export default DescriptionStack;