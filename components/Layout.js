import Head from 'next/head';
import Nav2 from './Nav2';
import Footer from './Footer';
import styles from './Layout.module.css';

export default function Layout({ title, description, keywords, children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Nav2 />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'DJ Events || Find the hottiest parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, dj, edm, events',
};
