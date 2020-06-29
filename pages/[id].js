import Head from "next/head";
import Layout from "../components/Layout";

import styles from "./[id].module.css";

import { getAllPostIds, getPostData } from "../lib/posts";

const twitterHandle = "@Iiterature";
const siteName = "denis nazarov";

export default function Post({ postData: { title, id, date, contentHtml } }) {
  const pageTitle = `${title} — Denis Nazarov`;
  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
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
