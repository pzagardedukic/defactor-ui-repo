import VerificationForm from "../../components-assets/Verification/VerificationForm";
import VerificationModal from "../../components-assets/Verification/VerificationModal";
import VerificationPaginationBar from "../../components-assets/Verification/VerificationPaginationBar";
import VerificationInvoiceBox from "../../components-assets/Verification/VerificationInvoiceBox";
import VerificationThreeColumnsBox from "../../components-assets/Verification/VerificationThreeColumnsBox";


const Verification: React.FC = () => {
    return (
        <>
            <h2>Verification</h2>
            <VerificationThreeColumnsBox />
            <VerificationInvoiceBox />
            <VerificationForm />
            <h2>-------------Pagination:</h2>
            <VerificationPaginationBar />
            <h2>Verification Modal:</h2>
            <VerificationModal />
        </>
    );
};

export default Verification;
