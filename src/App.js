import './App.css';
import Home from './components/home';
import Single from "./components/single"
import Page from './components/page';
import Search from './components/search';
import None from './components/404';
import Download from './components/download'
import { Route,Routes,BrowserRouter } from 'react-router-dom';

const App=()=> {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Single />} />
      <Route path="/page/:id" element={<Page />} />
      <Route path="/download/:id" element={<Download />} />
      <Route path="/page/1" element={<Home />} />
      <Route path="/search/:searchID&:page" element={<Search />} />
      <Route path="/search/:searchID&0" element={<None />} />
      <Route path="*" element={<None />} />
      </Routes>
      </BrowserRouter>
    );
}

export default App;
