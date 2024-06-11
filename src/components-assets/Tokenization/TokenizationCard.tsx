import CardCentered from "../../components-ui-basic/Cards/CardCentered";

const imageUrl = `${process.env.PUBLIC_URL}/icons/icon-eth.svg`;

const TokenizationCard: React.FC = () => {
  return <CardCentered
    title="Ethereum (ERC-20)"
    description="Lorem ipsum dolor sit amet consectetur. 
Faucibus adipiscing phasellus."
    imageUrl={imageUrl}
    mainBenefits1="Lorem ipsum dolor sit amet consectetur."
    mainBenefits2="Lorem ipsum dolor sit amet consectetur."
    mainBenefits3="Faucibus adipiscing phasellus." />;
};


export default TokenizationCard;
