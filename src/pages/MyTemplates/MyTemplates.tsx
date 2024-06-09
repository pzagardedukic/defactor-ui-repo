import CommunityFlexWrapper from '../../components-assets/MyTemplates/CommunityFlexWrapper';
import NewTemplateCardWrapper from '../../components-assets/MyTemplates/NewTemplateCardWrapper';

const MyTemplates: React.FC = () => {
  return (
    <div className="my-templates">
     <NewTemplateCardWrapper />
      <h2>Community Templates</h2>
      <CommunityFlexWrapper />
    </div>
  );
};

export default MyTemplates;
