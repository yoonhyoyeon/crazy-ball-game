import styled from 'styled-components';

export const PlayerCircle = styled.div`
    position: absolute;
    width: ${({$size}) => $size ? $size : '20'}px;
    height: ${({$size}) => $size ? $size : '20'}px;
    background-color: ${({$bgColor}) => $bgColor ? $bgColor : '#000'};
    transition: transform 1s, opacity 1s;
    border-radius: 20%;
    opacity: ${({$die}) => $die ? '0' : '1'};
    transform: ${({$die}) => $die ? 'scale(0)' : 'scale(1)'};
`;