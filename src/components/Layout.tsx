import React, { useState } from "react"
import { ThemeProvider } from "@mui/material/styles"
import { LightTheme, DarkTheme } from "./theme"
import Button from "@mui/material/Button"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [mode, setMode] = useState(false)
  return (
    <ThemeProvider theme={mode ? LightTheme : DarkTheme}>
      <Button onClick={() => setMode(!mode)}>change</Button>
      {children}
    </ThemeProvider>
  )
}
