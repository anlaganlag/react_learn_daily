import React from "react";
import "./Table.css";
import numeral from "numeral";
import { sortData} from "./util";



const buildTableData = (countries, casesType) => {
  let sortedData = [...countries];//就是[{},{}的i形式]
  // console.log("sssssssssss",sortedData)
  switch (casesType) {
    case "recovered":
      sortedData = sortData(countries,"recovered");
      return sortedData;
    case "deaths":
      sortedData = sortData(countries,"deaths");
      return sortedData;
    default:
      return sortedData;
  }
  
};


function Table({ countries,casesType,chineseType }) {
  let tableData = buildTableData(countries, casesType);
  return (
    <>
            <h3>國家(地區):{chineseType}</h3>
    <div className="table">
      {tableData.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>
            <strong>{numeral(country[casesType]).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
    </>
  );
}

export default Table;
