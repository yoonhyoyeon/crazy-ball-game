import * as S from './style';
import { memo } from 'react';

const Timer = memo(({time}) => <S.TimerLayout>{time}</S.TimerLayout>);

Timer.displayName = 'Timer';

export default Timer;