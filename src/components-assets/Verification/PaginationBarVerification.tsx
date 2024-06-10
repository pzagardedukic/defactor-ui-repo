import { Button } from "@mui/material";
import PaginationBar from "../../components-ui-basic/Pagination/PaginationBar";

const IconArrowLeft = `${process.env.PUBLIC_URL}/icons/icon-arrow-left.svg`;

const PaginationBarVerification: React.FC = () => {
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
                Tokenization settings
            </Button>
            <Button
                sx={{
                    fontFamily: 'DM Sans',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#848B97',
                    lineHeight: '22.4px',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    padding: '12px 24px 12px 24px',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#848B97'
                    }
                }}
            >
                Skip this step
            </Button>
        </PaginationBar>
    );
};

export default PaginationBarVerification;
