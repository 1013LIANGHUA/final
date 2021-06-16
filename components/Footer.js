import Link from 'next/link';
import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>js Final project 2021</p>
      {/* <p>
        <Link href='/about'>About This Project</Link>
      </p> */}
    </footer>
  );
}
