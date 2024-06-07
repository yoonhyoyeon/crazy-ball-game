import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameDisplay from './components/GameDisplay';
import MainPage from './pages/MainPage';
import RecordPage from './pages/RecordPage';
import ResultPage from './pages/ResultPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <GameDisplay/>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/record" element={<RecordPage />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
