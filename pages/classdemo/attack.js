import React from 'react';
import Layout from '../../components/Layout';
import styles from './attack.module.css'


export default function attack() {
  return (
      <Layout>
    <div className={styles.container}>
      <section className={styles.health_levels}>
        <h2>MONSTER HEALTH</h2>
        <progress className={styles.monster_health} max='100' value='100'>
          100%
        </progress>
        <h2>
          PLAYER HEALTH<span className={styles.bonus_life}>1</span>
        </h2>
        <progress className={styles.player_health} max='100' value='100'>
          100%
        </progress>
      </section>
      <section className={styles.controls}>
        <button className={styles.attack_btn}>ATTACK</button>
        <button className={styles.strong_attack_btn}>STRONG ATTACK</button>
        <button className={styles.heal_btn}>HEAL</button>
        <button className={styles.log_btn}>SHOW LOG</button>
      </section>
    </div>
    
    </Layout>
  );
}
