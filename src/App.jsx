import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Display from './pages/Display';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display/:city" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
