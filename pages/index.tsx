import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout/Layout';
import HeroSection from '../components/sections/HeroSection/HeroSection';
import TestimonialsSection from '../components/sections/TestimonialsSection/TestimonialsSection';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="My App - A Next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroSection />
        <TestimonialsSection />
      </Layout>
    </>
  );
};

export default Home;
