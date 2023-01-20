import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
//
import { incrementDecrementValueAction, setCustomValueAction } from '../redux/actions/counterAction';
export default function CounterControllers() {

  const dispatch = useDispatch()

  const incrementValue = () => {
    dispatch(incrementDecrementValueAction('increment'))
  };
  const decrementValue = () => {
    dispatch(incrementDecrementValueAction('decrement'))
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '70%',
      }}>
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10 }}
        onPress={() => decrementValue()}>
        <Text style={{ fontSize: 20, color: 'white' }}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10 }}
        onPress={() => incrementValue()}>
        <Text style={{ fontSize: 20, color: 'white' }}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
}