import { useState, useEffect } from "react";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Feed from "./components/Feed";
import PopUp from "./components/PopUp";
import WriteIcon from "./components/WriteIcon";
const App = () => {
  const [user, setUser] = useState(null);
  const userId = "3b927e7f-f0b1-4370-80f7-3e24b6733411";
  const [threads, setThreads] = useState([]);
  const [viewThreads, setViewThreads] = useState(true);
  const [filtredThreads, setFiltredThreads] = useState([]);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [interactedThread, setInteractedThread] = useState();
  const [popUpFeedThreads, setPopUpFeedThreads] = useState([]);
  const [text, setText] = useState("");
  const getUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users/?user_uuid=${userId}`
      );
      const data = await response.json();
      setUser(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const getThreads = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/threads/?thread_from=${userId}`
      );
      const data = await response.json();
      setThreads(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getFiltredThreads = () => {
    if (viewThreads) {
      const noReplyThreads = threads?.filter(
        thread => thread.reply_to === null
      );
      setFiltredThreads(noReplyThreads);
    } else if (!viewThreads) {
      const repliedThreads = threads?.filter(
        thread => thread.reply_to !== null
      );

      setFiltredThreads(repliedThreads);
    }
  };

  const getReplies = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/threads/?reply_to=${interactedThread?.id}`
      );
      const data = await response.json();
      setPopUpFeedThreads(data);
    } catch (err) {
      console.log(err);
    }
  };

  const postThread = async () => {
    const thread = {
      thread_from: user.user_uuid,
      time_stamp: new Date(),
      thread_to: user.user_uuid || null,
      reply_to: interactedThread?.id || null,
      content: text,
      likes: [],
    };

    try {
      const response = await fetch(`http://localhost:3000/threads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(thread),
      });
      const data = await response.json();
      console.log(data);
      getThreads();
      getReplies();
      setText("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    setOpenPopUp(true);
    setInteractedThread(null);
    setOpenPopUp(true);
  };

  useEffect(() => {
    getUser();
    getThreads();
  }, []);

  useEffect(() => {
    getFiltredThreads();
  }, [user, threads, viewThreads]);

  useEffect(() => {
    getReplies();
  }, [interactedThread]);

  return (
    <>
      {user && (
        <>
          <div className="app">
            <Navigation url={user.instagram_url} />
            <Header
              user={user}
              viewThreads={viewThreads}
              setViewThreads={setViewThreads}
            />
            <Feed
              user={user}
              filtredThreads={filtredThreads}
              setOpenPopUp={setOpenPopUp}
              getThreads={getThreads}
              setInteractedThread={setInteractedThread}
            />
            {openPopUp && (
              <PopUp
                user={user}
                setOpenPopUp={setOpenPopUp}
                popUpFeedThreads={popUpFeedThreads}
                text={text}
                setText={setText}
                postThread={postThread}
              />
            )}
            <div onClick={handleClick}>
              <WriteIcon />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
