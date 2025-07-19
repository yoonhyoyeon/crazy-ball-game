import { memo } from 'react';
import * as S from './style';
import { PLAYER_SIZE } from 'utils';
import { PlayerInfo } from 'types/game.types';

interface PlayerProps {
    info: PlayerInfo;
    setInfo: React.Dispatch<React.SetStateAction<PlayerInfo>>;
};

const Player = memo(({info, setInfo}: PlayerProps) => {
    return (
        <S.PlayerCircle style={{top: info.y+'px', left: info.x+'px'}} $size={PLAYER_SIZE} $die={info.die} $bgColor={info.bgColor}/>
    );
});

Player.displayName = "Player";

export default Player;