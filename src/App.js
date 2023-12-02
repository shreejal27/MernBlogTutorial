// import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import ArticlesList from './pages/ArticlesList'
import Article from './pages/Article'

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/articleslist' element={<ArticlesList />} />
          <Route path='/article' element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
