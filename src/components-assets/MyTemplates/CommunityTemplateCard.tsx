import CardBasic from "../../components-ui-basic/Cards/CardBasic";

const imageUrl = `${process.env.PUBLIC_URL}/icons/icon-invoice.svg`;

const CommunityTemplateCard: React.FC = () => {
  return <CardBasic title="Community Template" description="Short Description" imageUrl={imageUrl} />;
};


export default CommunityTemplateCard;