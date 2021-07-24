import React from 'react'
import Layout from '../../components/Layout'
import styles from './me.module.css'
export default function me() {
    return (
        <Layout>
           <div className={styles.container}>
           <header className={styles.masthead}>
  <p className={styles.masthead_intro}>Hi I'm</p>
  <h1 className={styles.masthead_heading}>亮華!</h1>
</header>
<section className={styles.introduction_section}>
    <h1 className={styles.h1c}>Introduction</h1>
    <p className={styles.p1r}>我是陳亮華，出生於台北，目前就讀淡江大學資訊工程學系，白天的時候我不想浪費學習的機會，所以努力尋找跟資訊有關係的工作，目前白天在長春集團資訊部門工作，過去也曾經在國泰世華銀行服務過，這些難得寶貴的工作經驗，讓我了解了職場的工作環境，我也從中工作當中學習到了一些企業在資訊領域這塊要做的事情。</p>
    
</section>
<section className={styles.location_section}>
    <h1 className={styles.h1c}>Where I'm From</h1>
    <p className={styles.p1}>我來自台灣,台北. </p>
</section>
<section className={styles.questions_section}>
    {/* <h1 className={styles.h1c}>More About Me</h1>
    <p5>Strength</p5>
    <p6>1.在長春集團有資訊領域的工作經驗</p6>
    <p6>2.有自主學習的能力，常去圖書館借閱資訊相關書籍。</p6> */}
    <h2 className={styles.h2c}>What are your favorite hobbies?</h2>
    <p className={styles.p1}>1.喜歡藉由相片，來記錄當下心情。</p>
    <p className={styles.p1}>2.喜歡研究新上市的蘋果產品，多了什麼樣的創新，就可以知道市場流行的趨勢。</p>
    <h2 className={styles.h2c}>What's your dream job?</h2>
    <p className={styles.p1}>我希望以後能夠當一個厲害的前後端工程師，學習更多資訊的技巧</p>
    <h2 className={styles.h2c}>Where do you live?</h2>
    <p  className={styles.p19}>我相信在未來大學求學路程當中，我能夠與大學夥伴以及教授們建立良好的團隊精神，在未來不管是實驗研究以及論文研究，都能夠有效互相溝通協調，已達到最大工作效率，也能從中訓練與人的社交手挽，讓自己在未來學習職場上，能夠拓展自己的人脈，希望將這些能力，運用在自己的專精上，為自己未來奠定基礎。</p>
    {/* <h2 className={styles.h2c}></h2>
    <p className={styles.p1}></p> */}
</section>

<footer className={styles.content_footer}>
    <p className={styles.p1}>Say hi to me on these social networks:</p>
    <ul class="social">
        <li><a class="css-is-deranged" href="https://github.com/1013LIANGHUA">GitHub</a></li>
        {/* <li><a class="css-is-deranged" href="_INSERT_TWITTER_URL_HERE_">Twitter</a></li>
        <li><a class="css-is-deranged" href="_INSERT_GOOGLE+_URL_HERE_">Google+</a></li> */}
    </ul>
  
</footer> 

</div>
        </Layout>
    )
}
