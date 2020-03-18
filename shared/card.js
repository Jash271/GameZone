import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default function Card(props){
   return(
       <View style={styles.Card}>
           <View style={styles.cardText}>
               {props.children}
            </View>
       </View>
   )
}



 const styles = StyleSheet.create({
     Card:{
         borderRadius:5,
         elevation:3,
         backgroundColor:'#fff',
         shadowOffset:{width:1,height:1},
         shadowColor:'#333',
         shadowOpacity:0.5,
         marginHorizontal:15,
         marginVertical:10
     },
     cardText:{
         margin:15,
         alignContent:'center',
         paddingLeft:15,
     }
  
  
});