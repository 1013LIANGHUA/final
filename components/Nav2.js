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
            <a href='#'>Home</a>
          </li>
          <li className={styles.link}>
            <a href='#'>作品集</a>

            <ul>
              <li className={styles.link}>
                <a href='http://localhost:3000/school/timetable'>課表</a>
              </li>
              <li className={styles.link}>
                <a href='#'>Plugins</a>
              </li>
              <li className={styles.link}>
                <a href='#'>Tutorials</a>
              </li>
            </ul>
          </li>
          <li className={styles.link}>
            <a href='#'>履歷</a>

            <ul>
              <li className={styles.link}>
                <a href='#'>Resources</a>
              </li>
              <li className={styles.link}>
                <a href='#'>Links</a>
              </li>
              <li className={styles.link}>
                <a href='#'>Tutorials</a>

                <ul>
                  <li className={styles.link}>
                    <a href='#'>HTML/CSS</a>
                  </li>
                  <li className={styles.link}>
                    <a href='#'>jQuery</a>
                  </li>
                  <li className={styles.link}>
                    <a href='#'>Other</a>

                    <ul>
                      <li className={styles.link}>
                        <a href='#'>Stuff</a>
                      </li>
                      <li className={styles.link}>
                        <a href='#'>Things</a>
                      </li>
                      <li className={styles.link}>
                        <a href='#'>Other Stuff</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={styles.link}>
            <a href='https://1092-nextjs-djevents-209410306.vercel.app/project/meals'>
              MealDB
            </a>
          </li>
          <li className={styles.link}>
            <a href=''>連結</a>
          </li>
          <li className={styles.link}>
            <a href='#'>個人資料</a>
          </li>
          <li className={styles.link}>
            <a href='#'>關於我</a>
          </li>
          <li className={styles.icon}>
          <a href='https://www.instagram.com/1013_0_0/'><i class="fab fa-instagram"></i></a>
          </li>
          <li className={styles.icon}>
          <a href='https://www.facebook.com/profile.php?id=100003388584955'><i class="fab fa-facebook"></i></a>
          </li>
        </ul>
      </nav>
      <div className={styles.container}>
        <img
          className={styles.img}
          src='https://res.cloudinary.com/dkla3sb3q/image/upload/v1623584064/large_S_37609491_0bdbf75786.jpg'
          alt=''
        />
        <div >
            <section className={styles.section}>
            
          <h1 className={styles.h1}>陳亮華</h1>
          <p className={styles.p1}> Tamkang University</p>
          <p className={styles.title}>Student Information Engineering</p>
            </section>
        </div>
        {/* <img className={styles.img2} src="https://res.cloudinary.com/dkla3sb3q/image/upload/v1623638993/S_37675097_0d193aa1eb.jpg" alt=""/> */}
      </div>
    </div>
  );
}