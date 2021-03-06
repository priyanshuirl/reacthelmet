import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Helmet } from "react-helmet-async"
function App() {
  return (
    <Router>
      <Helmet>
        <meta property="og:title" content="APP OG title" />
        <meta property="og:description" content="APP OG description" />
      </Helmet>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">page1</Link>
            </li>
            <li>
              <Link to="/page2">page2</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/page1">
            <About />
          </Route>
          <Route path="/page2">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2>Home</h2></>
  )
}

function About() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Page1 OG title" />
        <meta property="og:description" content="Page1 OG description" />
      </Helmet>
      <h2>Page 1</h2>
    </>)
}

function Users() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Page2 OG title" />
        <meta property="og:description" content="Page2 OG description" />
      </Helmet>
      <h2>Page 2</h2>
    </>)
}

export default App;
