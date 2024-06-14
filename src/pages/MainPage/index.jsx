import * as S from './style';
import logoImgFile from 'assets/img/logo_full.png';

const MainPage = ({gameReset}) => {
    return (
        <>
            <S.LogoImg src={logoImgFile} />
            <S.StyledLink onClick={gameReset} to='/result'>Game Start</S.StyledLink>
            <S.StyledLink to='/record'>Game Record</S.StyledLink>
        </>
    );
};

export default MainPage;