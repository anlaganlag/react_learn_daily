import React, {  useState } from 'react';
import './App.css';
import './css/bootstrap.css';
import axios from 'axios';
import Form from './Components/form';
import './Components/styles.css';
import Table from './Components/table';

function App() {
  const [covidStats, setCovidStats] = useState([]);
  const [country , setCountry  ] = useState ([])

  const options = {
    method: 'GET',
    url: 'https://rapidapi.p.rapidapi.com/v1/stats',
    params: {country: ''},
    headers: {
      'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
      'x-rapidapi-key': '226a9fbbd2msh3098f86f2468cdap1c076djsn8554e634c93c'
    }
  };
  
  function capitalize(str){
    return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);  
  }
  
  function handleCountry(e){
    options.params.country = capitalize(e.target.value);
  }

  const sortData = (data) => {
        return data.sort((a, b) =>b.confirmed-a.confirmed) 
    }

    
  function handleSearch(){
    // axios.request(options).then(r=>(setCovidStats(r.data.data.covid19Stats))).catch(e=>console.log(e));
    axios.request(options).then(r=>{
        console.log(r.data);
        const TotalData = r.data.data.covid19Stats
        setCovidStats(TotalData)
        // const countries =TotalData.map( item=>({
        //     country:item.province,cases:item.confirmed
        // }));
        let sortedData = sortData(TotalData)
        console.log("sssssssss",sortedData);
        setCountry(sortedData)
      
      }).catch(e=>console.log(e));

  }


  return (
    <div className="general-container">
      <h1 className="display-3">新冠感染按照地区排名</h1>
      <Form handleSearch={()=>handleSearch()} handleCountryName={(e)=>handleCountry(e)} /> 
      {/* <Result covid_stats={covidStats} /> */}
      <div className="table-container">
        <Table covid_stats={country} /> 
      </div>
    </div>
  );
}

export default App;
