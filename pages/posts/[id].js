import Head from "next/head";
import Layout from "../../components/Layout";

import styles from "./index.module.css";

import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData: { title, id, date, contentHtml } }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.postBody}>
        <h1>{title}</h1>
        <div className={styles.date}>{date}</div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
