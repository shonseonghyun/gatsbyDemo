import React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
import Seo from '../../components/Seo';

interface IBlogPostProps{
    data:Queries.PostDetailQuery,
    children:any
}

export default function BlogPost ({data,children}:IBlogPostProps) {

    return (
        <Layout title="blogPost">
            <div>{children}</div>
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
      }
    }
  }
`; 

export const Head = ({data}:IBlogPostProps)=><Seo title={data.mdx?.frontmatter?.title}/>