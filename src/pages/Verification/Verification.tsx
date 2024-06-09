import Invoice from "../../components-assets/Verification/Invoice";
import ResponsiveBox from "../../components-ui-basic/Boxes/ResponsiveBox";
import AssetVerifyModal from "../../components-assets/Verification/AssetVerifyModal";
import PaginationBar from "../../components-ui-basic/Pagination/PaginationBar";
import VerificationForm from "../../components-assets/Verification/VerificationForm";


const Verification: React.FC = () => {
    return (
        <div className="verification">
            <ResponsiveBox />
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
 