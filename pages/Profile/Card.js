import React from 'react';
import Layout from '../../components/Layout';
import styles from './card.module.css';
export default function Card() {
  return (
    <Layout>
    <div className={styles.absolout}>
      <figure className={styles.snip1336}>
        <img
          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
          alt='sample87'
        />
        <figcaption>
          <img
            className={styles.profile1}
            src='https://res.cloudinary.com/dkla3sb3q/image/upload/v1623687955/medium__524b91c737.jpg'
            alt='profile-sample4'
          />
          <h2 className={styles.h2}>
            陳亮華<span>淡江大學資訊工程學系</span>
          </h2>
          <p>email:12345678@gms.tku.edu.tw</p>
          <p>Tel:0912345678</p>
          <p>home:台北市大安區100號8樓</p>
          <a href='' class='follow'>
            Follow
          </a>
          <a href='#' class='info'>
            More Info
          </a>
        </figcaption>
      </figure>
    </div>
    </Layout>
  );
}
