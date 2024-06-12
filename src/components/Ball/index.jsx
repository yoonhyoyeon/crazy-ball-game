import * as S from './style';
import { MAX_X, MAX_Y, BALL_SIZE, randomNum, randomColor, getMoveInfo, BALL_SPEED } from 'utils';
import { useInterval } from 'hooks';
import { memo, useEffect, useState } from 'react';

const Ball = memo(({isPlaying}) => {
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

    return (
        <S.BallCircle style={{top: info.y+'px', left: info.x+'px'}} bgColor={info.bgColor} size={BALL_SIZE}/>
    );
});

Ball.displayName = 'Ball';

export default Ball;