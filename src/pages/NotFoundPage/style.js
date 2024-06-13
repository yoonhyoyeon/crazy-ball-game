import styled from 'styled-components';
import { scaleAnimation, StyledLink} from 'assets/style';

export const LogoImg = styled.img`
    width: 30%;
    margin: 10px 0 10px 0;
    animation: ${scaleAnimation} .8s infinite alternate;
`;
export const StyledLinkMargin50 = styled(StyledLink)`
    margin-top: 50px;
`;