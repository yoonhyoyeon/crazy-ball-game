import * as S from './style';
import { useEffect, useState, useMemo } from 'react';
import logoImgFile from 'assets/img/logo_full.png';

const RecordPage = () => {
    const [ records, setRecords ] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('crazyball_records');
        setRecords(data ? data : []);
        console.log(records);
    }, []);

    const printRecords = useMemo(() => {
        return records.length>0 ? records.map((record, idx) => (
            <S.RecordItem key={idx}>
                    <S.RecordRankText>{idx+1}</S.RecordRankText>
                    <S.RecordText>{record.name}</S.RecordText>
                    <S.RecordText>{record.score}</S.RecordText>
            </S.RecordItem>
        )) : <S.NoData>There is no record.</S.NoData>;
    }, [records]);
    return (
        <>
            <S.LogoImg src={logoImgFile} />
            <S.RecordList>
                <S.RecordLabel>
                    <S.RecordRankText>Rank</S.RecordRankText>
                    <S.RecordText>Name</S.RecordText>
                    <S.RecordText>Score</S.RecordText>
                </S.RecordLabel>
                {printRecords}
            </S.RecordList>
            <S.StyledLink to="/">Go Lobby</S.StyledLink>
        </>
    );
};

export default RecordPage;