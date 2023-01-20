import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NotesContext } from "../context/NotesContext"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function TodoScreen({ navigation }) {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.todo)
    console.log(data  ,"TODO DATA")
    return (


        <View style={{ flex: 1, backgroundColor: '#203239e0' }}>
            {/* <MaterialIcons onPress={() => navigation.navigate('createnote')} style={{ alignSelf: 'center', margin: 10 }} name='add-circle' size={hp('10%')} color="#008E89" /> */}
           <TouchableOpacity onPress={()=> navigation.navigate('WriteNote')}>
            
            <Text style={{ alignSelf: 'center', fontSize: 30, color: 'white' }}>+</Text>

           </TouchableOpacity>
            {/* <Button style={{position:'absolute', bottom:5 , right :5 }} title='Add' onPress={()=>dispatch({type:"Add"})}  >

           
            </Button > */}
            <FlatList
                data={data}
                keyExtractor={item => item.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ShowNote', { id: item.id })}>
                            <View style={{
                                flexDirection: 'row', borderColor: 'white',
                                borderWidth: 1,
                                borderRadius: 12,
                                margin: 10,
                                padding: 10,
                                justifyContent: 'space-between'
                            }}>

                                <Text style={{ fontSize: 22, color: 'white', }} >{item.title}</Text>
                                <TouchableOpacity
                                 onPress={()=>dispatch({type:"Remove" ,payload:item.id })} 
                                >
                                <Text>Delete</Text>
                                </TouchableOpacity>
                                {/* <MaterialIcons onPress={{}} style={{ alignSelf: 'center' }} name='delete-forever' size={hp('5%')} color="white" /> */}
                                <TouchableOpacity
                                   onPress={()=>navigation.navigate('EditNote', { item })} >
                                <Text>Edit</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>


    )
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",

    },
})


export default TodoScreen