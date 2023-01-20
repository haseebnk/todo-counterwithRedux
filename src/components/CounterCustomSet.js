import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
//for dispatch hit to function
import { useDispatch } from 'react-redux';
//for get store data values
import { useSelector } from 'react-redux';
//import actions function 
import { setCustomValueAction } from '../redux/actions/counterAction';
export default function CounterCustomSet() {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.counter)

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <TextInput
        value={data.changeVal}
        style={{ borderWidth: 1, width: '80%' }}
        onChangeText={text => dispatch(setCustomValueAction(text))}
      />
    </View>
  );
}