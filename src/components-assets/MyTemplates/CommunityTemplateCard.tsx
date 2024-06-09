import TemplateCard from "../../components-ui-basic/Cards/TemplateCard";

const imageUrl = `${process.env.PUBLIC_URL}/icons/icon-plus.png`;


const CommunityTemplateCard: React.FC = () => {
  return <TemplateCard title="Community Template" description="Short Description" imageUrl={imageUrl} />;
};


export default CommunityTemplateCard;