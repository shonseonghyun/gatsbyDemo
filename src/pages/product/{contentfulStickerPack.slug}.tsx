import React from 'react';
import Layout from '../../components/Layout';
import { PageProps, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProductDetail = ({data}:PageProps<Queries.ProductQuery>) => {

    return (
        <Layout title={data.contentfulStickerPack?.name!}>
            <h1>{data.contentfulStickerPack?.price}</h1>
            <GatsbyImage 
                image={getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!)!}
                alt={data.contentfulStickerPack?.slug!}
            />
        </Layout>
    );
};

export default ProductDetail;

export const product = graphql`
query Product($slug:String) {
    contentfulStickerPack(slug: {eq: $slug}) {
      id
      name
      price
      slug
      preview {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;  