import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import Themefy, { Themes, getThemeColors } from './utils/Theme'
import { SunIcon, MoonIcon, ChevronDownIcon } from "@heroicons/react/24/solid"
import resume from '@assets/BernardoEstrada.resume.json' assert { type: "json" }
import BubbleChart from './components/BubbleChart.tsx'

function App() {
  const [theme, setTheme] = useState(Themes.DARK)
  const [colors, setColors] = useState(getThemeColors())

  useEffect(() => {
    setColors(getThemeColors())
  }, [theme])

  return (
    <>
      <Themefy theme={theme} />

      <div className="flex flex-row-reverse">
        <div className="join m-5 mr-0">
          <div className='btn join-item'>
            <label className="swap swap-rotate">
              <input type="checkbox" checked={theme===Themes.DARK} onChange={e => setTheme(e.target.checked?Themes.DARK:Themes.LIGHT)}/>
              <SunIcon className="swap-on fill-current w-8 h-8"/>
              <MoonIcon className="swap-off fill-current w-7 h-7"/>
            </label>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn join-item">
              <ChevronDownIcon className="w-5 h-5"/>
            </label>
            <div className="dropdown-content z-[1] menu pt-2 shadow bg-base-100 rounded-box w-52 overflow-scroll h-52 scroll-m-0 no-scrollbar">
              <ul tabIndex={0}>
                {Object.values(Themes).map((theme, index) => (
                  <li key={index} onClick={() => setTheme(theme)}><a>{theme.charAt(0).toLocaleUpperCase()+theme.slice(1)}</a></li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <br/>
      <span className="text-blue-500">{resume.basics.summary}</span>
      <BubbleChart themeColors={colors} />
    </>
  )
}

export default App
