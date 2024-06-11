import CardPlus from "../../components-ui-basic/Cards/CardPlus";

const imageUrl = `${process.env.PUBLIC_URL}/icons/icon-plus.svg`;

const NewTemplateCard: React.FC = () => {
  return <CardPlus title="Create New Template" description="Short Description" imageUrl={imageUrl} />;
};


export default NewTemplateCard;
 