import { type PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Home">
      <p>Welcome to DevStickers</p>
    </Layout>
  )
}
export const Head=()=>{
  return <Seo />
}

export default IndexPage