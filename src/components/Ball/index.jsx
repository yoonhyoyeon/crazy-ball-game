import * as S from './style';
import { BALL_SIZE } from 'utils';
import { useInterval } from 'hooks';
import { memo } from 'react';

const Ball = memo(({info, idx, moveBall, isPlaying}) => {
    useInterval(() => {
        moveBall(idx);
    }, isPlaying ? 5 : null);
    return (
        <S.BallCircle style={{top: info.y+'px', left: info.x+'px'}} bgColor={info.bgColor} size={BALL_SIZE}/>
    );
});

Ball.displayName = 'Ball';

export default Ball;