import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import Sidebar from '@/components/core/Sidebar';

import styles from './MobileMenu.module.css';

const MobileMenu = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  return (
    <>
      <div className={`${styles.headerMobile} ${styles.headerItem}`}>
        <button
          className={styles.menuButton}
          type="button"
          onClick={() => setIsOpenSideBar(!isOpenSideBar)}
        >
          <FiMenu />
        </button>
        <Sidebar isOpen={isOpenSideBar} onClose={() => setIsOpenSideBar(false)} />
      </div>
    </>
  );
};

export default MobileMenu;
