import { useState } from 'react'
import './App.css'
import BoxColor from './components/box-color'
import ButtonDarkTheme from './components/button-dark-theme'
import InputColor from './components/input-color'

function App() {
  const [color, setColor] = useState<string>('')
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div>
      <BoxColor color={color.toLowerCase()} isDarkTheme={darkTheme} />
      <InputColor color={color} setColor={setColor} />
      <ButtonDarkTheme darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    </div>
  )
}

export default App
