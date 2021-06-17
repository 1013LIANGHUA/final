import Layout from '../../components/Layout';
import styles from '../../styles/Card1.module.scss';

export default function Card() {
  return (
    <Layout>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.card__body}>
            <img
              src='https://res.cloudinary.com/dkla3sb3q/image/upload/v1623939173/_fabee5e7c3.jpg'
              alt=''
              className={styles.card__image}
            />
            <h2 className={styles.card__title}>哈士奇</h2>
            <p className={styles.card__description}>
              哈士奇是北方地區雪橇型狗的總稱，他們的快速拉動的風格與其他雪橇犬不同。
              他們是由速度最快的狗不斷交配的品種。
            </p>
          </div>
          <button className={styles.card__btn}>View Recipe</button>
        </div>

        <div className={styles.card}>
          <div className={styles.card__body}>
            <img
              src='https://res.cloudinary.com/dkla3sb3q/image/upload/v1623939173/_55b66b60a5.jpg'
              alt=''
              className={styles.card__image}
            />
            <h2 className={styles.card__title}>大白熊犬</h2>
            <p className={styles.card__description}>
              庇里牛斯山犬，一般稱作大白熊犬，或簡稱大白熊，是一種大型犬類。主要用作守護犬、救助犬和伴侶犬。
              大白熊犬是一種歷史悠久的犬類，已被牧羊人使用了數百年。大白熊犬最早在1407年被詳細的描述，並於1675年被法國貴族所喜愛。
            </p>
          </div>
          <button className={styles.card__btn}>View Recipe</button>
        </div>

        <div className={styles.card}>
          <div className={styles.card__body}>
            <img
              src='https://res.cloudinary.com/dkla3sb3q/image/upload/v1623939914/_8d05bb46d7.jpg'
              alt=''
              className={styles.card__image}
            />
            <h2 className={styles.card__title}>柴犬</h2>
            <p className={styles.card__description}>
              柴犬，日本犬種之一。屬於中小型犬種。柴犬於1936年12月16日被指定為日本的天然紀念物，亦是現存六種日本犬中其中一種小型犬。根據日本犬保存會，日本境內飼養的日本本土犬種裡，約有八成為柴犬。
            </p>
          </div>
          <button className={styles.card__btn}>View Recipe</button>
        </div>
        <div className={styles.card}>
          <div className={styles.card__body}>
            <img
              src='https://res.cloudinary.com/dkla3sb3q/image/upload/v1623940133/2_1fe9770cb1.jpg'
              alt=''
              className={styles.card__image}
            />
            <h2 className={styles.card__title}>薩摩耶犬</h2>
            <p className={styles.card__description}>
              薩摩耶犬是狐狸狗、雪橇犬家族的一員，原是俄國西伯利亞原住民薩摩耶族培育出的犬種。因看起來永遠在笑的樣子又喜歡親近人，而被稱為「笑臉天使」。
              除了溫和的個性也以忍耐力跟健壯著稱，原是用來拉雪橇跟看守馴鹿，也曾被西方探險家用來從事極地探險的任務。
            </p>
          </div>
          <button className={styles.card__btn}>View Recipe</button>
        </div>
      </div>
    </Layout>
  );
}
