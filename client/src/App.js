import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";

// import NavTabs from "./NavTabs";
// import Home from "./components/pages/Home";
// import Discover from "./components/pages/Discover";
// import SearchResult from "./components/pages/Search";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        {/* <Route path="/search" component={SearchResult} /> */}
      </div>
    </Router>
  );
}

export default App;