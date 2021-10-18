import React from 'react';
import styles from './side_menu.module.css';

const SideMenu = props => {
  return (
    <aside className={styles.sideMenu}>
      <ul className={styles.favoriteChaanel}>
        <li>
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLQqB0cMaRdKkgOO7UfGWz9s4L_WXk3NFsCIdDaVDA=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <p>채널이름</p>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
