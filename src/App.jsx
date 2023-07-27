import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Feed from "./components/Feed";
import PopUp from "./components/PopUp";
const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <Feed />
      {/* <PopUp /> */}
    </div>
  );
};

export default App;
