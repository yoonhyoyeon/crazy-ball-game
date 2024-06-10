import { memo } from 'react';
import * as S from './style';
import { PLAYER_SIZE } from 'utils';

const Player = memo(({info, setInfo}) => {
    return (
        <S.PlayerCircle style={{top: info.y+'px', left: info.x+'px'}} size={PLAYER_SIZE}/>
    );
});

Player.displayName = "Player";

export default Player;