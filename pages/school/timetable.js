import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/timetable.module.css'
export default function resume() {
    return (
      <Layout>
        <body>
          {/* <table border="1"  style={{width: "80%"}} align={{center}}>  */}
          <tr align="center">
            <th className={styles.name} rowspan="2">陳亮華</th>
            <th className={styles.title} colspan="7">109年度第一學期課表</th>
          </tr>
    
          <tr align="center">
            <th className={styles.week}>MON</th>
            <th className={styles.week}>TUE</th>
            <th className={styles.week}>WED</th>
            <th className={styles.week}>THE</th>
            <th className={styles.week}>FRI</th>
            <th className={styles.week}>SAT</th>
            <th className={styles.week}>SUN</th>
          </tr>
          <tr align="center">
            <td className={styles.number}>01 8:10~9:00</td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}>計算機概論(實習)</td>
            <td className={styles.lessson}></td>
          </tr>
    
          <tr align="center">
            <td className={styles.number}>02 9:10~10:00</td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson} rowspan="3">計算機概論</td>
            <td className={styles.lessson}></td>
          </tr>
    
          <tr align="center">
            <td className={styles.number}>03 10:10~11:00</td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
          </tr>
    
          <tr align="center">
            <td className={styles.number}>04 11:10~12:00</td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
          </tr>
    
          <tr align="center">
            <td className={styles.number}>05 12:10~13:00</td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
          </tr>
          <tr align="center">
            <td className={styles.number}>06 13:10~14:00</td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson} rowspan="2">英文</td>
            <td className={styles.lessson}></td>
          </tr>
    
          <tr align="center">
            <td className={styles.number}>07 14:10~15:00</td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
          </tr>
    
          <tr align="center">
            <td className={styles.number}>08 15:10~16:00</td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson} rowspan="2">英文(實習)</td>
            <td className={styles.lessson}></td>
          </tr>
    
          <tr align="center">
            <td className={styles.number}>09 16:10~17:10</td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
          </tr>
    
          <tr align="center">
            <td className={styles.number}>10 17:10~18:00</td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
            <td className={styles.lessson}></td>
          </tr>
    
          <tr align="center">
            <td className={styles.number}>11 18:10~19:00</td>
            <td className={styles.lessson} rowspan="3">靜態網頁<br />設計</td>
            <td className={styles.lessson}>大學學習</td>
            <td className={styles.lessson}   rowspan="3">計算機程式語言</td>
            <td className={styles.lessson}>計算機概論(實習)</td>
            <td className={styles.lessson} rowspan="2">體育</td>
            <td className={styles.lessson} rowspan="2">中國語文能力表達</td>
            <td className={styles.lessson}></td>
          </tr>
    
          <tr align="center">
            <td className={styles.number}>12 19:10~20:00</td>
            <td className={styles.lessson} rowspan="3">網路安全</td>
            <td className={styles.lessson} rowspan="3">開源軟體實務</td>
            <td className={styles.lessson}></td>
          </tr>
    
          <tr align="center">
            <td className={styles.number}>13 20:10~21:00</td>
            <td className={styles.lessson}>校園與社區<br />服務學習</td>
            <td className={styles.lessson}  rowspan="2">全民國防</td>
    
            <td className={styles.lessson}></td>
          </tr>
    
          <tr align="center">
            <td className={styles.number}>14 21:10~22:00</td>
            <td className={styles.lessson}>靜態網頁<br />(實習)</td>
            <td className={styles.lessson}>計算機程式語言(實習)</td>
            <td className={styles.lessson}>開源軟體實務(實習)</td>
            <td className={styles.lessson}></td>
          </tr>
          <tr align="center">
            <th className={styles.collect} rowspan="2" colspan="2">聯絡資訊</th>
            <td class={styles.gmail} colspan="8">Gmail:209410306@gms.tku.edu.tw</td>
          </tr>
          <tr align="center">
            <td className={styles.http} colspan="8">webpage:http://s05.tku.edu.tw/209410306</td>
          </tr>
         {/* </table>  */}
       </body>
       </Layout>
    )
}
