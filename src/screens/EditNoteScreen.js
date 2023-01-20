import React, { useContext, useState , useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const EditNoteScreen = ({route , navigation}) => {

    const data = useSelector((state)=> state.todo)
    
    const {note} = route.params
    const [id, setfirst] = useState(note.id)
    console.log(id,"data.find")
   
    // const { state, dispatch } = useContext(NotesContext)

    const particularNote = data.find((record)=>{ 
        // console.log(record,"record");
        return record.id ==route.params.id
    })

   
  

    const [title, setTitile] = useState(note.title)
    const [content, setContent] = useState(note.content)

    const dispatch = useDispatch()
    return (
        <View style={{ flex: 1, backgroundColor: '#203239e0' }}>
            <Text style={style.titlee}>Enter Title</Text>
            <TextInput
                style={style.input}
                value={title}
                onChangeText={(text) => (setTitile(text))}
            >

            </TextInput >
            <Text style={style.titlee}>Enter Content</Text>


            <TextInput
                style={style.inputContent}
                value={content}
                onChangeText={(text) => (setContent(text))}
                multiline={true}
                numberOfLines={5}
            >

            </TextInput>

            <TouchableOpacity
                onPress={() => {
                    dispatch({ type: "Update", payload: {id, title, content } })
                    navigation.goBack()
                }}

                style={style.Buutton}>
                <Text style={{ color: 'white', fontSize: 23, textAlign: 'center', marginTop: 5, }}>save</Text>
            </TouchableOpacity>


        </View >

    )
}
const style = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",

    },
    Buutton: {
        fontSize: 20,
        height: 50,
        color: 'white',
        backgroundColor: '#008E89',
        width: '70%',
        alignSelf: 'center',
        borderRadius: 12,
        margin: 15

    },
    input: {
        height: 50,
        width: '90%',
        backgroundColor: 'white',
        color: 'black',

        fontSize: 23,
        padding: 10,
        margin: 20,
        borderRadius: 12,

    },
    inputContent: {

        width: '90%',
        backgroundColor: 'white',
        color: 'black',

        fontSize: 23,
        borderRadius: 12,
        margin: 20

    },
    titlee: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
        margin: 15

    }
})
export default EditNoteScreen