import { Button } from "@mui/material";
import PaginationBar from "../../components-ui-basic/Pagination/PaginationBar";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'; // Ensure you have this icon or use any appropriate one

const PaginationBarVerification: React.FC = () => {
    return (
        <PaginationBar>
            <Button
                variant="outlined"
                startIcon={<ArrowLeftIcon />}
                style={{
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
                    padding: '18px 24px 18px 24px',
                    borderRadius: '100px'
                }}
            >
                Tokenization settings
            </Button>
            <Button
                style={{
                    fontFamily: 'DM Sans',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#848B97',
                    lineHeight: '22.4px',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    padding: '18px 24px 18px 24px'
                }}
            >
                Skip this step
            </Button>
        </PaginationBar>
    );
};

export default PaginationBarVerification;
