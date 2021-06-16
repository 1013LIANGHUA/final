import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './index.module.css'
export default function HomePage() {
  return (
    <Layout description='Welcome to me'>
      <div className={styles.img}>
        <img src="https://res.cloudinary.com/dkla3sb3q/image/upload/v1623584064/large_S_37609491_0bdbf75786.jpg" alt="profile_card"/>
      </div>
  
    
     
</Layout>

  );
}

