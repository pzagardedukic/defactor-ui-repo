import CardBasic from "../../components-ui-basic/Cards/CardBasic";

const imageUrl = `${process.env.PUBLIC_URL}/icons/icon-plus.png`;


const CommunityTemplateCard: React.FC = () => {
  return <CardBasic title="Community Template" description="Short Description" imageUrl={imageUrl} />;
};


export default CommunityTemplateCard;