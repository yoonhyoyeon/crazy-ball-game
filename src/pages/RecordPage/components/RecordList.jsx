import { memo } from 'react';
import * as S from '../style';
import RecordItem from './RecordItem';

const RecordList = memo(({records, toggleItem}) => {
    return (
        <S.RecordList>
            <S.RecordLabel>
                <S.RecordRankText>Rank</S.RecordRankText>
                <S.RecordText>Name</S.RecordText>
                <S.RecordText>Score</S.RecordText>
            </S.RecordLabel>
            {
            records.length>0 ? 
            records.map((record, idx) => (
                <RecordItem toggleItem={toggleItem} info={record} idx={idx} key={record.name}/>
            )) : 
            <S.NoData>There is no record.</S.NoData>
            }
        </S.RecordList>
    );
});

RecordList.displayName = 'RecordList';

export default RecordList;