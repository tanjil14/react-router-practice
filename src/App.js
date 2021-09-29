import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Culture from "./components/Culture/Culture";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import PostDetail from "./components/PostDetail/PostDetail";
import Posts from "./components/Posts/Posts";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/friends">
            <Friends />
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route path="/post/:postId">
            <PostDetail />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/about/culture">
            <Culture />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
