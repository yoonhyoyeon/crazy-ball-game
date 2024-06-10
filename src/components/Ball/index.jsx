import * as S from './style';
import { BALL_SIZE } from 'utils';
import { memo } from 'react';

const Ball = memo(({info}) => {
    return (
        <S.BallCircle style={{top: info.y+'px', left: info.x+'px'}} bgColor={info.bgColor} size={BALL_SIZE}/>
    );
});

Ball.displayName = 'Ball';

export default Ball;