import Head from "next/head";
import Link from "next/link";

import styles from "./index.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,900;1,400&family=Montserrat:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.header}>
        <main>
          <h1>
            <Link href="/">
              <a>Denis Nazarov</a>
            </Link>
          </h1>
        </main>
        <aside>
          <a href="https://twitter.com/Iiterature">Twitter</a>
        </aside>
      </header>
      {children}
      <footer>© 2020</footer>
    </div>
  );
}

export default Layout;
