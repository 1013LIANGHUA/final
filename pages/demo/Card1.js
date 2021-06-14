import styles from './Card.module.css'

export default function Card() {
    return (
        <div className={styles.wrapper}>
        <div className={styles.image-wrapper}>
           <img src="//cdn0.iconfinder.com/data/icons/user-pictures/100/male-256.png" alt="Alex Tkachov" />
           <h1 className={styles.name}>Alex Tkachov</h1>
           <p className={styles.description}>Web Developer | Designer | Dreamer</p>
           
           <ul className={styles.social-media}>
              <a href="https://www.instagram.com/simply_aalex"><i class="fa fa-instagram" target="_blank"></i></a>
              <a href="https://www.behance.net/alextkachov"><i class="fa fa-behance" target="_blank"></i></a>
              <a href="https://codepen.io/alexpopovich" target="_blank"><i class="fa fa-codepen"></i></a>
           </ul>
           <a href="https://twitter.com/simply_aalex" target="_blank" class="follow"><i class="fa fa-twitter"></i>Follow</a>
        </div>
     </div>
    )
}
