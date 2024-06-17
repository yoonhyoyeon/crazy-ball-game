import { memo } from 'react';
import * as S from '../style';

const RecordItem = memo(({info, idx, toggleItem}) => {
    return (
        <S.RecordItem onClick={() => toggleItem(idx)} $selected={info.selected}>
                <S.RecordRankText>#{idx+1}</S.RecordRankText>
                <S.RecordText>{info.name}</S.RecordText>
                <S.RecordText>{info.time}</S.RecordText>
        </S.RecordItem>
    );
});

RecordItem.displayName = 'RecordItem';

export default RecordItem;