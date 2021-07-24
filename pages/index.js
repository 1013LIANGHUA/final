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
      <Head>
        <base target="_self"></base>
      </Head>
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
        {/* <div className={styles.cool}>
           email : <input type="email" name="useremail"></input>
          <input type="submit"></input>
          手機號碼: <input type="tel" name="usertel">                 
          </input>
        </div>
        <form>
          <label>選擇國家: </label>
          <select name="country">
            <optgroup label="國家名稱">
              <option value="country1">日本</option>
              <option value="country2">香港</option>
              <option value="country3">印度</option>
            </optgroup>
          </select>
        </form> */}
      </div>      
      
    </Layout>
  );
}
