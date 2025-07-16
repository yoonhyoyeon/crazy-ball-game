import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { MAX_X, MAX_Y, PLAYER_SPEED, getMoveInfo, PLAYER_SIZE } from 'utils';
import { useInterval } from 'hooks';
import MainPage from 'pages/MainPage';
import RecordPage from 'pages/RecordPage';
import ResultPage from 'pages/ResultPage';
import ColorPage from 'pages/ColorPage';
import NotFoundPage from 'pages/NotFoundPage';
import Timer from 'components/Timer';
import Player from 'components/Player';
import Ball from 'components/Ball';
import { Pos, PlayerInfo } from 'types/game.types';

import * as S from './style';

const CrazyBall = () => {
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [clickPos, setClickPos] = useState<Pos>({x: 0, y: 0});
    const [playerInfo, setPlayerInfo] = useState<PlayerInfo>({x: MAX_X/2, y: MAX_Y/2, moving: false, m_x: 0, m_y: 0, speed: PLAYER_SPEED, die: false, bgColor: '#ff0000'});
    const [ballCnt, setBallCnt] = useState<number>(1);
    const [time, setTime] = useState<number>(0);
    const [pause, setPause] = useState<Boolean>(false);
    const navigate = useNavigate();
    
    const pauseGame = useCallback(() => {
        setPause((prev) => !prev);
    }, []);

    const handleKeyDown = useCallback((e:KeyboardEvent) => {
        if(e.code==='Escape') pauseGame();
    }, [pauseGame]); // 키 입력 핸들러

    // 이벤트 리스너 등록 useEffect와 분리하여 역할 분리
    // storedColor 변수 사용으로 localStorage 접근 최소화 및 타입 추론 유도
    useEffect(() => {
        const storedColor = localStorage.getItem('playerColor');
        if(storedColor) {
            setPlayerInfo((prev) => ({
                ...prev,
                bgColor: storedColor
            }));
        }
    });
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useInterval(() => {
        if((clickPos.x>=playerInfo.x-1 && clickPos.x<=playerInfo.x+PLAYER_SIZE+1 && clickPos.y>=playerInfo.y-1 && clickPos.y<=playerInfo.y+PLAYER_SIZE+1) || checkPlayerOut()) {
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

    const checkPlayerOut = () => (playerInfo.x<0 || playerInfo.x>MAX_X-PLAYER_SIZE || playerInfo.y<0 || playerInfo.y>MAX_Y-PLAYER_SIZE);
    //플레이어 맵 이탈 여부 확인

    const gameOver = () => {
        navigate('/result');
        setPause(true);
        setIsFinished(true);
        setTimeout(() => {
            setIsPlaying(false);
            setPause(false);
        },1000);
        setPlayerInfo((prev) => ({
            ...prev,
            moveing: false,
            die: true
        }));
        console.log('게임 끝');
    } // 게임 종료

    const gameStart = () => {
        setPlayerInfo((prev) => ({
            ...prev,
            x: MAX_X/2, y: MAX_Y/2, moving: false, m_x: 0, m_y: 0, die: false
        }));
        setBallCnt(0);
        setTime(0);
        setIsFinished(false);
        setIsPlaying(true);
        setPause(false);
    }

    return (
        <S.GameLayout onClick={(e) => isPlaying&&!pause ? onClickGround(e) : null}>
            <Timer time={time} />
            <Player info={playerInfo} setInfo={setPlayerInfo}/>
            {
                Array(ballCnt).fill(undefined).map((v, i) => <Ball isPlaying={isPlaying} pause={pause} playerX={playerInfo.x} playerY={playerInfo.y} gameOver={gameOver} key={i}/>)
            }
            {
                isPlaying ? null :
                <S.RouteBackground>
                    <S.RouteWrap>
                        <Routes>
                            <Route path="/" element={<MainPage gameStart={gameStart}/>}></Route>
                            <Route path="/record" element={<RecordPage />}></Route>
                            <Route path="/result" element={<ResultPage isFinished={isFinished} time={time}/>}></Route>
                            <Route path="/color" element={<ColorPage playerInfo={playerInfo} setPlayerInfo={setPlayerInfo}/>}></Route>
                            <Route path="*" element={<NotFoundPage />}></Route>
                        </Routes>
                    </S.RouteWrap>
                </S.RouteBackground>
            }
            
        </S.GameLayout>
    );
};

export default CrazyBall;