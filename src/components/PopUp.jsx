import PopUpThread from "./PopUpThread";
import InputThread from "./InputThread";
const PopUp = ({
  user,
  setOpenPopUp,
  popUpFeedThreads,
  text,
  setText,
  postThread,
}) => {
  console.log(popUpFeedThreads);

  return (
    <div className="popup-container">
      <p className="close-pop-up-button" onClick={() => setOpenPopUp(false)}>
        X
      </p>
      {popUpFeedThreads?.map(popUpFeedThread => (
        <PopUpThread
          key={popUpFeedThread.id}
          popUpFeedThread={popUpFeedThread}
        />
      ))}
      <InputThread
        text={text}
        setText={setText}
        user={user}
        postThread={postThread}
      />
    </div>
  );
};

export default PopUp;
