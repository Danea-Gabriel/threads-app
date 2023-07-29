import Thread from "./Thread";
const Feed = ({
  user,
  filtredThreads,
  setOpenPopUp,
  getThreads,
  setInteractedThread,
}) => {
  return (
    <div className="feed-container">
      {filtredThreads?.map(filtredThread => (
        <Thread
          key={filtredThread.id}
          filtredThread={filtredThread}
          user={user}
          setOpenPopUp={setOpenPopUp}
          getThreads={getThreads}
          setInteractedThread={setInteractedThread}
        />
      ))}
    </div>
  );
};

export default Feed;
