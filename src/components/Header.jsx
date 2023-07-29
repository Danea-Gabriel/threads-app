const Header = ({ user, viewThreads, setViewThreads }) => {
  return (
    <header>
      <div className="info-container">
        <div className="user-info">
          <h1>{user.username}</h1>
          <p>
            {user.handle} <span className="threads-info">threads.net</span>
          </p>
        </div>
        <div className="avatar-container">
          <img src={user.img} alt="avatar picture" />
        </div>
      </div>
      <p>{user.bio}</p>
      <div className="more-info-container">
        <p className="sub-text">{user.followers.length} Followers</p>
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
        <button
          className={viewThreads ? "selected" : ""}
          onClick={() => setViewThreads(true)}
        >
          Threads
        </button>
        <button
          className={!viewThreads ? "selected" : ""}
          onClick={() => setViewThreads(false)}
        >
          Replies
        </button>
      </div>
    </header>
  );
};

export default Header;
