import Invoice from "../../components-assets/Verification/Invoice";
import AssetVerifyModal from "../../components-assets/Verification/AssetVerifyModal";
import PaginationBar from "../../components-ui-basic/Pagination/PaginationBar";
import VerificationForm from "../../components-assets/Verification/VerificationForm";
import BoxVerification from "../../components-assets/Verification/BoxVerification";


const Verification: React.FC = () => {
    return (
        <div className="verification">
            <h2>Verification</h2>
            <BoxVerification />
            <Invoice />
            <VerificationForm />
            <h2>Pagination:</h2>
            <PaginationBar />
            <h2>Verification Modal:</h2>
            <AssetVerifyModal />
        </div>
    );
};

export default Verification;
