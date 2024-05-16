import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { PageProps, graphql } from 'gatsby';

const Blog = ({data}:PageProps<Queries.BlogTitleQuery>) => {
    console.log(data);
    
    return (
    <Layout title="Blog">
        <p>Hello welcom to my blog!</p>   
        <ul>
            {data.allFile.nodes.map((file,index)=>(
                <li key={index}>{file.name}</li>
            ))}
        </ul>    
    </Layout>
    );
};

export const Head=()=>{
    return <Seo title='Blog'/>
}

export const query= graphql`
query BlogTitle {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default Blog;