import type { NextPage } from 'next'
import Link from "next/link"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeDescription from "../components/homeDescription";
import HomeUrls from "../components/homeUrls";
import HeadComponent from "../components/Head";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent title={'Learn Nextjs'} metaData={'Learn nextjs by tutorials'} />
      <main className={styles.main}>
        <Link href="/store">Go to store</Link>
        {/* <HomeDescription />
        <HomeUrls /> */}
      </main>
    </div>
  )
}

export default Home
