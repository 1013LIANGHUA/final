import React from 'react';
import styles from './resume.module.css';
import Head from 'next/head';

export default function resume() {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.1/css/all.css'
          integrity='sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp'
          crossorigin='anonymous'
        />
      </Head>

      <div className={styles.resume}>
        <div className={styles.resume_left}>
          <div className={styles.resume_profile}>
            <img
              src='https://res.cloudinary.com/dkla3sb3q/image/upload/v1623687955/medium__524b91c737.jpg'
              alt='profile_pic'
            />
          </div>

          <div className={styles.resume_content}>
            <div className={styles.resume_item_resume_info}>
              <div className={styles.title}>
                <p className={styles.bold}>陳亮華</p>
                <p className={styles.regular}>淡江大學資訊工程學系</p>
              </div>
              <ul>
                <li>
                  <div className={styles.icon}>
                    <i class='fas fa-map-signs'></i>
                  </div>
                  <div className={styles.data}>
                    台北市信義區信義路100號 <br /> 台灣
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i class='fas fa-mobile-alt'></i>
                  </div>
                  <div className={styles.data}>0988-888-888</div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i class='fas fa-envelope'></i>
                  </div>
                  <div className={styles.data}>liang hus@gmail.com</div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i class='fab fa-facebook'></i>
                  </div>
                  <div className={styles.data}>www.facebook.com</div>
                </li>
              </ul>
            </div>
            <div className={styles.resume_item_resume_skills}>
              <div className={styles.title}>
                <p className={styles.bold}>skill's</p>
              </div>
              <ul>
                <li>
                  <div className={styles.skill_name}>HTML</div>
                  <div className={styles.skill_progress}>
                    <span style={{ width: '80%' }}></span>
                  </div>
                  <div className={styles.skill_per}>60%</div>
                </li>
                <li>
                  <div className={styles.skill_name}>CSS</div>
                  <div className={styles.skill_progress}>
                    <span style={{ width: '70%' }}></span>
                  </div>
                  <div className={styles.skill_per}>70%</div>
                </li>
                <li>
                  <div className={styles.skill_name}>Linux</div>
                  <div className={styles.skill_progress}>
                    <span style={{ width: '90%' }}></span>
                  </div>
                  <div className={styles.skill_per}>60%</div>
                </li>
                <li>
                  <div className={styles.skill_name}>Next Js</div>
                  <div className={styles.skill_progress}>
                    <span style={{ width: '60%' }}></span>
                  </div>
                  <div className={styles.skill_per}>60%</div>
                </li>
                <li>
                  <div className={styles.skill_name}>figma</div>
                  <div className={styles.skill_progress}>
                    <span style={{ width: '88%' }}></span>
                  </div>
                  <div className={styles.skill_per}>10%</div>
                </li>
              </ul>
            </div>
            <div className={styles.resume_item_resume_social}>
              <div className={styles.title}>
                <p className={styles.bold}>Social</p>
              </div>
              <ul>
                <li>
                  <div className={styles.icon}>
                    <i class='fab fa-facebook-square'></i>
                  </div>
                  <div className={styles.data}>
                    <p className={styles.semi_bold}>Facebook</p>
                    <p>Stephen@facebook</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i class='fab fa-twitter-square'></i>
                  </div>
                  <div className={styles.data}>
                    <p className={styles.semi_bold}>Twitter</p>
                    <p>Stephen@twitter</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i class='fab fa-youtube'></i>
                  </div>
                  <div className={styles.data}>
                    <p className={styles.semi_bold}>Youtube</p>
                    <p>Stephen@youtube</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i class='fab fa-linkedin'></i>
                  </div>
                  <div className={styles.data}>
                    <p className={styles.semi_bold}>Linkedin</p>
                    <p>Stephen@linkedin</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.resume_right}>
          <div className={styles.resume_item_resume_about}>
            <div className={styles.title}>
              <p className={styles.bold}>About us</p>
            </div>
            <p className={styles.p1}>
              我的名字叫陳亮華，個性成熟大方，總能夠帶給大家歡樂，而同時也是一個對自己要求很高的人，所以對很多事情都很細心有時候會耗比較多時間再三檢查確認。目前錄取淡江大學進修部資訊工程學系，我希望能踏入理想的工作環境，從基層的員工角度貢獻自己並協助公司處理各項工作交辦，同時也藉此提高自己對產業的的工作敏感度以及全面性的能力提供以利未來可以為公司協助更多層面的事務處理，我的社會歷練並不是很多，但我擁有豐沛的學習力和熱情的衝勁，以及無論碰到任何困難都不會退縮的韌性。
            </p>
          </div>
          <div className={styles.resume_item_resume_work}>
            <div className={styles.title}>
              <p className={styles.bold}>Work Experience</p>
            </div>
            <ul>
              <li>
                <div className={styles.date}>2021/01~now</div>
                <div className={styles.info}>
                  <p className={styles.semi_bold}>長春集團-資訊中心</p>
                  <p>一、 協助集團同仁電腦及周邊設備簡易故障排除與技術支援</p>
                  <p>二、 新進同仁的電腦軟體安裝、IP的設定</p>
                  <p>三、 比價採購公司資訊設備用品</p>
                  <p> 四、 電腦、印表機、電話的組裝、維修</p>
                  <p>五、 巡視資訊機房設備有無異常，每日記錄設備的電流電壓</p>
                  <p>六、 幫助企業節省成本，製做電腦、網路電話需要的網路線</p>
                </div>
              </li>
              <li>
                <div className={styles.date}>2020/08~2020/11</div>
                <div className={styles.info}>
                  <p className={styles.semi_bold}>國泰世華銀行-作業科</p>
                  <p>一.協助裝訂傳票</p>
                  <p>二.交換票據的登打</p>
                  <p>三.振興卷的兌換</p>
                  <p>四.主管交辦事項</p>
                </div>
              </li>
              {/* <li>
                <div className={styles.date}></div>
                <div className={styles.info}>
                  <p className={styles.semi_bold}>
                    
                  </p>
                  <p>
                 
                  </p>
                </div>
              </li> */}
            </ul>
          </div>
          <div className={styles.resume_item_resume_education}>
            <div className={styles.title}>
              <p className={styles.bold}>Education</p>
            </div>
            <ul>
              <li>
                <div className={styles.date}>2021/09~Now</div>
                <div className={styles.info}>
                  <p className={styles.semi_bold}>
                    資訊工程學系 (TKU University)
                  </p>
                  <p>
                    學習基礎的網頁架構Html、css、js、scss，linux，strapi，herico。
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.date}>2017~2020</div>
                <div className={styles.info}>
                  <p className={styles.semi_bold}>LIZEN Hight School</p>
                  <p>
                    普通科
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.resume_item_resume_hobby}>
            <div className={styles.title}>
              <p className={styles.bold}>Hobby</p>
            </div>
            <ul>
              <li>
                <i class='fas fa-book'></i>
              </li>
              <li>
                <i class='fas fa-gamepad'></i>
              </li>
              <li>
                <i class='fas fa-music'></i>
              </li>
              <li>
                <i class='fab fa-pagelines'></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
