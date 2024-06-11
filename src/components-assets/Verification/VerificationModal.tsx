import TemplateModal from "../../components-ui-basic/Modals/TemplateModal";

const IconSentToVerifying = `${process.env.PUBLIC_URL}/icons/icon-sent-to-verifying.svg`;


const VerificationModal: React.FC = () => {
  return (
    <>
    <TemplateModal title="Your Asset has been sent 
to verifying"
      description="Lorem ipsum dolor sit amet consectetur. s
      Faucibus adipiscing phasellus."
      imageUrl={IconSentToVerifying}
      imageAlt="Verify"></TemplateModal>
    </>
  );
};


export default VerificationModal;