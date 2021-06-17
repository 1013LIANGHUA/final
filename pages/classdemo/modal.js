import React from 'react';
import Layout from '../../components/Layout';
import styles from './modal.module.css';
// import script from './script';

export default function model() {
  return (
      <Layout>
      <div className={styles.container}>
    <button className={styles.show_modal}>Show modal 1</button>
    <button className={styles.show_modal}>Show modal 2</button>
    <button className={styles.show_modal}>Show modal 3</button>
    <div className={styles.modal_hidden}>
    <button className={styles.close_modal}>&times;</button>
      <h1>I'm a modal window 😍</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div className={styles.overlay_hidden}></div>
    </div>
    <script src="script.js"></script>
    </Layout>
  );
}

