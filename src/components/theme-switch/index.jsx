import React, { useState, useEffect } from 'react'
import Switch from 'react-switch'

import * as Dom from '../../utils/dom'
import * as Storage from '../../utils/storage'
import { THEME } from '../../constants'

import './index.scss'

const MoonIcon = () => {
  return (
    <React.Fragment>
      <span>D</span>
    </React.Fragment>
  )
}

const SunIcon = () => {
  return (
    <React.Fragment>
      <span>L</span>
    </React.Fragment>
  )
}
function getTheme(checked) {
  return checked ? THEME.DARK : THEME.LIGHT
}

function toggleTheme(theme) {
  switch (theme) {
    case THEME.LIGHT: {
      Dom.addClassToBody(THEME.LIGHT)
      Dom.removeClassToBody(THEME.DARK)
      break
    }
    case THEME.DARK: {
      Dom.addClassToBody(THEME.DARK)
      Dom.removeClassToBody(THEME.LIGHT)
      break
    }
  }
}

export const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = checked => {
    const theme = getTheme(checked)

    Storage.setTheme(checked)
    setChecked(checked)
    toggleTheme(theme)
  }

  useEffect(() => {
    const checked = Storage.getTheme(Dom.hasClassOfBody(THEME.DARK))

    handleChange(checked)
  }, [])

  return (
    <div className="switch-container">
      <label htmlFor="normal-switch">
        <Switch
          onChange={handleChange}
          checked={checked}
          id="normal-switch"
          height={24}
          width={48}
          checkedIcon={
            <div className="icon checkedIcon">
              <MoonIcon />
            </div>
          }
          uncheckedIcon={
            <div className="icon uncheckedIcon">
              <SunIcon />
            </div>
          }
          offColor={'#d9dfe2'}
          offHandleColor={'#fff'}
          onColor={'#999'}
          onHandleColor={'#282c35'}
        />
      </label>
    </div>
  )
}
