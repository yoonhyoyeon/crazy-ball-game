import * as S from './style';
import logoImgFile from 'assets/img/logo_full.png';

const MainPage = (({gameStart}) => {
    return (
        <>
            <S.LogoImg src={logoImgFile} alt='logo' />
            <S.StyledLink as='span' onClick={gameStart}>Game Start</S.StyledLink>
            <S.StyledLink to='/record'>Game Record</S.StyledLink>
            <S.StyledLink to='/color'>Set Player Color</S.StyledLink>
        </>
    );
});

MainPage.displayName = 'MainPage';

export default MainPage;