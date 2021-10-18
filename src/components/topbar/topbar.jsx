import React, { useRef } from 'react';
import styles from './topbar.module.css';

const Topbar = props => {
  const formRef = useRef();
  const inputRef = useRef();

  function handleValue(event) {
    event.preventDefault();
    const value = inputRef.current.value;
    formRef.current.reset();
    props.onSubmit(value);
  }

  return (
    <header>
      <div className={styles.logoWrapper}>
        <a href="http://localhost:3000/">
          <img className={styles.logoIcon} src="/image/logo.png" alt="" />
          <p className={styles.title}>Jotube</p>
        </a>
      </div>
      <form
        className={styles.searchBox}
        ref={formRef}
        onSubmit={event => handleValue(event)}
      >
        <input ref={inputRef} type="text" placeholder="Search..." />
        <button className={styles.searchIcon}>
          <i className="fas fa-search" />
        </button>
      </form>
      <button className={styles.loginBox}>로그인</button>
    </header>
  );
};

export default Topbar;
