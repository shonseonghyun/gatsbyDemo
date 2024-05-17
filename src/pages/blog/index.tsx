import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { Link, PageProps, graphql } from 'gatsby';

const Blog = ({data}:PageProps<Queries.BlogPostsQuery>) => {
    
    return (
    <Layout title="Blog">
        <section className='grid'>
            {data.allMdx.nodes.map((file,index)=>(
                <article key={index}>
                    <Link to={`/blog/${file.frontmatter?.slug}`}>
                        <h3>{file.frontmatter?.title}</h3>
                    </Link>
                    <h3>{file.frontmatter?.author}</h3>
                    <h3>{file.frontmatter?.date}</h3>
                    <p>{file.excerpt}</p>
                </article>
            ))}
        </section>    
    </Layout>
    );
};

export const Head=()=>{
    return <Seo title='Blog'/>
}

export const query= graphql`
query BlogPosts {
    allMdx {
        nodes {
          frontmatter {
            category
            title
            author
            slug
            date(formatString: "YYYY.MM.DD")
        }
          excerpt(pruneLength: 50)
        }
      }
}
`;

export default Blog;