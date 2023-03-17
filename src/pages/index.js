import * as React from "react"
// import { Link } from 'gatsby';
import Layout  from '../components/layout';
// import { StaticImage } from "gatsby-plugin-image";
import Seo from '../components/seo'



const IndexPage = () => {
  return (
    // <main>
    //   <h1>Welcome to my ExelaTech site!</h1>
    //   <Link to="/about">About</Link>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    // </main>

    <Layout pageTitle="HomePage">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      /> */}
    </Layout>
  )
}

export const Head = () => <Seo title="HomePage"></Seo>

export default IndexPage


