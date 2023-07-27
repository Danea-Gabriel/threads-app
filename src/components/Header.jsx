const Header = () => {
  return (
    <header>
      <div className="info-container">
        <div className="user-info">
          <h1>username</h1>
          <p>
            handle <span className="threads-info">threads.net</span>
          </p>
        </div>
        <div className="avatar-container">
          <img src="" alt="avatar picture" />
        </div>
      </div>
      <p>bio</p>
      <div className="more-info-container">
        <p className="sub-text">
          x Followers <a href="">link</a>
        </p>
      </div>
      <button
        className="primary"
        onClick={() => {
          navigator.clipboard.writeText("Something");
        }}
      >
        Share Profile
      </button>
      <div className="btn-container">
        <button> Threads</button>
        <button> Replies</button>
      </div>
    </header>
  );
};

export default Header;
