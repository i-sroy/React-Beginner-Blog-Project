import Navbar from './navbar';
import Home from './Home';
import Create from './ create';
import BlogDetails from './BlogDetails';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from './NotFound';

function App() {
    // let heading = "MY blog";
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/create" element={<Create/>}></Route>
            <Route exact path="/blogs/:id" element={<BlogDetails/>}> </Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>          
        </div>
      </div>
    </Router> 
    
    
  );
}

export default App;
