import styles from './Nav2.module.css';


export default function Nav2() {
    return (
    
<div className={styles.container}>

    <nav className={styles.nav}>
        <ul>
            <li className={styles.link}><a href="#">Home</a></li>
            <li className={styles.link}><a href="#">作品集</a>
          
            <ul>
                <li className={styles.link}><a href="#">Themes</a></li>
                <li className={styles.link}><a href="#">Plugins</a></li>
                <li className={styles.link}><a href="#">Tutorials</a></li>
            </ul>        
            </li>
            <li className={styles.link}><a href="#">履歷</a>
         
            <ul>
                <li className={styles.link}><a href="#">Resources</a></li>
                <li className={styles.link}><a href="#">Links</a></li>
                <li className={styles.link}><a href="#">Tutorials</a>
            
                <ul>
                    <li className={styles.link}><a href="#">HTML/CSS</a></li>
                    <li className={styles.link}><a href="#">jQuery</a></li>
                    <li className={styles.link}><a href="#">Other</a>
                      
                        <ul>
                            <li className={styles.link}><a href="#">Stuff</a></li>
                            <li className={styles.link}><a href="#">Things</a></li>
                            <li className={styles.link}><a href="#">Other Stuff</a></li>
                        </ul>
                    </li>
                </ul>
                </li>
            </ul>
            </li>
            <li className={styles.link}><a href="https://1092-nextjs-djevents-209410306.vercel.app/project/meals">MealDB</a></li>
            <li className={styles.link}><a href="">連結</a></li>
            <li className={styles.link}><a href="#">個人資料</a></li>
            <li className={styles.link}><a href="#">關於我</a></li>
        </ul>
     
              
           
         
    </nav>
    <div className={styles.container}>

{/* <img className={styles.img} src="https://www.ali-nsa.net/zh-tw/content/images/static/unit-sunrise-md.jpg" alt=""/> */}

    {/* <h1 className={styles.h1}>歡迎光臨</h1>
<p className={styles.p}>大家好啊!!!</p> */}
    </div>
  
</div>
    )
}
