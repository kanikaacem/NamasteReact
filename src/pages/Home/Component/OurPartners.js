import Heading from "../Component/Heading";
import PartnerCompany from "../Component/PartnerCompany";
const OurPartners = () => {
    return (<>
      <div className="OurPartners">
        <div className="OurPartnersWrapper">
            <Heading text="Our Partners" />
            <div className="partnersCo">
                <PartnerCompany></PartnerCompany>
                <PartnerCompany></PartnerCompany>
                <PartnerCompany></PartnerCompany>
                <PartnerCompany></PartnerCompany>
            </div>
            <div className="partnersCoSec">
                <PartnerCompany></PartnerCompany>
                <PartnerCompany></PartnerCompany>
                <PartnerCompany></PartnerCompany>
                <PartnerCompany></PartnerCompany>
            </div>
        </div>
      </div>
    </>)
}
export default OurPartners;