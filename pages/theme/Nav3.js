import styles from '../../styles/Nav3.module.css';
import React from 'react'

export default function Nav3() {
    return (
        <nav className={styles.nav}>
        <div className={styles.logo}>Your Logo here</div>

        <label for="drop" className={styles.toggle}>Menu</label>
        <input type="checkbox" id="drop" />
            <ul className={styles.menu}>
                <li><a href="#">Home</a></li>
                <li className={styles.li}>
                    {/* <!-- First Tier Drop Down --> */}
                    <label for="drop-1" class={styles.toggle}>WordPress +</label>
                    <a href="#">WordPress</a>
                    <input type="checkbox" id="drop-1"/>
                    <ul className={styles.ul}>
                        <li><a href="#">Themes and stuff</a></li>
                        <li><a href="#">Plugins</a></li>
                        <li><a href="#">Tutorials</a></li>
                    </ul> 

                </li>
                <li className={styles.li}>

                {/* <!-- First Tier Drop Down --> */}
                <label for="drop-2" className={styles.toggle}>Web Design +</label>
                <a href="#">Web Design</a>
                <input type="checkbox" id="drop-2"/>
                <ul className={styles.ul}>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Links</a></li>
                    <li>
                       
                    {/* <!-- Second Tier Drop Down -->         */}
                    <label for="drop-3" className={styles.toggle}>Tutorials +</label>
                    <a href="#">Tutorials</a>         
                    <input type="checkbox" id="drop-3"/>

                    <ul>
                        <li><a href="#">HTML/CSS</a></li>
                        <li><a href="#">jQuery</a></li>
                        <li><a href="#">Other</a></li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li><a href="#">Graphic Design</a></li>
                <li><a href="#">Inspiration</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>


        
    )
}
