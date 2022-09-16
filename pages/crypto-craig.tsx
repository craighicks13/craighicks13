import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

export default function CryptoCraig() {

    return (
    <Layout>
        <Head>
            <title>Crypto Craig NFT Collection</title>
        </Head>
        
        
        <h1>Crypto Craig NFT Collection</h1>

        <Image 
            src="/images/cryptocraig-banner.png"
            className="rounded-lg" 
            alt="Crypto Craig Wallpaper" 
            height={400} 
            width={1400}/>

    <div className="md:flex gap-6">
        <div className="md:flex-auto">

            <div className="rounded-lg mt-10 p-6 bg-white border border-neutral-50 shadow">
                <p>I wanted to make an NFT collection cause it seemed fun. So, why not create a collection around my ridiculous mug. Seriously, there are so many better things to have made a collection of but nah.</p>

                <h3>Let me get some of the most common questions out of the way.</h3>
                <ul className="list-box">
                    <li>
                        <span className="question"><span className="identifier">Q</span>Is this a scam?</span>
                        <span className="answer"><span className="identifier">A</span>It&apos;d be a really bad one if it was. So, no.</span>
                    </li>
                    <li>
                        <span className="question"><span className="identifier">Q</span>Is it a rug pull?</span>
                        <span className="answer"><span className="identifier">A</span>I guess if you have expectations it could be but I should be good at setting the bar low. That said, I will commit to the roadmap.</span>
                    </li>
                    <li>
                        <span className="question"><span className="identifier">Q</span>Will they go to the moon?</span>
                        <span className="answer"><span className="identifier">A</span>No.</span>
                    </li>
                    <li>
                        <span className="question"><span className="identifier">Q</span>Will they sell out?</span>
                        <span className="answer"><span className="identifier">A</span>No.</span>
                    </li>
                    <li>
                        <span className="question"><span className="identifier">Q</span>Why would you want one?</span>
                        <span className="answer"><span className="identifier">A</span>No clue. Maybe cause I guilted you into getting some. Maybe cause you think your collection could use my face in it. Maybe cause you have a few extra MATIC and want to see what happens.</span>
                    </li>
                    <li>
                        <span className="question"><span className="identifier">Q</span>Why on the polygon network?</span>
                        <span className="answer"><span className="identifier">A</span>Cost!! I&apos;m not made of Ethereum, yet.</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        
    </Layout>
    );
}