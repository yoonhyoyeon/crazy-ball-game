import styled from 'styled-components';
import {MAX_X, MAX_Y} from 'utils';

export const GameLayout = styled.div`
    width: ${MAX_X}px;
    height: ${MAX_Y}px;
    background-color: #eefeff;
    text-align: center;
    position: relative;
`;

export const RouteBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, .3);
    z-index: 100;
`;

export const RouteWrap = styled.div`
    width: 380px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 100px;
    background-color:  #fff;
    border-radius: 10px;
`;