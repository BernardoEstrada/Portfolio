import { useEffect, useState } from 'react'
import Themefy, { Themes, getThemeColors } from './utils/Theme'
import resume from '@assets/BernardoEstrada.resume.json' assert { type: "json" }
import BubbleChart from './components/BubbleChart'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import { Helmet } from 'react-helmet'

console.log('%c Hello There!', 'font-size: 36px; font-weight: bold');
function App() {
  const [theme, setTheme] = useState(Themes.DARK)
  const [colors, setColors] = useState(getThemeColors())

  useEffect(() => {
    setTimeout(() => setColors(getThemeColors()), 0)
  }, [theme])


  return (
    <>
      <Themefy theme={theme} />
      <Helmet >
        <title>{resume.basics.name}</title>
        <meta name="description" content={resume.basics.headline} />
      </Helmet>
      <NavBar theme={theme} setTheme={setTheme} />

      <Landing />
      <div className="hidden">
        {/* todo */}
        <br/>
        <span className="text-blue-500 ">{resume.basics.summary}</span>
        <BubbleChart themeColors={colors} />
      </div>
    </>
  )
}

export default App
