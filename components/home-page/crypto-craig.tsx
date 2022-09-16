import Image from "next/image";
import FeatureContainerOne from "../containers/feature-container-one";

export default function CryptoCraig() {

    const title:string = "Crypto Craig NFT Collection";
    const meta:string = "Collection of 5000 unique ridiculous variations of me";
    const link:string = "/crypto-craig";
    const content:string = "Got some polygon you want to waste. Come check out my NFT collection and perks. Images will be revieled on my birthday this year!!";
    const banner:JSX.Element = <Image priority
                                    src="/images/cryptocraig-banner.png"
                                    className="rounded mt-5"
                                    height={400}
                                    width={1400}
                                    alt="CryptoCraig NFT Collection"
                                    />
    return (
        <>
            <FeatureContainerOne 
                title={title} 
                meta={meta} 
                banner={banner} 
                content={content} 
                link={link} 
                />
                
        </>
    );
}