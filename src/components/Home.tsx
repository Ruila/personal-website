import React, { useContext, useEffect } from "react"
import { Layout } from "./Layout"
import Button from "@mui/material/Button"
import { AppContext } from "./AppContext"

export const HomeView: React.FunctionComponent = () => {
  const context = useContext(AppContext)
  useEffect(() => {
    console.info("context", context)
  }, [context])
  return (
    <Layout>
      <Button>{context.mode ? "true" : "false"} </Button>
      <Button color="secondary">Secondary</Button>
    </Layout>
  )
}
