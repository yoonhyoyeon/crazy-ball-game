import * as S from './style';
import logoImgFile from 'assets/img/logo_full.png';

const MainPage = () => {
    return (
        <>
            <S.LogoImg src={logoImgFile} />
            <S.StyledLink to='/playing'>Game Start</S.StyledLink>
            <S.StyledLink to='/record'>Game Record</S.StyledLink>
        </>
    );
};

export default MainPage;