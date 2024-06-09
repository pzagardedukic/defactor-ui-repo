import React from 'react';
import BtnContained from '../../components-ui-basic/BTNs/BtnContained';
import BtnOutlined from '../../components-ui-basic/BTNs/BtnOutlined';
import PaginationBar2 from '../../components-ui-basic/Pagination/PaginationBar2';


const TokenizationPaginationBar: React.FC = () => {
    return (
        <PaginationBar2>
            <BtnOutlined>Back</BtnOutlined>
            <BtnContained>Go to Minting</BtnContained>
        </PaginationBar2>
    )
};

export default TokenizationPaginationBar;
