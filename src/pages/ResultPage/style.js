import styled from 'styled-components';
import { StyledLink} from 'assets/style';

export { StyledLink };

export const StyledBtn = styled.span`
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
    &:hover {
        background-color: #f76e96;
        color: #fff;
        font-weight: bold;
    }
`;

export const Title = styled.div`
    width: 100%;
    text-align: left;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 12px;
`;

export const ScoreWrap = styled(Title)`
    text-align: right;
`;

export const Score = styled.span`
    color: #f76e96;
    font-size: 45px;
    margin-right: 10px;
`;