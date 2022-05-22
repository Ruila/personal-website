import React, { useState } from "react"
import { ThemeProvider } from "@mui/material/styles"
import { LightTheme, DarkTheme } from "./theme"
import Button from "@mui/material/Button"
import { AppContext } from "./AppContext"
import { HomeView } from "./Home"

type LayoutProps = {
  children?: React.ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [mode, setMode] = useState(true)
  const state = {
    mode: mode,
  }
  return (
    <AppContext.Provider value={state}>
      <ThemeProvider theme={mode ? LightTheme : DarkTheme}>
        <Button onClick={() => setMode(!mode)}>change</Button>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  )
}
