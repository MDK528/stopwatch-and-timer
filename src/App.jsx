import { useState } from 'react'
import MobileTabScreen from './MobileScreen'

function App() {

  const [isTab, setIsTab] = useState("stopwatch")
  const handleTab = () => {
    if(isTab === 'stopwatch') {
      setIsTab('timer')
    }else{
      setIsTab("stopwatch")
    }
  }
  return (
    <>
      <MobileTabScreen/>
    </>
  )
}

export default App
