import styled from 'styled-components';
import { scaleAnimation, StyledLink} from 'assets/style';

export const LogoImg = styled.img`
    width: 100%;
    margin: 10px 0 40px 0;
    animation: ${scaleAnimation} .8s infinite alternate;
`;
export { StyledLink };
export const RecordList = styled.ol`
    width: 100%;
    height: 300px;
    background-color: #f5f5f5;
    overflow-y: auto;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;
export const RecordRankText = styled.span`
    flex: 1;
`;
export const RecordText = styled.span`
    flex: 3;
    text-overflow: ellipsis;
`;
export const RecordItem = styled.li`
    display: flex;
    width: 100%;
    padding: 10px;
    background-color: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    &:nth-child(2n) {
        background-color: #f5f5f5;
    }
    &:nth-child(2) ${RecordRankText} {
        color: #6e96f7;
    }
    &:nth-child(3) ${RecordRankText} {
        color: #f7966e;
    }
    &:nth-child(4) ${RecordRankText} {
        color: #f76e96;
    }
`;
export const RecordLabel = styled(RecordItem)`
    color: #000;
    font-weight: bold;
`;
export const NoData = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`;