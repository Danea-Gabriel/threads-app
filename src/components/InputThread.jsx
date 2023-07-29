const InputThread = ({ user, text, setText, postThread }) => {
  return (
    <div>
      <p>{user.handle}</p>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button className="primary" onClick={postThread}>
        Post
      </button>
    </div>
  );
};

export default InputThread;
