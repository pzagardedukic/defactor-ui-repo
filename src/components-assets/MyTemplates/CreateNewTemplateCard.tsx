import TemplateCard from "../../components-ui-basic/Cards/TemplateCard";

const imageUrl = `${process.env.PUBLIC_URL}/icons/icon-plus.svg`;

const CreateNewTemplateCard: React.FC = () => {
  return <TemplateCard title="Create New Template" description="Short Description" imageUrl={imageUrl} />;
};


export default CreateNewTemplateCard;
