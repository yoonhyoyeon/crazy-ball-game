import { useState, useMemo, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { MAX_X, MAX_Y, PLAYER_SPEED, BALL_SPEED, getMoveInfo, PLAYER_SIZE, randomNum, randomColor, BALL_SIZE } from 'utils';
import { useInterval } from 'hooks';
import MainPage from 'pages/MainPage';
import RecordPage from 'pages/RecordPage';
import ResultPage from 'pages/ResultPage';
import NotFoundPage from 'pages/NotFoundPage';
import Timer from 'components/Timer';
import Player from 'components/Player';
import Ball from 'components/Ball';

import * as S from './style';

const CrazyBall = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [clickPos, setClickPos] = useState({x: null, y: null});
    const [playerInfo, setPlayerInfo] = useState({x: MAX_X/2, y: MAX_Y/2, moving: false, m_x: 0, m_y: 0, speed: PLAYER_SPEED, die: false, bgColor: 'red'});
    const [ballCnt, setBallCnt] = useState(1);
    const [time, setTime] = useState(0);
    const [pause, setPause] = useState(false);
    const navigate = useNavigate();
    
    const handleKeyDown = (e) => {
        if(e.code==='Escape') pauseGame();
        else if(e.code==='KeyS') ;
    }
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [])

    useInterval(() => {
        if((clickPos.x>=playerInfo.x-1 && clickPos.x<=playerInfo.x+PLAYER_SIZE+1 && clickPos.y>=playerInfo.y-1 && clickPos.y<=playerInfo.y+PLAYER_SIZE+1) || checkPlayerOut) {
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
    }, playerInfo.moving&&isPlaying&&!pause ? 8 : null); //플레이어 위치 변경 interval

    const addBall = () => {
        setBallCnt((prev) => prev+1);  
    }; // 공 추가
    useInterval(() => {
        setTime((prev) => prev + 1);
        if(time%3===0) addBall();
    }, isPlaying&&!pause ? 1000 : null); // 타이머 & 3초간격 공 생성 interval

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
    }; //클릭한 좌표에 따라 m_x, m_y 변경
    const checkPlayerOut = useMemo(() => {
        return (playerInfo.x<0 || playerInfo.x>MAX_X-PLAYER_SIZE || playerInfo.y<0 || playerInfo.y>MAX_Y-PLAYER_SIZE);
    }, [playerInfo]); //플레이어 맵 이탈 여부 확인

    const gameOver = () => {
        navigate('/result');
        setIsPlaying(false);
        setPlayerInfo((prev) => ({
            ...prev,
            die: true
        }));
        console.log('게임 끝');
    } // 게임 종료

    const gameReset = () => {
        setPlayerInfo((prev) => ({
            ...prev,
            x: MAX_X/2, y: MAX_Y/2, moving: false, m_x: 0, m_y: 0, die: false
        }));
        setBallCnt(0);
        setTime(0);
        setIsPlaying(true);
    }

    const pauseGame = () => {
        setPause((prev) => !prev);
    }

    return (
        <S.GameLayout onClick={(e) => isPlaying&&!pause ? onClickGround(e) : null}>
            <Timer time={time} />
            <Player info={playerInfo} setInfo={setPlayerInfo}/>
            {
                Array(ballCnt).fill().map((v, i) => <Ball isPlaying={isPlaying} pause={pause} playerX={playerInfo.x} playerY={playerInfo.y} gameOver={gameOver} key={i}/>)
            }
            {
                isPlaying ? null :
                <S.RouteBackground>
                    <S.RouteWrap>
                        <Routes>
                            <Route path="/" element={<MainPage gameReset={gameReset}/>}></Route>
                            <Route path="/record" element={<RecordPage />}></Route>
                            <Route path="/result" element={<ResultPage time={time}/>}></Route>
                            <Route path="*" element={<NotFoundPage />}></Route>
                        </Routes>
                    </S.RouteWrap>
                </S.RouteBackground>
            }
            
        </S.GameLayout>
    );
};

export default CrazyBall;