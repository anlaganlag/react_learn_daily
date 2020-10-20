//顯示持續的時間只有兩秒
export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = 'win';

  //有一個沒有匹配上就是清除贏的狀態

  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
    }
  });
  
  // 判斷是否達到錯誤的上限..
  if(wrong.length === 6) status = 'lose';

  return status
}