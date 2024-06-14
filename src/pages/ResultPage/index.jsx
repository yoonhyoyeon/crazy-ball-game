import * as S from './style';
import { useNavigate } from 'react-router-dom';

const ResultPage = ({time}) => {
    const navigate = useNavigate();
    const submitScore = () => {
        const data = localStorage.getItem('crazyball_records') ? JSON.parse(localStorage.getItem('crazyball_records')) : [];
        const name = prompt('Please enter the name to record your score.');
        if(name) {
            if(data.filter((record) => record.name.split(' ').join('')===name.split(' ').join('')).length>0) {
                alert('This name already exists. Please enter again.');
                submitScore();
            }
            else {
                data.push({name, time});
                data.sort((a,b) => b.time - a.time);
                localStorage.setItem('crazyball_records', JSON.stringify(data));
                alert('Your score has been recorded.');
                navigate('/record');
            }
        }
    }
    return (
        <>
            <S.Title>You survived for...</S.Title>
            <S.ScoreWrap><S.Score>{time}</S.Score>seconds</S.ScoreWrap>
            <S.StyledLink as="span" onClick={submitScore}>Record Score</S.StyledLink>
            <S.StyledLink to="/">Go Lobby</S.StyledLink>
        </>
    );
};

export default ResultPage;