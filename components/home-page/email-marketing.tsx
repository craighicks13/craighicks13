import Image from "next/image";
import FeatureContainerOne from "../containers/feature-container-one";

export default function EmailMarketing() {

    const title:string = "Managed Email Campaigns";
    const meta:string = "Get detailed engagement reports from your email blasts";
    const link:string = "/services/email-campaigns";
    const content:string = "I can help you maximize your revenue, increase repeat sales, and improve retention with personalized emails sent at the right time.";
    const banner:JSX.Element = <Image priority
                                    src="/images/Managed-Email-Campaigns-Panel-Image.png"
                                    className="rounded mt-5"
                                    height={803}
                                    width={939}
                                    alt="Managed Email Campaigns"
                                    />

    return (
        <>
            <FeatureContainerOne title={title} meta={meta} banner={banner} content={content} link={link}/>
        </>
    );
}