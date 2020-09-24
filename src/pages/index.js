import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Game from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div id="div-a">
        <h1>FJSHomeplate</h1>
      </div>
      <div>
        <Game id="project-game-1" title="Fat Benji" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
