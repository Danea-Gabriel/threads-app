import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Feed from "./components/Feed";
import PopUp from "./components/PopUp";

const App = () => {
  return (
    <div className="relative h-[750px] w-[380px] rounded-3xl p-5 bg-gray-600">
      <Navbar />
      <Header />
      <Feed />
      <PopUp />
    </div>
  );
};

export default App;
