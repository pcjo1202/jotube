import React, { useRef } from 'react';

const Topbar = props => {
  const formRef = useRef();
  const inputRef = useRef();

  function handleValue(event) {
    event.preventDefault();
    const value = inputRef.current.value;
    formRef.current.reset();
  }

  return (
    <div className="topbar-wrapper">
      <div className="logo-wrapper">
        <div className="logo">
          <a href="../public/index.html" className="logo-icon">
            <i className="fab fa-youtube" />
          </a>
          <span className="title">Jotube</span>
        </div>
      </div>
      <form
        className="searchBox"
        ref={formRef}
        onSubmit={event => handleValue(event)}
      >
        <input ref={inputRef} type="text" placeholder="Search..." />
        <button className="search-icon">
          <i class="fas fa-search" />
        </button>
      </form>
      <button className="loginBox">로그인</button>
    </div>
  );
};

export default Topbar;
