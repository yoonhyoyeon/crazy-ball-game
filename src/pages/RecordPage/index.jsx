import * as S from './style';
import { useEffect, useState, useMemo, useCallback } from 'react';
import logoImgFile from 'assets/img/logo_full.png';
import RecordList from './components/RecordList';
import { useEffectAfterMount } from 'hooks';

const RecordPage = () => {
    const [ records, setRecords ] = useState([]);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('crazyball_records'));
        setRecords(data ? data.map((v) => ({ ...v, selected: false })) : []);
    }, []);
    useEffectAfterMount(() => {
        localStorage.setItem('crazyball_records', JSON.stringify(records));
    }, [records.length]);

    const toggleItem = useCallback((idx) => {
        setRecords((prev) => {
            const newRecords = [ ...prev ];
            newRecords[idx] = { ...prev[idx] };
            newRecords[idx].selected = !prev[idx].selected;
            return newRecords;
        });
    }, []);
    const deleteSelectedItems = useCallback(() => {
        let newRecords;
        setRecords((prev) => {
            newRecords = prev.filter((record) => !record.selected);
            return newRecords;
        });
    }, []);
    const NotSelectedItems = useMemo(() => records.filter((record) => record.selected), [records]);

    return (
        <>
            <S.LogoImg src={logoImgFile} />

            <RecordList records={records} toggleItem={toggleItem} />
            {
                <S.StyledLink as="span" $disabled={NotSelectedItems.length===0} onClick={NotSelectedItems.length===0 ? undefined : deleteSelectedItems}>
                    Delete selected records
                </S.StyledLink>
            }
            <S.StyledLink to="/">Go Lobby</S.StyledLink>
        </>
    );
};

export default RecordPage;