import React,{ useState } from 'react';
import { Text,StyleSheet,View} from 'react-native';
import SearchBar from '../components/searchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const searchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchApi, results, errorMsg] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    };

    return (
    <View style={{ flex:1 }}>
        <SearchBar
         term={term} 
         onTermChange={(newTerm) => {setTerm(newTerm)}}
         onTermSubmit={() => searchApi(term)}
         />
        {errorMsg ? <Text>{ errorMsg }</Text> : null}


        <ResultsList  results={filterResultsByPrice('$')} title='Cost Effective'/>
        <ResultsList   results={filterResultsByPrice('$$')} title='Bit Pricier'/>
        <ResultsList   results={filterResultsByPrice('$$$')} title='Big Spender'/>

        </View>
    );
};

const style = StyleSheet.create({

});

export default searchScreen;