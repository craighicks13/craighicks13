import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FeatureContainerOne from "../components/containers/feature-container-one";
import FeatureContainerTwo from "../components/containers/feature-container-two";
import Layout from "../components/layout";

export default function Doodles() {

    const left:JSX.Element = <><Image priority
                                    src="/images/doodles/chicks-signature.png"
                                    className=""
                                    height={295}
                                    width={1105}
                                    alt="chicks Doodles custom posters and printables"
                                    />
                                <Image priority
                                    src="/images/doodles/Doodles-title.png"
                                    className=""
                                    height={305}
                                    width={951}
                                    alt="chicks Doodles custom posters and printables"
                                    />
                                    <p>I like to doodle all the doodles. Create custom art for posters or printable products.</p>
                                </>
    const right:JSX.Element = <>
                                <Image priority
                                    src="/images/doodles/SurpriseMotherfucker.png"
                                    className=""
                                    height={1345}
                                    width={744}
                                    alt="chicks Doodles custom posters and printables"
                                    />
                                </>
    return (
    <Layout>
        <Head>
            <title>chicks Doodles</title>
        </Head>
        <FeatureContainerTwo 
                left={left} 
                right={right}
                content={undefined}
                link={undefined}
                />
        <FeatureContainerOne 
                title={"Original Posters & Custom Wall Art"} 
                meta={"Check out my Etsy store where you can find printed posters and digital downloads."} 
                banner={
                    <>
                    <Image priority
                        src="/images/doodles/Custom-Wall-Art-Banner.jpg"
                        className="rounded-lg"
                        height={700}
                        width={1440}
                        alt="chicks Doodles custom posters and printables"
                        />
                    </>} 
                content={"Check out my Etsy store where you can find printed posters and digital downloads."} 
                link={undefined}                
                />
        <FeatureContainerTwo 
                right={
                    <>
                    <div className="text-6xl">Custom Pet Portraits</div>
                    <div className="pt-5">Want to immortalize your pet in a custom portrait? One of a kind hand recreation of your favourate pet picture that can be used to decorate your wall, shirt, mug or accessory.</div>
                    </>
                } 
                left={
                    <>
                    <Image priority
                        src="/images/doodles/PetPortraits.jpg"
                        className=""
                        height={900}
                        width={900}
                        alt="chicks Doodles custom posters and printables"
                        />
                    </>}
                content={undefined}
                link={undefined}
                />
        <FeatureContainerTwo 
                right={
                    <>
                    <div className="text-6xl">A.I. Art</div>
                    <div className="pt-5">There are more and more A.I. programs that are phenominal at turning plain text into an image. They can be tricky to create the desired results but can create some unimaginal pictures of almost anything. I can use A.I. for concepts for a custom creation, or touch up an A.I. image to remove some of the awkward results. I can also help you in trying to get something desired out using keyword tricks from popular systems like Dall-E and MidJourney.</div>
                    </>
                } 
                left={
                    <>
                    <Image priority
                        src="/images/doodles/AI_Art_baby_dragon_made_of_shiny_magical_crystals.jpg"
                        className="rounded-lg"
                        height={900}
                        width={900}
                        alt="A.I. Generated Art - A cute baby dragon made of shiny magical crystals"
                        />
                    </>}
                content={undefined}
                link={undefined}
                />
    </Layout>
    );
}