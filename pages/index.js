import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";

import styles from "./index.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>denis nazarov</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <ul>
          {allPostsData.map(({ id, date, title, excerptHtml }) => (
            <li key={id}>
              <h3>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
              </h3>
              <div className={styles.date}>{date}</div>
              <div
                className={styles.excerpt}
                dangerouslySetInnerHTML={{ __html: excerptHtml }}
              />
              <Link href={`/posts/${id}`}>
                <a className={styles.readPostLink}>Read post</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
