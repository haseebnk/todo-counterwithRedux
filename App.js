import React from 'react'
import { View, Text } from 'react-native'
import { Provider , useSelector} from 'react-redux'
import CounterScreen from './src/screens/CounterScreen'
import Home from './src/screens/Home'
import CounterCustomSet from './src/components/CounterCustomSet'
import TodoScreen from './src/screens/TodoScreen'
import AddNoteScreen from './src/screens/AddNoteScreen'
import ShowNotes from './src/screens/ShowNotes'
import EditNoteScreen from './src/screens/EditNoteScreen'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import store 
import { store } from './src/redux/store'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
    {/* <CounterScreen></CounterScreen>
    <CounterCustomSet></CounterCustomSet> */}
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AddNote" component={TodoScreen} options={{ title: "Notes", headerTitleAlign: "center" }} />
        <Stack.Screen name="WriteNote" component={AddNoteScreen} options={{ title: "Add  Note", headerTitleAlign: "center" }} />
        <Stack.Screen name="ShowNote" component={ShowNotes} options={{ title: "Your  Note", headerTitleAlign: "center" }} />
        <Stack.Screen name="EditNote" component={EditNoteScreen} options={{ title: "Edit Your Note", headerTitleAlign: "center" }} />
        {/* <Stack.Screen name="create" component={CreateScreen} options={{title:"create",headerTitleAlign:"center"}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App
















// import {View, Text} from 'react-native';
// import React, {useState} from 'react';

// //
// import CounterScreen from './src/screens/CounterScreen';
// import CounterCustomSet from './src/components/CounterCustomSet';

// export default function App() {
//   const [customValueParentState, setCustomValueParentState] = useState(1);

//   return (
//     <View style={{flex: 1}}>
//       <CounterScreen customValueParentState={customValueParentState} />
//       <CounterCustomSet setCustomValueParentState={setCustomValueParentState} />
//     </View>
//   );
// }