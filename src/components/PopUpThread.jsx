import { useEffect, useState } from "react";
import moment from "moment";

const PopUpThread = ({ popUpFeedThread }) => {
  const time = moment().startOf("day").fromNow(popUpFeedThread.time_stamp);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users/?user_uuid=${popUpFeedThread.thread_from}`
      );
      const data = await response.json();
      setUser(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <article className="feed-card">
      <div className="text-container">
        <div>
          <div className="avatar-container">
            <img src={user?.img} alt="avatar profile" />
          </div>
          <div>
            <p>
              <strong>{user?.handle}</strong>{" "}
            </p>
            <p>{popUpFeedThread.content}</p>
          </div>
        </div>
        <p className="sub-text">{time}</p>
      </div>
    </article>
  );
};

export default PopUpThread;
