// import React from 'react';
// import Head from 'next/head';
// import Layout from '../components/layout/Layout/Layout';
// import HeroSection from '../components/sections/HeroSection/HeroSection';
// import TestimonialsSection from '../components/sections/TestimonialsSection/TestimonialsSection';

// const Home: React.FC = () => {
//   return (
//     <>
//       <Head>
//         <title>My App</title>
//         <meta name="description" content="My App - A Next.js app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Layout>
//         <HeroSection />
//         <TestimonialsSection />
//       </Layout>
//     </>
//   );
// };

// export default Home;

import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js app!" />
      </Head>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mt-8">
          Welcome to My Next.js App!
        </h1>
        <p className="text-lg text-center mt-4">
          This is a sample Next.js app using TypeScript and Tailwind CSS.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
