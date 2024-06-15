import * as S from './style';
import { useEffect, useState, useMemo, memo } from 'react';
import logoImgFile from 'assets/img/logo_full.png';

const RecordPage = memo(() => {
    const [ records, setRecords ] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('crazyball_records'));
        setRecords(data ? data.map((v) => ({ ...v, selected: false })) : []);
    }, []);

    const toggleItem = (idx) => {
        const newRecords = [ ...records ];
        newRecords[idx] = { ...records[idx] };
        newRecords[idx].selected = !newRecords[idx].selected;
        setRecords(newRecords);
        console.log(newRecords);
    }
    const deleteSelectedItems = () => {
        const newRecords = records.filter((record, idx) => !record.selected);
        setRecords(newRecords);

        localStorage.setItem('crazyball_records', JSON.stringify(newRecords));
    }
    const printRecords = useMemo(() => {
        return records.length>0 ? records.map((record, idx) => (
            <S.RecordItem key={idx} $selected={record.selected} onClick={() => toggleItem(idx)}>
                    <S.RecordRankText>#{idx+1}</S.RecordRankText>
                    <S.RecordText>{record.name}</S.RecordText>
                    <S.RecordText>{record.time}</S.RecordText>
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
            {
                records.filter((record, idx) => record.selected).length>0 ? 
                <S.StyledLink as="span" onClick={deleteSelectedItems}>Delete selected records</S.StyledLink> : null
            }
            <S.StyledLink to="/">Go Lobby</S.StyledLink>
        </>
    );
});

RecordPage.displayName = 'RecordPage';

export default RecordPage;