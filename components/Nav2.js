import styles from './Nav2.module.css';
import React from 'react';
import Head from 'next/head';


export default function Nav2() {
  return (
    <div className={styles.container}>
      <Head>
      <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
      integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
      crossorigin="anonymous"
    />
      </Head>

      <nav className={styles.nav}>
        <ul>
          <li className={styles.link}>
            <a href='/'>Home</a>
          </li>
          <li className={styles.link}>
            <a href='#'>作品集</a>

            <ul>
              <li className={styles.link}>
                <a href='/school/timetable'>課表</a>
              </li>
              <li className={styles.link}>
                <a href='/resume/resume'>履歷</a>
              </li>
              <li className={styles.link}>
                <a href='#'>nono</a>
              </li>
            </ul>
          </li>
          <li className={styles.link}>
            <a href='#'>Class Demo</a>

            <ul>
              <li className={styles.link}>
                <a href='#'>nono</a>
              </li>
              <li className={styles.link}>
                <a href='#'>nono</a>
              </li>
              <li className={styles.link}>
                <a href='#'>nono</a>

                <ul>
                  <li className={styles.link}>
                    <a href='#'></a>
                  </li>
                  <li className={styles.link}>
                    <a href='#'></a>
                  </li>
                  <li className={styles.link}>
                    <a href='#'></a>

                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={styles.link}>
            <a href='/project/meals'>
              MealDB
            </a>
          </li>
          <li className={styles.link}>
            <a href=''>連結</a>
          </li>
          <li className={styles.link}>
            <a href='/Profile/Card'>個人資料</a>
          </li>
          <li className={styles.link}>
            <a href='/about/me'>關於我</a>
          </li>
          <li className={styles.icon}>
          <a href='https://www.instagram.com/1013_0_0/'><i class="fab fa-instagram"></i></a>
          </li>
          <li className={styles.icon}>
          <a href='https://www.facebook.com/profile.php?id=100003388584955'><i class="fab fa-facebook"></i></a>
          </li>
        </ul>
      </nav>
      {/* <div className={styles.container}>
        <img
          className={styles.img}
          src='https://res.cloudinary.com/dkla3sb3q/image/upload/v1623584064/large_S_37609491_0bdbf75786.jpg'
          alt=''
        /> */}
        
        {/* <div >
            <section className={styles.section}>
            
          <h1 className={styles.h1}>陳亮華</h1>
          <p className={styles.p1}> Tamkang University</p>
          <p className={styles.title}>Student Information Engineering</p>
            </section>
        </div>  */}
        {/* <div className={styles.absolout}>
            <figure className={styles.snip1336}>
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
  <figcaption>
    <img className={styles.profile1} src="https://res.cloudinary.com/dkla3sb3q/image/upload/v1623687955/medium__524b91c737.jpg" alt="profile-sample4"  />
    <h2 className={styles.h2}>陳亮華<span>淡江大學資訊工程學系</span></h2>
    <p>email:12345678@gms.tku.edu.tw</p>
    <p>Tel:0912345678</p>
    <p>home:台北市大安區100號8樓</p>
    <a href="https://www.facebook.com/profile.php?id=100003388584955" class="follow">Follow</a>
    <a href="https://www.instagram.com/1013_0_0/" class="info">More Info</a>
  </figcaption>
</figure> */}

        {/* </div> */}
        {/* <img className={styles.img2} src="https://res.cloudinary.com/dkla3sb3q/image/upload/v1623638993/S_37675097_0d193aa1eb.jpg" alt=""/> */}
      {/* </div> */}
    </div>
  );
}
