import React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
import Seo from '../../components/Seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface IBlogPostProps{
    data:Queries.PostDetailQuery,
    children:any
}

export default function BlogPost ({data,children}:IBlogPostProps) {
    const image = getImage(data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!);

    return (
        <Layout title="blogPost">
            <div>{children}</div>
            <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!}/>
        </Layout>
    );
};

export const query = graphql`
query PostDetail($frontmatter__slug:String) {
    mdx(frontmatter: {slug: {eq: $frontmatter__slug}}) {
      id
      body
      children {
        id
      }
      frontmatter {
        author
        category
        date
        slug
        title
        headerImage {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
          }
      }
    }
  }
`; 

export const Head = ({data}:IBlogPostProps)=><Seo title={data.mdx?.frontmatter?.title!}/>