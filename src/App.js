import Header from "./components/Header";
import './styles/common.scss'
import Profile from "./components/Profile";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="page">
      <Header/>

      <div className="container">
        <div className="page__content">
          <Profile/>
          <Posts/>
        </div>
      </div>
    </div>
  );
}

export default App;
