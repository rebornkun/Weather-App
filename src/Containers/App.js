import Background from '../Components/Background/Background';
import Nav from '../Components/Nav/Nav';
import Details from '../Components/Details/Details';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ErrorBox from '../Components/ErrorBox/ErrorBox';

function App() {
  const [prevSearch, setprevSearch] = useState([])
  const [query, setQuery] = useState('')
  const [current, setcurrent] = useState('')
  const [location, setlocation] = useState('')
  const [errorDetials, setErrorDetails] = useState('')
  const [error, setError] = useState(false)
  const [Apicall, setApicall] = useState([])


  const params = {
    access_key: '1a12f462422304665077a421cc839879',
    query: `${query}`
  }
  console.log(query);
  
  const handleSearchClick = () => {
    const input = document.getElementById('search')
    setQuery(input.value)
    if (input.value.length > 0){

      setprevSearch(prevSearch.concat(input.value))

      input.value = ''

      axios.get('http://api.weatherstack.com/current', {params})
        .then(response => {
          
          const apiResponse = response.data;
          if (apiResponse.success){
            setcurrent(apiResponse.current)
            setlocation(apiResponse.location)
          }else{
            setError(true)
            setErrorDetails(apiResponse.error)
          }

        }).catch(error => {
          console.log(error);
        });
      
      
    }else{
      console.log("empty")
    }
          
  }

  useEffect(() => {            


  },[query])
        
  console.log(query);
  console.log(prevSearch);
  console.log(errorDetials);

    

  return (
    <div className="App">
      <Background/>
      <h1>Weather.co</h1>
      <Nav prevSearch={prevSearch} handleSearchClick={handleSearchClick} />
      {!error ? 
      <Details /> 
      :
      <ErrorBox errorDetials={errorDetials}/>}
    </div>
  );
}

export default App;
