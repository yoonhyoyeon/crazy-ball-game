import styled from 'styled-components';

export const BallCircle = styled.div`
    position: absolute;
    width: ${({size}) => size ? size : '30'}px;
    height: ${({size}) => size ? size : '30'}px;
    background-color: ${({bgColor}) => bgColor ? bgColor : '#000'};
    border-radius: 50%;
`;