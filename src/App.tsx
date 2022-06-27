import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Page1 from './pages/Page1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='page-1' element={<Page1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
