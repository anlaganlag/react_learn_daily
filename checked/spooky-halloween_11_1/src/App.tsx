import React from 'react'
import './App.css'
import Home from './components/Home'
import Navigation from './components/Navigation'
import ScareMe from './components/ScareMe'
import StoryTime from './components/StoryTime'
import { Provider, useGlobalState } from './store'

function App() {
  const currentPage = useGlobalState('currentPage')


  const PageBySelection = () => {
    switch (currentPage) {
      case '首页':
        return <Home />
      case '来一发!':
        return <ScareMe />
      case `来创作个故事`:
        return <StoryTime />
      default:
        return null
    }
  }

  return (
    <div className='App'>
      <div className='App-Title'>来张地图</div>
      <div className='App-Navigation'>
        <Navigation />
      </div>
      <div className='App-Body'>
        <PageBySelection />
      </div>
    </div>
  )
}

const AppWrappedInProvider = () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}

export default AppWrappedInProvider
