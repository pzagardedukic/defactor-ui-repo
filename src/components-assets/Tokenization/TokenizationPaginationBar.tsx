import React from 'react';
import PaginationBar from '../../components-ui-basic/Pagination/PaginationBar';
import { Button } from '@mui/material';

const IconArrowLeft = `${process.env.PUBLIC_URL}/icons/icon-arrow-left.svg`;
const IconArrowRight = `${process.env.PUBLIC_URL}/icons/icon-arrow-right.svg`;

const TokenizationPaginationBar: React.FC = () => {
    return (
        <PaginationBar>
            <Button
                variant="outlined"
                startIcon={<img src={IconArrowLeft} alt="Arrow Left" />}
                sx={{
                    fontFamily: 'DM Sans',
                    fontSize: '16px',
                    fontWeight: 700,
                    lineHeight: '16px',
                    textAlign: 'left',
                    color: '#435161',
                    border: '1px solid #43516133',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    textTransform: 'capitalize',
                    padding: '12px 24px 12px 24px',
                    borderRadius: '100px',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        borderColor: '#43516133',
                        color: '#435161'
                    }
                }}
            >
                Fill Data
            </Button>
            <Button
                variant="outlined"
                endIcon={<img src={IconArrowRight} alt="Arrow Right" />}
                sx={{
                    fontFamily: 'DM Sans',
                    fontSize: '16px',
                    fontWeight: 700,
                    lineHeight: '16px',
                    textAlign: 'left',
                    color: '#ffffff',
                    border: '1px solid #818995',
                    backgroundColor: '#818995',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    textTransform: 'capitalize',
                    padding: '12px 24px 12px 24px',
                    borderRadius: '100px',
                    '&:hover': {
                        backgroundColor: '#818995',
                        borderColor: '#818995',
                        color: '#ffffff'
                    },
                    '@media (max-width: 600px)': {
                        marginTop: '16px',
                    }
                }}
            >
                Verification
            </Button>
        </PaginationBar>
    );
};

export default TokenizationPaginationBar;
