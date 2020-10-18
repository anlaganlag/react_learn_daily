import React from 'react'

const CurrencyRow = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
}) =>
    <div>
      <select value={selectedCurrency} onChange = {onChangeCurrency}>
        {currencyOptions.map(option=>
          <option key={option} value={option}> {trans[option]} {option} </option>
          )}
      </select>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
    </div>
export default CurrencyRow


//翻譯API..
  const trans =  {
  'CNY': '人民幣',
  'USD': '美元',
  'HKD': '港元',
  'GBP': '英镑',
  'CAD': '加元',
  'AUD': '澳元',
  'SGD': '新加坡元',
  'JPY': '日元',
  'KRW': '韩元',
  'THB': '泰铢',
  'MYR': '马来西亚林吉特',
  'INR': '印度卢比',
  'ISK': '冰岛克朗',
  'PHP': '菲律宾比索',
  'DKK': '丹麦克朗',
  'HUF': '匈牙利福林',
  'BGN': '保加利亞列弗',
  'CHF': '瑞士法郎',
  'CZK': '捷克克朗',
  'HRK': '克羅埃西亞庫納',
  'NOK': '挪威克朗',
  'PLN': '波兰兹罗提',
  'RON': '罗马尼亚列伊',
  'RUB': '俄罗斯卢布',
  'SEK': '瑞典克朗',
  'TRY': '土耳其里拉',
  'MXN': '墨西哥比索',
  'NZD': '新西兰元',
  'IDR': '印尼盾',
  'BRL': '巴西雷亚尔',
  'ZAR': '南非南特',
  'ILS': '以色列谢克尔'}

