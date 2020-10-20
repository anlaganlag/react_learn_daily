import React from 'react'
import ReactPlayer from 'react-player'
import './App.css'
function App () {
  return (
    <div className='App'>
      <ReactPlayer
        // url='https://www.twitch.tv/videos/768227221'
        // url='https://v.youku.com/v_show/id_XNDgyNTk1ODA4NA==.html?s=543a6c6f06efbfbd11ef&scm=20140719.rcmd.7182.show_543a6c6f06efbfbd11ef&s=543a6c6f06efbfbd11ef'
        // url = 'https://www.iqiyi.com/v_1os43ju63ak.html?vfrm=pcw_home&vfrmblk=D&vfrmrst=712211_focus_A_image2'
        // url = 'https://v.douyu.com/show/Kp1QM8poxrJMk4bj'
        controls
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
      />
    </div>
  )
}

export default App
