import { useState, useMemo, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MAX_X, MAX_Y, PLAYER_SPEED, BALL_SPEED, getMoveInfo, PLAYER_SIZE, randomNum, randomColor, BALL_SIZE } from 'utils';
import { useTimer, useInterval } from 'hooks';
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
    const [isPlaying, setIsPlaying] = useState(true);
    const [clickPos, setClickPos] = useState({x: null, y: null});
    const [playerInfo, setPlayerInfo] = useState({x: MAX_X/2, y: MAX_Y/2, moving: false, m_x: 0, m_y: 0, speed: PLAYER_SPEED});
    const [ballList, setBallList] = useState([]);
    const {time, setWork} = useTimer(0);

    useInterval(() => {
        if((clickPos.x>=playerInfo.x-1.5 && clickPos.x<=playerInfo.x+PLAYER_SIZE+1.5 && clickPos.y>=playerInfo.y-1.5 && clickPos.y<=playerInfo.y+PLAYER_SIZE+1.5) || checkPlayerOut) {
            setPlayerInfo((prev) => ({
                ...prev,
                moving: false,
                x: prev.x - prev.m_x,
                y: prev.y - prev.m_y
            }));
        }
        else {
            setPlayerInfo((prev) => ({
                ...prev,
                x: prev.x + prev.m_x,
                y: prev.y + prev.m_y
            }));
        }
    }, playerInfo.moving ? 5 : null);

    const checkPlayerOut = useMemo(() => {
        return (playerInfo.x<0 || playerInfo.x>MAX_X-PLAYER_SIZE || playerInfo.y<0 || playerInfo.y>MAX_Y-PLAYER_SIZE);
    }, [playerInfo]);

    const onClickGround = (e) => {
        setClickPos({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
        });
        const { m_x, m_y } = getMoveInfo(playerInfo.x, playerInfo.y, e.nativeEvent.offsetX, e.nativeEvent.offsetY, playerInfo.speed);
        setPlayerInfo((prev) => ({
            ...prev,
            moving: true,
            m_x: m_x,
            m_y: m_y
        }));
    };
    const addBall = () => {
        const newBall = {
            x: randomNum(0, MAX_X-BALL_SIZE),
            y: randomNum(0, MAX_Y-BALL_SIZE),
            m_x: 0,
            m_y: 0,
            bgColor: randomColor(),
            speed: 1.5
        }
        const targetPos = {
            x: randomNum(0, MAX_X-BALL_SIZE),
            y: randomNum(0, MAX_Y-BALL_SIZE)
        }
        const { m_x, m_y } = getMoveInfo(newBall.x, newBall.y, targetPos.x, targetPos.y, newBall.speed);
        newBall.m_x = m_x;
        newBall.m_y = m_y;

        setBallList((prev) => [...prev, newBall]);
    };
    const moveBall = (idx) => {
        const BallNewList = [...ballList];
        const BallNewInfo = BallNewList[idx];
        console.log(idx);
        BallNewInfo.x = BallNewInfo.x + BallNewInfo.m_x;
        BallNewInfo.y = BallNewInfo.y + BallNewInfo.m_y;
        if(BallNewInfo.x<0 || BallNewInfo.x>MAX_X-BALL_SIZE) {
            BallNewInfo.x = BallNewInfo.x - BallNewInfo.m_x;
            BallNewInfo.y = BallNewInfo.y - BallNewInfo.m_y;
            BallNewInfo.m_x *= -1;
        }
        else if(BallNewInfo.y<0 || BallNewInfo.y>MAX_Y-BALL_SIZE) {
            BallNewInfo.x = BallNewInfo.x - BallNewInfo.m_x;
            BallNewInfo.y = BallNewInfo.y - BallNewInfo.m_y;
            BallNewInfo.m_y *= -1;
        }
        setBallList(BallNewList);
    }

    return (
        <S.GameLayout onClick={(e) => isPlaying ? onClickGround(e) : null}>
            <button onClick={addBall}>생성</button>
            <Timer time={time} />
            <Player info={playerInfo} setInfo={setPlayerInfo}/>
            {
                ballList.map((info, idx) => <Ball info={info} idx={idx} moveBall={moveBall} isPlaying={isPlaying} key={`${idx}`} />)
            }
            {/* <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/record" element={<RecordPage />}></Route>
                <Route path="/result" element={<ResultPage />}></Route>
                <Route path="/playing" element={<PlayingPage />}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes> */}
        </S.GameLayout>
    );
};

export default CrazyBall;