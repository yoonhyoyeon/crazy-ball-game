import styled from 'styled-components';

interface BallCircleProps {
    $size?: number;
    $bgColor?: string;
}

export const BallCircle = styled.div<BallCircleProps>`
    position: absolute;
    width: ${({$size}) => $size ? $size : '30'}px;
    height: ${({$size}) => $size ? $size : '30'}px;
    background-color: ${({$bgColor}) => $bgColor ? $bgColor : '#000'};
    border-radius: 50%;
`;