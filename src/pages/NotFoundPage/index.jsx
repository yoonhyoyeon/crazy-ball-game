import * as S from './style';
import logoImgFile from 'assets/img/logo.png';

const NotFoundPage = () => {
    return (
        <>
            <S.LogoImg src={logoImgFile} />
            <h1>404 ERROR</h1>
            <span>Sorry. Page not found.</span>
            <S.StyledLinkMargin50 to="/">Go Lobby</S.StyledLinkMargin50>
        </>
    );
};

export default NotFoundPage;