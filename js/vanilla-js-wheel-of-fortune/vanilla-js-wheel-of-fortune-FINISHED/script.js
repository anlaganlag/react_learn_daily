//立即調用函數表達式可以防止污染全局變量..
(function() {
  //選中輪子和按鈕
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  let deg = 0;
    //點擊後執行
  startButton.addEventListener('click', () => {
    // 旋轉時停止按鈕的所有事件
    startButton.style.pointerEvents = 'none';
    // 轉動2到7圈之間
    deg = Math.floor(720 + Math.random() * 1080);
    // 輪子的動畫參數是  制定所有即all 持續5秒 慢始慢終
    wheel.style.transition = 'all 5s ease';
    // 轉動輪子
    wheel.style.transform = `rotate(${deg}deg)`;
    // 模糊
    wheel.classList.add('blur');
  });
  //當動畫事件完畢後
  wheel.addEventListener('transitionend', () => {
    //取消模糊
    wheel.classList.remove('blur');
    //重新激活按鈕
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value from 360
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
