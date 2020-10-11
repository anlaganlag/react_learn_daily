import React, { useState, useEffect } from "react";
import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import LineGraph from "./LineGraph";
import Table from "./Table";
import { sortData, prettyPrintStat } from "./util";
import numeral from "numeral";
import "numeral/locales/chs";
import Map from "./Map";
import "leaflet/dist/leaflet.css";


numeral.locale('chs');
const mapZoom =2


const App = () => {
  //全球和所有的国家代码
  const [country, setInputCountry] = useState("worldwide");
  //整体信息
  const [countryInfo, setCountryInfo] = useState({});
  
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [chineseType, setChineseType] = useState("感染");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });

  //获取一次总数据..
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  //获取国家的信息
  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            //国家的名字和代码
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          let sortedData = sortData(data);
          //简易版的数据..
          setCountries(countries);
          //获取的数据直接作为地图的数据..
          setMapCountries(data);
          setTableData(sortedData);
        });
    };
//完成获取数据这个操作..
    getCountriesData();
  }, []);


  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);
        countryCode === "worldwide"
        // ? setMapCenter([34.80746, -40.4796 ])
        ? setMapCenter( Array.from(mapCenter))
        // ?setMapCenter([Object.values(mapCenter)])
        : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      });
  };
  console.log("yyyyyyyyyy",mapCountries,tableData,mapCountries===tableData)

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>
                 新冠肺炎
              {new Date().toLocaleDateString()} 
              <span>
              <a href='https://disease.sh/'>
                数据来源:disease.sh
              </a>
              </span>
          </h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">全球</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox
            onClick={(e) =>{ 
              setCasesType("cases");
              setChineseType("感染");
              // let sortedData = sortData(data,type="cases");

              // setTableData(sortedData);

            }}
            title="感染"
            isRed
            active={casesType === "cases"}
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={numeral(countryInfo.cases).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => {
              setCasesType("recovered");
              setChineseType("痊愈")
            }}
            title="痊愈"
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => {
              setCasesType("deaths");
              setChineseType("死亡");
            }}
            title="死亡"
            isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format("0.0a")}
          />
        </div>
        <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <Card className="app__right">
        <CardContent>
          <div className="app__information">
            <Table countries={tableData} casesType={casesType} chineseType={chineseType}/>
            <LineGraph casesType={casesType} chineseType={chineseType}/>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
