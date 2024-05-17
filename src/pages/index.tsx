import { Link, graphql, type PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



function IndexPage({data}:PageProps<Queries.StickersQuery>){

  return (
    <Layout title="Home">
      <p>Welcome to DevStickers</p>
      {/* <StaticImage 
        alt="Stickers on the wall" 
        src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height={200}
      /> */}
      <div className="grid">
        {
          data.allContentfulStickerPack.nodes.map(sticker=>
            <article>
              <h1>
                <Link to={`/product/${sticker.slug}`}>
                  {sticker.name}
                </Link>
              </h1>
              <GatsbyImage 
                image={getImage(sticker.preview?.gatsbyImageData!)!}
                alt={sticker.name!}>
              </GatsbyImage>
            </article>
          )
          
        }
      </div>
    </Layout>
  )
}
export const Head=()=>{
  return <Seo />
}

export const query = graphql`
query Stickers {
  allContentfulStickerPack(sort: {updatedAt: ASC}) {
    nodes {
      name
      price
      slug
      preview {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
}
`;

export default IndexPage