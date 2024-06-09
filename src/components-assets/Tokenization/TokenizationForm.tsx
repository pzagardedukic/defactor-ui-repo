import TokenizationCard from "./TokenizationCard";
import UploadOneFile from "../../components-ui-basic/Form/UploadOneFile";

const TokenizationForm: React.FC = () => {
    return <div>
    <p>TokenIcon</p> 
    <UploadOneFile />
    <p>link and add links inputs</p>
    <p>Chain</p>
    <TokenizationCard />
    <p>Price, Token Numbers....</p>
    </div>;
  };
  
  
  export default TokenizationForm;
  