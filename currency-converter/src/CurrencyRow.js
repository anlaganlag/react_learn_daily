import React from 'react'
import {trans} from "./currencyChinese"

const CurrencyRow = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
}) =>
    <div>
      <select value={selectedCurrency} onChange = {onChangeCurrency}>
        {currencyOptions.map((option,i)=>
           <option key={option} value={option}> {trans[option]} ({option}) </option>
          )}
      </select>
      <input type="number" min="0" className="input" value={amount} onChange={onChangeAmount} />
    </div>
export default CurrencyRow




