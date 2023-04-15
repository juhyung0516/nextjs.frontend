import { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Next.js App</h1>
            <ul className="flex">
              <li className="mx-4">Home</li>
              <li className="mx-4">About</li>
              <li className="mx-4">Contact</li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto pt-8 pb-4">{children}</main>
      </div>
    </>
  );
};

export default Layout;
