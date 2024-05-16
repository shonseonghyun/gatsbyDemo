
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const AboutUs = () => {
    return (
    <Layout title="About us">
      <p>We are the happines Stickers store.</p>
    </Layout>
    );
};

export const Head=()=>{
    return <Seo title='AboutUs'/>
}

export default AboutUs;