import styled from 'styled-components';

export const BallCircle = styled.div`
    position: absolute;
    width: ${({size}) => size ? size : '5'}px;
    height: ${({size}) => size ? size : '5'}px;
    background-color: ${({bgColor}) => bgColor ? bgColor : '#000'};
    border-radius: 50%;
`;