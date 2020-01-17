import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import yelp from '../api/yelp';

const ResultDetails = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height:135,
        width:250,
        borderRadius:4,
        marginHorizontal:5,
        marginBottom:10
    },
    name:{
        fontWeight:'bold',
        fontSize:16
    },
    container:{
        marginLeft:15
    }
});

export default ResultDetails;