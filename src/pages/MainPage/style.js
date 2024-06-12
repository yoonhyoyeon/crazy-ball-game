import styled from 'styled-components';

export const MainPageLayout = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, .3);
    z-index: 100;
`;
export const MainPageBox = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    padding: 50px 100px;
    background-color:  #fff;
    border-radius: 10px;
`;
export const Btn = styled.button`
    width: 100%;
    height: 43px;
    margin-bottom: 10px;
    color: #f76e96;
    background-color: #fff;
    border-radius: 30px;
    border: 2px solid #f76e96;
    cursor: pointer;
    transition: all.2s ease;
`;