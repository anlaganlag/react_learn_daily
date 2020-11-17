import React, { useState, useEffect } from 'react';
import '../css/bootstrap.css';
import './formStyle.css';
import { TextField} from '@material-ui/core';

function Form( { handleSearch, handleCountryName }) {
  const [countryName, setCountryName] = useState(null);
  return (
    <form className="form" onSubmit = {handleSearch}>
      <div className="form-country-name">
        <TextField type="text" id="standart-basic" label="要搜索的地区(英文如US)" onChange={(e)=>handleCountryName(e)} />
        <small id="textHelp" class="form-text text-muted">这里的地区有可能是市 省份 国家数据不存在时或为空返回默认搜索的是全球排名</small>
      </div><br/>
      <button type="reset" className="btn btn-outline-success" id="submitBtn" onClick={handleSearch}>搜索地区</button>
      
    </form>

  );
}

export default Form;
