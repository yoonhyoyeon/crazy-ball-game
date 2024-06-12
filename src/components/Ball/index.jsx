import * as S from './style';
import { MAX_X, MAX_Y, BALL_SIZE, randomNum, randomColor, getMoveInfo, BALL_SPEED, PLAYER_SIZE } from 'utils';
import { useInterval } from 'hooks';
import { memo, useMemo, useState } from 'react';

const Ball = memo(({isPlaying, playerX, playerY, gameOver}) => {
    const [info, setInfo] = useState(() => {
        const newBall = {
            x: randomNum(0, MAX_X-BALL_SIZE),
            y: randomNum(0, MAX_Y-BALL_SIZE),
            m_x: 0,
            m_y: 0,
            bgColor: randomColor(),
            speed: BALL_SPEED
        }
        const targetPos = {
            x: randomNum(0, MAX_X-BALL_SIZE),
            y: randomNum(0, MAX_Y-BALL_SIZE)
        }
        const { m_x, m_y } = getMoveInfo(newBall.x, newBall.y, targetPos.x, targetPos.y, newBall.speed);
        newBall.m_x = m_x;
        newBall.m_y = m_y;

        return newBall;
    });
    useInterval(() => {
        moveBall();
    }, isPlaying ? 8 : null);

    const moveBall = () => {
        if(isBumpedOnPlayer) gameOver();
        const newInfo = {
            ...info,
            x: info.x + info.m_x,
            y: info.y + info.m_y,
        };

        if(newInfo.x<0 || newInfo.x>MAX_X-BALL_SIZE) {
            newInfo.x = newInfo.x - newInfo.m_x;
            newInfo.y = newInfo.y - newInfo.m_y;
            newInfo.m_x *= -1;
        }
        else if(newInfo.y<0 || newInfo.y>MAX_Y-BALL_SIZE) {
            newInfo.x = newInfo.x - newInfo.m_x;
            newInfo.y = newInfo.y - newInfo.m_y;
            newInfo.m_y *= -1;
        }
        setInfo(newInfo);
    }

    const isBumpedOnPlayer = useMemo(() => {
        return playerX+PLAYER_SIZE>info.x && playerX<info.x+BALL_SIZE && playerY+PLAYER_SIZE>info.y && playerY<info.y+BALL_SIZE;
    }, [playerX, playerY, info]);

    return (
        <S.BallCircle style={{top: info.y+'px', left: info.x+'px'}} bgColor={info.bgColor} size={BALL_SIZE}/>
    );
});

Ball.displayName = 'Ball';

export default Ball;