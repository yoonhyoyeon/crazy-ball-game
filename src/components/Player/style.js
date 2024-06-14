import styled from 'styled-components';

export const PlayerCircle = styled.div`
    position: absolute;
    width: ${({$size}) => $size ? $size : '20'}px;
    height: ${({$size}) => $size ? $size : '20'}px;
    background-color: ${({$bgColor, $die}) => $die ? '#000' : $bgColor };
    transition: transform 1s, opacity 1s, background-color .5s;
    border-radius: 20%;
    opacity: ${({$die}) => $die ? '0' : '1'};
    transform: ${({$die}) => $die ? 'scale(0)' : 'scale(1)'};
`;