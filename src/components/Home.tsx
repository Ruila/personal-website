import React from "react"
import { Layout } from "./Layout"
import Button from "@mui/material/Button"

export const HomeView: React.FunctionComponent = () => {
  return (
    <Layout>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </Layout>
  )
}
