import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from './Home.module.css'

import Card from '../../Utils/Card/Card';

const data = [{
  title: 'Title',
  image: 'https://via.placeholder.com/150',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur, massa quis suscipit porta, nibh leo convallis ',
  ctaText: 'Lear More',
  url: 'https://google.com'
},
{
  title: 'Title',
  image: 'https://via.placeholder.com/150',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur, massa quis suscipit porta, nibh leo convallis ',
  ctaText: 'Lear More',
  url: 'https://google.com'
},
{
  title: 'Title',
  image: 'https://via.placeholder.com/150',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur, massa quis suscipit porta, nibh leo convallis ',
  ctaText: 'Lear More',
  url: 'https://google.com'
},
{
  title: 'Title',
  image: 'https://via.placeholder.com/150',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur, massa quis suscipit porta, nibh leo convallis ',
  ctaText: 'Lear More',
  url: 'https://google.com'
},
{
  title: 'Title',
  image: 'https://via.placeholder.com/150',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur, massa quis suscipit porta, nibh leo convallis ',
  ctaText: 'Lear More',
  url: 'https://google.com'
}];

const Home: NextPage = () => (
  <>
    <Head>
      <title>Voice Frontend Interview</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/images/favicon-16x16.png' />
    </Head>

    <header className={styles.header}>
      <h1>
        <Image src='/images/voice-logo.svg' alt='Voice Logo' width={200} height={50} />
      </h1>
    </header>

    <main className={styles.main}>
      <section className={styles.cards}>
      { data.map((data, index) => <Card key={index + data.title} {...data} />)}
      </section>
    </main>

    <footer className={styles.footer}>
      <span className={styles.logo}>
        <Image src='/images/voice-logo.svg' alt='Voice Logo' width={72} height={16} />
      </span>
    </footer>
  </>
)

export default Home
