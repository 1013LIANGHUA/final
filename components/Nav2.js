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
              {/* <li className={styles.link}>
                <a href='#'>nono</a>
              </li> */}
            </ul>
          </li>
          <li className={styles.link}>
            <a href='#'>Class Demo</a>

            <ul>
              <li className={styles.link}>
                <a href='/classdemo/attack'>attack</a>
              </li>
              <li className={styles.link}>
                <a href='/classdemo/modal'>modal-start</a>
              </li>
              <li className={styles.link}>
                <a href='/classdemo/Card1'>RecipeCard</a>

                {/* <ul>
                  <li className={styles.link}>
                    <a href='#'></a>
                  </li>
                  <li className={styles.link}>
                    <a href='#'></a>
                  </li>
                  <li className={styles.link}>
                    <a href='#'></a>

                  </li>
                </ul> */}
              </li>
            </ul>
          </li>
          <li className={styles.link}>
            <a href='/project/meals'>
              MealDB
            </a>
          </li>
          {/* <li className={styles.link}>
            <a href=''>連結</a>
          </li> */}
          <li className={styles.link}>
            <a href='/Profile/Card'>個人資料</a>
          </li>
          <li className={styles.link}>
            <a href='/about/me'>關於我</a>
          </li>
          <li className={styles.icon1}>
            <a href='https://www.instagram.com/1013_0_0/'><i class="fab fa-instagram"></i></a>
          </li>
          <li className={styles.icon2}>
            <a href='https://www.facebook.com/profile.php?id=100003388584955'><i class="fab fa-facebook"></i></a>
          </li>
          
          
          {/* <li className={styles.link}>
            <a href='#'>作品集</a>
            </li> */}
          
          
        </ul>
      </nav>


    </div>
  );
}
