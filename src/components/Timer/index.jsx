import * as S from './style';

const Timer = ({time}) => {
    return (
        <S.TimerLayout>
            <S.TimerText>{time}</S.TimerText>
        </S.TimerLayout>
    )
}

export default Timer;