import Header from "./components/Header";
import './styles/common.scss'
import Profile from "./components/Profile";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="page">
      <Header/>

      <div className="page__content">
        <div className="container">
          <Profile/>
          <Posts/>
        </div>
      </div>
    </div>
  );
}

export default App;
