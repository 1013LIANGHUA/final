import Link from 'next/link';
import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}> CLH Final project 2021 June</p>
      <h3 className={styles.contact}>聯絡資訊 
      </h3>
      <p className={styles.mail}>GMAIL:ap96302@gmail.com</p>  
       {/* <p>
        <Link href=''>About This Project</Link>
      </p>  */}
    </footer>
  );
}
