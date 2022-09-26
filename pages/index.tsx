import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Modal } from '../components/modal/modal';
import Footer from '../components/footer/footer';
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import { useModal } from '../components/useModal';
import React, { useState } from 'react';

const Home: NextPage = () => {
  const { isShown, toggle } = useModal();
  const content = <React.Fragment>Hey, I&apos;m a model.</React.Fragment>;
  const [navbar, setNavbar] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="fixed w-full bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                <h2 className="text-2xl text-white font-bold">NEXT JS</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/customer">
                    <a>Customer</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/about">
                    <a>About US</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/contact">
                    <a>Contact US</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ThemeToggle/>
          </div>
        </div>
      </nav>
      <main>
        <header
          className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img"
        >
          <div className="p-5 text-3xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </div>
        </header>
        <div className="max-w-lg m-auto">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
            magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
            sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
            nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
            odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
            laoreet sem, semper molestie libero.
          </p>
          <p className="mb-4">
            Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
            fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
            non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
            Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
            varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
            semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
            ipsum, id consequat nulla nunc in ligula.
          </p>
          <p className="mb-12">
            Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
            dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
            dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
            fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
            fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
            vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
            neque.
          </p>
        </div>
        <section
          className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img"
        >
          <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
            Parralax inline
          </div>
        </section>

        <div className="flex flex-col items-center justify-center flex-grow min-h-screen px-0 py-16">
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
            
          </div>
        </div>
        <div>
          <React.Fragment>
            <button onClick={toggle}>Open modal</button>
            <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={''} />
          </React.Fragment>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default Home
