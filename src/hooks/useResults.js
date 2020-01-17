import { useState, useEffect } from 'react';
import yelp from '../api/yelp';


export default () => {
    const [results,setResults] = useState([]);
    const [errorMsg,SetErrorMsg] = useState('');

    const searchApi = async (term) => {
    try{
       const response = await yelp.get('/search' , {
            params:{
                limit:50,
                term:term,
                location : 'california',
            }

       });
       setResults(response.data.businesses);
    
    }
        catch(err){
            SetErrorMsg('Something Went Wrong');
            console.log(err);
        }
    };

    useEffect( () => {
        searchApi('pasta');
    }, [] );

    return [searchApi, results, errorMsg];
};