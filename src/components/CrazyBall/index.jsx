import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {} from 'utils';
import { useTimer } from 'hooks';
import MainPage from 'pages/MainPage';
import RecordPage from 'pages/RecordPage';
import ResultPage from 'pages/ResultPage';
import PlayingPage from 'pages/PlayingPage';
import NotFoundPage from 'pages/NotFoundPage';
import Timer from 'components/Timer';
import Player from 'components/Player';
import Ball from 'components/Ball';

import * as S from './style';

const CrazyBall = () => {
    const [playerPos, setPlayerPos] = useState({x: null, y: null});
    const [ballList, setBallList] = useState([]);
    const [ballInfo, setBallInfo] = useState({x: null, y: null, m_x: null, m_y: null });
    const { time, setWork } = useTimer(0);

    return (
        <S.GameLayout>
            <Timer time={time} />
            <S.GameGround>
                <Player />
                {/* <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/record" element={<RecordPage />}></Route>
                    <Route path="/result" element={<ResultPage />}></Route>
                    <Route path="/playing" element={<PlayingPage />}></Route>
                    <Route path="*" element={<NotFoundPage />}></Route>
                </Routes> */}
            </S.GameGround>
        </S.GameLayout>
    );
};

export default CrazyBall;