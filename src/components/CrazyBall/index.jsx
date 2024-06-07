import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import RecordPage from '../../pages/RecordPage';
import ResultPage from '../../pages/ResultPage';
import PlayingPage from '../../pages/PlayingPage';
import NotFoundPage from '../../pages/NotFoundPage';

const CrazyBall = () => {
    return (
        <>
            <h1>Game</h1>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/record" element={<RecordPage />}></Route>
                <Route path="/result" element={<ResultPage />}></Route>
                <Route path="/playing" element={<PlayingPage />}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
        </>
    );
};

export default CrazyBall;