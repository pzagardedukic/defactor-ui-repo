import CardCentered from "../../components-ui-basic/Cards/CardCentered";

const imageUrl = `${process.env.PUBLIC_URL}/icons/icon-eth.svg`;

const TokenizationCard: React.FC = () => {
  const mainBenefits = [
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Faucibus adipiscing phasellus."
  ];

  return (
    <CardCentered
      title="Ethereum (ERC-20)"
      description="Lorem ipsum dolor sit amet consectetur. Faucibus adipiscing phasellus."
      imageUrl={imageUrl}
      mainBenefits={mainBenefits}
    />
  );
};

export default TokenizationCard;
