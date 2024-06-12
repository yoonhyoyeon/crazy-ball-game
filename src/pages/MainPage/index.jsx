import * as S from './style';
import logoImg from 'assets/img/logo_full.png'

const MainPage = () => {
    return (
        <S.MainPageLayout>
            <S.MainPageBox>
                <img src={logoImg} style={{margin: '10px 0 40px 0',}}/>
                <S.Btn>Game Start</S.Btn>
                <S.Btn>Game Record</S.Btn>
            </S.MainPageBox>
        </S.MainPageLayout>
    );
};

export default MainPage;