import React from 'react';
import styles from './Card.module.css';
export default function Card() {
  return (
    <div className={styles.container}>
      <h2 > Profile Card</h2>

      <div className={styles.card}>
        <img
          src='https://res.cloudinary.com/dkla3sb3q/image/upload/v1623584068/medium_S_37609491_0bdbf75786.jpg'
          alt=''
        />
        <h1>Liang Hua CHEN</h1>
        <p className={styles.title}>Student Information Engineering</p>
        <p> Tamkang University</p>
        <div className={styles.icon}>
          <a href='https://www.instagram.com/1013_0_0/'>
            <i class='fa fa-instagram'></i>
          </a>
          <a href='https://www.facebook.com/profile.php?id=100003388584955'>
            <i class='fa fa-facebook'></i>
          </a>
        </div>
        <p>
          <button className={styles.button}>
            Contact{' '}
            <a href='https://www.facebook.com/profile.php?id=100003388584955'></a>
          </button>
        </p>
      </div>
    </div>
  )
}
