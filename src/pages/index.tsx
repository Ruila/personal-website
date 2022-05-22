import React from "react"
import { HomeView } from "../components/Home"
import { Layout } from "../components/Layout"

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <HomeView />
    </Layout>
  )
}

export default IndexPage
