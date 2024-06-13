import * as S from './style';

const ResultPage = ({time}) => {
    return (
        <>
            <S.Title>You survived for...</S.Title>
            <S.ScoreWrap><S.Score>{time}</S.Score>seconds</S.ScoreWrap>
            <S.StyledBtn>Record Score</S.StyledBtn>
            <S.StyledLink to="/">Go Lobby</S.StyledLink>
        </>
    );
};

export default ResultPage;