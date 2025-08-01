import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';

export const scaleAnimation = keyframes`
    0% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(0.95);
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    height: 43px;
    margin-top: 10px;
    color: #f76e96;
    background-color: #fff;
    border-radius: 30px;
    border: 2px solid #f76e96;
    cursor: pointer;
    transition: all.2s ease;
    pointer-events: ${({$disabled}) => $disabled ? 'none' : 'auto'};
    opacity: ${({$disabled}) => $disabled ? 0.5 : 1};
    cursor: ${({$disabled}) => $disabled ? 'not-allowed' : 'pointer'};
    &:hover {
        background-color: ${({$disabled}) => $disabled ? '#fff' : '#f76e96'};
        color: ${({$disabled}) => $disabled ? '#f76e96' : '#fff'};
        font-weight: ${({$disabled}) => $disabled ? 'normal' : 'bold'};
    }
`;