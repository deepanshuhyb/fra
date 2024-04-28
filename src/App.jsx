import { useState } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './components/home/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 p-4'>react router</h1>
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
