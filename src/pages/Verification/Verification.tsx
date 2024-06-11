import VerificationForm from "../../components-assets/Verification/VerificationForm";
import BoxVerification from "../../components-assets/Verification/BoxVerification";
import BoxInvoice from "../../components-assets/Verification/BoxInvoice";
import PaginationBarVerification from "../../components-assets/Verification/PaginationBarVerification";
import ModalVerification from "../../components-assets/Verification/ModalVerification";


const Verification: React.FC = () => {
    return (
        <>
            <h2>Verification</h2>
            <BoxVerification />
            <BoxInvoice />
            <VerificationForm />
            <h2>-------------Pagination:</h2>
            <PaginationBarVerification />
            <h2>Verification Modal:</h2>
            <ModalVerification />
        </>
    );
};

export default Verification;
