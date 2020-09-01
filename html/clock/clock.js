setInterval(setClock, 1000)
//选择指针
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    //获取日期
  const currentDate = new Date()
  //获取s 60s为1
  const secondsRatio = currentDate.getSeconds() / 60
  //m 60m=1
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  //h 24h=2 为什么是这样如果除以24则12点才走到一半..必然说不同..
  //所以就是到达12两次即可..
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  //转动..dom/ele,选择的比例
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
//   console.log(hoursRatio,minutesRatio,secondsRatio)
}

function setRotation(element, rotationRatio) {
   // s min都是绕一圈..
   // h是绕两圈 
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
