import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow'

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])//所有可選貨幣選項
  const [fromCurrency, setFromCurrency] = useState()//初始貨幣(from)
  const [toCurrency, setToCurrency] = useState()//兌換貨幣(to)
  const [exchangeRate, setExchangeRate] = useState()//兌換匯率
  const [amount, setAmount] = useState(1)//金額
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  //true就是從from =>to方向, false就是 to => from方向..即是正向還是反向
  const [updateDate, setUpdateDate] = useState('')

  let toAmount, fromAmount
  if (amountInFromCurrency) {//如設定了是從from -> to的方向...
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {//如設定了另一個方向即 to-> from方向...
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  //初始化數據
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const exchangeCurrency = Object.keys(data.rates)[22]//兌換貨幣(to)(API中22是RMB 25USA)
        setToCurrency(exchangeCurrency)
        console.log(data)
        let updateDate = data.date
        setUpdateDate (updateDate)
        setCurrencyOptions([ ...Object.keys(data.rates)]) //初始貨幣選項
        setFromCurrency("USD")//基準貨幣寫死USD,可選CNY
        setExchangeRate(data.rates[exchangeCurrency])
      })
  }, [])

  useEffect(() => {
    if (fromCurrency && toCurrency ) {//如果都不爲空..
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }


  return (
    <>
      <h1>實時匯率</h1>
      <a href='https://api.exchangeratesapi.io/latest'>{updateDate ? "更新日期:"+updateDate :'無法連接網絡錯誤'} </a>

      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </>
  );
}

export default App;