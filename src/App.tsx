import { useState } from 'react'
import Themefy, { DEFAULT_DARK, getThemeColors } from './utils/Theme'
import resume from '@assets/BernardoEstrada.resume.json' assert { type: "json" }
import BubbleChart from './components/BubbleChart'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import { Helmet } from 'react-helmet'

console.log('%c Hello There!', 'font-size: 36px; font-weight: bold');
function App() {
  const [theme, setTheme] = useState(DEFAULT_DARK)
  const [colors, setColors] = useState(getThemeColors())

  return (
    <>
      <Themefy theme={theme} />
      <Helmet >
        <title>{resume.basics.name}</title>
        <meta name="description" content={resume.basics.headline} />
        <meta name="theme-color" content={colors.b1} />
      </Helmet>
      <NavBar theme={theme} setTheme={setTheme} setColors={setColors} />

      <Landing />
      <div className="">
        {/* todo */}
        <br/>
        <span className="text-blue-500 ">{resume.basics.summary}</span>
        <BubbleChart themeColors={colors} />
      </div>
    </>
  )
}

export default App
