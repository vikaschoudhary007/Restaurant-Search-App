import React from 'react';
import { Text,StyleSheet,Button,View,TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
    <View style={style.background}>
        <Feather name='search' style={style.iconStyle}/>
        <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={style.inputStyle}
         placeholder="search"
         value={ term }
         onChangeText={newTerm => onTermChange(newTerm)}
         onEndEditing={onTermSubmit}
         />
        </View>
    );
};

const style = StyleSheet.create({
    background:{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        marginTop:10,
        flexDirection:'row',
        

    },
    inputStyle:{
        flex:1,
        fontSize:18,
    },
    iconStyle:{
        fontSize:35,
        marginHorizontal:15,
        alignSelf:'center'
    }
});

export default SearchBar;