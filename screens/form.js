import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';
export default function ReviewForm({AddReview}) {
const ReviewSchema = yup.object({
    title:yup.string()
        .required()
        .min(2),
    body:yup.string()
    .required(),
    rating:yup.number().required().test('is num 1-5','Rating must be Between 1-5',(val)=>{
        return val<6 && val>0;
    })

})
  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(values,actions) => {
            AddReview(values)
            
          console.log(values);
          
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Review details'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>


            <TextInput 
              style={globalStyles.input}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
              onBlur={props.handleBlur('rating')}

            />
            <Text style={globalStyles.errorText}>{ props.touched.rating && props.errors.rating}</Text>
            <FlatButton onPress={props.handleSubmit} text='submit' />
            
            

          </View>
        )}
      </Formik>
    </View>
    
  );
}