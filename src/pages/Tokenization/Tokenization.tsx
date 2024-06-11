
import TokenizationForm from "../../components-assets/Tokenization/TokenizationForm";
import TokenizationPaginationBar from "../../components-assets/Tokenization/TokenizationPaginationBar";
import { Typography } from "@mui/material";



const Tokenization: React.FC = () => {
    return (
        <>
            <Typography
                variant="h2"
                sx={{
                    fontFamily: 'DM Sans',
                    fontSize: '20px',
                    fontWeight: 700,
                    lineHeight: '26.04px',
                    letterSpacing: '0.01em',
                    textAlign: 'left',
                    color: '#000000'
                }}
            >
                Tokenization
            </Typography>
            <TokenizationForm />
            <Typography
                variant="h2"
                sx={{
                    fontFamily: 'DM Sans',
                    fontSize: '20px',
                    fontWeight: 700,
                    lineHeight: '26.04px',
                    letterSpacing: '0.01em',
                    textAlign: 'left',
                    color: '#000000',
                    marginBottom: '40px',
                    marginTop: '40px'
                }}
            >
                ----------Tokenization Pagination
            </Typography>
            <TokenizationPaginationBar />
        </>
    );
};

export default Tokenization;
