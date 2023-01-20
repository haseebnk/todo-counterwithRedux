import { View, Text } from 'react-native';
import React, { useState } from 'react';

//
import CounterView from '../components/CounterView';
import CounterControllers from '../components/CounterControllers';
// use selector for fetching data in store  reducers 
import { useSelector } from 'react-redux';

export default function CounterScreen({ customValueParentState }) {

  const data = useSelector((state) => state.counter)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CounterView counterValue={data?.count} />
      <CounterControllers
        setCounterValue={data.count}
        customValueParentState={customValueParentState}
      />
    </View>
  );
}