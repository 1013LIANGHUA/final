import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './index.module.css';
export default function HomePage() {
  return (
    <Layout description='Welcome to me'>
       {/* <div className={styles.container}>
        <div className={styles.card}>
          <div >
            <img
              src='https://res.cloudinary.com/dkla3sb3q/image/upload/v1623584064/large_S_37609491_0bdbf75786.jpg'
              alt='profile_card'
            />
          </div>
          <div className={styles.info}>
            <button></button>
            <p></p>
          </div>
        </div>
      </div>    */}
      <div className={styles.container}>
        <div className={styles.box1}>
          <h1>陳亮華</h1>
          <img
            src='https://res.cloudinary.com/dkla3sb3q/image/upload/v1623584064/large_S_37609491_0bdbf75786.jpg'
            alt='profile_card'
          />
          <p>
            淡江大學 資訊工程學系
          </p>
          <br />
          <a href='https://www.tku.edu.tw'> Tku.com </a>
        </div>
      </div>

    </Layout>
  );
}
