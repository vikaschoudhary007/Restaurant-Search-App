import React from 'react';
import { Text, View, StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native';
import ResultDetails from './ResultDetails';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null;
    }
    return (
    <View>
        <Text style={Style.title}>{title}</Text>
        
        <FlatList 
            data={results}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(results) => results.id }
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('result' , { id : item.id})}>
                        <ResultDetails result={ item }/>
                    </TouchableOpacity>
                );
            }}
        />
    </View>
    );
};

const Style = StyleSheet.create({

    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:10,
        marginBottom:3
    }

});


export default withNavigation(ResultsList);