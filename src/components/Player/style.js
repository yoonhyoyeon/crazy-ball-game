import styled from 'styled-components';

export const PlayerCircle = styled.div`
    position: absolute;
    width: ${({size}) => size ? size : '5'}px;
    height: ${({size}) => size ? size : '5'}px;
    background-color: red;
    border-radius: 50%;
`;