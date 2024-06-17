import { useEffect, useState, memo } from 'react';
import * as S from './style';


const ColorPage = memo(({playerInfo, setPlayerInfo}) => {
    const [ color, setColor ] = useState('');
    
    useEffect(() => {
        setColor(playerInfo.bgColor);
    }, [playerInfo.bgColor]);
    
    const changeColor = () => {
        setPlayerInfo((prev) => ({
            ...prev,
            bgColor: color
        }));
        localStorage.setItem('playerColor', color);
        alert('Player color has changed to '+color);
    }
    const onChangeColor = (e) => {
        setColor(e.target.value);
    }
    return (
        <>
            <S.ColorPicker onChange={onChangeColor} value={color}/>
            <S.StyledLinkMargin50 onClick={changeColor} as="span">Change Player Color</S.StyledLinkMargin50>
            <S.StyledLink to="/">Go Lobby</S.StyledLink>
        </>
    );
});

ColorPage.displayName = 'ColorPage';

export default ColorPage;