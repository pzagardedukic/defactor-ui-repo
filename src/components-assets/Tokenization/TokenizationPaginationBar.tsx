import React from 'react';
import PaginationBar2 from '../../components-ui-basic/Pagination/PaginationBar2';
import { Button } from '@mui/material';


const TokenizationPaginationBar: React.FC = () => {
    return (
        <PaginationBar2>
            <Button>Back</Button>
            <Button>Go to Minting</Button>
        </PaginationBar2>
    )
};

export default TokenizationPaginationBar;
