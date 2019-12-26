import React from 'react'
import useSystemTheme from 'use-system-theme'
import Browser from './Browser'

export default () => {
  const systemTheme = useSystemTheme()
  const isDark = systemTheme === 'dark'
  console.log({ systemTheme, isDark })
  const style = {
    paddingTop: '10rem',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: isDark ? 'black' : 'white',
    color: isDark ? 'white' : 'black'
  }
  return (
    <div style={style}>
      <h1>Create React App</h1>
      <p>The System Theme is: {systemTheme}</p>
      <Browser />
    </div>
  )
}
