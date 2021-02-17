import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/home">
              <Home />  
            </Route>
            <Route path="/Create">
              <Create/>
            </Route>
            <Route path="/Blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
          

        </div>
      </div>
    </Router>
  );
}

export default App;